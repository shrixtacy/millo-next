import { Metadata } from "next";
import { getProducts } from "@/lib/shopify";
import ShopClient from "@/app/shop/ShopClient";
import FreeShippingBar from "@/components/mobile/FreeShippingBar";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse all Millo millet-based products. Healthy, clean, and sustainably sourced.",
};

export default async function ShopPage() {
  const products = await getProducts(24).catch(() => []);
  return (
    <div className="min-h-screen bg-[#faf9f7] pt-24">
      <FreeShippingBar />
      <ShopClient products={products} />
    </div>
  );
}
