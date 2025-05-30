export interface OrderInput {
  userId: string
  totalAmount: number
  status: string
  shippingAddress: string
  paymentIntentId?: string
  sessionId: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  name: string
  price: number
  quantity: number
}

export interface Order {
  id: string
  user_id: string
  total_amount: number
  status: string
  shipping_address: string
  payment_intent_id?: string
  session_id: string
  created_at: string
  order_items: OrderItem[]
}
