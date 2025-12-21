import Image from "next/image";

export default function Doyouhave() {
  return (
    <section id="doyouhave" className="w-full bg-white">
      {/* Heading */}
      <h1
        className="
          text-center
          text-[26px]
          sm:text-[36px]
          md:text-[44px]
          lg:text-[52px]
          font-bold
          mb-4
          tracking-tight
          px-4
          text-gray-900
          dark:text-gray-900
        "
      >
        Go Bracefree If You Have Any Of These
      </h1>

      {/* FULL WIDTH — NO CROP — ROUNDED */}
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-white">
          <Image
            src="/doyouhave.png"
            alt="Do You Have Conditions Illustration"
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
