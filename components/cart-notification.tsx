"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, X, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"

interface CartNotificationProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function CartNotification({ product, isOpen, onClose }: CartNotificationProps) {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    if (!isOpen) return

    setProgress(100)
    let current = 100

    const interval = setInterval(() => {
      current -= 1
      setProgress(current)

      if (current <= 0) {
        clearInterval(interval)
        // ✅ move onClose OUTSIDE of setState logic
        onClose()
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && product && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 w-80 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-4">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="font-medium text-gray-900">Added to Cart</h3>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center mb-4">
              <div className="relative h-16 w-16 rounded bg-gray-100 mr-3 flex-shrink-0">
                <Image
                  src={product.image_url || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</p>
                <p className="text-xs text-gray-500">{product.weight || product.volume}</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4 mr-1" /> View Cart
                </Link>
              </Button>
            </div>
          </div>

          <div className="h-1 bg-gray-100">
            <div
              className="h-full bg-green-500 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
