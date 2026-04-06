"use client";

import Link from "next/link";
import Image from "next/image";

export default function MobilePromoBanner() {
  return (
    <div className="lg:hidden mx-4 mt-4 rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #2F5D3A 0%, #1e3d26 100%)" }}>
      <div className="absolute inset-0 opacity-10">
        <Image src="/media/hero/millo-bg2.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative flex items-center justify-between px-5 py-5">
        <div className="flex-1">
          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Limited Time</p>
          <p className="text-white text-lg font-bold leading-tight">Free shipping<br />on first order</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 mt-3 text-white text-xs font-semibold px-4 py-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
          >
            Shop Now →
          </Link>
        </div>
        <div className="relative w-24 h-24 flex-shrink-0">
          <Image src="/media/products/sattu.png" alt="Millo Sattu" fill className="object-contain drop-shadow-xl" />
        </div>
      </div>
    </div>
  );
}
