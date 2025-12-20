"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative w-full overflow-hidden pt-8 pb-2"
    >
      {/* ===== Ultra-soft studio background ===== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              1600px 900px at 5% 10%,
              #ffffff 0%,
              #f2f4f7 45%,
              #eef0f3 70%
            ),
            radial-gradient(
              1400px 800px at 95% 50%,
              #eef1f5 0%,
              #eef0f3 65%
            ),
            linear-gradient(
              180deg,
              #eef0f3 0%,
              #edf0f4 100%
            )
          `,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              relative w-full
              h-[480px]
              md:h-[560px]
              lg:h-[620px]
            "
          >
            <Image
              src="/About4.png"
              alt="BraceFree Aligners Case"
              fill
              priority
              className="object-contain object-left scale-[1.05]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-gray-700"
          >
            <h2 className="mb-8 text-4xl font-semibold text-gray-900 md:text-[48px]">
              Our Vision
            </h2>

            {/* Accent + subtitle */}
            <div className="mb-8 flex items-start gap-4">
              <span className="mt-1 h-14 w-[3px] rounded-full bg-blue-600" />
              <p className="text-[17px] font-medium leading-snug text-gray-900">
                Redefining the future of dentistry with precision, innovation,
                and accessibility.
              </p>
            </div>

            <p className="mb-6 text-[16px] leading-relaxed">
              At Smileverse Dentech, we envision an India where every person
              regardless of location or background — can access advanced,
              high-quality dental care with ease. Our mission is to eliminate
              the traditional barriers of cost, complexity, and long wait times
              through a seamless blend of orthodontic expertise and cutting-edge
              digital technology. We strive to deliver treatment experiences
              that are accurate, affordable, comfortable, and truly
              patient-centric.
            </p>

            <p className="text-[16px] leading-relaxed">
              BraceFree marks the beginning of this transformation, a commitment
              to modernize Orthodontics by offering solutions that are smarter,
              faster, and built around real human needs. With continuous
              innovation, expert-led planning, and intelligent,
              technology-backed workflows, we are shaping a future where dental
              care is not just a service.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
