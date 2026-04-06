"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ShopifyProduct } from "@/lib/shopify";
import ProductCard from "./ProductCard";

interface Props {
  products: ShopifyProduct[];
}

export default function BestSellers({ products }: Props) {
  const display = products.slice(0, 4);

  return (
    <section className="py-28 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
              Our Products
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mt-3">Best Sellers</h2>
            <p className="text-gray-500 mt-3 max-w-md">Clean ingredients, bold flavours — products people keep coming back to.</p>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 border-2 border-[#2F5D3A] text-[#2F5D3A] px-6 py-3 rounded-full font-semibold hover:bg-[#2F5D3A] hover:text-white transition-all whitespace-nowrap"
          >
            View All Products →
          </Link>
        </motion.div>

        {/* Product grid or skeletons */}
        {display.length === 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square rounded-3xl bg-gray-200 mb-4" />
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

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #2F5D3A 0%, #1e3d26 100%)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <Image src="/media/hero/millo-bg2.png" alt="" fill className="object-cover" />
          </div>
          <div className="relative px-8 py-10 sm:px-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white text-2xl font-bold">New to Millo?</p>
              <p className="text-white/70 mt-1">Try our starter pack — handpicked for first-timers.</p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all whitespace-nowrap shadow-lg"
              style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
            >
              Explore All →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
