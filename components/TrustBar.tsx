"use client";

import { motion } from "framer-motion";

const badges = [
  { emoji: "🌾", text: "Sourced from Indian Farmers" },
  { emoji: "🇮🇳", text: "Made in India" },
  { emoji: "🌱", text: "Sustainable Crops" },
  { emoji: "✅", text: "No Preservatives" },
  { emoji: "💚", text: "Clean Label" },
  { emoji: "🏆", text: "FSSAI Certified" },
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-[#2F5D3A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {badges.map((b, i) => (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full"
            >
              <span className="text-lg">{b.emoji}</span>
              <span className="text-white/90 text-sm font-medium">{b.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
