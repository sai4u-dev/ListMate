import { Package, Clock, CheckCircle, XCircle, AlertCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const returnSteps = [
  {
    step: 1,
    title: "Request Return",
    description: "Log into your account and request a return for eligible items",
    icon: Package,
  },
  {
    step: 2,
    title: "Print Return Label",
    description: "Download and print the prepaid return shipping label",
    icon: Clock,
  },
  {
    step: 3,
    title: "Pack & Ship",
    description: "Pack the item securely and attach the return label",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Receive Refund",
    description: "Get your refund once we receive and process the return",
    icon: CheckCircle,
  },
]

const returnReasons = [
  { reason: "Defective/Damaged", description: "Item arrived damaged or not working properly", eligible: true },
  { reason: "Wrong Item", description: "Received different item than ordered", eligible: true },
  { reason: "Size/Fit Issues", description: "Item doesn't fit as expected", eligible: true },
  { reason: "Not as Described", description: "Item doesn't match the description", eligible: true },
  { reason: "Changed Mind", description: "No longer need the item", eligible: true },
  { reason: "Better Price Found", description: "Found the same item at a lower price", eligible: false },
]

const nonReturnableItems = [
  "Perishable goods (food, flowers, etc.)",
  "Personal care items (cosmetics, hygiene products)",
  "Customized or personalized items",
  "Digital products and downloads",
  "Gift cards and vouchers",
  "Items damaged by misuse",
]

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns & Exchanges</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We want you to be completely satisfied with your purchase. If youre not happy with an item, were here to
            help with our hassle-free return process.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-2 border-green-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">30</div>
              <div className="text-gray-600">Days to Return</div>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">Free</div>
              <div className="text-gray-600">Return Shipping</div>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-purple-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">2-3</div>
              <div className="text-gray-600">Days Processing</div>
            </CardContent>
          </Card>
          <Card className="text-center border-2 border-orange-200">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">5-10</div>
              <div className="text-gray-600">Days Refund</div>
            </CardContent>
          </Card>
        </div>

        {/* Return Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">How Returns Work</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={step.step} className="relative">
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < returnSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-400" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Return Eligibility */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Return Reasons
              </CardTitle>
              <CardDescription>Common reasons for returns and their eligibility status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {returnReasons.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{item.reason}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                    <Badge variant={item.eligible ? "default" : "secondary"}>
                      {item.eligible ? "Eligible" : "Not Eligible"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                Non-Returnable Items
              </CardTitle>
              <CardDescription>Items that cannot be returned for hygiene and safety reasons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {nonReturnableItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Return Conditions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-600" />
              Return Conditions
            </CardTitle>
            <CardDescription>Items must meet these conditions to be eligible for return</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Required Conditions</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Returned within 30 days of delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Item in original condition and packaging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">All original tags and labels attached</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">Proof of purchase provided</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Additional Notes</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Items must be unused and undamaged</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Electronics must include all accessories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Clothing items must be unworn and unwashed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-orange-600" />
                    <span className="text-gray-700">Books must be in pristine condition</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Refund Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Refund Information</CardTitle>
            <CardDescription>How and when youll receive your refund</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
                <p className="text-gray-600 text-sm">2-3 business days after we receive your return</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Refund Method</h3>
                <p className="text-gray-600 text-sm">Refunded to your original payment method</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Refund Amount</h3>
                <p className="text-gray-600 text-sm">Full purchase price minus any applicable fees</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need to Return an Item?</h2>
            <p className="text-gray-600 mb-6">
              Start your return process now or contact our support team if you have questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Return Process</Button>
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
