import ProductCard from "@/components/product-card"
import type { Product } from "@/types/product"

interface ProductGridSectionProps {
  title: string
  products: Product[]
  showViewAll?: boolean
  viewAllLink?: string
}

export default function ProductGridSection({
  title,
  products,
  showViewAll = false,
  viewAllLink = "/products",
}: ProductGridSectionProps) {
  return (
    <section className="py-4 bg-[#f9f9e3]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
          {showViewAll && (
            <a href={viewAllLink} className="text-green-600 hover:text-green-700 text-sm font-medium">
              View All
            </a>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* {products.length > 0 && (
          <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Available on App
            </a>
          </div>
        )} */}
      </div>
    </section>
  )
}
