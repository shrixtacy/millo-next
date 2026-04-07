"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { ShopifyProduct, formatPrice } from "@/lib/shopify";
import { useCart } from "@/context/CartContext";

interface Props {
  product: ShopifyProduct;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const image = product.images.edges[0]?.node;
  const variant = product.variants.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;
  const inStock = product.availableForSale;

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    if (!variant) return;
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
    <Link href={`/product/${product.handle}`} className={`group block ${!inStock ? "pointer-events-none" : ""}`}>
      {/* Image */}
      <div className={`relative overflow-hidden rounded-3xl bg-[#F5E6D3] aspect-square mb-5 ${!inStock ? "opacity-50" : ""}`}>
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl font-bold font-heading text-[#2F5D3A]/20">M</span>
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)" }} />

        {/* Out of stock overlay */}
        {!inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded-full">Out of Stock</span>
          </div>
        )}

        {/* Bestseller badge */}
        {product.tags.includes("bestseller") && (
          <div className="absolute top-3 left-3">
            <span className="text-xs text-white font-semibold px-3 py-1.5 rounded-full shadow-lg" style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
              Bestseller
            </span>
          </div>
        )}

        {/* Add to cart — only if in stock */}
        {inStock && (
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 text-white p-3.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl"
          style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
          aria-label={`Add ${product.title} to cart`}
        >
          <ShoppingBag size={18} />
        </button>
        )}
      </div>

      {/* Info */}
      <div className="px-1">
        <h3 className="font-semibold text-gray-900 text-base group-hover:text-[#2F5D3A] transition-colors leading-snug">
          {product.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-1">{product.description?.slice(0, 60)}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-[#2F5D3A] font-bold text-lg">
            {formatPrice(price.amount, price.currencyCode)}
          </span>
          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
            {inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>
    </Link>
  );
}
