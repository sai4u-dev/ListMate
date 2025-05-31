// app/categories/[slug]/page.tsx

import { notFound } from "next/navigation"
import { Suspense } from "react"
import { getCategoryBySlug } from "@/lib/supabase/categories"
import ProductGrid from "@/components/product-grid"
import ProductsLoading from "@/components/products-loading"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
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
}: {
  params: { slug: string }
}) {
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>

      <div className="flex-1">
        <Suspense fallback={<ProductsLoading />}>
          <ProductGrid category={category.id} />
        </Suspense>
      </div>
    </main>
  )
}
