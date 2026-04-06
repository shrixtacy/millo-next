"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
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
            <div className="relative h-[520px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80"
                alt="Millet farming fields"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#2F5D3A]/20" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#F5E6D3] rounded-2xl p-6 shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold font-heading text-[#2F5D3A]">2019</p>
              <p className="text-sm text-gray-600 mt-1">Founded with a mission to revive millets</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Rooted in tradition,<br />built for today.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Millo is a millet-based food brand by Nutriswift Foods Private Limited, created to bring traditional Indian nutrition into modern lifestyles.
              </p>
              <p>
                We believe that the grains our ancestors thrived on deserve a place on today&apos;s table &mdash; not as a compromise, but as a celebration of clean, powerful nutrition.
              </p>
              <p>
                Every product is crafted with care: sourced directly from Indian farmers, processed minimally, and delivered to you with full transparency about what&apos;s inside.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
              {[
                { icon: "🌾", label: "Sourced from Farmers" },
                { icon: "🇮🇳", label: "Made in India" },
                { icon: "♻️", label: "Sustainable Crops" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="text-xs text-gray-500 mt-2 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
