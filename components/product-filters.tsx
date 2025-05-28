"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useCategories } from "@/hooks/use-categories"

interface ProductFiltersProps {
  currentCategory?: string
}

export default function ProductFilters({ currentCategory }: ProductFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { categories } = useCategories()

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [sort, setSort] = useState<string>("")
  const [category, setCategory] = useState<string>(currentCategory || "")

  // Initialize filters from URL params
  useEffect(() => {
    const minPriceParam = searchParams.get("minPrice")
    const maxPriceParam = searchParams.get("maxPrice")
    const sortParam = searchParams.get("sort")
    const categoryParam = searchParams.get("category")

    if (minPriceParam) setMinPrice(minPriceParam)
    if (maxPriceParam) setMaxPrice(maxPriceParam)
    if (sortParam) setSort(sortParam)
    if (categoryParam) setCategory(categoryParam)

    // Set price range slider
    setPriceRange([
      minPriceParam ? Number.parseInt(minPriceParam) : 0,
      maxPriceParam ? Number.parseInt(maxPriceParam) : 1000,
    ])
  }, [searchParams])

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange([values[0], values[1]])
    setMinPrice(values[0].toString())
    setMaxPrice(values[1].toString())
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Update or remove price filters
    if (minPrice) {
      params.set("minPrice", minPrice)
    } else {
      params.delete("minPrice")
    }

    if (maxPrice) {
      params.set("maxPrice", maxPrice)
    } else {
      params.delete("maxPrice")
    }

    // Update or remove sort
    if (sort) {
      params.set("sort", sort)
    } else {
      params.delete("sort")
    }

    // Update or remove category (if not already in the URL path)
    if (category && !currentCategory) {
      params.set("category", category)
    } else if (!currentCategory) {
      params.delete("category")
    }

    // Create the new URL
    const newUrl = `${window.location.pathname}?${params.toString()}`
    router.push(newUrl)
  }

  const resetFilters = () => {
    setMinPrice("")
    setMaxPrice("")
    setSort("")
    if (!currentCategory) setCategory("all")
    setPriceRange([0, 1000])

    // Remove all filter params from URL
    const params = new URLSearchParams()
    router.push(`${window.location.pathname}${params.toString() ? `?${params.toString()}` : ""}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <Button variant="outline" size="sm" onClick={resetFilters} className="w-full">
          Reset Filters
        </Button>
      </div>

      <Accordion type="single" collapsible defaultValue="price">
        {!currentCategory && (
          <AccordionItem value="category">
            <AccordionTrigger>Category</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>
        )}

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider value={priceRange} min={0} max={1000} step={10} onValueChange={handlePriceRangeChange} />

              <div className="flex items-center space-x-2">
                <div>
                  <Label htmlFor="minPrice">Min</Label>
                  <Input
                    id="minPrice"
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="0"
                    min={0}
                  />
                </div>
                <div className="pt-6">-</div>
                <div>
                  <Label htmlFor="maxPrice">Max</Label>
                  <Input
                    id="maxPrice"
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="1000"
                    min={0}
                  />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sort">
          <AccordionTrigger>Sort By</AccordionTrigger>
          <AccordionContent>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger>
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button onClick={applyFilters} className="w-full">
        Apply Filters
      </Button>
    </div>
  )
}
