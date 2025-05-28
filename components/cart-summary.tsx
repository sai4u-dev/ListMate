"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { formatCurrency } from "@/lib/utils"

export default function CartSummary() {
  const router = useRouter()
  const { cart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="animate-pulse h-4 w-full bg-gray-100 rounded"></div>
            <div className="animate-pulse h-4 w-full bg-gray-100 rounded"></div>
            <div className="animate-pulse h-4 w-full bg-gray-100 rounded"></div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="animate-pulse h-10 w-full bg-gray-100 rounded"></div>
        </CardFooter>
      </Card>
    )
  }

  const subtotal = cart.items.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 10 : 0
  const tax = subtotal * 1.8 // 18% tax
  const total = subtotal + shipping + tax

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping > 0 ? formatCurrency(shipping) : "Free"}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (18%)</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => router.push("/checkout")} disabled={cart.items.length === 0} className="w-full">
          Proceed to Checkout
        </Button>
      </CardFooter>
    </Card>
  )
}
