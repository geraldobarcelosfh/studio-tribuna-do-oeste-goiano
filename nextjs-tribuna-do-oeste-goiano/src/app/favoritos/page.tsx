'use client';

import { useState, useEffect } from 'react';
import { useFavoriteArticles } from '@/hooks/useFavoriteArticles';
import { client } from '@/lib/sanity.client'; // Importa o cliente Sanity
import { PostList } from '@/components/PostList'; // Reutiliza o PostList
// Definindo a interface Post aqui também para os dados buscados
// (Idealmente, mover para um arquivo de tipos compartilhado)
interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}
interface MainImage {
  asset: {
    _id: string;
    url: string;
    metadata: { dimensions: { width: number; height: number; aspectRatio: number; } };
  };
}
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
  mainImage?: MainImage;
  categories?: Category[];
  status?: string; // Incluindo status para consistência, embora não filtrado aqui
}


const FAVORITE_POSTS_QUERY_BASE = `*[_type == "post" && status == "published" && _id in $favoriteIds]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage{
    asset->{_id, url, metadata{dimensions}}
  },
  categories[]->{_id, title, slug}
}`; // Busca apenas posts publicados

export default function FavoritosPage() {
  const { favoriteIds, isLoaded } = useFavoriteArticles();
  const [favoritePosts, setFavoritePosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return; // Espera o hook carregar os IDs do localStorage

    if (favoriteIds.length > 0) {
      setIsLoading(true);
      client
        .fetch(FAVORITE_POSTS_QUERY_BASE, { favoriteIds })
        .then((posts: Post[]) => {
          // Ordenar os posts pela ordem em que foram favoritados (ou outra lógica, ex: data)
          // Para este exemplo, vamos manter a ordem da query (que é geralmente por _id ou aleatória sem order())
          // Ou, podemos reordenar com base na ordem de favoriteIds
          const orderedPosts = favoriteIds.map(id => posts.find(p => p._id === id)).filter(p => p !== undefined) as Post[];
          setFavoritePosts(orderedPosts);
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
    } else {
      setFavoritePosts([]);
      setIsLoading(false);
    }
  }, [favoriteIds, isLoaded]);

  if (!isLoaded || isLoading) {
    return (
      <main className="container mx-auto min-h-screen max-w-3xl p-8 animate-fade-in">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-dark-primary mb-8">
          Meus Favoritos
        </h1>
        <p className="text-text-main dark:text-dark-text-main">Carregando seus artigos favoritos...</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 animate-fade-in">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-4xl font-serif font-bold text-primary dark:text-dark-primary mb-2">
          Meus Favoritos
        </h1>
        <p className="text-text-main/80 dark:text-dark-text-main/80">
          Artigos que você salvou para ler mais tarde.
        </p>
      </div>

      {favoritePosts.length > 0 ? (
        <PostList posts={favoritePosts} />
      ) : (
        <p className="text-text-main dark:text-dark-text-main">
          Você ainda não salvou nenhum artigo. Comece a explorar e salve seus favoritos!
        </p>
      )}
    </main>
  );
}
