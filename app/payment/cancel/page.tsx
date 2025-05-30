"use client"


import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertCircle } from "lucide-react"

export default function PaymentCancelPage() {

  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-amber-500" />
        </div>

        <h1 className="text-3xl font-bold mb-2">Payment Cancelled</h1>
        <p className="text-muted-foreground mb-8">
          Your payment was cancelled. Your cart items are still saved if youd like to complete your purchase.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/checkout">Return to Checkout</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cart">View Cart</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
