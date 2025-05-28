import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ProductGridSection from "@/components/product-grid-section"
import CategoriesSection from "@/components/categories-section"
import { getFeaturedProducts, getProducts } from "@/lib/supabase/products"
import { getCategories } from "@/lib/supabase/categories"

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()
  const categories = await getCategories()
  const allProducts = await getProducts()
  // Add weight/volume to products for display
  const enhancedProducts = featuredProducts.map((product) => {
    let weight = "100gm";
    if (
      product.details &&
      typeof product.details === "object" &&
      "weight" in product.details &&
      typeof product.details.weight === "string" &&
      product.details.weight.includes("g")
    ) {
      weight = product.details.weight.trim();
    }
    return {
      ...product,
      weight,
    };
  });


  const newLaunches = enhancedProducts.slice(0, 6)
  // Filter by categories
  const fruits = allProducts.filter((p) => p.category === "Fruits");
  const vegetables = allProducts.filter((p) => p.category === "Vegetables");
  const dairy = allProducts.filter((p) => p.category === "Dairy");

  // Optionally limit to 6 items per section
  const fruitsDisplay = fruits.slice(0, 6);
  const vegetablesDisplay = vegetables.slice(0, 6);
  const dairyDisplay = dairy.slice(0, 6);

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <CategoriesSection title="Explore Categories" categories={categories} />
      <ProductGridSection title="New Launches" products={newLaunches} showViewAll={true} />
      <ProductGridSection title="Shop By Dairy" products={dairyDisplay} showViewAll={true} />
      <ProductGridSection title="Shop By Fruits" products={fruitsDisplay} showViewAll={true} />
      <ProductGridSection title="Shop By Vegetables" products={vegetablesDisplay} showViewAll={true} />
      
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to start shopping?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our collection of high-quality products and find exactly what youre looking for.
          </p>
          <Button asChild size="lg">
            <Link href="/products">
              <ShoppingBag className="mr-2 h-5 w-5" /> Shop Now
            </Link>
          </Button>
        </div>
        {/* <div className="mt-8 text-center">
            <a
              href="#"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Available on App
            </a>
          </div> */}
      </section>
    </main>
  )
}
