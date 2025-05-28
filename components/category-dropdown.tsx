"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRealTimeData } from "@/hooks/use-real-time-data"
import type { Category } from "@/types/category"

interface CategoryDropdownProps {
  initialCategories: Category[]
}

export default function CategoryDropdown({ initialCategories }: CategoryDropdownProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  // Use real-time data for categories
  const { data: categories } = useRealTimeData<Category>("categories", initialCategories)

  // Initialize selected category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [searchParams])

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value)

    // Update URL with selected category
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set("category", value)
    } else {
      params.delete("category")
    }

    // Create the new URL
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="w-full mb-6">
      <Select value={selectedCategory} onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
