"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useAuth } from "@/context/auth-context"

export default function Footer() {
  const { user, signOut } = useAuth()

  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NextShop</h3>
            <p className="text-muted-foreground text-sm">
              Your premium e-commerce destination for quality products and exceptional shopping experience.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-primary">All Products</Link></li>
              <li><Link href="/categories/dairy" className="text-muted-foreground hover:text-primary">Dairy</Link></li>
              <li><Link href="/categories/fruits" className="text-muted-foreground hover:text-primary">Fruits</Link></li>
              <li><Link href="/categories/vegetables" className="text-muted-foreground hover:text-primary">Vegetables</Link></li>
              <li><Link href="/categories/featured" className="text-muted-foreground hover:text-primary">Featured Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              {!user ? (
                <>
                  <li><Link href="/auth/signin" className="text-muted-foreground hover:text-primary">Sign In</Link></li>
                  <li><Link href="/auth/signup" className="text-muted-foreground hover:text-primary">Create Account</Link></li>
                </>
              ) : (
                <>
                  <li><Link href="/account/profile" className="text-muted-foreground hover:text-primary">{user.displayName || "My Profile"}</Link></li>
                  <li><Link href="/account/orders" className="text-muted-foreground hover:text-primary">Order History</Link></li>
                  <li>
                    <button
                      onClick={signOut}
                      className="text-muted-foreground hover:text-primary text-left w-full"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
              <li><Link href="/shipping-policy" className="text-muted-foreground hover:text-primary">Shipping Information</Link></li>
              <li><Link href="/returns" className="text-muted-foreground hover:text-primary">Returns & Exchanges</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NextShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
