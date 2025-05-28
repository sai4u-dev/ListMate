"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus } from "lucide-react"

interface ProductQuantityProps {
  productId: string
  initialQuantity?: number
  onChange?: (quantity: number) => void
}

export default function ProductQuantity({ productId, initialQuantity = 1, onChange }: ProductQuantityProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onChange?.(newQuantity)
    }
  }

  const increaseQuantity = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onChange?.(newQuantity) 
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    if (!isNaN(value) && value > 0) {
      setQuantity(value)
      onChange?.(value)
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor={`quantity-${productId}`}>Quantity</Label>
      <div className="flex items-center">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          className="rounded-r-none"
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        <Input
          id={`quantity-${productId}`}
          type="number"
          min="1"
          value={quantity}
          onChange={handleInputChange}
          className="w-16 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Button type="button" variant="outline" size="icon" onClick={increaseQuantity} className="rounded-l-none">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>
    </div>
  )
}
