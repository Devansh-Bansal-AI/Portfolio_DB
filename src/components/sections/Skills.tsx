import { motion } from "framer-motion";

const skills = [
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", // White version handled via filter in CSS if needed, but original is black.
    isDark: true, // Helper to invert color for dark mode if needed
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Technical Skills
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The technologies and tools I use to build seamless digital experiences.
        </p>
      </div>

      {/* Infinite Scroll Container 
        We duplicate the array to create the seamless loop effect
      */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 animate-infinite-scroll w-max hover:[animation-play-state:paused]">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center gap-4 w-40 h-40 bg-white/5 border border-white/5 rounded-2xl bg-white/[0.03] hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-full h-full object-contain drop-shadow-lg ${
                    skill.isDark ? "invert" : ""
                  }`}
                />
              </div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;