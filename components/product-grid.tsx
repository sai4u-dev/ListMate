import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import { getFilteredProducts } from "@/lib/supabase/products"
import AddToCartButton from "./add-to-cart-button"

interface ProductGridProps {
  category?: string
  sort?: string
  minPrice?: number
  maxPrice?: number
}

export default async function ProductGrid({ category, sort, minPrice, maxPrice }: ProductGridProps) {
  const products = await getFilteredProducts({ category, sort, minPrice, maxPrice })
  // const priceAfterDiscount = (product: any) => {
  //   if (!product.discount || !product.discount_type) return product.price
  //   if (product.discount_type === "percentage") {
  //     return product.price - (product.price * product.discount) / 100
  //   }
  //   if (product.discount_type === "fixed") {
  //     return Math.max(0, product.price - product.discount)
  //   }
  //   return product.price
  // }
  
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground">Try adjusting your filters or search criteria.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden h-full transition-all hover:shadow-md">
          <Link href={`/products/${product.id}`} >
            <div className="aspect-square relative bg-gray-100">
              
              <Image
                src={product.image_url || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardContent className="px-2">
              <h3 className="font-medium line-clamp-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{product.category}</p>
            </CardContent>
            <CardFooter className="px-2 pt-0 flex items-center justify-between">
              <div className="font-semibold">{formatCurrency(product.price)}</div>
              {/* <div className="font-semibold">{formatCurrency(priceAfterDiscount(product))}</div> */}
              <AddToCartButton product={product} />
            </CardFooter>
            </Link>
          </Card>
      ))}
    </div>
  )
}
