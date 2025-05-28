import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export const metadata = {
  title: "My Addresses | NextShop",
  description: "Manage your shipping addresses",
}

export default function AddressesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Addresses</CardTitle>
        <CardDescription>Manage your shipping and billing addresses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">You don't have any saved addresses yet.</p>
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add New Address
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
