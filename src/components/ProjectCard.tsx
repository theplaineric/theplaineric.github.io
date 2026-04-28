"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  className?: string;
  color?: string;
}

export function ProjectCard({ title, category, description, className, color = "bg-neutral-900" }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group hover-trigger relative overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-black flex flex-col justify-between cursor-pointer w-full h-[500px] md:h-[700px] border border-white/10 ${className}`}
    >
      {/* Background Visual Container */}
      <div className={`absolute inset-0 ${color} transition-transform duration-1000 group-hover:scale-105`} />
      
      {/* Content overlay */}
      <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
        <div className="flex justify-between items-start w-full transition-transform duration-700 ease-out">
          <span className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white mix-blend-difference">
            {category}
          </span>
          <motion.div 
            initial={{ rotate: -45, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-bold text-2xl mix-blend-difference transition-transform duration-500 group-hover:rotate-0"
          >
            →
          </motion.div>
        </div>
        
        <div className="space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
          <h3 className="text-4xl md:text-7xl font-medium tracking-tighter text-white uppercase mix-blend-difference">{title}</h3>
          <p className="text-white/60 max-w-xl font-medium text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
