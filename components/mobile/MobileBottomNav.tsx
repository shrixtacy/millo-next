"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Home, Info, Grid3x3 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Shop", icon: Grid3x3 },
  { href: "/about", label: "About", icon: Info },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-2xl">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-all"
            >
              <Icon
                size={22}
                className={active ? "text-[#2F5D3A]" : "text-gray-400"}
                strokeWidth={active ? 2.5 : 1.8}
              />
              <span className={`text-xs font-medium ${active ? "text-[#2F5D3A]" : "text-gray-400"}`}>
                {label}
              </span>
              {active && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#2F5D3A]" />
              )}
            </Link>
          );
        })}

        {/* Cart button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl relative"
        >
          <div className="relative">
            <ShoppingBag size={22} className="text-gray-400" strokeWidth={1.8} />
            {totalItems > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 w-4 h-4 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
              >
                {totalItems}
              </span>
            )}
          </div>
          <span className="text-xs font-medium text-gray-400">Cart</span>
        </button>
      </div>
    </nav>
  );
}
