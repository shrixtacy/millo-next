"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section id="contact" className="py-24 bg-[#F5E6D3]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
            Stay Connected
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">
            Subscribe for healthy updates
          </h2>
          <p className="text-gray-600 mb-10">
            Get recipes, nutrition tips, and exclusive offers delivered to your inbox.
          </p>

          {submitted ? (
            <div className="bg-[#2F5D3A] text-white px-8 py-5 rounded-2xl inline-block">
              <p className="font-semibold">You&apos;re in! Welcome to the Millo family 🌾</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 rounded-xl border border-[#e8d4bc] bg-white focus:outline-none focus:ring-2 focus:ring-[#2F5D3A] text-gray-800 placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#2F5D3A] text-white px-7 py-4 rounded-xl font-semibold hover:bg-[#1e3d26] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
