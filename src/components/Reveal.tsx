import React from "react";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

export function Reveal({ children, className = "", threshold }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold });

  return (
    <div
      ref={ref as any}
      className={`${className} transition-opacity duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
}

export default Reveal;
