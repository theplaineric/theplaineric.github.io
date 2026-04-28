"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Library Scraper",
    category: "Python Data",
    description: "Reformatting and extracting data from UC Berkeley library pages for better accessibility.",
    className: "md:col-span-3", // Full width
    color: "bg-[#111111]",
  },
  {
    title: "AXE Family",
    category: "Javascript",
    description: "A visualization for the Alpha Chi Sigma (Sigma Chapter) family tree with interactive nodes.",
    className: "md:col-span-1 md:row-span-2", // Tall
    color: "bg-[#1a1a1a]",
  },
  {
    title: "Music Rec",
    category: "AI Analysis",
    description: "Deep learning based music analysis and recognition system implemented in TensorFlow.",
    className: "md:col-span-2", // Wide
    color: "bg-[#222222]",
  },
  {
    title: "GOTURN TF",
    category: "Computer Vision",
    description: "High-performance object tracking implementation using TensorFlow for real-time applications.",
    className: "md:col-span-2", // Wide
    color: "bg-[#2a2a2a]",
  },
];

export function ProjectGrid() {
  return (
    <section id="work" className="py-32 px-6 max-w-[100vw] mx-auto overflow-hidden">
      <div className="mb-24 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h2 className="text-[4rem] md:text-[8rem] font-medium tracking-tighter text-white leading-none uppercase mix-blend-difference">
          Selected <br className="hidden md:block"/> Works
        </h2>
        <p className="text-xl font-bold uppercase tracking-widest text-neutral-500 pb-4">(04)</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-[95vw] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={project.className}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
