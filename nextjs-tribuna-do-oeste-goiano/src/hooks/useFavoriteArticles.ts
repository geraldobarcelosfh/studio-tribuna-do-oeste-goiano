'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'favoriteArticles';

// Helper para obter favoritos do localStorage
const getFavoritesFromStorage = (): string[] => {
  if (typeof window === 'undefined') return [];
  const storedFavorites = localStorage.getItem(FAVORITES_KEY);
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

// Helper para salvar favoritos no localStorage
const saveFavoritesToStorage = (favorites: string[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

export const useFavoriteArticles = () => {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false); // Para evitar problemas de hidratação SSR/CSR

  useEffect(() => {
    // Carregar favoritos do localStorage apenas no cliente
    setFavoriteIds(getFavoritesFromStorage());
    setIsLoaded(true);
  }, []);

  const addFavorite = useCallback((articleId: string) => {
    setFavoriteIds((prevIds) => {
      const newFavorites = Array.from(new Set([...prevIds, articleId]));
      saveFavoritesToStorage(newFavorites);
      return newFavorites;
    });
  }, []);

  const removeFavorite = useCallback((articleId: string) => {
    setFavoriteIds((prevIds) => {
      const newFavorites = prevIds.filter((id) => id !== articleId);
      saveFavoritesToStorage(newFavorites);
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback(
    (articleId: string) => {
      return favoriteIds.includes(articleId);
    },
    [favoriteIds]
  );

  const toggleFavorite = useCallback(
    (articleId: string) => {
      if (isFavorite(articleId)) {
        removeFavorite(articleId);
      } else {
        addFavorite(articleId);
      }
    },
    [addFavorite, isFavorite, removeFavorite]
  );

  return { favoriteIds, toggleFavorite, isFavorite, addFavorite, removeFavorite, isLoaded };
};
