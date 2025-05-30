import { type NextRequest, NextResponse } from "next/server"
import { razorpay } from "@/lib/razorpay/server"
import type { CartItem } from "@/types/cart"

interface CheckoutRequestBody {
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

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequestBody = await request.json()
    const { items, customerDetails } = body

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
    }

    // Calculate total amount
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0)
    const shipping = 10 // Fixed shipping cost
    const tax = totalAmount * 0.1 // 10% tax
    const finalAmount = Math.round((totalAmount + shipping + tax) * 100) // Convert to paise

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: finalAmount,
      currency: "INR",
      receipt: `order_${Date.now()}`,
      notes: {
        customer_name: customerDetails.name,
        customer_email: customerDetails.email,
        items_count: items.length.toString(),
      },
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      items,
      customerDetails,
    })
  } catch (error) {
    console.error("Razorpay order creation error:", error)
    let errorMessage = "Internal server error"
    if (error && typeof error === "object" && "message" in error && typeof (error as any).message === "string") {
      errorMessage = (error as any).message
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
