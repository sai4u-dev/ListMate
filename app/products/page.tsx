import { Suspense } from "react"
import ProductGridContainer from "@/components/product-grid-container"
import ProductFilters from "@/components/product-filters"
import ProductsLoading from "@/components/products-loading"
import CategoryDropdown from "@/components/category-dropdown"
import { getCategories } from "@/lib/supabase/categories"

export const metadata = {
  title: "Products | NextShop",
  description: "Browse our collection of products",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const category = typeof searchParams.category === "string" ? searchParams.category : undefined
  const sort = typeof searchParams.sort === "string" ? searchParams.sort : undefined
  const minPrice = typeof searchParams.minPrice === "string" ? Number.parseInt(searchParams.minPrice) : undefined
  const maxPrice = typeof searchParams.maxPrice === "string" ? Number.parseInt(searchParams.maxPrice) : undefined

  // Fetch categories for the dropdown
  const categories = await getCategories()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>

      {/* <div className="md:hidden mb-6">
        <CategoryDropdown initialCategories={categories} />
      </div> */}

      {/* <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilters />
        </div> */}

        <div className="flex-1">
          <Suspense fallback={<ProductsLoading />}>
            <ProductGridContainer category={category} sort={sort} minPrice={minPrice} maxPrice={maxPrice} />
          </Suspense>
        </div>
    </main>
  )
}
