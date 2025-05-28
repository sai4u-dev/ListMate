"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Product } from "@/types/product"

interface CartItem extends Product {
  quantity: number
}

interface Cart {
  items: CartItem[]
}

interface CartContextType {
  cart: Cart
  addToCart: (product: Product, quantity?: number) => void
  getQuantity: (productId: string) => number
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [] })
  const [loaded, setLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart")
      if (savedCart) {
        setCart(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error)
    } finally {
      setLoaded(true)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }, [cart, loaded])

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex((item) => item.id === product.id)

      if (existingItemIndex >= 0) {
        // Item already exists, update quantity
        const updatedItems = [...prevCart.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        }
        return { ...prevCart, items: updatedItems }
      } else {
        // Item doesn't exist, add it
        return {
          ...prevCart,
          items: [...prevCart.items, { ...product, quantity }],
        }
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter((item) => item.id !== productId),
    }))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    setCart((prevCart) => {
      const updatedItems = prevCart.items.map((item) => (item.id === productId ? { ...item, quantity } : item))
      return { ...prevCart, items: updatedItems }
    })
  }

  const clearCart = () => {
    setCart({ items: [] })
  }
  function getQuantity(productId: string) {
  const item = cart.items.find((i) => i.id === productId)
  return item?.quantity ?? 0
}

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
