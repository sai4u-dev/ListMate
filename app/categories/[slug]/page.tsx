// app/categories/[slug]/page.tsx

import { notFound } from "next/navigation"
import { Suspense } from "react"
import { getCategoryBySlug } from "@/lib/supabase/categories"
import ProductGrid from "@/components/product-grid"
import ProductsLoading from "@/components/products-loading"

// Type definitions for props
type PageProps = {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Optional: Metadata generation
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

// Category Page
export default async function CategoryPage({ params, searchParams }: PageProps) {
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    notFound()
  }

  // Parse search params safely
  const sort = typeof searchParams?.sort === "string" ? searchParams.sort : undefined
  const minPrice =
    typeof searchParams?.minPrice === "string" ? Number.parseInt(searchParams.minPrice) : undefined
  const maxPrice =
    typeof searchParams?.maxPrice === "string" ? Number.parseInt(searchParams.maxPrice) : undefined

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

      <div className="flex-1">
        <Suspense fallback={<ProductsLoading />}>
          <ProductGrid
            category={category.id}
            sort={sort}
            minPrice={minPrice}
            maxPrice={maxPrice}
          />
        </Suspense>
      </div>
    </main>
  )
}
