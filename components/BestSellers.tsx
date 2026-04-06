"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShopifyProduct } from "@/lib/shopify";
import ProductCard from "./ProductCard";

interface Props {
  products: ShopifyProduct[];
}

export default function BestSellers({ products }: Props) {
  const display = products.slice(0, 4);

  return (
    <section className="py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
              Our Products
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Best Sellers</h2>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-[#2F5D3A] underline underline-offset-4 hover:text-[#E4572E] transition-colors"
          >
            View all products →
          </Link>
        </motion.div>

        {display.length === 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square rounded-2xl bg-gray-200 mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {display.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
