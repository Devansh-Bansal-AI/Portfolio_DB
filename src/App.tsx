import StarryBackground from "./components/background/StarryBackground";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Preloader from "./components/ui/Preloader";

function App() {
  return (
    // FIX: Removed 'bg-[#050505]' here. 
    // Now it is transparent, so the StarryBackground behind it is visible.
    <div className="min-h-screen text-white relative selection:bg-primary selection:text-white">
      <Preloader />
      
      {/* The Background Layer */}
      <StarryBackground />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;