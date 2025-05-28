import { supabase } from "./client"

export async function createOrder(order: any) {
  const { data, error } = await supabase
    .from("orders")
    .insert({
      user_id: order.userId,
      total_amount: order.totalAmount,
      status: order.status,
      shipping_address: order.shippingAddress,
      payment_intent_id: order.paymentIntentId,
      session_id: order.sessionId,
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating order:", error)
    throw error
  }

  return data
}

export async function getOrdersByUserId(userId: string) {
  const { data, error } = await supabase
    .from("orders")
    .select("*, order_items(*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error(`Error fetching orders for user ${userId}:`, error)
    return []
  }

  return data
}

export async function getOrderDetails(sessionId: string) {
  const { data, error } = await supabase.from("orders").select("*, order_items(*)").eq("session_id", sessionId).single()

  if (error) {
    console.error(`Error fetching order with session ID ${sessionId}:`, error)
    return null
  }

  return data
}


export async function getCurrentUserOrders() {
  const { data: user, error: userError } = await supabase.auth.getUser()

  if (userError) {
    console.error("Error fetching current user:", userError)
    return []
  }

  if (!user.user) {
    return []
  }

  return getOrdersByUserId(user.user.id)
}