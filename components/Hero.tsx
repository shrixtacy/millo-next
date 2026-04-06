"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const floatingProducts = [
  { src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80", alt: "Millet bowl", delay: 0 },
  { src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&q=80", alt: "Healthy grains", delay: 0.15 },
  { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&q=80", alt: "Natural food", delay: 0.3 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#2F5D3A]">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5E6D3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f7] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#E4572E]/20 text-[#F5E6D3] text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
              100% Natural · Made in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Ancient Grain.
            <br />
            <span className="text-[#F5E6D3]">Modern Fuel.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-white/75 max-w-md mb-10 leading-relaxed"
          >
            Healthy millet-based snacks crafted for everyday life. Clean ingredients, sustained energy, zero compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#E4572E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c44520] transition-all hover:scale-105 shadow-lg shadow-orange-900/30"
            >
              Shop Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/#about"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all"
            >
              Our Story
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-8 mt-12 pt-8 border-t border-white/20"
          >
            {[
              { value: "100%", label: "Natural" },
              { value: "0", label: "Preservatives" },
              { value: "12+", label: "Products" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating product images */}
        <div className="relative h-[480px] hidden lg:block">
          {floatingProducts.map((p, i) => (
            <motion.div
              key={p.alt}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 + p.delay }}
              className={`absolute rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 ${
                i === 0
                  ? "w-52 h-52 top-0 left-8"
                  : i === 1
                  ? "w-64 h-64 top-24 right-0"
                  : "w-44 h-44 bottom-8 left-24"
              }`}
              style={{
                animation: `float${i} ${3 + i * 0.5}s ease-in-out infinite alternate`,
              }}
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
            </motion.div>
          ))}

          {/* Decorative circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/5" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float0 { from { transform: translateY(0px); } to { transform: translateY(-12px); } }
        @keyframes float1 { from { transform: translateY(0px); } to { transform: translateY(-18px); } }
        @keyframes float2 { from { transform: translateY(0px); } to { transform: translateY(-10px); } }
      `}</style>
    </section>
  );
}
