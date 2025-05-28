import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Process from "@/components/process";
import Pricing from "@/components/pricing";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
