import { motion } from "framer-motion";
import { projectsData } from "../../data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A showcase of my technical explorations in AI, Computer Vision, and Full Stack Development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      // PERFORMANCE FIX: Removed backdrop-blur. Used solid bg-[#111]
      className="group relative flex flex-col h-full bg-[#111] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
    >
      <div className="relative h-60 overflow-hidden w-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-80" />
        
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 right-4 z-20 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
           <a 
             href={project.link} 
             target="_blank" 
             rel="noreferrer"
             className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg"
           >
             <ArrowUpRight size={20} />
           </a>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string, i: number) => (
            <span 
              key={i} 
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
           <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
             <ExternalLink size={16} /> Live Demo
           </a>
           <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors ml-auto">
             <Github size={16} /> Source Code
           </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;