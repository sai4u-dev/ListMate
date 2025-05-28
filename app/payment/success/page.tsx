"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { getOrderDetails } from "@/lib/supabase/orders"
import { formatCurrency } from "@/lib/utils"

export default function PaymentSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { clearCart } = useCart()
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    if (!sessionId) {
      router.push("/")
      return
    }

    const fetchOrderDetails = async () => {
      try {
        const orderData = await getOrderDetails(sessionId)
        setOrder(orderData)
        // Clear the cart after successful payment
        clearCart()
      } catch (error) {
        console.error("Error fetching order details:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchOrderDetails()
  }, [sessionId, router, clearCart])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse h-96 w-full max-w-md bg-gray-100 rounded-lg"></div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Order Not Found</h1>
        <p className="text-muted-foreground mb-8">We couldn't find your order details.</p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-muted-foreground mb-8">Your order has been successfully placed and is being processed.</p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 text-left mb-6">
            <div className="flex justify-between">
              <span>Order ID:</span>
              <span className="font-medium">{order.id}</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              <span className="font-medium">{new Date(order.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span className="font-medium">{formatCurrency(order.total_amount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Payment Status:</span>
              <span className="font-medium text-green-600">Paid</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-medium mb-2">Items</h3>
            <ul className="space-y-2">
              {order.items.map((item: any) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">Continue Shopping</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/account/orders">View My Orders</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
