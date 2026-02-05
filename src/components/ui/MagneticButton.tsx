import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "../../utils/cn";

const MagneticButton = ({ children, className }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    setPos({
      x: (e.clientX - (rect.left + rect.width / 2)) * 0.15,
      y: (e.clientY - (rect.top + rect.height / 2)) * 0.15,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
