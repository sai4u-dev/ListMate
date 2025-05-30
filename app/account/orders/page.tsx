import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatCurrency, formatDate } from "@/lib/utils"
import { getCurrentUserOrders } from "@/lib/supabase/orders"

export const metadata = {
  title: "My Orders | NextShop",
  description: "View your order history",
}

// ---------- Define Types ----------
type Product = {
  image_url: string
  name: string
}

type OrderItem = {
  id: string
  product: Product
  quantity: number
  unit_price: number
  total_price: number
}

type Order = {
  id: string
  status: string
  created_at: string
  total_amount: number
  order_items: OrderItem[]
}

// ---------- Main Page Component ----------
export default async function OrdersPage() {
  const orders: Order[] = await getCurrentUserOrders()

  if (!orders || orders.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Orders</CardTitle>
          <CardDescription>You haven&apos;t placed any orders yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Orders</CardTitle>
          <CardDescription>View and manage your order history</CardDescription>
        </CardHeader>
      </Card>

      {orders.map((order) => (
        <Card key={order.id} className="overflow-hidden">
          <div className="bg-muted px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Order #{order.id.substring(0, 8)}</h3>
                <Badge variant={getOrderStatusVariant(order.status)}>{order.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Placed on {formatDate(order.created_at)}</p>
            </div>
            <Button asChild size="sm" variant="outline">
              <Link href={`/account/orders/${order.id}`}>View Details</Link>
            </Button>
          </div>

          <CardContent className="p-6">
            <div className="space-y-4">
              {order.order_items.slice(0, 2).map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.product?.image_url || "/placeholder.svg"}
                      alt={item.product?.name || "Product"}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.product?.name || "Product"}</p>
                    <p className="text-xs text-muted-foreground">
                      Qty: {item.quantity} × {formatCurrency(item.unit_price)}
                    </p>
                  </div>
                  <div className="text-sm font-medium">{formatCurrency(item.total_price)}</div>
                </div>
              ))}

              {order.order_items.length > 2 && (
                <p className="text-sm text-muted-foreground">+ {order.order_items.length - 2} more items</p>
              )}

              <Separator />

              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">{formatCurrency(order.total_amount)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// ---------- Order Status Badge Variant Helper ----------
function getOrderStatusVariant(status: string) {
  switch (status.toLowerCase()) {
    case "paid":
    case "completed":
      return "default"
    case "processing":
    case "shipped":
      return "default"
    case "cancelled":
      return "destructive"
    case "refunded":
      return "outline"
    default:
      return "secondary"
  }
}
