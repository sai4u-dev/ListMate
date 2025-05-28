import type React from "react"
import { Suspense } from "react"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <Card className="p-4">
            <Tabs defaultValue="orders" className="w-full" orientation="vertical">
              <TabsList className="flex flex-col h-auto items-stretch gap-2">
                <TabsTrigger value="profile" asChild className="justify-start">
                  <Link href="/account/profile">Profile</Link>
                </TabsTrigger>
                <TabsTrigger value="orders" asChild className="justify-start">
                  <Link href="/account/orders">Orders</Link>
                </TabsTrigger>
                <TabsTrigger value="addresses" asChild className="justify-start">
                  <Link href="/account/addresses">Addresses</Link>
                </TabsTrigger>
                <TabsTrigger value="wishlist" asChild className="justify-start">
                  <Link href="/account/refunds">Wishlist</Link>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Suspense fallback={<AccountPageSkeleton />}>{children}</Suspense>
        </div>
      </div>
    </div>
  )
}

function AccountPageSkeleton() {
  return (
    <Card>
      <div className="p-6">
        <Skeleton className="h-8 w-1/3 mb-6" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </Card>
  )
}
