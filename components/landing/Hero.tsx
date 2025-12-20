"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

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

        {/* Softer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
      </div>

      {/* Frosted White Card — Updated to Match Screenshot */}
      <div
        className="
          absolute z-20
          top-1/2 left-1/2 md:left-20
          -translate-y-1/2 -translate-x-1/2 md:translate-x-0
          w-[95vw] max-w-[340px] md:max-w-[520px]
          bg-white/90
          backdrop-blur-md
          rounded-[16px] md:rounded-[20px]
          p-3 md:p-10
          shadow-[0_8px_35px_rgba(0,0,0,0.15)]
          mx-auto
        "
      >
        {/* Heading */}
        <h1 className="text-[42px] font-bold text-black leading-[1.15] mb-5">
          Welcome to<br />
          Smileverse Dentech
          <span className="align-super text-xl ml-1">™</span>
        </h1>

        {/* Description */}
        <p className="text-[15px] text-black leading-[1.65] mb-4">
          We're committed to transforming India's dental care landscape through technology, expertise, and precis.
        </p>

        <p className="text-[15px] text-black leading-[1.65] mb-4">
          As the demand for expert orthodontic care rises, we created{" "}
          <span className="font-semibold">BraceFree</span> flagship clear aligner system built for safety, accuracy, and affordability.
        </p>

        <p className="text-[15px] text-black leading-[1.65] mb-8">
          BraceFree marks the first chapter in building a complete, cost-effective ecosystem of advanced dental Innovation.
        </p>

        {/* CTA Button */}
        <button className="
          bg-[#4A9EFF] 
          hover:bg-[#3A8EEF] 
          transition 
          text-white 
          font-semibold 
          px-8 py-3 
          rounded-lg
          shadow-md 
          text-[15px]
        ">
          Explore BraceFree
        </button>
      </div>

      {/* Bottom-left Circle N */}
      <div className="
        absolute bottom-10 left-10 
        w-11 h-11 
        rounded-full 
        bg-black/80 
        text-white 
        flex items-center justify-center 
        text-[18px] 
        font-semibold 
        z-20
      ">
        N
      </div>
    </section>
  );
}
