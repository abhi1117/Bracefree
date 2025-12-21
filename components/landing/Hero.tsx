"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
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
        {/* Slightly stronger gradient for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 sm:from-black/10 sm:to-black/40" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 mx-auto max-w-[1600px] min-h-[100svh] px-4 sm:px-6 lg:px-10 flex items-center">
        {/* Frosted Card */}
        <div
          className="
            relative
            w-full
            max-w-[340px]
            sm:max-w-[420px]
            md:max-w-[520px]
            bg-white/90
            backdrop-blur-md
            rounded-[16px] md:rounded-[20px]
            p-5 sm:p-6 md:p-10
            shadow-[0_8px_35px_rgba(0,0,0,0.15)]

            /* Mobile positioning */
            mx-auto
            md:mx-0
            md:ml-16
          "
        >
          {/* Heading */}
          <h1
            className="
              text-[24px]
              xs:text-[26px]
              sm:text-[36px]
              md:text-[42px]
              font-bold
              text-black
              leading-tight
              mb-4 sm:mb-5
            "
          >
            Welcome to
            <br />
            Smileverse Dentech
            <span className="align-super text-[13px] sm:text-[18px] ml-1">™</span>
          </h1>

          {/* Description */}
          <p
            className="
              text-[13px]
              sm:text-[15px]
              text-black
              leading-relaxed
              mb-3 sm:mb-4
            "
          >
            We're committed to transforming India's dental care landscape through technology, expertise, and precision.
          </p>

          <p
            className="
              text-[13px]
              sm:text-[15px]
              text-black
              leading-relaxed
              mb-3 sm:mb-4
            "
          >
            As the demand for expert orthodontic care rises, we created{" "}
            <span className="font-semibold">BraceFree</span> — our flagship clear aligner system built for safety, accuracy, and affordability.
          </p>

          <p
            className="
              text-[13px]
              sm:text-[15px]
              text-black
              leading-relaxed
              mb-6 sm:mb-7
            "
          >
            BraceFree marks the first chapter in building a complete, cost-effective ecosystem of advanced dental innovation.
          </p>

          {/* CTA */}
          <button
            className="
              bg-[#4A9EFF]
              hover:bg-[#3A8EEF]
              transition
              text-white
              font-semibold
              px-6 sm:px-8
              py-3.5
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
            absolute bottom-4 left-4
            sm:bottom-6 sm:left-6
            w-9 h-9
            sm:w-11 sm:h-11
            rounded-full
            bg-black/80
            text-white
            flex items-center justify-center
            text-[14px] sm:text-[18px]
            font-semibold
          "
        >
          N
        </div>
      
      </div>
    </section>
  );
}
