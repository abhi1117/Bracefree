"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "What makes BraceFree different from other clear aligners in India?",
      a: "BraceFree is one of the few brands where all treatment planning is done only by orthodontists, ensuring safer and clinically accurate tooth movement."
    },
    {
      q: "Are BraceFree aligners comfortable to wear?",
      a: "Yes. BraceFree aligners are made from high-quality, biocompatible plastic with smooth edges. Most patients adapt within 1–2 days."
    },
    {
      q: "How long does BraceFree treatment take?",
      a: "Depending on the case, treatment ranges from 3 to 18 months. Your orthodontist will give a personalized timeline after evaluation."
    },
    {
      q: "Can I eat or drink with BraceFree aligners on?",
      a: "Only drink water. For food or other drinks, remove aligners to prevent staining or warping."
    },
    {
      q: "How does BraceFree compare to Invisalign?",
      a: "BraceFree uses material and planning protocols comparable to leading global brands — but at a more accessible price for Indian patients."
    },
    {
      q: "Who designs my treatment plan?",
      a: "Certified orthodontists exclusively design, review, and approve your complete treatment plan."
    },
    {
      q: "How do I begin BraceFree treatment?",
      a: "Contact us at hello@BraceFree.in or visit a partner clinic. We’ll guide you through assessment, scans, and aligner delivery."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative w-full py-12 sm:py-16 bg-[#f9fbff] overflow-hidden"
    >
      {/* subtle corner glow (desktop only) */}
      <motion.div
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="
          hidden sm:block
          absolute top-10 right-10
          w-[220px] h-[220px]
          bg-blue-100/50
          rounded-full
          blur-3xl
        "
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            text-[26px]
            sm:text-[34px]
            md:text-[42px]
            font-bold
            text-gray-900
          "
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQs */}
        <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  border border-gray-200
                  rounded-xl
                  shadow-sm
                  hover:shadow-md
                  transition-all
                "
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="
                    w-full
                    flex justify-between items-center
                    px-4 sm:px-5
                    py-4
                    text-left
                    cursor-pointer
                  "
                >
                  <span className="
                    text-[15px]
                    sm:text-[17px]
                    font-medium
                    text-gray-900
                  ">
                    {item.q}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-gray-500" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="
                        px-4 sm:px-5
                        pb-4
                        text-gray-700
                        text-[14px] sm:text-[15px]
                        leading-relaxed
                        border-t border-gray-100
                      "
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
