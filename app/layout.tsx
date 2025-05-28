import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/cart-context";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/auth-context";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { NotificationProvider } from "@/context/notification-context";


export const metadata: Metadata = {
  title: "Ravis Groc",
  description: "A grocery store for all your needs"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
       <ThemeProvider attribute="class" defaultTheme="light">
          <AuthProvider>
            <CartProvider>
              <NotificationProvider>
                <div className="flex min-h-screen flex-col">
                  <Header />
                  <div className="flex-1">{children}</div>
                  <Footer />
                </div>
                <Toaster />
              </NotificationProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
  </html>
  );
}
