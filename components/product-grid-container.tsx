import { getFilteredProducts } from "@/lib/supabase/products"
import ProductGrid from "@/components/product-grid"

interface ProductGridContainerProps {
  category?: string
  sort?: string
  minPrice?: number
  maxPrice?: number
}

export default async function ProductGridContainer({ category, sort, minPrice, maxPrice }: ProductGridContainerProps) {
  // Fetch initial products from the server
  const initialProducts = await getFilteredProducts({ category, sort, minPrice, maxPrice })

  return (
    <ProductGrid
      initialProducts={initialProducts}
      category={category}
      sort={sort}
      minPrice={minPrice}
      maxPrice={maxPrice}
    />
  )
}
