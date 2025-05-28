import { notFound } from "next/navigation"
import { Suspense } from "react"
import { getCategoryBySlug } from "@/lib/supabase/categories"
import ProductGrid from "@/components/product-grid"
import ProductsLoading from "@/components/products-loading"
import ProductFilters from "@/components/product-filters"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    return {
      title: "Category Not Found | NextShop",
    }
  }

  return {
    title: `${category.name} | NextShop`,
    description: `Browse our collection of ${category.name} products`,
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    notFound()
  }

  const sort = typeof searchParams.sort === "string" ? searchParams.sort : undefined
  const minPrice = typeof searchParams.minPrice === "string" ? Number.parseInt(searchParams.minPrice) : undefined
  const maxPrice = typeof searchParams.maxPrice === "string" ? Number.parseInt(searchParams.maxPrice) : undefined

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

      {/* <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilters currentCategory={category.id} />
        </div> */}

        <div className="flex-1">
          <Suspense fallback={<ProductsLoading />}>
            <ProductGrid category={category.id} sort={sort} minPrice={minPrice} maxPrice={maxPrice} />
          </Suspense>
        </div>
    </main>
  )
}
