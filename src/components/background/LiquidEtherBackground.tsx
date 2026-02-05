import LiquidEther from "./LiquidEther";

const LiquidEtherBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <LiquidEther
        className="w-full h-full"
        resolution={0.45}        // IMPORTANT: keep < 0.5 for performance
        mouseForce={18}
        cursorSize={90}
        isViscous={true}
        viscous={22}
        iterationsViscous={24}
        iterationsPoisson={24}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={1.6}
        takeoverDuration={0.25}
        autoResumeDelay={1200}
        autoRampDuration={0.6}
      />
    </div>
  );
};

export default LiquidEtherBackground;
