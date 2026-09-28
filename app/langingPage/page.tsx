import Hero from "../components/Hero"
import ResearchAreas from "../components/ResearchAreas";
import About from "../components/About"
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Research Areas */}
      <ResearchAreas />

      {/* About Us */}
      <About />

      {/* Footer */}
      <Footer />
    </>
  );
}
