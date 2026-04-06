import { Metadata } from "next";
import { getProducts } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse all Millo millet-based products. Healthy, clean, and sustainably sourced.",
};

export default async function ShopPage() {
  const products = await getProducts(24).catch(() => []);

  return (
    <div className="min-h-screen bg-[#faf9f7] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
            All Products
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Shop Millo</h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            Every product is crafted with clean ingredients, no preservatives, and a commitment to your health.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-gray-400 text-lg">Products coming soon.</p>
            <p className="text-gray-400 text-sm mt-2">
              Make sure your Shopify Storefront API credentials are configured in .env.local
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
