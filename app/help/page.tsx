import Link from "next/link"
import {
  Search,
  Book,
  CreditCard,
  Truck,
  RotateCcw,
  User,
  Shield,
  Phone,
  MessageCircle,
  Mail,
  ArrowRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const helpCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of shopping with us",
    icon: Book,
    color: "bg-blue-50 text-blue-600",
    articles: [
      { title: "How to create an account", href: "/help/create-account" },
      { title: "How to place your first order", href: "/help/first-order" },
      { title: "Understanding our website", href: "/help/website-guide" },
      { title: "Setting up your profile", href: "/help/profile-setup" },
    ],
  },
  {
    id: "orders-payment",
    title: "Orders & Payment",
    description: "Everything about ordering and payment methods",
    icon: CreditCard,
    color: "bg-green-50 text-green-600",
    articles: [
      { title: "Payment methods accepted", href: "/help/payment-methods" },
      { title: "Order confirmation process", href: "/help/order-confirmation" },
      { title: "Modifying or canceling orders", href: "/help/modify-cancel-orders" },
      { title: "Understanding order status", href: "/help/order-status" },
    ],
  },
  {
    id: "shipping-delivery",
    title: "Shipping & Delivery",
    description: "Delivery options, tracking, and shipping policies",
    icon: Truck,
    color: "bg-orange-50 text-orange-600",
    articles: [
      { title: "Delivery options and timeframes", href: "/help/delivery-options" },
      { title: "How to track your order", href: "/help/track-order" },
      { title: "Delivery charges and free shipping", href: "/help/delivery-charges" },
      { title: "What to do if delivery fails", href: "/help/failed-delivery" },
    ],
  },
  {
    id: "returns-refunds",
    title: "Returns & Refunds",
    description: "Return process, refund policies, and exchanges",
    icon: RotateCcw,
    color: "bg-purple-50 text-purple-600",
    articles: [
      { title: "How to return an item", href: "/help/return-item" },
      { title: "Refund process and timeline", href: "/help/refund-process" },
      { title: "Return policy details", href: "/help/return-policy" },
      { title: "Damaged or defective items", href: "/help/damaged-items" },
    ],
  },
  {
    id: "account-profile",
    title: "Account & Profile",
    description: "Managing your account, addresses, and preferences",
    icon: User,
    color: "bg-indigo-50 text-indigo-600",
    articles: [
      { title: "Managing your addresses", href: "/help/manage-addresses" },
      { title: "Updating profile information", href: "/help/update-profile" },
      { title: "Password and security settings", href: "/help/password-security" },
      { title: "Email and notification preferences", href: "/help/notifications" },
    ],
  },
  {
    id: "security-privacy",
    title: "Security & Privacy",
    description: "Data protection, privacy, and security measures",
    icon: Shield,
    color: "bg-red-50 text-red-600",
    articles: [
      { title: "How we protect your data", href: "/help/data-protection" },
      { title: "Privacy policy explained", href: "/help/privacy-explained" },
      { title: "Secure payment processing", href: "/help/secure-payments" },
      { title: "Account security best practices", href: "/help/security-practices" },
    ],
  },
]

const popularArticles = [
  { title: "How to track my order", href: "/help/track-order", category: "Shipping" },
  { title: "Return policy and process", href: "/help/return-policy", category: "Returns" },
  { title: "Payment methods accepted", href: "/help/payment-methods", category: "Payment" },
  { title: "Delivery charges and free shipping", href: "/help/delivery-charges", category: "Shipping" },
  { title: "How to cancel an order", href: "/help/cancel-order", category: "Orders" },
  { title: "Creating an account", href: "/help/create-account", category: "Account" },
]

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Help Center</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers, guides, and support for all your shopping needs.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input type="text" placeholder="Search for help articles..." className="pl-10 h-12 text-lg" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Support</h3>
              <p className="text-gray-600 text-sm mb-3">Speak with our team</p>
              <p className="text-blue-600 font-medium">+91 1800-123-4567</p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 hover:border-green-300 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600 text-sm mb-3">Chat with support</p>
              <Button variant="outline" size="sm">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">Send us a message</p>
              <Button variant="outline" size="sm">
                <Link href="/contact">Contact Form</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Popular Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
                      <p className="text-sm text-gray-500">{article.category}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Card key={category.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${category.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                        <CardDescription className="text-sm">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, index) => (
                        <li key={index}>
                          <Link
                            href={article.href}
                            className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center justify-between group"
                          >
                            <span>{article.title}</span>
                            <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t">
                      <Link
                        href={`/help/category/${category.id}`}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        View all articles
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Additional Resources</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Video Tutorials</h3>
              <p className="text-gray-600 text-sm mb-3">Watch step-by-step guides</p>
              <Button variant="outline" size="sm">
                Watch Videos
              </Button>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Community Forum</h3>
              <p className="text-gray-600 text-sm mb-3">Connect with other users</p>
              <Button variant="outline" size="sm">
                Join Forum
              </Button>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Download App</h3>
              <p className="text-gray-600 text-sm mb-3">Shop on the go</p>
              <Button variant="outline" size="sm">
                Get App
              </Button>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">System Status</h3>
              <p className="text-gray-600 text-sm mb-3">Check service status</p>
              <Button variant="outline" size="sm">
                View Status
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
