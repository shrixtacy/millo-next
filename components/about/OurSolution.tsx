"use client";

import { motion } from "framer-motion";

const products = [
  { name: "Millet Namkeen", status: "available", icon: "🥜" },
  { name: "Millet Power Mix / Sattu", status: "available", icon: "💚" },
  { name: "Millet Noodles", status: "launching", icon: "🍜" },
  { name: "Millet Pasta", status: "launching", icon: "🍝" },
];

const differentiators = [
  "Taste-first, nutrition-backed products",
  "Modern packaging & branding",
  "Strong farmer-centric sourcing model",
  "Odisha-grown, traditionally processed",
];

export default function OurSolution() {
  return (
    <section className="py-24 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
            Our Solution
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Introducing Millo by Nutriswift Foods
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A millet-based packaged food brand that transforms Odisha-grown millets into
            products people actually want to eat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Products */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Our Product Range</h3>
            <div className="space-y-4">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-6 py-4 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{p.icon}</span>
                    <span className="font-semibold text-gray-800">{p.name}</span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      p.status === "available"
                        ? "bg-[#2F5D3A]/10 text-[#2F5D3A]"
                        : "bg-[#E4572E]/10 text-[#E4572E]"
                    }`}
                  >
                    {p.status === "available" ? "Available" : "Launching Soon"}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#2F5D3A] rounded-3xl p-10">
              <h3 className="text-xl font-bold text-white mb-8">What makes us different</h3>
              <div className="space-y-5">
                {differentiators.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#E4572E] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-white/85 leading-relaxed">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
