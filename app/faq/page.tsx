"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search, MessageCircle, Phone, Mail } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const faqCategories = [
  {
    id: "orders",
    title: "Orders & Payment",
    faqs: [
      {
        question: "How do I place an order?",
        answer:
          "To place an order, browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your purchase.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit/debit cards, UPI, net banking, digital wallets (Paytm, PhonePe, Google Pay), and cash on delivery for eligible orders.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "You can cancel your order within 2 hours of placing it without any charges. After that, cancellation fees may apply depending on the order status. Orders cannot be modified once placed.",
      },
      {
        question: "Why was my payment declined?",
        answer:
          "Payment can be declined due to insufficient funds, incorrect card details, bank restrictions, or security reasons. Please check with your bank or try a different payment method.",
      },
      {
        question: "Do you offer EMI options?",
        answer:
          "Yes, we offer EMI options for orders above ₹3,000 through select credit cards and digital lending partners. EMI options will be displayed during checkout if available.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    faqs: [
      {
        question: "How long does delivery take?",
        answer:
          "Standard delivery takes 2-6 business days depending on your location. Express delivery (1-3 days) and same-day delivery (select cities) are also available for additional charges.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Currently, we only ship within India. We're working on expanding to international markets and will update you when available.",
      },
      {
        question: "What are the shipping charges?",
        answer:
          "Shipping is free for orders above ₹499. For orders below ₹499, standard shipping costs ₹40. Express shipping costs ₹99 regardless of order value.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order is shipped, you'll receive a tracking number via email and SMS. You can also track your order by logging into your account and visiting the 'My Orders' section.",
      },
      {
        question: "What if I'm not available for delivery?",
        answer:
          "Our delivery partner will attempt delivery up to 3 times. If unsuccessful, the package will be returned to our warehouse. You can reschedule delivery or arrange pickup from a nearby location.",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    faqs: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for most items. Items must be unused, in original packaging, and in the same condition as received. Some items like perishables and personal care products are not returnable.",
      },
      {
        question: "How do I return an item?",
        answer:
          "Log into your account, go to 'My Orders', find the item you want to return, and click 'Request Return'. We'll provide a prepaid return label and pickup will be arranged.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are processed within 2-3 business days after we receive and inspect the returned item. The amount will be credited to your original payment method within 5-10 business days.",
      },
      {
        question: "Can I exchange an item instead of returning it?",
        answer:
          "We currently don't offer direct exchanges. Please return the item for a refund and place a new order for the desired product.",
      },
      {
        question: "What if I received a damaged or wrong item?",
        answer:
          "Contact us immediately with photos of the item and packaging. We'll arrange a replacement or full refund without requiring you to return the damaged item.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Profile",
    faqs: [
      {
        question: "How do I create an account?",
        answer:
          "Click 'Sign Up' on our website, provide your email and create a password. You can also sign up using your Google or Facebook account for faster registration.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Log into your account and go to 'My Profile'. You can update your personal information, addresses, and communication preferences from there.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can delete your account by contacting our customer support. Please note that this action is irreversible and you'll lose access to your order history and saved information.",
      },
      {
        question: "How do I add multiple addresses?",
        answer:
          "In your account settings, go to 'Address Book' and click 'Add New Address'. You can save multiple addresses and choose the appropriate one during checkout.",
      },
    ],
  },
  {
    id: "products",
    title: "Products & Pricing",
    faqs: [
      {
        question: "Are the prices on your website final?",
        answer:
          "Yes, the prices displayed include all applicable taxes. However, shipping charges (if any) will be calculated separately during checkout.",
      },
      {
        question: "Do you offer price matching?",
        answer:
          "We strive to offer competitive prices but don't have a formal price matching policy. However, we regularly review our prices to ensure they remain competitive.",
      },
      {
        question: "How do I know if an item is in stock?",
        answer:
          "Product availability is shown on each product page. If an item is out of stock, you can click 'Notify Me' to receive an email when it's back in stock.",
      },
      {
        question: "Do you offer bulk discounts?",
        answer:
          "Yes, we offer bulk discounts for large orders. Contact our sales team at sales@yourstore.com for custom pricing on bulk purchases.",
      },
      {
        question: "Are product reviews genuine?",
        answer:
          "Yes, all reviews are from verified customers who have purchased the product. We have strict policies against fake reviews and regularly monitor review quality.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Support",
    faqs: [
      {
        question: "The website is not loading properly. What should I do?",
        answer:
          "Try clearing your browser cache and cookies, or try accessing the site from a different browser or device. If the problem persists, contact our technical support team.",
      },
      {
        question: "I'm having trouble placing an order. What could be wrong?",
        answer:
          "This could be due to browser issues, payment problems, or temporary technical difficulties. Try using a different browser, clearing cache, or contact our support team for assistance.",
      },
      {
        question: "Why am I not receiving emails from you?",
        answer:
          "Check your spam/junk folder first. If emails are not there, add our email addresses to your safe sender list or contact us to update your email preferences.",
      },
      {
        question: "Is your website secure for online transactions?",
        answer:
          "Yes, our website uses SSL encryption and complies with industry security standards. All payment information is processed securely through certified payment gateways.",
      },
      {
        question: "Do you have a mobile app?",
        answer:
          "Currently, we don't have a mobile app, but our website is fully optimized for mobile devices and provides an excellent mobile shopping experience.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => (selectedCategory ? category.id === selectedCategory : category.faqs.length > 0))

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about shopping, orders, returns, and more.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className="mb-2"
          >
            All Categories
          </Button>
          {faqCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((category) => (
            <div key={category.id} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{category.title}</h2>
              <div className="space-y-4">
                {category.faqs.map((faq, index) => {
                  const itemId = `${category.id}-${index}`
                  const isOpen = openItems.includes(itemId)

                  return (
                    <Card key={itemId} className="border border-gray-200">
                      <CardHeader
                        className="cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleItem(itemId)}
                      >
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-lg font-medium text-gray-900">{faq.question}</CardTitle>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </CardHeader>
                      {isOpen && (
                        <CardContent className="pt-0">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.every((category) => category.faqs.length === 0) && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any FAQs matching your search. Try different keywords or contact our support team.
            </p>
            <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
          </div>
        )}

        {/* Contact Support */}
        <Card className="max-w-4xl mx-auto mt-12">
          <CardHeader>
            <CardTitle className="text-center">Still need help?</CardTitle>
            <CardDescription className="text-center">
              Can't find what you're looking for? Our support team is here to help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <MessageCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-3">Chat with our support team in real-time</p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-3">Call us at +91 9553866040</p>
                <Button variant="outline" size="sm">
                  Call Now
                </Button>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-3">Send us an email and we'll respond within 24 hours</p>
                <Button variant="outline" size="sm">
                  Send Email
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
