"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image src="/media/brand/millo-png.png" alt="Millo" width={100} height={40} className="h-10 w-auto object-contain" priority />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[#ff914d] ${
                  scrolled ? "text-gray-700" : "text-gray-800"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart + Mobile */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag
              size={22}
              className={scrolled ? "text-[#2F5D3A]" : "text-gray-800"}
            />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 text-white text-xs rounded-full flex items-center justify-center font-medium" style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} className={scrolled ? "text-gray-800" : "text-gray-800"} />
            ) : (
              <Menu size={22} className={scrolled ? "text-gray-800" : "text-gray-800"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-gray-700 font-medium py-2 hover:text-[#E4572E] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
