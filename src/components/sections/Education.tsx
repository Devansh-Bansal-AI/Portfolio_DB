import { motion } from "framer-motion";
import { educationData, certificationData } from "../../data";
import { Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and professional milestones.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- Left Column: Education --- */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-6">
              <span className="w-2 h-8 bg-primary rounded-full"/> Academic History
            </h3>
            
            {educationData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l border-white/10"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_#6C63FF]" />
                
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={24} />
                    </div>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-primary border border-primary/20">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm mb-3 font-medium">{item.institution}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- Right Column: Certifications --- */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-6">
               <span className="w-2 h-8 bg-pink-500 rounded-full"/> Licenses & Certifications
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {certificationData.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 p-5 rounded-xl flex items-center gap-4 hover:bg-white/10 transition-colors cursor-default"
                >
                  <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-500 shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base">{cert.title}</h4>
                    <p className="text-gray-400 text-sm">{cert.issuer} • <span className="text-gray-500">{cert.date}</span></p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;