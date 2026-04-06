"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "Ashutosh Patra",
    role: "Co-Founder",
    bio: "Ashutosh is a first-gen entrepreneur with hands-on experience in building consumer-focused digital and commerce platforms. He earlier co-founded the quick-commerce app Tashukeru during COVID-19, enabling doorstep delivery of essentials and Prasad during lockdowns. His work received recognition from The New Indian Express, Sambad, Dharitri, Argus TV etc.",
    initials: "AP",
    color: "bg-[#2F5D3A]",
  },
  {
    name: "Bibhu Prasad",
    role: "Co-Founder",
    bio: "Serial entrepreneur with over a decade of experience in building technology ventures including HostInfosoft and Tejeswar Ventures. Holds a PG in Entrepreneurship Development and an MBA in Marketing & Operations, with strong expertise in business strategy and operations.",
    initials: "BP",
    color: "bg-[#E4572E]",
  },
];

const team = [
  { name: "Ankit D.", role: "Operations", initials: "AD" },
  { name: "Pooja Behera", role: "Product", initials: "PB" },
  { name: "Ambika Pr.", role: "Technology", initials: "AM" },
  { name: "Asutosh Sahoo", role: "Supply Chain", initials: "AS" },
  { name: "Pallabi Mohanty", role: "Technology", initials: "PM" },
  { name: "Soumya Sahoo", role: "Ex-Alumni", initials: "SS" },
];

const advisors = [
  { name: "Jajati Behera", role: "Agro-Biz Expert & Prominent Journalist", initials: "JB" },
  { name: "ReGeneva", role: "Sustainability & ESG Expert", initials: "RG" },
  { name: "Surya Kar", role: "Sustainability & ESG Expert", initials: "SK" },
  { name: "Dhal", role: "Industry Expert", initials: "DH" },
];

function _Avatar({ initials, color }: { initials: string; color?: string }) {
  return (
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${color ?? "bg-gray-400"}`}
    >
      {initials}
    </div>
  );
}

export default function OurTeam() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#E4572E] text-sm font-semibold tracking-widest uppercase">
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            The people behind Millo
          </h2>
        </motion.div>

        {/* Founders */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center">
            Founding Team
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 bg-[#faf9f7] border border-gray-100 rounded-2xl p-7"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 ${f.color}`}
                >
                  {f.initials}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{f.name}</p>
                  <p className="text-[#E4572E] text-sm font-semibold mb-3">{f.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-16">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center">
            Core Team
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center bg-[#faf9f7] rounded-2xl p-5"
              >
                <div className="w-12 h-12 rounded-full bg-[#2F5D3A]/10 text-[#2F5D3A] font-bold flex items-center justify-center mx-auto text-sm">
                  {t.initials}
                </div>
                <p className="font-semibold text-gray-900 text-sm mt-3">{t.name}</p>
                <p className="text-gray-400 text-xs mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Advisors */}
        <div>
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center">
            Mentors & Advisors
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advisors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 bg-[#faf9f7] border border-gray-100 rounded-xl px-5 py-4"
              >
                <div className="w-10 h-10 rounded-full bg-[#E4572E]/10 text-[#E4572E] font-bold flex items-center justify-center text-xs flex-shrink-0">
                  {a.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{a.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{a.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
