import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import type { Product } from "@/types/product"
import AddToCartButton from "./add-to-cart-button"

interface RelatedProductsProps {
  products: Product[]
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Card className="overflow-hidden h-full transition-all hover:shadow-md pt-0">
            <div className="aspect-square relative bg-gray-100">
              <Image
                src={product.image_url || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <CardContent className="px-4">
              <h3 className="font-medium line-clamp-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground line-clamp-1">{product.category}</p>
            </CardContent>
            <CardFooter className="px-4 pt-0 flex items-center justify-between">
              <div className="font-semibold">{formatCurrency(product.price)}</div>
              <AddToCartButton product={product}/>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  )
}
