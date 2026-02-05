import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import profileImg from "../../assets/profile.jpg";

const Hero = () => {
  const socials = [
    { icon: Github, link: "https://github.com/Devansh-Bansal-AI" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/devansh-bansal-772b9a237/" },
    { icon: Twitter, link: "https://x.com/Devansh90586531" },
  ];

  return (
    <section
      id="home"
      className="min-h-[90svh] pt-20 md:pt-24 flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="relative z-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-widest text-primary mb-6"
          >
            HELLO, I’M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight mb-6"
          >
            Devansh <br /> Bansal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-lg leading-relaxed mb-10"
          >
            Computer Science student at{" "}
            <span className="text-white">VIT Bhopal</span> crafting intelligent{" "}
            <span className="text-white">AI systems</span> and scalable{" "}
            <span className="text-white">web experiences</span>.
          </motion.p>

          <div className="flex items-center gap-4 mb-10">
            {socials.map((s, i) => (
              <MagneticButton key={i}>
                <a
                  href={s.link}
                  target="_blank"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition"
                >
                  <s.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              </MagneticButton>
            ))}
          </div>

          <div className="flex gap-4">
            <MagneticButton>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-primary text-white text-sm font-medium shadow-[0_0_30px_rgba(108,99,255,0.5)]"
              >
                Contact
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#projects"
                className="px-8 py-3 rounded-full border border-white/20 text-sm text-white hover:bg-white/5 transition"
              >
                Projects
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-[380px] h-[380px] md:w-[460px] md:h-[460px]">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px]" />
            <div className="absolute inset-0 rounded-full border border-primary/40" />

            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/20">
              <img
                src={profileImg}
                alt="Devansh Bansal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
