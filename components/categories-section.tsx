import CategoryCard from "@/components/category-card"
import type { Category } from "@/types/category"

interface CategoriesSectionProps {
  title: string
  categories: Category[]
}

export default function CategoriesSection({ title, categories }: CategoriesSectionProps) {
  return (
    <section className="py-8 bg-[#f0f7f7]">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">{title}</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-items-center">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
