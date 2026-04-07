"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { ShopifyProduct, formatPrice } from "@/lib/shopify";
import { useCart } from "@/context/CartContext";

const categories = [
  { label: "All", href: "/shop", img: "/media/products/namkin.png", bg: "bg-[#F5E6D3]" },
  { label: "Namkeen", href: "/shop", img: "/media/products/namkin.png", bg: "bg-[#ff914d]/20" },
  { label: "Sattu Mix", href: "/shop", img: "/media/products/sattu.png", bg: "bg-[#2F5D3A]/10" },
  { label: "New", href: "/shop", img: "/media/products/namkin.png", bg: "bg-[#ff3131]/10" },
  { label: "Bestsellers", href: "/shop", img: "/media/products/sattu.png", bg: "bg-[#F5E6D3]" },
];

const bannerSlides = [
  { key: "slide1", hasProducts: true, fullImg: null },
  { key: "slide2", hasProducts: false, fullImg: "/media/brand/milo_2_800x800.webp" },
  { key: "slide3", hasProducts: false, fullImg: "/media/brand/Gemini_Generated_Image_7dce937dce937dce.png" },
  { key: "slide4", hasProducts: false, fullImg: "/media/brand/Gemini_Generated_Image_t1i5vst1i5vst1i5.png" },
  { key: "slide5", hasProducts: false, fullImg: "/media/brand/Gemini_Generated_Image_qkcqiaqkcqiaqkcq.png" },
];

interface Props {
  products: ShopifyProduct[];
}

function MobileProductCard({ product }: { product: ShopifyProduct }) {
  const { addItem } = useCart();
  const image = product.images.edges[0]?.node;
  const variant = product.variants.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;
  const inStock = product.availableForSale;

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    if (!variant || !inStock) return;
    addItem({
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      variantTitle: variant.title,
      price: variant.price.amount,
      image: image?.url ?? "",
    });
  }

  return (
    <Link href={`/product/${product.handle}`} className={`block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 active:scale-95 transition-transform ${!inStock ? "pointer-events-none" : ""}`}>
      <div className={`relative aspect-square bg-[#F5E6D3] ${!inStock ? "opacity-50" : ""}`}>
        {image ? (
          <Image src={image.url} alt={image.altText ?? product.title} fill className="object-cover" sizes="50vw" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold text-[#2F5D3A]/20">M</span>
          </div>
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-gray-800 text-white text-[10px] font-bold px-3 py-1 rounded-full">Out of Stock</span>
          </div>
        )}
        {product.tags.includes("bestseller") && inStock && (
          <span className="absolute top-2 left-2 text-[10px] text-white font-bold px-2 py-0.5 rounded-full" style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
            Hot
          </span>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-semibold text-gray-900 leading-tight line-clamp-2">{product.title}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-bold text-[#2F5D3A]">{formatPrice(price.amount, price.currencyCode)}</span>
          <button
            onClick={handleAdd}
            disabled={!inStock}
            className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md disabled:opacity-40"
            style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
            aria-label="Add to cart"
          >
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function MobileHome({ products }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % bannerSlides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="lg:hidden bg-[#faf9f7] min-h-screen">

      {/* Hero carousel — fixed height 260px */}
      <div className="relative overflow-hidden" style={{ height: "260px" }}>
        {bannerSlides.map((slide, i) => (
          <Link
            key={slide.key}
            href="/shop"
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: current === i ? 1 : 0, zIndex: current === i ? 1 : 0 }}
          >
            {slide.fullImg ? (
              /* Pure image slide */
              <Image src={slide.fullImg} alt="Millo Products" fill className="object-cover object-center" priority />
            ) : (
              /* Branded text slide */
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #2F5D3A 0%, #1e3d26 100%)" }}>
                <div className="absolute inset-0">
                  <Image src="/media/hero/millo-bg2.png" alt="" fill className="object-cover object-center" style={{ filter: "brightness(0) invert(1)", opacity: 0.15 }} />
                </div>
                <div className="relative flex items-center justify-between px-5 pt-16 pb-4 gap-2 h-full z-10">
                  <div className="flex-1">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full mb-3 whitespace-nowrap" style={{ background: "rgba(255,255,255,0.2)" }}>
                      100% Natural · Made in India
                    </span>
                    <h1 className="text-2xl font-bold text-white leading-tight mb-2">
                      Ancient Grain.<br />
                      <span style={{ backgroundImage: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.75) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        Modern Fuel.
                      </span>
                    </h1>
                    <p className="text-white/60 text-xs">Clean millet snacks for everyday life.</p>
                  </div>
                  <div className="flex items-end flex-shrink-0 relative" style={{ zIndex: 10 }}>
                    <div className="relative w-20 h-28" style={{ marginRight: "-8px" }}>
                      <Image src="/media/hero/namkin.png" alt="Millo Namkeen" fill className="object-contain drop-shadow-2xl" style={{ transform: "rotate(-8deg)" }} />
                    </div>
                    <div className="relative w-24 h-32">
                      <Image src="/media/hero/sattu.png" alt="Millo Sattu" fill className="object-contain drop-shadow-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Link>
        ))}

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-5 flex gap-1.5 z-10">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{ width: current === i ? "20px" : "6px", height: "6px", background: current === i ? "white" : "rgba(255,255,255,0.4)" }}
            />
          ))}
        </div>
      </div>

      {/* Category circles */}
      <div className="bg-white px-4 py-4 border-b border-gray-100">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((c) => (
            <Link key={c.label} href={c.href} className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className={`w-16 h-16 rounded-full ${c.bg} flex items-center justify-center overflow-hidden border-2 border-white shadow-md`}>
                <div className="relative w-11 h-11">
                  <Image src={c.img} alt={c.label} fill className="object-contain" />
                </div>
              </div>
              <span className="text-xs font-medium text-gray-700 text-center w-16 leading-tight">{c.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Promo banner */}
      <div className="px-4 pt-4">
        <div className="rounded-2xl overflow-hidden relative" style={{ background: "linear-gradient(135deg, #ff914d 0%, #ff3131 100%)" }}>
          <div className="flex items-center justify-between px-5 py-4">
            <div>
              <p className="text-white font-bold text-lg leading-tight">Try our<br />Products Now</p>
              <Link href="/shop" className="inline-block mt-2 bg-white text-[#ff3131] text-xs font-bold px-4 py-1.5 rounded-full">
                Order Now →
              </Link>
            </div>
            <div className="relative w-24 h-24">
              <Image src="/media/hero/namkin.png" alt="Namkeen" fill className="object-contain drop-shadow-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Best Sellers</h2>
            <p className="text-xs text-gray-400 mt-0.5">Loved by our customers</p>
          </div>
          <Link href="/shop" className="text-xs font-semibold text-[#2F5D3A] border border-[#2F5D3A] px-3 py-1.5 rounded-full">
            View All
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gray-200" />
                <div className="p-3 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {products.slice(0, 6).map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <MobileProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Why Millo */}
      <div className="mx-4 mb-4 rounded-2xl bg-[#2F5D3A] p-5">
        <p className="text-white font-bold text-base mb-3">Why Millo?</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: "🌾", text: "100% Natural" },
            { icon: "✅", text: "No Preservatives" },
            { icon: "💪", text: "High Fiber" },
            { icon: "🇮🇳", text: "Made in India" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
              <span className="text-base">{item.icon}</span>
              <span className="text-white/90 text-xs font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
