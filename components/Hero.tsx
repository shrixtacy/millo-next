"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function useParallaxCursor(strength = 0.04) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, strength]);

  return { x: springX, y: springY };
}

export default function Hero() {
  const sattu = useParallaxCursor(0.025);
  const namkeen = useParallaxCursor(0.045);

  return (
    <div className="relative">
      <section className="relative min-h-screen lg:min-h-screen flex items-start lg:items-center overflow-hidden bg-white">

        {/* Background image */}
        <div className="absolute inset-0 w-full h-full opacity-[0.18]">
          <Image src="/media/hero/millo-bg2.png" alt="" fill className="object-cover object-center" priority />
        </div>

        {/* Millet decoration — desktop only, bottom left */}
        <div className="absolute bottom-16 -left-16 w-52 h-auto pointer-events-none hidden lg:block" style={{ zIndex: 15, transform: "rotate(25deg)", transformOrigin: "bottom left" }}>
          <Image src="/media/hero/millo-millet.png" alt="" width={200} height={200} className="w-full h-auto object-contain" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf9f7] to-transparent" />

        {/* Main content */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-24 lg:pb-16 pb-0 grid lg:grid-cols-2 gap-8 items-center">

          {/* Text — smaller on mobile, normal on desktop */}
          <div className="pb-4 lg:pb-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 text-white"
                style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
                100% Natural · Made in India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-4"
            >
              Ancient Grain.
              <br />
              <span className="text-brand-gradient">Modern Fuel.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base lg:text-lg text-gray-500 max-w-md mb-6 leading-relaxed"
            >
              Healthy millet-based snacks crafted for everyday life. Clean ingredients, sustained energy, zero compromise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/shop"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg text-sm lg:text-base lg:px-8 lg:py-4"
                style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
                Shop Now
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/about"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all text-sm lg:text-base lg:px-8 lg:py-4">
                Our Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 mt-6 pt-6 border-t border-gray-100"
            >
              {[
                { value: "100%", label: "Natural" },
                { value: "0", label: "Preservatives" },
                { value: "12+", label: "Products" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs lg:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop product showcase */}
          <div className="relative h-[580px] hidden lg:flex items-end justify-end" style={{ zIndex: 30 }}>
            <div className="relative w-full h-full" style={{ marginRight: "-80px" }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{ x: sattu.x, y: sattu.y }}
                className="absolute bottom-0 -right-8 w-[440px] h-auto drop-shadow-2xl"
              >
                <Image src="/media/hero/sattu.png" alt="Millo Millet Sattu Power Mix" width={520} height={660} className="w-full h-auto object-contain" priority />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{ x: namkeen.x, y: namkeen.y, rotate: "-18deg" }}
                className="absolute bottom-0 right-52 w-[360px] h-auto drop-shadow-2xl"
              >
                <Image src="/media/hero/namkin.png" alt="Millo Millet Namkeen Classic Masala" width={460} height={580} className="w-full h-auto object-contain" priority />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile product showcase — bottom of section, no parallax */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 flex items-end justify-center" style={{ zIndex: 30, height: "280px" }}>
          {/* Sattu — right, upright */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-0 right-2 w-56 h-auto drop-shadow-xl"
          >
            <Image src="/media/hero/sattu.png" alt="Millo Millet Sattu Power Mix" width={260} height={340} className="w-full h-auto object-contain" priority />
          </motion.div>
          {/* Namkeen — left, tilted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute bottom-0 right-44 w-48 h-auto drop-shadow-xl"
            style={{ rotate: "-18deg" }}
          >
            <Image src="/media/hero/namkin.png" alt="Millo Millet Namkeen Classic Masala" width={230} height={300} className="w-full h-auto object-contain" priority />
          </motion.div>
        </div>

      </section>

      {/* Gradient orange — outside section to overlap Features below */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none w-full" style={{ zIndex: 20, transform: "translateY(40%)" }}>
        <Image src="/media/hero/gradient orange.png" alt="" width={1920} height={300} className="w-full object-cover object-top" priority />
      </div>
    </div>
  );
}
