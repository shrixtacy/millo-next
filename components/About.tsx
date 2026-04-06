"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2025", label: "Founded" },
  { value: "100%", label: "Natural" },
  { value: "Odisha", label: "Sourced From" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#faf9f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
            Our Story
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Rooted in tradition,<br />built for today.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left — image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[560px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80"
                alt="Millet farming fields in Odisha"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(47,93,58,0.7) 0%, transparent 60%)" }} />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/70 text-sm uppercase tracking-widest mb-1">Our Mission</p>
                <p className="text-white text-xl font-bold leading-snug">
                  Take Odisha-grown millets from local farms to global shelves.
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 w-44"
            >
              <p className="text-4xl font-bold text-[#2F5D3A]">2025</p>
              <p className="text-sm text-gray-500 mt-1">Founded by Nutriswift Foods</p>
            </motion.div>

            {/* Product image overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image src="/media/products/sattu.png" alt="Millo Sattu" fill className="object-contain bg-[#F5E6D3]" />
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center pl-0 lg:pl-8"
          >
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg mb-10">
              <p>
                Millo is a millet-based food brand by <span className="font-semibold text-gray-900">Nutriswift Foods Private Limited</span>, created to bring traditional Indian nutrition into modern lifestyles.
              </p>
              <p>
                We believe the grains our ancestors thrived on deserve a place on today&apos;s table — not as a compromise, but as a celebration of clean, powerful nutrition.
              </p>
              <p>
                Every product is sourced directly from Odisha&apos;s millet farmers, processed minimally, and delivered with full transparency.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100">
                  <p className="text-2xl font-bold text-[#2F5D3A]">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {["🌾 Farmer Sourced", "🇮🇳 Made in India", "♻️ Sustainable", "✅ No Preservatives"].map((tag) => (
                <span key={tag} className="bg-[#2F5D3A]/8 text-[#2F5D3A] text-sm font-medium px-4 py-2 rounded-full border border-[#2F5D3A]/20">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold w-fit hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
            >
              Read Our Full Story
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
