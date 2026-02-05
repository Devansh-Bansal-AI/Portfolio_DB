import { useState, useEffect } from "react";
import { navLinks } from "../../data";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-dark/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          Devansh Bansal<span className="text-primary"></span>
        </a>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setActive(link.name)}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  active === link.name ? "text-primary" : "text-gray-300"
                )}
              >
                {link.name}
                {active === link.name && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-primary mt-1"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        
        <button className="md:hidden text-white">Menu</button> 
      </div>
    </nav>
  );
};

export default Navbar;