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
    <section id="faq" className="relative w-full py-16 bg-[#f9fbff] overflow-hidden position:center">

      {/* subtle corner glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 right-10 w-[250px] h-[250px] bg-blue-100/50 rounded-full blur-3xl "
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Left aligned title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 flex justify-center"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQs */}
        <div className="mt-12 space-y-4 ">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all "
              >
                {/* Question button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left  cursor-pointer"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={22} className="text-gray-500" />
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
                      className="px-5 pb-4 text-gray-700 text-[15px] leading-relaxed border-t border-gray-100"
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
