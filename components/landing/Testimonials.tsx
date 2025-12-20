"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  message: string;
}
const testimonials: Testimonial[] = [
  { name: "Rahul Mehta", message: "Very comfortable and almost invisible aligners. Great results and a smooth experience with BraceFree." },
  { name: "Neha Sharma", message: "Clear treatment plan and excellent outcome. BraceFree made my smile journey easy and stress-free." },
  { name: "Amit Verma", message: "Perfect for busy schedules. Discreet, comfortable, and effective. Highly recommend BraceFree." },
  { name: "Pooja Khanna", message: "My front teeth gap closed beautifully. Simple process and amazing results." },
  { name: "Sandeep Arora", message: "No wires, no pain, no irritation. Exactly what I was looking for in aligner treatment." },
  { name: "Ritika Malhotra", message: "Comfortable aligners and visible improvement in weeks. My confidence has increased." },
  { name: "Vikas Jain", message: "People didn’t even notice I was wearing aligners. Very happy with the final smile." },
  { name: "Ananya Gupta", message: "The digital smile plan gave me full confidence. Professional and reliable treatment." },
  { name: "Karan Singh", message: "Excellent service from consultation to finish. BraceFree delivers what it promises." },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [enableTransition, setEnableTransition] = useState(true);

  const pausedRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonials.length;
  const CARD_WIDTH = 100 / cardsPerView;
  const TRANSITION_MS = 700;

  /* ---------- RESPONSIVE ---------- */
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(4);

      setIndex(0); // reset to avoid misalignment
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  /* ---------- SEAMLESS LOOP ---------- */
  useEffect(() => {
    if (index === total) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, TRANSITION_MS);
    }
  }, [index, total]);

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition]);

  const next = () => setIndex((prev) => prev + 1);

  const prev = () => {
    if (index === 0) {
      setEnableTransition(false);
      setIndex(total - 1);
      requestAnimationFrame(() => setEnableTransition(true));
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section
      id="testimonials"
      className="w-full py-20 bg-[#f0f4f8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
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
            What Our Patients Say
          </h1>

          <p className="mt-3 text-gray-600">
            Real experiences from people who transformed their smiles with BraceFree
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div
            className={`flex ${enableTransition ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${index * CARD_WIDTH}%)` }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                style={{ width: `${CARD_WIDTH}%` }}
                className="px-3 flex-shrink-0"
              >
                <div className="bg-white rounded-xl shadow-sm p-6 h-[260px] flex flex-col justify-between">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    “{t.message}”
                  </p>

                  <span className="mt-4 font-semibold text-gray-900">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="bg-white shadow-md p-3 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="bg-white shadow-md p-3 rounded-full hover:bg-gray-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
