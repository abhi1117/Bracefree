import Navbar from "../components/common/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/about";
import Ourvision from "../components/landing/ourvision";
import FAQSection from "../components/landing/faq";
import Team from "../components/landing/team";
import Footer from "../components/common/Footer";
import HowItWorks from "@/components/landing/howitworks";
import Doyouhave from "@/components/landing/doyouhave";
import Testimonials from "@/components/landing/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Ourvision />
      <HowItWorks />
      <Testimonials />
      <Doyouhave />
      <Team />
      <FAQSection />
      <Footer />
    </div>
  );
}
