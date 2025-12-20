  "use client";

  import { useEffect, useRef, useState } from "react";
  import Image from "next/image";
  import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

  interface Member {
    id: number;
    photo: string;
    name: string;
    role: string;
    linkedin?: string;
  }

  const data: Member[] = [
    { id: 1, photo: "/team/sachin.jpg", name: "Dr. Sachin Ahuja", role: "BDS, MDS (Orthodontics)" },
    { id: 2, photo: "/team/ankit2.jpg", name: "Dr. Ankit Goyal", role: "BDS, MDS (Orthodontics)" },
    {
      id: 3,
      photo: "/team/himanshu.jpg",
      name: "Dr. Himanshu Kalia",
      role: "Scientific Consultant – BDS, MDS, MSc Oral Sciences",
      linkedin: "https://www.linkedin.com/in/hkalia1/",
    },
    { id: 4, photo: "/team/meenal.jpg", name: "Dr. Meenal Ahuja", role: "Clinical Expert – Endodontics" },
    { id: 5, photo: "/team/arzoo2.jpg", name: "Dr. Arzoo Goyal", role: "Oral & Maxillofacial Surgery" },
    { id: 6, photo: "/team/vishal.jpg", name: "Mr. Vishal Kalia", role: "Business Development Consultant" },
    { id: 7, photo: "/team/savita.jpg", name: "Ms. Savita Sharma", role: "Outreach & Strategic Development" },
    { id: 8, photo: "/team/francesco.jpg", name: "Mr. Francesco Pra Mio", role: "Investor and Advisor" },
  ];

  export default function Team() {
    const [index, setIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(1);

    const pausedRef = useRef(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const total = data.length;
    const TRANSITION_MS = 700;

    /* ---------- RESPONSIVE CARD COUNT ---------- */
    useEffect(() => {
      const update = () => {
        if (window.innerWidth >= 1024) setCardsPerView(5);
        else if (window.innerWidth >= 640) setCardsPerView(2);
        else setCardsPerView(1);
      };

      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }, []);

    const CARD_WIDTH = 100 / cardsPerView;

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

    /* ---------- LOOP RESET ---------- */
    useEffect(() => {
      if (index >= total) {
        setTimeout(() => setIndex(0), TRANSITION_MS);
      }
    }, [index, total]);

    const next = () => setIndex((prev) => prev + 1);
    const prev = () => setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

    return (
      <section id="team" className="w-full py-16 bg-[#f0f4f8] overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-10">
<h1
  className="
    text-center
    text-[26px]
    sm:text-[36px]
    md:text-[44px]
    font-bold
    mb-4 sm:mb-6
    tracking-tight
    text-gray-900
    dark:text-black
  "
>
  Our Advisors
</h1>

        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden px-4 sm:px-8 lg:px-16"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * CARD_WIDTH}%)` }}
          >
            {[...data, ...data].map((m, i) => (
              <div
                key={`${m.id}-${i}`}
                className="px-3"
                style={{ minWidth: `${CARD_WIDTH}%` }}
              >
                <div className="bg-white border border-gray-200 rounded-xl shadow-md h-full">
                  <div className="relative h-[150px] w-full rounded-t-xl overflow-hidden bg-gray-50">
                    <Image src={m.photo} alt={m.name} fill className="object-contain" />
                  </div>

                  <div className="p-3 text-center">
                    <div className="flex justify-center items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{m.name}</h3>
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white p-1 rounded-full"
                        >
                          <Linkedin size={12} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs italic text-gray-500">{m.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="bg-white shadow-md p-3 rounded-full hover:bg-gray-200">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="bg-white shadow-md p-3 rounded-full hover:bg-gray-200">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    );
  }
