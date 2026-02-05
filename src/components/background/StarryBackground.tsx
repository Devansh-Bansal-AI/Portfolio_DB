import clsx from "clsx";

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#050505] -z-10 overflow-hidden pointer-events-none">
      
      {/* 1. The Tech Grid Layer (Slightly more visible) */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      
      {/* 2. Vignette to focus center */}
      <div className="absolute inset-0 bg-[#050505] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,black)]" />

      {/* 3. Shooting Stars (Meteors) - Increased quantity & brightness */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
         <Meteor style={{ top: 0, left: '5%', animationDelay: '0s' }} />
         <Meteor style={{ top: 0, left: '25%', animationDelay: '2s' }} />
         <Meteor style={{ top: 0, left: '45%', animationDelay: '4s' }} />
         <Meteor style={{ top: 0, left: '65%', animationDelay: '1.5s' }} />
         <Meteor style={{ top: 0, left: '85%', animationDelay: '3s' }} />
         <Meteor style={{ top: 0, left: '15%', animationDelay: '5s' }} />
         <Meteor style={{ top: 0, left: '55%', animationDelay: '0.5s' }} />
      </div>
    </div>
  );
};

// Sub-component for a single meteor
const Meteor = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <span
      style={style}
      className={clsx(
        // Changed bg-slate-500 to bg-white for maximum brightness
        "absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-white shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
        "animate-meteor"
      )}
    >
      {/* Meteor Tail - Changed to pure white gradient */}
      <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
    </span>
  );
};

export default StarryBackground;