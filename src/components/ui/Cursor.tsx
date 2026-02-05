import { useEffect, useState } from "react";

const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) =>
      setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{
        transform: `translate3d(${pos.x - 6}px, ${pos.y - 6}px, 0)`,
      }}
    >
      <div className="w-3 h-3 rounded-full bg-primary opacity-70" />
    </div>
  );
};

export default Cursor;
