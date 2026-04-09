"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Zap, Leaf, Shield, Award } from "lucide-react";
import { ShopifyProduct, formatPrice, createCheckout } from "@/lib/shopify";
import { useCart } from "@/context/CartContext";

const trustBadges = [
  { icon: <Leaf size={16} />, label: "100% Natural" },
  { icon: <Shield size={16} />, label: "No Preservatives" },
  { icon: <Zap size={16} />, label: "High Fiber" },
  { icon: <Award size={16} />, label: "FSSAI Certified" },
];

interface Props {
  product: ShopifyProduct;
}

export default function ProductDetail({ product }: Props) {
  const { addItem } = useCart();
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [buyLoading, setBuyLoading] = useState(false);

  const variants = product.variants.edges.map((e) => e.node);
  const images = product.images.edges.map((e) => e.node);
  const selectedVariant = variants[selectedVariantIdx];
  const price = selectedVariant?.price.amount ?? product.priceRange.minVariantPrice.amount;
  const currency = product.priceRange.minVariantPrice.currencyCode;
  const compareAtPrice = selectedVariant?.compareAtPrice;
  const hasDiscount = compareAtPrice && parseFloat(compareAtPrice.amount) > parseFloat(price);
  const inStock = selectedVariant?.availableForSale ?? product.availableForSale;

  function handleAddToCart() {
    if (!selectedVariant) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        variantId: selectedVariant.id,
        productId: product.id,
        title: product.title,
        variantTitle: selectedVariant.title,
        price: selectedVariant.price.amount,
        image: images[0]?.url ?? "",
      });
    }
  }

  async function handleBuyNow() {
    if (!selectedVariant) return;
    setBuyLoading(true);
    try {
      const url = await createCheckout([{ variantId: selectedVariant.id, quantity }]);
      window.location.href = url;
    } catch (err) {
      console.error(err);
      setBuyLoading(false);
    }
  }

  // Parse description into benefit bullets if it contains newlines
  const benefits = product.description
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-[#faf9f7] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F5E6D3] mb-4">
              {images[activeImage] ? (
                <Image
                  src={images[activeImage].url}
                  alt={images[activeImage].altText ?? product.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold font-heading text-[#2F5D3A]/20">M</span>
                </div>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === i ? "border-[#2F5D3A]" : "border-transparent"
                    }`}
                  >
                    <Image src={img.url} alt={img.altText ?? ""} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {product.tags.includes("bestseller") && (
              <span className="inline-block bg-[#E4572E]/10 text-[#E4572E] text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                Bestseller
              </span>
            )}

            <h1 className="text-4xl font-bold text-gray-900 mb-3">{product.title}</h1>

            <div className="flex items-center gap-3 mb-6">
              <p className="text-3xl font-bold text-[#2F5D3A]">
                {formatPrice(price, currency)}
              </p>
              {hasDiscount && compareAtPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(compareAtPrice.amount, currency)}
                  </span>
                  <span className="text-sm font-bold text-white px-2 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
                    {Math.round((1 - parseFloat(price) / parseFloat(compareAtPrice.amount)) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Variants */}
            {variants.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">Size / Variant</p>
                <div className="flex flex-wrap gap-2">
                  {variants.map((v, i) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantIdx(i)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedVariantIdx === i
                          ? "border-[#2F5D3A] bg-[#2F5D3A] text-white"
                          : "border-gray-200 text-gray-700 hover:border-[#2F5D3A]"
                      }`}
                    >
                      {v.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#2F5D3A] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#2F5D3A] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!inStock}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-[#2F5D3A] text-[#2F5D3A] py-4 rounded-xl font-semibold hover:bg-[#2F5D3A] hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ShoppingBag size={18} />
                {inStock ? "Add to Cart" : "Out of Stock"}
              </button>
              <button
                onClick={handleBuyNow}
                disabled={buyLoading || !inStock}
                className="flex-1 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
              >
                {buyLoading ? "Redirecting..." : inStock ? "Buy Now" : "Unavailable"}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3"
                >
                  <span className="text-[#2F5D3A]">{b.icon}</span>
                  <span className="text-sm text-gray-700 font-medium">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Description / Benefits */}
            {benefits.length > 0 && (
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold text-gray-900 mb-4">About this product</h3>
                {benefits.length > 1 ? (
                  <ul className="space-y-2">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#2F5D3A] mt-0.5">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-600 leading-relaxed">{benefits[0]}</p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
