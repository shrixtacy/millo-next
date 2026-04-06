"use client";

import { motion } from "framer-motion";

const milletBenefits = [
  { icon: "💪", text: "High in fibre, protein & minerals" },
  { icon: "📉", text: "Low glycaemic index" },
  { icon: "🌿", text: "Gluten-free & gut-friendly" },
  { icon: "🌍", text: "Climate-resilient & water-efficient" },
];

const govSupport = [
  "International Year of Millets",
  "Odisha Millets Mission",
  "Promotion of Shree Anna",
  "Rising demand for healthy, traditional, ready-to-eat foods",
];

export default function TheOpportunity() {
  return (
    <section className="py-24 bg-[#2F5D3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#F5E6D3]/60 text-sm font-semibold tracking-widest uppercase">
            The Opportunity
          </span>
          <h2 className="text-4xl font-bold text-white mt-3">
            Why Millets. Why Now.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Millet benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#F5E6D3] mb-6">Millets are:</h3>
            <div className="space-y-4">
              {milletBenefits.map((b) => (
                <div key={b.text} className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4">
                  <span className="text-2xl">{b.icon}</span>
                  <span className="text-white/90 font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Government focus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-[#F5E6D3] mb-6">Government focus & market tailwinds:</h3>
            <div className="space-y-4">
              {govSupport.map((g) => (
                <div key={g} className="flex items-start gap-3">
                  <span className="text-[#E4572E] mt-1 text-lg">✓</span>
                  <span className="text-white/80">{g}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#F5E6D3] rounded-2xl p-6">
              <p className="text-[#2F5D3A] font-bold text-lg">Our Opportunity</p>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Rebuild millet consumption through modern, tasty, packaged foods that connect
                Odisha&apos;s farms to India&apos;s health-conscious consumers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
