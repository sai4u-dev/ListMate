import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { getCategories } from "@/lib/supabase/categories"

function CategorySkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative bg-gray-100">
        <Skeleton className="h-full w-full" />
      </div>
      <CardContent className="p-4 text-center">
        <Skeleton className="h-6 w-24 mx-auto" />
      </CardContent>
    </Card>
  )
}

async function CategoryList() {
  const categories = await getCategories()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.slug}`}>
          <Card className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video relative bg-gray-100">
              <Image
                src={category.image_url || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default function CategoryShowcase() {
  return (
    <Suspense
      fallback={
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <CategorySkeleton key={i} />
            ))}
        </div>
      }
    >
      <CategoryList />
    </Suspense>
  )
}
