import { type NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createOrder } from "@/lib/supabase/orders";

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get("x-razorpay-signature") as string;
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET as string;

  // Verify Razorpay signature
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  if (signature !== expectedSignature) {
    console.error("Webhook signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const event = JSON.parse(payload);

  // Handle the event
  if (event.event === "payment.captured") {
    const payment = event.payload.payment.entity;

    try {
      await createOrder({
        userId: payment.notes.user_id || "guest", // Use notes to pass custom data
        totalAmount: payment.amount / 100,
        status: "paid",
        shippingAddress: {
          address: payment.notes.shipping_address || "",
        },
        paymentIntentId: payment.id,
        sessionId: payment.order_id,
      });

      console.log(`Order created for payment ${payment.id}`);
    } catch (error) {
      console.error("Error creating order:", error);
      return NextResponse.json({ error: "Error creating order" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
