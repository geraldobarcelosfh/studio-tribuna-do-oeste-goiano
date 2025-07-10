import { client } from "@/lib/sanity.client";
import { PostList } from "@/components/PostList";
import { categoriesQuery } from "@/lib/sanity.queries"; // Caminho corrigido
import CategoryFilter from "@/components/CategoryFilter"; // Novo componente a ser criado

// Tipos para melhor organização
interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

interface PageProps {
  searchParams?: {
    categoria?: string; // slug da categoria
  };
}

// Função para construir a query de posts dinamicamente
const getPostsQuery = (categorySlug?: string) => {
  let filters = `_type == "post" && defined(slug.current) && status == "published"`;
  if (categorySlug) {
    filters += ` && $categorySlug in categories[]->slug.current`;
  }
  return `*[${filters}]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage{
      asset->{_id, url, metadata{dimensions}}
    },
    categories[]->{_id, title, slug}
  }`;
};

const options = { next: { revalidate: 30 } }; // Revalida a cada 30 segundos

export default async function Home({ searchParams }: PageProps) {
  const selectedCategorySlug = searchParams?.categoria;

  const postsQuery = getPostsQuery(selectedCategorySlug);
  const queryParams = selectedCategorySlug ? { categorySlug: selectedCategorySlug } : {};

  const posts = await client.fetch(postsQuery, queryParams, options);
  const categories: Category[] = await client.fetch(categoriesQuery);

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 animate-fade-in">
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-primary dark:text-dark-primary">Notícias Recentes</h1>
        <CategoryFilter categories={categories} selectedCategorySlug={selectedCategorySlug} />
      </div>
      {/* <ThemeSwitcher /> */}
      <PostList posts={posts} />
    </main>
  );
}

