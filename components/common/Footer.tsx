"use client";

export default function Footer() {
  return (
    <footer className="
      relative w-full
      bg-[#0f0f11] text-white
      pt-12 sm:pt-16
      pb-8 sm:pb-10
      px-4 sm:px-6 md:px-10
      overflow-hidden
    ">
      
      {/* Soft top gradient */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />

      <div className="
        relative z-20
        max-w-7xl mx-auto
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        gap-8 md:gap-10
      ">

        {/* Logo + Description */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
            <svg width="32" height="32" viewBox="0 0 24 24">
              <circle cx="6" cy="9" r="1.5" fill="#28A8E0" />
              <circle cx="12" cy="9" r="1.5" fill="#28A8E0" />
              <circle cx="18" cy="9" r="1.5" fill="#28A8E0" />
              <path
                d="M6 14c1.7 2 4 3 6 3s4.3-1 6-3"
                stroke="#28A8E0"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            <span className="text-xl sm:text-2xl font-semibold tracking-tight">
              BraceFree<span className="text-[10px] align-top ml-[2px]">™</span>
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed sm:pr-4">
            Advancing India's orthodontic care through technology, precision,
            and a future-ready ecosystem of dental innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#vision" className="hover:text-blue-400 transition">Our Vision</a></li>
            <li><a href="#faq" className="hover:text-blue-400 transition">FAQs</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">Social Media</h4>
          <div className="flex justify-center sm:justify-start gap-4">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V12H8v3h2v7h3v-7h2.5l.5-3H13v-2c0-.55.45-1 1-1z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
                <path d="M23.498 6.186a2.958 2.958 0 00-2.08-2.093C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.418.593A2.958 2.958 0 00.502 6.186 30.114 30.114 0 000 12a30.114 30.114 0 00.502 5.814 2.958 2.958 0 002.08 2.093C4.495 20.5 12 20.5 12 20.5s7.505 0 9.418-.593a2.958 2.958 0 002.08-2.093A30.114 30.114 0 0024 12a30.114 30.114 0 00-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bracefree.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F58529" />
                    <stop offset="30%" stopColor="#DD2A7B" />
                    <stop offset="60%" stopColor="#8134AF" />
                    <stop offset="100%" stopColor="#515BD4" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#igGradient)"
                  d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold mb-3">Reach Out To Us</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="mailto:contact@bracefree.in" className="hover:text-blue-400 transition">
                contact@bracefree.in
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bracefree.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Instagram: @bracefree.in
              </a>
            </li>
            <li>Phone: +91 9571 246257</li>
            <li>Pune, Maharashtra, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="
        relative z-20
        border-t border-white/10
        mt-10 sm:mt-12
        pt-4 sm:pt-6
        text-center
        text-gray-500
        text-xs sm:text-sm
      ">
        © {new Date().getFullYear()} BraceFree™. All rights reserved.
      </div>
    </footer>
  );
}
