import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: "Return and Refund Policy for Millo by Nutriswift Foods Private Limited.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
            Legal
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Return &amp; Refund Policy</h1>
          <p className="text-gray-400 text-sm mt-2">Millo by Nutriswift Foods Private Limited</p>
        </div>

        <div className="space-y-6 text-gray-600 leading-relaxed">

          <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
            <p className="text-lg font-bold text-gray-900 mb-2">❌ No Returns</p>
            <p>We deal in consumable food products. Due to hygiene and safety reasons, <strong>all products sold are non-returnable</strong>. This policy ensures product safety and quality for all customers.</p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
            <p className="text-lg font-bold text-gray-900 mb-3">✅ Replacement (Only in Valid Cases)</p>
            <p className="mb-2">We offer replacement or refund only if:</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Product is damaged during delivery</li>
              <li>Wrong product has been delivered</li>
              <li>Package is tampered or leaking</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">⏰ Reporting Time</h2>
            <p>Issue must be reported within <strong>24–48 hours</strong> of delivery. Requests after this period may not be accepted.</p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">📸 Required Proof</h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>Order ID</li>
              <li>Clear photos of the product and packaging</li>
              <li>Unboxing video (recommended for faster resolution)</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">💰 Refund / Replacement Process</h2>
            <p>After verification, we will:</p>
            <ul className="space-y-1 list-disc list-inside mt-2">
              <li>Replace the product, OR</li>
              <li>Process refund within <strong>5–7 working days</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">🚫 Non-Eligible Cases</h2>
            <ul className="space-y-1 list-disc list-inside text-gray-500">
              <li>Change of mind</li>
              <li>Taste preference issues</li>
              <li>Opened or consumed products</li>
              <li>Incorrect storage after delivery</li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">📞 Contact Us</h2>
            <p>📧 Email: <a href="mailto:hello@millo.life" className="text-[#2F5D3A] underline">hello@millo.life</a></p>
            <p className="mt-1">📞 Phone: <a href="tel:+919668667078" className="text-[#2F5D3A] underline">+91 966 866 7078</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
