import Image from "next/image";

export default function Doyouhave() {
  return (
    <section id="doyouhave" className="w-full mt-8">
      <h1 className="text-center text-5xl md:text-5xl font-bold mb-10 tracking-tight">Go Bracefree If You Have Any Of These</h1>
      <div className="w-full max-h-[260px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[970px] overflow-hidden rounded-3xl">
        <Image
          src="/doyouhave.png"
          alt="How It Works"
          width={1920}
          height={400}
          priority
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
