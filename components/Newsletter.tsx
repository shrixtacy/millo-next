"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <section id="contact" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #2F5D3A 0%, #1e3d26 100%)" }}>

          {/* Background product images */}
          <div className="absolute -right-8 -bottom-8 w-72 h-72 opacity-10 pointer-events-none">
            <Image src="/media/products/sattu.png" alt="" fill className="object-contain" />
          </div>
          <div className="absolute right-48 -bottom-4 w-48 h-48 opacity-10 pointer-events-none">
            <Image src="/media/products/namkin.png" alt="" fill className="object-contain" />
          </div>

          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)", transform: "translate(-30%, -30%)" }} />
          <div className="absolute bottom-0 right-1/3 w-48 h-48 rounded-full opacity-5 bg-white" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full text-white mb-6" style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
                Stay Connected
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                Join the Millo<br />community.
              </h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Get recipes, nutrition tips, and exclusive offers delivered to your inbox. No spam, ever.
              </p>

              {submitted ? (
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur text-white px-8 py-5 rounded-2xl border border-white/20">
                  <span className="text-2xl">🌾</span>
                  <p className="font-semibold text-lg">You&apos;re in! Welcome to the Millo family.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                  />
                  <button
                    type="submit"
                    className="text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all whitespace-nowrap shadow-lg"
                    style={{ background: "linear-gradient(135deg, #ff914d, #ff3131)" }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
              <p className="text-white/40 text-xs mt-4">No spam. Unsubscribe anytime.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
