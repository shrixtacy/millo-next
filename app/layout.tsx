import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/mobile/MobileBottomNav";
import WhatsAppButton from "@/components/WhatsAppButton";
import MilloLabel from "@/components/MilloLabel";
import RecognitionBar from "@/components/about/RecognitionBar";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

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
      <body className={`${dmSerif.variable} ${dmSans.variable}`}>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="pb-16 lg:pb-0">{children}</main>
          <div className="hidden lg:block"><MilloLabel /></div>
          <RecognitionBar />
          <Footer />
          <WhatsAppButton />
          <MobileBottomNav />
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  );
}
