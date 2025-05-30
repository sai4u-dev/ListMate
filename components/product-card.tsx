"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Plus, Minus, ShoppingCartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { useNotification } from "@/context/notification-context"
import { formatCurrency } from "@/lib/utils"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, updateQuantity, getQuantity, removeFromCart } = useCart()
  const { showCartNotification } = useNotification()
  const quantity = getQuantity(product.id)

  // ✅ Calculate the discounted price
  const getPriceAfterDiscount = () => {
    if (!product.discount || !product.discount_type) return product.price

    if (product.discount_type === "percentage") {
      return product.price - (product.price * product.discount) / 100
    }

    if (product.discount_type === "fixed") {
      return Math.max(0, product.price - product.discount)
    }

    return product.price
  }

  const priceAfterDiscount = getPriceAfterDiscount()

  const handleIncrement = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (quantity === 0) {
      addToCart(product, 1)
      showCartNotification(product)
    } else {
      updateQuantity(product.id, quantity + 1)
    }
  }

  const handleDecrement = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1)
    } else {
      removeFromCart(product.id)
    }
  }

  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
        <div className="relative aspect-square bg-gray-50 py-4 flex items-center justify-center">
          {product.featured && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-xs">
              Featured
            </span>
          )}
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            width={180}
            height={180}
            className="object-contain max-h-[180px] w-auto"
          />
        </div>
        <div className="p-2 flex flex-col flex-grow">
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
          <div className="mt-auto">
            <div className="flex items-center justify-between">
             <div className="grid"> {priceAfterDiscount < product.price ? (
                <>
                  <span className="text-sm text-gray-500 line-through">
                    {formatCurrency(product.price)}
                  </span>
                  <span className="text-lg font-semibold text-green-600">
                    {formatCurrency(priceAfterDiscount)}
                  </span>
                </>
              ) : (
                <span className="text-lg font-semibold text-gray-900">
                  {formatCurrency(product.price)}
                </span>
              )}</div>

             <div className="flex items-center space-x-2">
               {quantity > 0 ? (
                <div className="flex items-center space-x-2">
                  <Button size="icon" variant="outline" onClick={handleDecrement}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                  <Button size="icon" variant="outline" onClick={handleIncrement}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button size="sm" onClick={handleIncrement}>
                  <ShoppingCartIcon className="h-4 w-4 mr-1" />
                </Button>
              )}
             </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
