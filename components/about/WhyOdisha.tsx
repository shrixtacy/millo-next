"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const crops = ["Ragi (Mandia)", "Foxtail Millet", "Little Millet", "Kodo Millet"];

const pillars = [
  { icon: "🔒", label: "Food Security" },
  { icon: "💼", label: "Rural Livelihoods" },
  { icon: "🌱", label: "Climate Resilience" },
];

export default function WhyOdisha() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Odisha millet farming fields"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#2F5D3A]/30" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#E4572E] uppercase tracking-wider mb-2">
                  Supported by
                </p>
                <p className="font-bold text-gray-900">Odisha Millets Mission</p>
                <p className="text-sm text-gray-500 mt-1">
                  State-backed initiative to revive millet cultivation & consumption
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
              Why Odisha Matters
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
              Odisha: The Heartland of Millets
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Odisha has a rich millet-growing legacy, especially among tribal communities.
              Native crops are deeply linked to food security, rural livelihoods, and climate
              resilience.
            </p>

            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-3">Native crops include:</p>
              <div className="flex flex-wrap gap-2">
                {crops.map((c) => (
                  <span
                    key={c}
                    className="bg-[#F5E6D3] text-[#2F5D3A] text-sm font-medium px-4 py-2 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {pillars.map((p) => (
                <div key={p.label} className="text-center bg-[#faf9f7] rounded-xl p-4">
                  <span className="text-3xl">{p.icon}</span>
                  <p className="text-xs font-semibold text-gray-700 mt-2">{p.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#2F5D3A] text-white rounded-2xl px-6 py-5">
              <p className="font-bold text-[#F5E6D3]">Our Mission</p>
              <p className="text-white/80 mt-1 text-sm leading-relaxed">
                Take Odisha-grown millets from local farms to global shelves.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
