import { motion } from "framer-motion";
import { useState } from "react";
import MagneticButton from "../ui/MagneticButton";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    // Simulate API call
    setStatus("Sending...");
    setTimeout(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-8">Have a project in mind? Let's build something amazing together.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <textarea 
              placeholder="Message" 
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
            />
            
            {status && <p className="text-primary text-sm text-center">{status}</p>}

            <div className="flex justify-center">
                <MagneticButton>
                    <button type="submit" className="px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] transition-shadow">
                        Send Message
                    </button>
                </MagneticButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;