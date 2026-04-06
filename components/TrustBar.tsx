"use client";

const badges = [
  "Sourced from Indian Farmers",
  "Made in India",
  "Sustainable Crops",
  "No Preservatives",
  "Clean Label",
  "FSSAI Certified",
];

const items = [...badges, ...badges, ...badges];

export default function TrustBar() {
  return (
    <section className="py-8 bg-[#2F5D3A] overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((text, i) => (
            <span key={i} className="flex items-center flex-shrink-0">
              <span className="text-white/90 text-xl font-semibold tracking-widest uppercase px-8">
                {text}
              </span>
              <span className="text-[#ff914d] font-bold text-3xl">·</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
