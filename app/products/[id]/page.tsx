import { notFound } from "next/navigation"
import Image from "next/image"
import { getProductById, getRelatedProducts } from "@/lib/supabase/products"
import AddToCartButton from "@/components/add-to-cart-button"
import RelatedProducts from "@/components/related-products"
import { formatCurrency } from "@/lib/utils"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    return {
      title: "Product Not Found | NextShop",
    }
  }

  return {
    title: `${product.name} | NextShop`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category_id, product.id)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-2 text-2xl font-semibold">{formatCurrency(product.price)}</div>

          <div className="mt-6 prose prose-sm">
            <p>{product.description}</p>
          </div>

          <div className="mt-8 space-y-4">
            <AddToCartButton product={product} />
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="text-sm font-medium">Details</h3>
            <ul className="mt-2 list-disc pl-4 text-sm space-y-1">
              {Array.isArray(product.details) ? (
                product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))
              ) : (
                <li>No details available</li> // Optional: Show a fallback message if details are not available or not an array
              )}
            </ul>

          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  )
}
