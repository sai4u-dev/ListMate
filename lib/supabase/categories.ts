import { supabase } from "./client"
import type { Category } from "@/types/category"

export async function getCategories(throwOnError = false): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug, image_url")
    .order("name")

  if (error) {
    console.error("Error fetching categories:", error)
    if (throwOnError) throw new Error("Failed to fetch categories")
    return []
  }

  return data || []
}

export async function fetchCategories(): Promise<Category[]> {
  const { data, error } = await supabase.from("categories").select("*").order("name")

  if (error) {
    console.error("Error fetching categories:", error)
    throw new Error("Failed to fetch categories")
  }

  return data
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug, image_url")
    .eq("slug", slug)
    .single()

  if (error) {
    console.error(`Error fetching category with slug ${slug}:`, error)
    return null
  }

  return data
}

type Product = {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  category_id: string
  details: string
  featured: boolean
}

export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  const { data, error } = await supabase.from("products").select("*, categories(name)").eq("category_id", categoryId)

  if (error) {
    console.error(`Error fetching products for category ${categoryId}:`, error)
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
  }))
}
