"use client"

import { useState, useEffect } from "react"
import { fetchCategories } from "@/lib/supabase/categories"
import type { Category } from "@/types/category"

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories()
        setCategories(data)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    getCategories()
  }, [])

  return { categories, loading, error }
}
