"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShopifyProduct } from "@/lib/shopify";
import ProductCard from "@/components/ProductCard";

const categories = [
  { id: "all", label: "All", emoji: "🌾" },
  { id: "snacks", label: "Nutritional Snacks", emoji: "🥜" },
  { id: "meal", label: "Nutritional Meal", emoji: "💚" },
  { id: "combo", label: "Combo", emoji: "🎁" },
];

const categoryTagMap: Record<string, string[]> = {
  snacks: ["nutritional snacks", "nutritional-snacks", "snacks", "namkeen"],
  meal: ["nutritional meal", "nutritional-meal", "meal", "sattu"],
  combo: ["combo"],
};

function filterProducts(products: ShopifyProduct[], category: string): ShopifyProduct[] {
  if (category === "all") return products;
  const tags = categoryTagMap[category] ?? [];
  return products.filter((p) =>
    p.tags.some((t) => tags.some((tag) => t.toLowerCase().trim().includes(tag) || tag.includes(t.toLowerCase().trim())))
  );
}

export default function ShopClient({ products }: { products: ShopifyProduct[] }) {
  const [active, setActive] = useState("all");
  const filtered = filterProducts(products, active);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* Header */}
      <div className="mb-8">
        <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
          All Products
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Shop Millo</h1>
        <p className="text-gray-500 mt-2 max-w-xl text-sm">
          Every product is crafted with clean ingredients, no preservatives, and a commitment to your health.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8">
        {categories.map((cat) => {
          const isActive = active === cat.id;
          const count = cat.id === "all" ? products.length : filterProducts(products, cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all border ${
                isActive
                  ? "text-white border-transparent shadow-lg"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#2F5D3A] hover:text-[#2F5D3A]"
              }`}
              style={isActive ? { background: "linear-gradient(135deg, #ff914d, #ff3131)" } : {}}
            >
              <span>{cat.emoji}</span>
              {cat.label}
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Products */}
      {filtered.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-4xl mb-4">🌾</p>
          <p className="text-gray-500 font-medium">No products in this category yet.</p>
          <button onClick={() => setActive("all")} className="mt-4 text-sm text-[#2F5D3A] underline underline-offset-2">
            View all products
          </button>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
