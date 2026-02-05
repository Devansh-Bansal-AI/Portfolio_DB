import { motion } from "framer-motion";
import { 
  Bot, Code, Wrench, BookOpen, ArrowRight, 
  Cpu, Globe, Database, Layers, Sparkles 
} from "lucide-react";
import MagneticButton from "../ui/MagneticButton";

const About = () => {
  // Data for the "Get to know me" list
  const points = [
    { icon: Bot, text: "Passionate about AI & Data Science" },
    { icon: Code, text: "Enthusiastic developer exploring emerging tech" },
    { icon: Wrench, text: "Skilled in Python, C, and problem-solving" },
    { icon: BookOpen, text: "Lifelong learner, sharing what I build" },
  ];

  // Icons for the rotating tech wheel
  const orbitIcons = [Cpu, Globe, Database, Layers, Code];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-dark/50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ---------------- LEFT SIDE: TEXT CONTENT ---------------- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Get to know me
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm a passionate <span className="text-primary font-medium">Computer Science and Engineering student</span>, 
            dedicated to creating elegant web solutions and exploring the realms of 
            <span className="text-primary font-medium"> AI and Data Science</span>.
          </p>

          <div className="space-y-4 mb-10">
            {points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <point.icon size={20} />
                </div>
                <span className="text-gray-200 text-base font-medium">{point.text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <MagneticButton>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] transition-shadow group"
              >
                Let's Talk
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* ---------------- RIGHT SIDE: ANIMATED TECH WHEEL + BENTO CARDS ---------------- */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] w-full flex items-center justify-center select-none"
        >
            {/* 1. Background Glow */}
            <div className="absolute w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px]" />

            {/* 2. The Rotating Tech Orbit */}
            <div className="relative w-80 h-80 border border-white/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                {/* Dashed Orbit Line */}
                <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
                
                {/* Orbiting Icons */}
                {orbitIcons.map((Icon, index) => {
                    const angle = (index * 360) / orbitIcons.length;
                    return (
                        <div
                            key={index}
                            className="absolute"
                            style={{
                                transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`, // Math to place on circle
                            }}
                        >
                            <div className="w-12 h-12 bg-[#0a0a0a] border border-white/10 rounded-xl flex items-center justify-center text-primary shadow-lg animate-[spin_40s_linear_infinite_reverse]">
                                <Icon size={22} />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 3. Center Core (User Initials or Main Icon) */}
            <div className="absolute w-24 h-24 bg-gradient-to-br from-primary to-violet-900 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(108,99,255,0.45)] z-20">
                <span className="text-3xl font-bold text-white">DB</span>
            </div>

            {/* 4. Floating Bento Card: Achievement 1 */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                whileHover={{ x: 6 }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 md:-right-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 w-48 shadow-xl z-30"
            >
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-400">
                    <Code size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Projects</h4>
                    <p className="text-xs text-gray-400">In Progress</p>
                </div>
            </motion.div>

            {/* 5. Floating Bento Card: Achievement 2 */}
            <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 md:-left-8 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3 w-52 shadow-xl z-30"
            >
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center text-yellow-400">
                    <Sparkles size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Hackathons</h4>
                    <p className="text-xs text-gray-400">Active Participant</p>
                </div>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;