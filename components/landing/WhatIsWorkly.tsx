"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatIsWorkly() {
  return (
    <section
      id="what-is-workly"
      className="relative w-full overflow-hidden bg-[var(--color-bg-secondary-50)]"
    >
      <div className="relative flex flex-col md:flex-row items-stretch">
        {/* ✅ Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-1/2 h-72 md:h-[380px] overflow-hidden"
        >
          <Image
            src="/workly-cleaning.png"
            alt="What is Workly"
            fill
            priority
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
          />
        </motion.div>

        {/* ✅ Right Side - Text Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center bg-[#FFF4EA] px-6 md:px-12 py-8 md:py-0">
          <div
            className="max-w-lg text-left relative"
            style={{
              transform: "translateY(-28px)", // 👈 Moves text slightly upward
            }}
          >
            {/* ✅ Heading */}
            <h2 className="text-[28px] md:text-[32px] font-bold leading-snug text-[var(--color-text-primary)] mb-5">
              What is Workly?
            </h2>

            {/* ✅ Paragraph */}
            <p className="text-[16px] md:text-[15px] leading-relaxed font-normal text-[var(--color-text-secondary)]">
              Workly helps people find reliable local experts for anything from
              home repairs to everyday tasks. As a service provider, you can
              earn on your own schedule, doing the work you’re skilled at —
              while helping someone in your community get things done faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
