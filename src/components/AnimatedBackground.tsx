export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden perspective-1000">
      <div className="absolute inset-0 bg-[#05060c]" />
      <div className="absolute inset-0 opacity-75 bg-[radial-gradient(circle_at_20%_15%,_rgba(255,255,255,0.08),_transparent_18%),radial-gradient(circle_at_75%_12%,_rgba(255,255,255,0.05),_transparent_16%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_40%,rgba(0,0,0,0.95))]" />
      <div
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
        }}
      />

      <div className="absolute top-[50%] left-[10%] h-[0.5px] w-[22rem] bg-white/12 blur-[0.5px]" />
      <div className="absolute bottom-[24%] right-[18%] h-[0.5px] w-[18rem] bg-white/12 blur-[0.5px]" />
    </div>
  );
}
