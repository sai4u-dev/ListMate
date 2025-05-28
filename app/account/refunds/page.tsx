export default function Refund() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Refunds</h1>
      <p className="text-muted-foreground mb-4">Manage your refund requests and history.</p>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-center text-muted-foreground">No refunds available at this time.</p>
      </div>
    </div>
  )
}
export const metadata = {
  title: "Refunds | NextShop",
  description: "Manage your refund requests and history",
}   