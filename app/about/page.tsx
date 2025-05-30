import Image from "next/image"
import { Users, Target, Award, Globe, Heart, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is centered around providing the best possible experience for our customers.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "We carefully curate our products and work only with trusted suppliers to ensure the highest quality.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously innovate to bring you the latest products and the most seamless shopping experience.",
  },
  {
    icon: Globe,
    title: "Sustainability",
    description: "We're committed to sustainable practices and reducing our environmental impact.",
  },
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "With over 15 years in e-commerce, Sarah founded our company with a vision to make quality products accessible to everyone.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Michael leads our technology team, ensuring our platform provides a seamless and secure shopping experience.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Emily oversees our supply chain and logistics, making sure your orders reach you quickly and safely.",
  },
  {
    name: "David Kim",
    role: "Head of Customer Experience",
    image: "/placeholder.svg?height=300&width=300",
    bio: "David ensures every customer interaction exceeds expectations and builds lasting relationships.",
  },
]

const milestones = [
  { year: "2018", title: "Company Founded", description: "Started with a small team and big dreams" },
  { year: "2019", title: "First 1000 Customers", description: "Reached our first major milestone" },
  { year: "2020", title: "Expanded Product Range", description: "Added electronics and home categories" },
  { year: "2021", title: "Mobile App Launch", description: "Launched our mobile shopping app" },
  { year: "2022", title: "100,000+ Happy Customers", description: "Crossed six-figure customer base" },
  { year: "2023", title: "Sustainability Initiative", description: "Launched eco-friendly packaging program" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Story</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We're on a mission to make quality products accessible to everyone, everywhere.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500K+</div>
                <div className="opacity-90">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="opacity-90">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="opacity-90">Cities Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2018, our journey began with a simple observation: online shopping should be easy, reliable,
                and enjoyable for everyone. What started as a small team with big dreams has grown into a trusted
                platform serving hundreds of thousands of customers across India.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We believe that great products shouldn't be limited by geography or budget. That's why we've built
                relationships with suppliers worldwide to bring you quality products at competitive prices, backed by
                exceptional customer service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we're proud to be more than just an e-commerce platform – we're a community of shoppers, sellers,
                and dreamers working together to make commerce better for everyone.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Our team working together"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our customers and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate people behind our mission to revolutionize online shopping.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Journey */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            To democratize access to quality products by creating the most trusted, convenient, and customer-centric
            e-commerce platform in India. We strive to empower both customers and sellers while building a sustainable
            future for online commerce.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Customers</h3>
              <p className="text-gray-600">
                Providing access to quality products with exceptional service and competitive prices.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Sellers</h3>
              <p className="text-gray-600">
                Empowering businesses of all sizes to reach customers and grow their operations.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">For Society</h3>
              <p className="text-gray-600">
                Contributing to economic growth while maintaining environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
