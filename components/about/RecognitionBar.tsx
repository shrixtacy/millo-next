"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const recognitions = [
  {
    label: "Recognised by",
    img: "/media/about/startupodisha.png",
    alt: "Startup Odisha",
  },
  {
    label: "Incubated at",
    img: "/media/about/iit-bhubaneswar.png",
    alt: "IIT Bhubaneswar",
  },
  {
    label: "A part of",
    img: "/media/about/100cube.png",
    alt: "100 Cube",
  },
];

export default function RecognitionBar() {
  return (
    <section className="py-6 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-row items-center justify-center gap-6 sm:gap-16"
        >
          {recognitions.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-1.5"
            >
              <p className="text-[9px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">{r.label}</p>
              <div className="relative h-10 w-20 sm:h-36 sm:w-72">
                <Image
                  src={r.img}
                  alt={r.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
