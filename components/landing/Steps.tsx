"use client";
import { motion } from "framer-motion";

export default function GettingStartedServices() {
  const steps = [
    {
      title: "Create Your Account",
      desc: "Work how, when, and where you want. Offer services in 50+ categories and set a flexible schedule and work area.",
    },
    {
      title: "Set Up Your Profile",
      desc: "Choose the services you want to offer and select the locations where you’d like to work.",
    },
    {
      title: "Complete Verification",
      desc: "Verify your identity and submit any required documents to confirm your eligibility to take jobs.",
    },
    {
      title: "Pay Activation Fee",
      desc: "In some cities, a small one-time activation fee is required to help us maintain platform quality and support.",
    },
    {
      title: "Choose Your Service Area",
      desc: "Decide when you’d like to work and which areas you want to serve for complete flexibility.",
    },
    {
      title: "Start Receiving Jobs",
      desc: "Once approved, you’ll begin getting job requests. Choose the ones you like and start earning — your time, your terms.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-[1250px] px-8">
        {/* ✅ Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-[32px] md:text-[28px] font-bold text-[#171717] mb-4"
        >
          Getting Started Your Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-[14px] font-normal leading-relaxed text-[#404040] max-w-[700px] mx-auto mb-16"
        >
          Follow these simple steps to set up your Workly account and start
          providing services in your area.
        </motion.p>

        {/* ✅ Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 text-center">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              {/* Placeholder for image box */}
              <div className="w-24 h-24 bg-gray-200 mb-4 rounded-sm"></div>

              {/* Step Title */}
              <h3 className="text-[14px] font-bold text-[#171717] mb-2">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[12px] font-normal leading-relaxed text-[#404040] max-w-[300px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
