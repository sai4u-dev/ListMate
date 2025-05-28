"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import CartNotification from "@/components/cart-notification"
import type { Product } from "@/types/product"

interface NotificationContextType {
  showCartNotification: (product: Product) => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [isCartNotificationOpen, setIsCartNotificationOpen] = useState(false)
  const [cartProduct, setCartProduct] = useState<Product | null>(null)

  const showCartNotification = (product: Product) => {
    setCartProduct(product)
    setIsCartNotificationOpen(true)
  }

  const closeCartNotification = () => {
    setIsCartNotificationOpen(false)
  }

  return (
    <NotificationContext.Provider value={{ showCartNotification }}>
      {children}
      <CartNotification product={cartProduct} isOpen={isCartNotificationOpen} onClose={closeCartNotification} />
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider")
  }
  return context
}
