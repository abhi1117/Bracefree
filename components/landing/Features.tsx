"use client";
import { motion } from "framer-motion";

const items = [
  {
    title: "Be Your Own Boss",
    desc: "Work how, when, and where you want. Offer services in 50+ categories and set a flexible schedule and work area.",
  },
  {
    title: "Set Your Own Rates",
    desc: "You keep 100% of what you charge, plus tips! Invoice and get paid directly through our secure payment system.",
  },
  {
    title: "Grow Your Business",
    desc: "We connect you with clients in your area, and ways to market yourself — so you can focus on what you do best.",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-[var(--color-bg-neutral-50)] py-16">
      <div className="mx-auto max-w-[1250px] px-8">
        {/* ✅ Section Title */}
        <h2
          className="text-center text-[32px] md:text-[28px] font-bold mb-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Flexible Work, At Your Fingertips
        </h2>

        <p
          className="text-center text-[14px] font-normal leading-relaxed text-[var(--color-text-secondary)] max-w-[700px] mx-auto mb-12"
        >
          Find local jobs that match your skills and availability. With Workly, you have the freedom to choose your schedule and build your income — your way.
        </p>

        {/* ✅ Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 text-center justify-items-center">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* ✅ Icon Placeholder Box */}
              <div className="w-24 h-24 mb-4 rounded-sm flex items-center justify-center bg-[var(--color-btn-teritary-200)]"></div>

              {/* ✅ Title */}
              <h3
                className="text-[14px] font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                {it.title}
              </h3>

              {/* ✅ Description */}
              <p
                className="text-[12px] font-normal leading-relaxed max-w-[300px] mx-auto"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
