"use client"
import { Button } from "@/components/ui/button"
import {  Minus, Plus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/types/product"
import { useNotification } from "@/context/notification-context"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
 

  const { addToCart, updateQuantity, getQuantity, removeFromCart } = useCart()
  const { showCartNotification } = useNotification()
  const quantity = getQuantity(product.id)

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
    <div className="gap-4 grid">
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
                        Add to Cart
                      </Button>
                    )}
    </div>
  )
}
