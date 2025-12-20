"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero3.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          unoptimized
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
      </div>

      {/* Frosted Card */}
      <div
        className="
          absolute z-20
          left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          md:left-20 md:translate-x-0
          w-[92vw] max-w-[340px]
          sm:max-w-[420px]
          md:max-w-[520px]
          bg-white/90
          backdrop-blur-md
          rounded-[16px] md:rounded-[20px]
          p-4 sm:p-6 md:p-10
          shadow-[0_8px_35px_rgba(0,0,0,0.15)]
        "
      >
        {/* Heading */}
        <h1 className="text-[32px] sm:text-[36px] md:text-[42px] font-bold text-black leading-[1.15] mb-5">
          Welcome to<br />
          Smileverse Dentech
          <span className="align-super text-lg sm:text-xl ml-1">™</span>
        </h1>

        {/* Description */}
        <p className="text-[14px] sm:text-[15px] text-black leading-[1.65] mb-4">
          We're committed to transforming India's dental care landscape through technology, expertise, and precis.
        </p>

        <p className="text-[14px] sm:text-[15px] text-black leading-[1.65] mb-4">
          As the demand for expert orthodontic care rises, we created{" "}
          <span className="font-semibold">BraceFree</span> flagship clear aligner system built for safety, accuracy, and affordability.
        </p>

        <p className="text-[14px] sm:text-[15px] text-black leading-[1.65] mb-8">
          BraceFree marks the first chapter in building a complete, cost-effective ecosystem of advanced dental Innovation.
        </p>

        {/* CTA Button */}
        <button
          className="
            bg-[#4A9EFF]
            hover:bg-[#3A8EEF]
            transition
            text-white
            font-semibold
            px-6 sm:px-8 py-3
            rounded-lg
            shadow-md
            text-[14px] sm:text-[15px]
            w-full sm:w-auto
          "
        >
          Explore BraceFree
        </button>
      </div>

      {/* Bottom-left Circle */}
      <div
        className="
          absolute bottom-6 left-6
          w-10 h-10 sm:w-11 sm:h-11
          rounded-full
          bg-black/80
          text-white
          flex items-center justify-center
          text-[16px] sm:text-[18px]
          font-semibold
          z-20
        "
      >
        N
      </div>
    </section>
  );
}
