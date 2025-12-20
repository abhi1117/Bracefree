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
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 mx-auto max-w-[1600px] min-h-[100svh] px-4 sm:px-6 lg:px-10">
        {/* Frosted Card */}
        <div
          className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            md:left-20 md:translate-x-0
            w-full
            max-w-[300px]
            xs:max-w-[320px]
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
          <h1 className="
            text-[26px]
            xs:text-[28px]
            sm:text-[36px]
            md:text-[42px]
            font-bold
            text-black
            leading-[1.15]
            mb-5
          ">
            Welcome to<br />
            Smileverse Dentech
            <span className="align-super text-[14px] sm:text-[18px] ml-1">™</span>
          </h1>

          {/* Description */}
          <p className="
            text-[12px]
            xs:text-[13px]
            sm:text-[15px]
            text-black
            leading-[1.65]
            mb-4
          ">
            We're committed to transforming India's dental care landscape through technology, expertise, and precis.
          </p>

          <p className="
            text-[12px]
            xs:text-[13px]
            sm:text-[15px]
            text-black
            leading-[1.65]
            mb-4
          ">
            As the demand for expert orthodontic care rises, we created{" "}
            <span className="font-semibold">BraceFree</span> flagship clear aligner system built for safety, accuracy, and affordability.
          </p>

          <p className="
            text-[12px]
            xs:text-[13px]
            sm:text-[15px]
            text-black
            leading-[1.65]
            mb-7
          ">
            BraceFree marks the first chapter in building a complete, cost-effective ecosystem of advanced dental Innovation.
          </p>

          {/* CTA */}
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
              text-[13px] sm:text-[15px]
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
