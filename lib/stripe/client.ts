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

export async function createCheckoutSession(options: CheckoutOptions) {
  try {
    const response = await fetch("/api/checkout", {
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
    console.error("Error creating checkout session:", error)
    throw error
  }
}
