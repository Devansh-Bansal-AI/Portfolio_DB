import { motion } from "framer-motion";
import { projectsData } from "../../data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Variants } from "framer-motion";


const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


const Projects = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Selected <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            A curated set of work exploring AI, systems, and modern web
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, i) => (
            <motion.article
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0d0d0d] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_30px_120px_-40px_rgba(108,99,255,0.35)]"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                {/* Floating link */}
                <a
                  href={project.link}
                  target="_blank"
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-4 border-t border-white/5">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm text-white hover:text-primary transition"
                  >
                    <ExternalLink size={15} /> Live
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition ml-auto"
                  >
                    <Github size={15} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
