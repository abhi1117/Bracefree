"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const features = [
    {
      title: "Orthodontist-Led Treatment",
      desc: "Every case is supervised by certified orthodontists to ensure clinically correct and safe tooth movements.",
    },
    {
      title: "Advanced 3D AI-Assisted Planning",
      desc: "Digital simulations and AI-supported planning deliver predictable, accurate alignment results.",
    },
    {
      title: "Premium Medical-Grade Material",
      desc: "Internationally approved biocompatible material ensures clarity, comfort, and durability.",
    },
    {
      title: "Better Results at Competitive Pricing",
      desc: "Comparable to international brands like Invisalign — but priced affordably for the Indian market.",
    },
    {
      title: "Safe, Comfortable & Lifestyle-Friendly",
      desc: "Invisible, removable, and easy to maintain — ideal for daily use.",
    },
    {
      title: "Seamless Support & Guidance",
      desc: "Personalized assistance at every step, from your first scan to your confident new smile.",
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            About BraceFree Clear Aligners
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            BraceFree introduces a new orthodontic standard — combining
            orthodontist-led planning with advanced digital technology for
            precise, comfortable, and predictable smile transformations.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-start">

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 relative z-10">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="
                  bg-white
                  rounded-2xl
                  border border-gray-100
                  p-6 sm:p-7 lg:p-8
                  shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  transition-all
                "
              >
                <h3 className="text-[16px] sm:text-[17px] md:text-lg font-medium text-gray-900 leading-snug tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* IMAGE (UNCHANGED — DESKTOP ONLY) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              absolute
              top-0
              left-[50%]
              -translate-y-[130px]
              -translate-x-[230px]
              hidden lg:block
              w-[1200px]
              h-[780px]
              z-30
            "
          >
            <Image
              src="/girl3.png"
              alt="BraceFree Girl"
              fill
              priority
              className="object-contain object-top"
            />
          </motion.div>

        </div>

        {/* FOOTER */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 max-w-4xl text-base sm:text-lg text-gray-700 leading-relaxed"
        >
          Whether you need mild corrections or a complete smile makeover,
          BraceFree delivers clinically guided care, premium comfort, and
          results you can trust — at a price designed for you.
        </motion.p>
      </div>
    </section>
  );
}
