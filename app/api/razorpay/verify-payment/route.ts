import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"
import { createOrder } from "@/lib/supabase/orders"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderData } = body

    // Verify payment signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id
    const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!).update(sign).digest("hex")

    if (razorpay_signature !== expectedSign) {
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 })
    }

    // Create order in database
    const order = await createOrder({
      userId: orderData.userId || "guest",
      totalAmount: orderData.amount / 100, // Convert from paise to rupees
      status: "paid",
      shippingAddress: orderData.customerDetails,
      paymentIntentId: razorpay_payment_id,
      sessionId: razorpay_order_id,
    })

    return NextResponse.json({ success: true, orderId: order.id })
  } catch (error: any) {
    console.error("Payment verification error:", error)
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 })
  }
}
