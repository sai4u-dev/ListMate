import { type NextRequest, NextResponse } from "next/server"
// import { stripe } from "@/lib/stripe/server"
import type { CartItem } from "@/types/cart"
import { razorpay } from "@/lib/razorpay/server"

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

// export async function POST(request: NextRequest) {
//   try {
//     const body: CheckoutRequestBody = await request.json()
//     const { items, customerDetails } = body

//     if (!items || items.length === 0) {
//       return NextResponse.json({ error: "No items provided" }, { status: 400 })
//     }

//     // Create Stripe checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       billing_address_collection: "auto",
//       shipping_address_collection: {
//         allowed_countries: ["US", "CA", "GB", "AU"],
//       },
//       line_items: items.map((item) => ({
//         price_data: {
//           currency: "usd",
//           product_data: {
//             name: item.name,
//             description: item.description,
//           },
//           unit_amount: Math.round(item.price * 100), // Stripe uses cents
//         },
//         quantity: item.quantity,
//       })),
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
//       metadata: {
//         customer_name: customerDetails.name,
//         customer_email: customerDetails.email,
//       },
//       customer_email: customerDetails.email,
//     })

//     return NextResponse.json({ url: session.url })
//   } catch (error: unknown) {
//     console.error("Stripe checkout error:", error)
//     const errorMessage =
//       error && typeof error === "object" && "message" in error
//         ? (error as { message?: string }).message
//         : "Internal server error"
//     return NextResponse.json({ error: errorMessage }, { status: 500 })
//   }
// }


// Create Razorpay checkout session
export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequestBody = await request.json()
    const { items, customerDetails } = body

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 })
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: items.reduce((total, item) => total + item.price * item.quantity, 0) * 100, // Convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        customer_name: customerDetails.name,
        customer_email: customerDetails.email,
      },
    })

    return NextResponse.json({ id: order.id, currency: order.currency, amount: order.amount })
  } catch (error: unknown) {
    console.error("Razorpay checkout error:", error)
    const errorMessage =
      error && typeof error === "object" && "message" in error
        ? (error as { message?: string }).message
        : "Internal server error"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}