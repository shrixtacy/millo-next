"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    stat: "8g+",
    title: "High Fiber",
    desc: "Millet is naturally rich in dietary fiber, supporting gut health and keeping you full longer.",
    bg: "bg-[#2F5D3A]",
    text: "text-white",
    sub: "text-white/70",
    img: "/media/products/sattu.png",
  },
  {
    stat: "Low GI",
    title: "Sustained Energy",
    desc: "Low glycemic index grains release energy slowly — no crash, just clean fuel all day.",
    bg: "bg-[#F5E6D3]",
    text: "text-gray-900",
    sub: "text-gray-500",
    img: "/media/products/namkin.png",
  },
  {
    stat: "0%",
    title: "No Preservatives",
    desc: "Clean label products with zero artificial additives, colors, or preservatives. Just real food.",
    bg: "bg-white border border-gray-100",
    text: "text-gray-900",
    sub: "text-gray-500",
    img: null,
  },
  {
    stat: "70%",
    title: "Less Water",
    desc: "Millets need 70% less water than rice and wheat — one of the most climate-resilient crops on earth.",
    bg: "bg-[#ff914d]/10",
    text: "text-gray-900",
    sub: "text-gray-500",
    img: null,
  },
];

export default function Features() {
  return (
    <section className="relative py-28 bg-white" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
            Why Millo
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Goodness in<br />every grain.
          </h2>
          <p className="text-gray-500 mt-4 text-lg leading-relaxed">
            Every Millo product is crafted with intention — clean ingredients, real nutrition, zero compromise.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 overflow-hidden flex flex-col justify-between min-h-[280px] shadow-sm hover:shadow-xl transition-all duration-300 ${f.bg}`}
            >
              {/* Product image if available */}
              {f.img && (
                <div className="absolute -bottom-4 -right-4 w-36 h-36 opacity-20 pointer-events-none">
                  <Image src={f.img} alt="" fill className="object-contain" />
                </div>
              )}

              <div>
                <p className={`text-5xl font-bold mb-4 ${f.text}`} style={f.bg.includes("2F5D3A") ? { backgroundImage: "none" } : { backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {f.stat}
                </p>
                <h3 className={`text-xl font-bold mb-2 ${f.text}`}>{f.title}</h3>
                <p className={`text-sm leading-relaxed ${f.sub}`}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
