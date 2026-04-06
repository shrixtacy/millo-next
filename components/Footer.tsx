import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2F5D3A] rounded-full flex items-center justify-center">
                <span className="text-[#F5E6D3] text-xs font-bold font-heading">M</span>
              </div>
              <span className="text-xl font-bold font-heading text-white">Millo</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Ancient grains for modern lives. Millet-based foods crafted with care by Nutriswift Foods Private Limited.
            </p>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Twitter", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs text-gray-500 hover:text-[#E4572E] transition-colors"
                  aria-label={s}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About" },
                { href: "/#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>hello@millo.in</li>
              <li>+91 98765 43210</li>
              <li>Nutriswift Foods Pvt. Ltd.</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Millo by Nutriswift Foods Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
