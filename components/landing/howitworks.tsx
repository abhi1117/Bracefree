import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="howitworks" className="w-full mt-6 bg-white">
      {/* Heading */}
      <h1
        className="
          text-center
          text-[26px]
          sm:text-[36px]
          md:text-[44px]
          font-bold
          mb-4 sm:mb-6
          tracking-tight
          px-4
          text-gray-900
          dark:text-gray-900
        "
      >
        How It Works
      </h1>

      {/* FULL WIDTH — NO CROP — ROUNDED */}
      <div className="w-full px-4">
        <div className="overflow-hidden rounded-3xl bg-white">
          <Image
            src="/howitworks2.jpg"
            alt="How It Works"
            width={2400}
            height={900}
            priority
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
