'use client'; // Tornando este um Client Component para usar o hook

import Image from 'next/image';
// import Link from 'next/link'; // Descomente se for implementar links para posts
import { useFavoriteArticles } from '@/hooks/useFavoriteArticles'; // Importando o hook
import { Heart } from 'lucide-react'; // Usando um ícone para o botão

interface Category {
  _id: string;
  title: string;
}

interface MainImage {
  asset: {
    _id: string;
    url: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
        aspectRatio: number;
      };
    };
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
}

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  const { toggleFavorite, isFavorite, isLoaded } = useFavoriteArticles();

  if (!posts || posts.length === 0) {
    return <p className="text-text-main dark:text-dark-text-main">Nenhuma notícia encontrada.</p>;
  }

  return (
    <div className="grid gap-10 md:gap-14">
      {posts.map((post) => (
        <article key={post._id} className="group relative flex flex-col sm:flex-row gap-6 pb-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
          {post.mainImage?.asset?.url && (
            <div className="sm:w-1/3 flex-shrink-0">
              <div className="aspect-video relative overflow-hidden rounded-md shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={post.mainImage.asset.url}
                  alt={`Imagem principal para ${post.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={posts.indexOf(post) < 3}
                />
              </div>
            </div>
          )}
          <div className="flex-grow flex flex-col">
            <div className="flex-grow">
              {post.categories && post.categories.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-2">
                  {post.categories.map((category) => (
                    <span key={category._id} className="text-xs font-semibold uppercase text-highlight dark:text-dark-highlight bg-primary/10 dark:bg-dark-primary/20 px-2 py-0.5 rounded-full">
                      {category.title}
                    </span>
                  ))}
                </div>
              )}
              <h2 className="text-xl lg:text-2xl font-serif font-semibold text-primary dark:text-dark-primary group-hover:text-highlight dark:group-hover:text-dark-highlight transition-colors duration-200">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="mt-2 text-sm text-text-main/80 dark:text-dark-text-main/80 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
            </div>
            <div className="mt-3 flex justify-between items-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Publicado em: {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  year: 'numeric', month: 'long', day: 'numeric'
                })}
              </p>
              {isLoaded && ( // Renderiza o botão apenas quando o estado do localStorage foi carregado
                <button
                  onClick={() => toggleFavorite(post._id)}
                  aria-label={isFavorite(post._id) ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
                  className={`p-1.5 rounded-full transition-colors duration-200
                              ${isFavorite(post._id)
                                ? 'text-red-500 bg-red-100 dark:text-red-300 dark:bg-opacity-20 hover:bg-red-200 dark:hover:bg-opacity-30'
                                : 'text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                >
                  <Heart fill={isFavorite(post._id) ? 'currentColor' : 'none'} size={18} />
                </button>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PostList;