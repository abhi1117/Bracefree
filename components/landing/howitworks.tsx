import Image from "next/image";

export default function HowItWorks() {
  return (
    <section
      id="howitworks"
      className="w-full mt-6 px-4 sm:px-6 lg:px-10"
    >
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
        "
      >
        How It Works
      </h1>

      {/* Image Wrapper */}
      <div
        className="
          relative
          w-full
          mx-auto
          max-w-6xl
          overflow-hidden
          rounded-2xl
          aspect-[4/3]        /* ⬅ Mobile: bigger image */
          sm:aspect-[16/9]
          lg:aspect-[16/7]
        "
      >
        <Image
          src="/howitworks2.jpg"
          alt="How It Works"
          fill
          priority
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 90vw,
                 1200px"
          className="
            object-contain
            object-top        /* ⬅ avoids vertical empty space */
          "
        />
      </div>
    </section>
  );
}
