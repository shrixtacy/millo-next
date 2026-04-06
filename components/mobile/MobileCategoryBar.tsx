"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  { label: "All Products", href: "/shop", img: "/media/products/namkin.png", bg: "bg-[#F5E6D3]" },
  { label: "Namkeen", href: "/shop?cat=namkeen", img: "/media/products/namkin.png", bg: "bg-[#ff914d]/15" },
  { label: "Sattu Mix", href: "/shop?cat=sattu", img: "/media/products/sattu.png", bg: "bg-[#2F5D3A]/10" },
  { label: "New Arrivals", href: "/shop?cat=new", img: "/media/products/namkin.png", bg: "bg-[#ff3131]/10" },
  { label: "Bestsellers", href: "/shop?cat=best", img: "/media/products/sattu.png", bg: "bg-[#F5E6D3]" },
];

export default function MobileCategoryBar() {
  return (
    <div className="lg:hidden w-full bg-white px-4 py-4 border-b border-gray-100">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="flex flex-col items-center gap-2 flex-shrink-0"
          >
            <div className={`w-16 h-16 rounded-full ${c.bg} flex items-center justify-center overflow-hidden border-2 border-white shadow-md`}>
              <div className="relative w-12 h-12">
                <Image src={c.img} alt={c.label} fill className="object-contain" />
              </div>
            </div>
            <span className="text-xs font-medium text-gray-700 text-center w-16 leading-tight">{c.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
