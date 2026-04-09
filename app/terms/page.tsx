import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Millo by Nutriswift Foods Private Limited.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
            Legal
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Terms &amp; Conditions</h1>
          <p className="text-gray-400 text-sm mt-2">Millo by Nutriswift Foods Private Limited</p>
        </div>

        <p className="text-gray-600 leading-relaxed mb-8">By using our website, you agree to the following terms:</p>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <Section title="1. Products">
            <p>All products are subject to availability. We reserve the right to modify or discontinue products without notice.</p>
          </Section>

          <Section title="2. Pricing">
            <p>Prices are listed in INR and may change without prior notice.</p>
          </Section>

          <Section title="3. Orders">
            <ul>
              <li>Orders once placed cannot be modified after dispatch</li>
              <li>We reserve the right to cancel orders in case of pricing or stock errors</li>
            </ul>
          </Section>

          <Section title="4. Payments">
            <p>We accept secure online payments via trusted gateways.</p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>All content (logo, images, text) belongs to Nutriswift Foods and cannot be reused without permission.</p>
          </Section>

          <Section title="6. Liability">
            <p>We are not liable for:</p>
            <ul>
              <li>Delays caused by logistics partners</li>
              <li>Improper storage of products after delivery</li>
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-gray-100 pt-6">
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
