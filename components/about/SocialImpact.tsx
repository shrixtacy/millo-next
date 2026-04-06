"use client";

import { motion } from "framer-motion";

const currentModel = [
  "Products sourced from direct millet-producing manufacturers",
  "Preference to farmer-led & rural units",
];

const futureVision = [
  "Purchase raw millet crops directly from Odisha farmers",
  "Set up own manufacturing unit",
  "Employ local farmers & SHG members in processing",
  "Ensure fair pricing & assured demand",
];

const impacts = [
  { icon: "💰", label: "Farmer Income Stability" },
  { icon: "👷", label: "Rural Employment" },
  { icon: "🏭", label: "Value Addition within Odisha" },
];

export default function SocialImpact() {
  return (
    <section className="py-24 bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
            Social Impact & Farmer Empowerment
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Empowering Farmers, Not Just Sourcing from Them
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Current */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2F5D3A]/10 rounded-full flex items-center justify-center">
                <span className="text-lg">📦</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Current Model</h3>
            </div>
            <div className="space-y-4">
              {currentModel.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#2F5D3A] font-bold mt-0.5">✓</span>
                  <span className="text-gray-600">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Future */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#2F5D3A] rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-white">Future Vision</h3>
            </div>
            <div className="space-y-4">
              {futureVision.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#E4572E] font-bold mt-0.5">→</span>
                  <span className="text-white/85">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8"
        >
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Impact Created
          </p>
          <div className="grid grid-cols-3 gap-6">
            {impacts.map((imp) => (
              <div key={imp.label} className="text-center">
                <span className="text-4xl">{imp.icon}</span>
                <p className="font-bold text-gray-900 mt-3">{imp.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
