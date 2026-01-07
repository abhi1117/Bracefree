import Navbar from "../components/common/Navbar";
import SEO from "../components/common/SEO";
import Hero from "../components/landing/Hero";
import About from "../components/landing/about";
import Ourvision from "../components/landing/ourvision";
import FAQSection from "../components/landing/faq";
// import Team from "../components/landing/team";
import Footer from "../components/common/Footer";
import HowItWorks from "@/components/landing/howitworks";
import Doyouhave from "@/components/landing/doyouhave";
import Testimonials from "@/components/landing/Testimonials";

export default function HomePage() {
  return (
    <>
      <SEO
        title="BraceFree - Invisible Aligners for a Confident Smile"
        description="Transform your smile with BraceFree. Invisible aligners, expert care, and a confident you. Book your consultation today!"
        url="https://yourdomain.com/"
        image="https://yourdomain.com/images/og-image.jpg"
      />
      <div>
        <Navbar />
        <Hero />
        <About />
        <Ourvision />
        <HowItWorks />
        <Testimonials />
        <Doyouhave />
        
        <FAQSection />
        <Footer />
      </div>
    </>
  );
}
