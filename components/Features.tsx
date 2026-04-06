"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="#2F5D3A" strokeWidth="2" />
        <path d="M20 10c0 0-8 5-8 12a8 8 0 0016 0c0-7-8-12-8-12z" fill="#2F5D3A" opacity="0.2" stroke="#2F5D3A" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20 16v8M17 21l3 3 3-3" stroke="#2F5D3A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "High Fiber",
    desc: "Millet is naturally rich in dietary fiber, supporting gut health and keeping you full longer.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="#E4572E" strokeWidth="2" />
        <path d="M14 26l3-8 3 4 3-6 3 10" stroke="#E4572E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="13" r="2" fill="#E4572E" opacity="0.3" stroke="#E4572E" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Sustained Energy",
    desc: "Low glycemic index grains release energy slowly, keeping you energized throughout the day.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="#2F5D3A" strokeWidth="2" />
        <path d="M13 20l5 5 9-9" stroke="#2F5D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "No Preservatives",
    desc: "Clean label products with zero artificial additives, colors, or preservatives. Just real food.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="#E4572E" strokeWidth="2" />
        <path d="M20 28c-5-3-9-7-9-12a9 9 0 0118 0c0 5-4 9-9 12z" fill="#E4572E" opacity="0.15" stroke="#E4572E" strokeWidth="1.5"/>
        <path d="M20 22v-6M17 19l3-3 3 3" stroke="#E4572E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Climate-Friendly",
    desc: "Millets require 70% less water than rice and wheat, making them one of the most sustainable crops.",
  },
];

export default function Features() {
  return (
    <section className="relative py-24 bg-white" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
            Why Millo
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Goodness in every grain
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We believe food should nourish you without compromise. Every Millo product is crafted with intention.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-[#faf9f7] border border-gray-100 hover:border-[#2F5D3A]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-5">{f.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
