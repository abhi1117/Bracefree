import Image from "next/image";

export default function HowItWorks() {
  return (
    <section id="howitworks" className="w-full mt-8">
      <h1 className="text-center text-5xl md:text-5xl font-bold mb-10 tracking-tight">How It Works</h1>
      <div className="relative w-full h-[180px] sm:h-[250px] md:h-[360px] lg:h-[850px]">
        <Image
          src="/howitworks2.jpg"
          alt="How It Works"
          fill
          priority
          className="object-cover rounded-4xl"
        />
      </div>
    </section>
  );
}
