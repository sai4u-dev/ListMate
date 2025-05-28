import Link from "next/link"
import Image from "next/image"
import type { Category } from "@/types/category"

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`} className="flex flex-col items-center">
      <div className="w-[120px] h-[120px] rounded-full bg-white p-2 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image src={category.image_url || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        </div>
      </div>
      <h3 className="mt-3 text-center text-sm font-medium text-gray-800">{category.name}</h3>
    </Link>
  )
}
