"use client";

import { motion } from "framer-motion";

const problems = [
  {
    icon: "🍟",
    title: "Unhealthy Snack Dominance",
    desc: "India's snack consumption is dominated by high-fat, refined, low-nutrition foods with little to no health value.",
  },
  {
    icon: "🏥",
    title: "Rising Lifestyle Diseases",
    desc: "Obesity, diabetes, and digestive issues are surging across India — directly linked to poor dietary habits.",
  },
  {
    icon: "🌾",
    title: "Millets Are Underutilized",
    desc: "Despite being India's traditional supergrains with exceptional nutrition, millets remain largely absent from modern diets.",
  },
  {
    icon: "👨‍🌾",
    title: "Farmers Left Behind",
    desc: "Millet farmers in Odisha face limited market access, low price realization, and lack of processing & branding infrastructure.",
  },
];

export default function TheProblem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
            The Problem
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            India&apos;s Snack Problem & Millet Neglect
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Unhealthy consumers on one side. Struggling millet farmers on the other.
            We exist to fix both.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#faf9f7] border border-gray-100 rounded-2xl p-7 hover:border-[#E4572E]/30 hover:shadow-md transition-all"
            >
              <span className="text-4xl">{p.icon}</span>
              <h3 className="font-bold text-gray-900 mt-4 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Result callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 bg-[#E4572E]/8 border border-[#E4572E]/20 rounded-2xl p-8 text-center"
        >
          <p className="text-lg font-semibold text-gray-800">
            Result: <span className="text-[#E4572E]">Unhealthy consumers</span> +{" "}
            <span className="text-[#E4572E]">Struggling millet farmers</span>
          </p>
          <p className="text-gray-500 mt-2">Two problems. One solution.</p>
        </motion.div>
      </div>
    </section>
  );
}
