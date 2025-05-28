"use client"

import type { CartItem } from "@/types/cart"

interface CheckoutOptions {
  items: CartItem[]
  customerDetails: {
    name: string
    email: string
    address: string
    city: string
    state: string
    postalCode: string
    country: string
  }
}

declare global {
  interface Window {
    Razorpay: any
  }
}

export async function createRazorpayOrder(options: CheckoutOptions) {
  try {
    const response = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options),
    })

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    return await response.json()
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    throw error
  }
}

export function initializeRazorpayPayment(orderData: any, customerDetails: any) {
  return new Promise((resolve, reject) => {
    const options = {
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
      handler: (response: any) => {
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
