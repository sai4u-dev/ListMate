"use client"

import type { CartItem } from "@/types/cart"

interface CustomerDetails {
  name: string
  email: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
  phone?: string
}

interface CheckoutOptions {
  items: CartItem[]
  customerDetails: CustomerDetails
}

interface RazorpayOrderResponse {
  id: string
  amount: number
  currency: string
}

interface RazorpayPaymentResponse {
  razorpay_payment_id: string
  razorpay_order_id: string
  razorpay_signature: string
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance
  }
}

interface RazorpayOptions {
  key: string | undefined
  amount: number
  currency: string
  name: string
  description: string
  order_id: string
  prefill: {
    name: string
    email: string
    contact: string
  }
  theme: {
    color: string
  }
  handler: (response: RazorpayPaymentResponse) => void
  modal: {
    ondismiss: () => void
  }
}

interface RazorpayInstance {
  open(): void
}

export async function createRazorpayOrder(options: CheckoutOptions): Promise<RazorpayOrderResponse> {
  try {
    const response = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    })

    if (!response.ok) {
      throw new Error("Failed to create Razorpay order")
    }

    return await response.json()
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    throw error
  }
}

export function initializeRazorpayPayment(
  orderData: RazorpayOrderResponse,
  customerDetails: CustomerDetails
): Promise<RazorpayPaymentResponse> {
  return new Promise((resolve, reject) => {
    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: "NextShop",
      description: "Purchase from NextShop",
      order_id: orderData.id,
      prefill: {
        name: customerDetails.name,
        email: customerDetails.email,
        contact: customerDetails.phone || "",
      },
      theme: {
        color: "#3399cc",
      },
      handler: (response) => {
        resolve(response)
      },
      modal: {
        ondismiss: () => {
          reject(new Error("Payment cancelled by user"))
        },
      },
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  })
}
