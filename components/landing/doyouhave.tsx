import Image from "next/image";

export default function Doyouhave() {
  return (
    <section
      id="doyouhave"
      className="w-full mt-4 px-4 sm:px-6 lg:px-10"
    >
      {/* Heading */}
      <h1
        className="
          text-center
          text-[26px]
          sm:text-[36px]
          md:text-[44px]
          lg:text-[52px]
          font-bold
          mb-3 sm:mb-5
          tracking-tight
        "
      >
        Go Bracefree If You Have Any Of These
      </h1>

      {/* Image Wrapper */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-3xl
          aspect-[4/3]        /* ⬅ smaller height on mobile */
          sm:aspect-[16/9]
          lg:aspect-[16/6]
          mb-4
        "
      >
        <Image
          src="/doyouhave.png"
          alt="Do You Have Conditions Illustration"
          fill
          priority
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 95vw,
                 1600px"
          className="
            object-contain
            object-top       /* ⬅ KEY FIX: removes top/bottom empty space */
          "
        />
      </div>
    </section>
  );
}
