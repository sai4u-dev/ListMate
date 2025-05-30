import { supabase } from "./client"
import type { Product } from "@/types/product"

export async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*, categories(name)").eq("featured", true).limit(8)

  if (error) {
    console.error("Error fetching featured products:", error)
    return []
  }

  return data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image_url: product.image_url,
    category: product.categories?.name || "Uncategorized",
    category_id: product.category_id,
    details: product.details,
    featured: product.featured,
    inventory_count: product.inventory_count,
    discount: product.discount || 0,
    discount_type: product.discount_type || "fixed",
    created_at: product.created_at,
    updated_at: product.updated_at,
    inventory_status: product.inventory_count > 0 ? "in_stock" : "out_of_stock",
  }))
}

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image_url: product.image_url,
    category: product.categories?.name || "Uncategorized",
    category_id: product.category_id,
    details: product.details,
    featured: product.featured,
    inventory_count: product.inventory_count,
    discount: product.discount || 0,
    discount_type: product.discount_type || "fixed",
    created_at: product.created_at,
    updated_at: product.updated_at,
    inventory_status: product.inventory_count > 0 ? "in_stock" : "out_of_stock",
  }))
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase.from("products").select("*, categories(name)").eq("id", id).single()

  if (error) {
    console.error(`Error fetching product with ID ${id}:`, error)
    return null
  }

  return {
    id: data.id,
    name: data.name,
    description: data.description,
    price: data.price,
    image_url: data.image_url,
    category: data.categories?.name || "Uncategorized",
    category_id: data.category_id,
    details: data.details,
    featured: data.featured,
    inventory_count: data.inventory_count,  
    discount: data.discount || 0,
    discount_type: data.discount_type || "fixed"
  }
}

export async function getRelatedProducts(categoryId: string, excludeProductId: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)")
    .eq("category_id", categoryId)
    .neq("id", excludeProductId)
    .limit(4)

  if (error) {
    console.error("Error fetching related products:", error)
    return []
  }

  return data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image_url: product.image_url,
    category: product.categories?.name || "Uncategorized",
    category_id: product.category_id,
    details: product.details,
    featured: product.featured,
    inventory_count: product.inventory_count,
    discount: product.discount || 0,
    discount_type: product.discount_type || "fixed",
    created_at: product.created_at,
    updated_at: product.updated_at,
    inventory_status: product.inventory_count > 0 ? "in_stock" : "out_of_stock",  
  }))
}

interface FilterOptions {
  category?: string
  sort?: string
  minPrice?: number
  maxPrice?: number
}

export async function getFilteredProducts(options: FilterOptions): Promise<Product[]> {
  let query = supabase.from("products").select("*, categories(name)")

  // Apply category filter
  if (options.category) {
    query = query.eq("category_id", options.category)
  }

  // Apply price filters
  if (options.minPrice !== undefined) {
    query = query.gte("price", options.minPrice)
  }

  if (options.maxPrice !== undefined) {
    query = query.lte("price", options.maxPrice)
  }

  // Apply sorting
  if (options.sort) {
    switch (options.sort) {
      case "price_asc":
        query = query.order("price", { ascending: true })
        break
      case "price_desc":
        query = query.order("price", { ascending: false })
        break
      case "newest":
        query = query.order("created_at", { ascending: false })
        break
      default:
        query = query.order("created_at", { ascending: false })
    }
  } else {
    // Default sorting
    query = query.order("created_at", { ascending: false })
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching filtered products:", error)
    return []
  }

  return data.map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    image_url: product.image_url,
    category: product.categories?.name || "Uncategorized",
    category_id: product.category_id,
    details: product.details,
    featured: product.featured,
    inventory_count: product.inventory_count,
    discount: product.discount || 0,
    discount_type: product.discount_type || "fixed",
    created_at: product.created_at,
    updated_at: product.updated_at,
    inventory_status: product.inventory_count > 0 ? "in_stock" : "out_of_stock",
  }))
}
