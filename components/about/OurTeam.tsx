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
          <span className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>
            Our Team
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            The people behind Millo
          </h2>
        </motion.div>

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
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0 ${f.color}`}>
                {f.initials}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{f.name}</p>
                <p className="text-sm font-semibold mb-3 text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #ff914d, #ff3131)" }}>{f.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{f.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
