"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { createCheckout, formatPrice } from "@/lib/shopify";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice } = useCart();

  async function handleCheckout() {
    if (items.length === 0) return;
    try {
      const url = await createCheckout(
        items.map((i) => ({ variantId: i.variantId, quantity: i.quantity }))
      );
      window.location.href = url;
    } catch (err) {
      console.error("Checkout error:", err);
    }
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        {/* Drawer */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="ease-in duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Dialog.Panel className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <Dialog.Title className="text-lg font-bold font-heading text-[#2F5D3A]">
                Your Cart
              </Dialog.Title>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={48} className="text-gray-200" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <Link
                    href="/shop"
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-[#2F5D3A] underline underline-offset-2"
                  >
                    Browse products
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.variantId} className="flex gap-4 py-3 border-b border-gray-50">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[#F5E6D3] flex-shrink-0">
                      {item.image && (
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-gray-900 truncate">{item.title}</p>
                      {item.variantTitle !== "Default Title" && (
                        <p className="text-xs text-gray-500 mt-0.5">{item.variantTitle}</p>
                      )}
                      <p className="text-sm font-semibold text-[#2F5D3A] mt-1">
                        {formatPrice(item.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#2F5D3A] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#2F5D3A] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.variantId)}
                          className="ml-auto text-xs text-gray-400 hover:text-red-500 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-gray-100 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold text-lg text-[#2F5D3A]">
                    {formatPrice(totalPrice.toString())}
                  </span>
                </div>
                <p className="text-xs text-gray-400">Shipping & taxes calculated at checkout</p>
                <button
                  onClick={handleCheckout}
                  className="w-full text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
                  style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
                >
                  Checkout
                </button>
              </div>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
