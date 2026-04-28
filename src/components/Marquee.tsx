"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Marquee() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      setOffset((prev) => (prev <= -100 ? 0 : prev - 0.05));
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const text = "SOFTWARE ENGINEER • CREATIVE DEVELOPER • DIGITAL CRAFTSMAN • ";
  
  return (
    <div className="w-full overflow-hidden bg-black py-4 md:py-6 border-y border-white/10 flex whitespace-nowrap">
      <motion.div 
        className="flex whitespace-nowrap will-change-transform"
        style={{ x: `${offset}%` }}
      >
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white px-4">
          {text}
        </h2>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white px-4">
          {text}
        </h2>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white px-4">
          {text}
        </h2>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white px-4">
          {text}
        </h2>
      </motion.div>
    </div>
  );
}
