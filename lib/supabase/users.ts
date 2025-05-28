import { supabase } from "./client"

interface User {
  id: string
  email: string
  name?: string
  avatar_url?: string
  phone?: string
  // role?: 'admin' | 'user' | 'moderator'
  // is_active?: boolean
  // created_at?: string
  // updated_at?: string
  // last_login?: string
  // locale?: string
  // timezone?: string
  // provider?: 'google' | 'facebook' | 'github'
  // provider_id?: string
  // preferences?: Record<string, any>
  // metadata?: Record<string, any>
}

export async function createUser(user: User) {
  const { data, error } = await supabase
    .from("users")
    .upsert({
      id: user.id,
      email: user.email,
      name: user.name || null,
      avatar_url: user.avatar_url || null,
      updated_at: new Date().toISOString(), 
      phone: user.phone || null,
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating/updating user:", error)
    throw error
  }

  return data
}

export async function getUserById(id: string) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id).single()

  if (error) {
    console.error(`Error fetching user with ID ${id}:`, error)
    return null
  }

  return data
}
