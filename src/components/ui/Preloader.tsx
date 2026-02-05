import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setExit(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (exit) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-white"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold tracking-widest text-primary"
        >
          DEVANSH BANSAL
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-2 text-sm text-gray-400"
        >
          AI & WEB DEVELOPER
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;