import LiquidEtherBackground from "./components/background/LiquidEtherBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Preloader from "./components/ui/Preloader";
import Cursor from "./components/ui/Cursor";
import Reveal from "./components/ui/Reveal";

function App() {
  return (
    <div className="min-h-screen relative text-white selection:bg-primary selection:text-white">
      {/* Preloader (top-most, blocks interaction) */}
      <Preloader />

      {/* Custom Cursor (above everything except preloader) */}
      <Cursor />

    {/* Liquid Ether Background */}
      <LiquidEtherBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />

        <Reveal delay={0.1}>
          <About />
        </Reveal>

        <Reveal delay={0.1}>
          <Education />
        </Reveal>

        <Reveal delay={0.1}>
          <Skills />
        </Reveal>

        <Reveal delay={0.1}>
          <Projects />
        </Reveal>

        <Reveal delay={0.1}>
          <Contact />
        </Reveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
