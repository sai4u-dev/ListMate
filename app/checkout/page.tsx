"use client"

import { useState, useEffect, ChangeEvent, FormEvent } from "react"
import { useRouter } from "next/navigation"
import Script from "next/script"
import Link from "next/link"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CheckoutSummary from "@/components/checkout-summary"
import { createRazorpayOrder, initializeRazorpayPayment } from "@/lib/razorpay/client"
import { toast } from "sonner"

type FormData = {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
}

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, clearCart } = useCart()
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [razorpayLoaded, setRazorpayLoaded] = useState(false)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "IN",
  })

  useEffect(() => {
    setMounted(true)
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || "",
        name: user.displayName || "",
      }))
    }
  }, [user])

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse h-96 w-full max-w-4xl bg-gray-100 rounded-lg"></div>
      </div>
    )
  }

  if (cart.items.length === 0) {
    router.push("/cart")
    return null
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user) {
      toast.error("Please sign in to complete your purchase.")
      router.push("/auth/signin?redirect=/checkout")
      return
    }

    if (!razorpayLoaded) {
      toast.error("Payment system is still loading. Please wait.")
      return
    }

    try {
      setIsLoading(true)

      const orderData = await createRazorpayOrder({
        items: cart.items,
        customerDetails: formData,
      })

      const paymentResponse = await initializeRazorpayPayment(orderData, formData)

      const verificationResponse = await fetch("/api/razorpay/verify-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(typeof paymentResponse === "object" && paymentResponse !== null ? paymentResponse : {}),
          orderData: {
            ...orderData,
            userId: user.uid,
            customerDetails: formData,
          },
        }),
      })

      const result: { success: boolean; orderId?: string; message?: string } = await verificationResponse.json()

      if (verificationResponse.ok && result.success) {
        toast.success("Payment successful! Your order has been placed.")
        clearCart()
        router.push(`/payment/success?order_id=${result.orderId}`)
      } else {
        throw new Error(result.message || "Payment verification failed")
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Checkout error:", error)
        toast.error(error.message)
      } else {
        toast.error("There was an error processing your payment.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setRazorpayLoaded(true)}
        onError={() => toast.error("Failed to load payment system. Please refresh the page.")}
      />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" name="address" value={formData.address} onChange={handleChange} required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" name="city" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="state">State / Province</Label>
                      <Input id="state" name="state" value={formData.state} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" name="country" value={formData.country} onChange={handleChange} required />
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <Button type="button" variant="outline" asChild>
                  <Link href="/cart">Back to Cart</Link>
                </Button>

                <Button type="submit" disabled={isLoading || !razorpayLoaded}>
                  {isLoading ? "Processing..." : "Proceed to Payment"}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CheckoutSummary />
          </div>
        </div>
      </main>
    </>
  )
}
