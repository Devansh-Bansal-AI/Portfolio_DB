import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
// Ensure you have saved your image as src/assets/profile.jpg
import profileImg from "../../assets/profile.jpg"; 

const Hero = () => {
  const socials = [
    { 
      icon: Github, 
      link: "https://github.com/Devansh-Bansal-AI" 
    },
    { 
      icon: Linkedin, 
      link: "https://www.linkedin.com/in/devansh-bansal-772b9a237/" 
    },
    { 
      icon: Twitter, 
      link: "https://x.com/Devansh90586531" 
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="order-2 md:order-1 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-wide mb-4"
          >
            HELLO, I'M
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Devansh <br /> Bansal
          </motion.h1>
          
          {/* --- UPDATED DESCRIPTION HERE --- */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed"
          >
            Sophomore at <span className="text-white">VIT Bhopal</span>. I build intelligent <span className="text-white">AI Systems</span> and scalable <span className="text-white">Web Applications</span> driven by data and creativity.
          </motion.p>
          
          {/* Social Media Icons */}
          <div className="flex gap-4 mb-10">
            {socials.map((social, i) => (
              <MagneticButton key={i}>
                <a 
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 bg-white/5 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </MagneticButton>
            ))}
          </div>

          <div className="flex gap-4">
            <MagneticButton>
              <a href="#contact" className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-[0_0_15px_rgba(108,99,255,0.5)] hover:shadow-[0_0_25px_rgba(108,99,255,0.7)] transition-shadow">
                Contact Me
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#projects" className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                View Work
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Right Side: Circular Image with CSS GLOW (No Lag) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
           <motion.div
             animate={{ y: [0, -10, 0] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center"
           >
              {/* CSS Pulse Effect - Looks like the Laser but 0% CPU usage */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[60px] animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 shadow-[0_0_50px_rgba(108,99,255,0.4)]" />

              {/* Image */}
              <div className="relative z-10 w-[90%] h-[90%] rounded-full overflow-hidden border-2 border-white/20 bg-black">
                 <img 
                    src={profileImg} 
                    alt="Devansh Bansal" 
                    className="w-full h-full object-cover"
                 />
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;