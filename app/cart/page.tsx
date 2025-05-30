"use client"

import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import { getPriceAfterDiscount } from "@/lib/pricing"
import CartSummary from "@/components/cart-summary"
import { useEffect, useState } from "react"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse h-96 w-full max-w-4xl bg-gray-100 rounded-lg"></div>
      </div>
    )
  }

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="text-muted-foreground mb-8">Your cart is currently empty.</p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6">
              <div className="flow-root">
                <ul className="-my-6 divide-y">
                  {cart.items.map((item) => {
                    const discountedPrice = getPriceAfterDiscount(item)

                    return (
                      <li key={item.id} className="py-6 flex">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.image_url || "/placeholder.svg"}
                            alt={item.name || "Product image"}
                            fill
                            loading="lazy"
                            className="object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium">
                              <h3>
                                <Link href={`/products/${item.id}`} className="hover:underline">
                                  {item.name}
                                </Link>
                              </h3>
                              <p className="ml-4">
                                {formatCurrency(discountedPrice * item.quantity)}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {discountedPrice < item.price ? (
                                <>
                                  <span className="line-through mr-1">{formatCurrency(item.price)}</span>
                                  <span>{formatCurrency(discountedPrice)} each</span>
                                </>
                              ) : (
                                `${formatCurrency(item.price)} each`
                              )}
                            </p>
                          </div>

                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center">
                              <label htmlFor={`quantity-${item.id}`} className="mr-2 text-muted-foreground">
                                Qty
                              </label>
                              <select
                                id={`quantity-${item.id}`}
                                value={item.quantity}
                                onChange={(e) =>
                                  updateQuantity(item.id, Number.parseInt(e.target.value))
                                }
                                className="rounded-md border-gray-300 py-1 text-base focus:border-primary focus:outline-none focus:ring-primary"
                              >
                                {[...Array(10)].map((_, i) => (
                                  <option key={`${item.id}-${i + 1}`} value={i + 1}>
                                    {i + 1}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="border-t px-6 py-4 flex justify-between">
              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button asChild variant="outline">
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </main>
  )
}
