"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
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
  // Sattu follows cursor more subtly, namkeen a bit more — creates depth
  const sattu = useParallaxCursor(0.025);
  const namkeen = useParallaxCursor(0.045);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* 16:9 background image */}
      <div className="absolute inset-0 w-full h-full opacity-[0.18]">
        <Image
          src="/media/hero/millo-bg2.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      {/* Millet decoration — bottom left corner */}
      <div className="absolute bottom-16 -left-16 w-52 h-auto pointer-events-none overflow-hidden" style={{ zIndex: 15, transform: "rotate(25deg)", transformOrigin: "bottom left" }}>
        <Image
          src="/media/hero/millo-millet.png"
          alt=""
          width={160}
          height={160}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf9f7] to-transparent" />

      {/* Gradient orange image — rendered outside overflow so it overlaps Features */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 20, transform: "translateY(40%)", overflow: "visible" }}>
        <Image
          src="/media/hero/gradient orange.png"
          alt=""
          width={1920}
          height={300}
          className="w-full object-cover object-top"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 text-white"
              style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
            >
              100% Natural · Made in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6"
          >
            Ancient Grain.
            <br />
            <span className="text-brand-gradient">Modern Fuel.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-gray-500 max-w-md mb-10 leading-relaxed"
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
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
            >
              Shop Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all"
            >
              Our Story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-8 mt-12 pt-8 border-t border-gray-100"
          >
            {[
              { value: "100%", label: "Natural" },
              { value: "0", label: "Preservatives" },
              { value: "12+", label: "Products" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Product showcase — desktop only, cursor parallax */}
        <div className="relative h-[580px] hidden lg:flex items-end justify-end" style={{ zIndex: 30 }}>
          <div className="relative w-full h-full" style={{ marginRight: "-80px" }}>

            {/* Sattu — upright, subtle cursor follow */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ x: sattu.x, y: sattu.y }}
              className="absolute bottom-0 -right-8 w-[440px] h-auto drop-shadow-2xl"
            >
              <Image
                src="/media/hero/sattu.png"
                alt="Millo Millet Sattu Power Mix"
                width={520}
                height={660}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>

            {/* Namkeen — tilted -18deg, slightly stronger cursor follow for depth */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ x: namkeen.x, y: namkeen.y, rotate: "-18deg" }}
              className="absolute bottom-0 right-52 w-[360px] h-auto drop-shadow-2xl"
            >
              <Image
                src="/media/hero/namkin.png"
                alt="Millo Millet Namkeen Classic Masala"
                width={460}
                height={580}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
