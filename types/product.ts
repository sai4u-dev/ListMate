export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  category_id: string
  details?: string[]
  featured: boolean
  inventory_count: number
  discount : number
  discount_type : "percentage" | "fixed"
}
