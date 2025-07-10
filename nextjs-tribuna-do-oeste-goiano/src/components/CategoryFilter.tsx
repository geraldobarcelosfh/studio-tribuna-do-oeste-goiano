'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategorySlug?: string;
}

export default function CategoryFilter({ categories, selectedCategorySlug }: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategorySlug = event.target.value;
    const currentParams = new URLSearchParams(searchParams.toString());

    if (newCategorySlug) {
      currentParams.set('categoria', newCategorySlug);
    } else {
      currentParams.delete('categoria');
    }
    router.push(`/?${currentParams.toString()}`, { scroll: false });
  };

  return (
    <div className="my-6">
      <label htmlFor="category-filter" className="block text-sm font-medium text-text-main dark:text-dark-text-main mb-1">
        Filtrar por Categoria:
      </label>
      <select
        id="category-filter"
        value={selectedCategorySlug || ''}
        onChange={handleCategoryChange}
        className="block w-full sm:w-auto pl-3 pr-10 py-2 text-base
                   border border-gray-300 dark:border-gray-500
                   focus:outline-none focus:ring-2 focus:ring-highlight/50 dark:focus:ring-dark-highlight/50 focus:border-highlight dark:focus:border-dark-highlight
                   sm:text-sm rounded-md
                   bg-app-bg dark:bg-dark-app-bg
                   text-text-main dark:text-dark-text-main
                   appearance-none" // Remove a aparência padrão para melhor customização de ícone (se adicionado)
      >
        <option value="" className="bg-app-bg dark:bg-dark-app-bg text-text-main dark:text-dark-text-main">Todas as Categorias</option>
        {categories.map((category) => (
          <option key={category._id} value={category.slug.current}>
            {category.title}
          </option>
        ))}
      </select>
    </div>
  );
}
