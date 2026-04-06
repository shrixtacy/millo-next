"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyFooter() {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Image src="/media/brand/millo-png.png" alt="Millo" width={120} height={48} className="h-12 w-auto object-contain" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-3">Nutriswift Foods Private Limited</h2>
          <p className="text-[#E4572E] font-semibold mb-10">Foods for Health</p>

          <div className="grid sm:grid-cols-2 gap-8 text-left mb-10">
            <div className="bg-white/5 rounded-2xl p-6">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Registered Office</p>
              <p className="text-white font-medium">PL No: 518/2259</p>
              <p className="text-gray-400 text-sm mt-1">
                Prachi Vihar, Rasulgarh,<br />
                Khordha, Odisha — 751025
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">Operations Office</p>
              <p className="text-white font-medium">PL No: 5754/13783</p>
              <p className="text-gray-400 text-sm mt-1">
                Chakeisiani, Macheswar I.E.,<br />
                Rasulgarh, Khordha, Odisha — 751010
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-400 mb-10">
            <a href="tel:+918144301610" className="hover:text-white transition-colors">
              +91-8144301610
            </a>
            <a href="tel:+919668667078" className="hover:text-white transition-colors">
              +91-9668667078
            </a>
            <a href="mailto:nutriswiftfoods@gmail.com" className="hover:text-[#E4572E] transition-colors">
              nutriswiftfoods@gmail.com
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-500 text-sm">
              CIN: U46909OD2025PTC049760 &nbsp;·&nbsp; Incorporated: 1st July 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
