import type { Product } from "@/types/product"

export function getPriceAfterDiscount(product: Product): number {
  if (!product.discount || !product.discount_type) return product.price

  if (product.discount_type === "percentage") {
    return product.price - (product.price * product.discount) / 100
  }

  if (product.discount_type === "fixed") {
    return Math.max(0, product.price - product.discount)
  }

  return product.price
}
