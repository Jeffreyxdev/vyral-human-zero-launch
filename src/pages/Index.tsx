import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Sponsors from "@/components/Sponsors";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Manifesto />
      <About />
      <Services />
      <Contact />
      <Sponsors />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
