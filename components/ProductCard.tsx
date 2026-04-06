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
    <Link href={`/product/${product.handle}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-[#F5E6D3] aspect-square mb-4">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold font-heading text-[#2F5D3A]/20">M</span>
          </div>
        )}

        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-[#2F5D3A] text-white p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#1e3d26] shadow-lg"
          aria-label={`Add ${product.title} to cart`}
        >
          <ShoppingBag size={16} />
        </button>
      </div>

      <div className="px-1">
        <h3 className="font-semibold text-gray-900 group-hover:text-[#2F5D3A] transition-colors">
          {product.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[#2F5D3A] font-bold">
            {formatPrice(price.amount, price.currencyCode)}
          </span>
          {product.tags.includes("bestseller") && (
            <span className="text-xs bg-[#E4572E]/10 text-[#E4572E] px-2 py-0.5 rounded-full font-medium">
              Bestseller
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
