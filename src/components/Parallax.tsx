import React, { useEffect, useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  speed?: number; // smaller = slower movement
  className?: string;
};

export function Parallax({ children, speed = 0.3, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId = 0;

    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const offset = rect.top;
      const translate = Math.round(offset * speed);
      el.style.transform = `translateY(${translate * -0.08}px)`;
    };

    const loop = () => {
      onScroll();
      rafId = requestAnimationFrame(loop);
    };

    loop();

    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

export default Parallax;
