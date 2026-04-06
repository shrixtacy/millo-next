"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-[#2F5D3A] overflow-hidden py-28">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5E6D3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#F5E6D3] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6"
            style={{ background: "linear-gradient(135deg, #ff914d40, #ff313140)" }}
          >            Nutriswift Foods Private Limited
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Foods for Health.<br />
            <span className="text-[#F5E6D3]">Grains for Good.</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re on a mission to rebuild India&apos;s relationship with millets — transforming
            Odisha&apos;s ancient supergrains into modern, tasty, packaged foods that nourish
            consumers and empower farmers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
        >
          {[
            { value: "2025", label: "Founded" },
            { value: "3+", label: "Products" },
            { value: "Odisha", label: "Sourced From" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="text-white/50 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
