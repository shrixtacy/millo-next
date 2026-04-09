import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Millo by Nutriswift Foods Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
            Legal
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm mt-2">Nutriswift Foods Private Limited</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <p>At Nutriswift Foods Private Limited (&quot;Millo&quot;, &quot;we&quot;, &quot;our&quot;), we value your privacy and are committed to protecting your personal information.</p>

          <Section title="1. Information We Collect">
            <p>We may collect:</p>
            <ul>
              <li>Name, phone number, email address</li>
              <li>Shipping and billing address</li>
              <li>Payment details (secured via payment gateways)</li>
              <li>Website usage data (cookies, analytics)</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul>
              <li>To process and deliver your orders</li>
              <li>To communicate order updates</li>
              <li>To improve our products and services</li>
              <li>For marketing and promotional purposes (with consent)</li>
            </ul>
          </Section>

          <Section title="3. Data Protection">
            <p>We use secure systems and trusted payment gateways to ensure your data is protected.</p>
          </Section>

          <Section title="4. Sharing of Information">
            <p>We do not sell or rent your personal data. Information may be shared with:</p>
            <ul>
              <li>Logistics partners</li>
              <li>Payment service providers</li>
            </ul>
          </Section>

          <Section title="5. Cookies">
            <p>Our website uses cookies to enhance user experience and track performance.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You can request access, correction, or deletion of your data by contacting us.</p>
          </Section>

          <Section title="7. Contact">
            <p>Email: <a href="mailto:hello@millo.life" className="text-[#2F5D3A] underline">hello@millo.life</a></p>
            <p>Phone: <a href="tel:+919668667078" className="text-[#2F5D3A] underline">+91 966 866 7078</a></p>
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
      <div className="space-y-2 text-gray-600">{children}</div>
    </div>
  );
}
