import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Millo — Ancient Grain. Modern Fuel.",
    template: "%s | Millo",
  },
  description:
    "Millo brings traditional Indian millet nutrition into modern lifestyles. Healthy, clean, and sustainably sourced millet-based snacks and foods.",
  keywords: ["millet", "healthy snacks", "Indian food", "sustainable", "clean nutrition", "Millo"],
  openGraph: {
    title: "Millo — Ancient Grain. Modern Fuel.",
    description: "Healthy millet-based snacks crafted for everyday life.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
