"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image src="/media/brand/millo-png.png" alt="Millo" width={100} height={40} className="h-10 w-auto object-contain" priority />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`text-sm font-medium transition-colors hover:text-[#ff914d] ${scrolled ? "text-gray-700" : "text-gray-800"}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button onClick={() => setIsOpen(true)} className="relative p-2 rounded-full hover:bg-black/10 transition-colors" aria-label="Open cart">
            <ShoppingBag size={22} className={scrolled ? "text-[#2F5D3A]" : "text-gray-800"} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center font-medium" style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile: Contact button (replaces hamburger) */}
          <a
            href="tel:+919668667078"
            className="md:hidden flex items-center gap-1.5 text-xs font-semibold text-white px-3 py-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
