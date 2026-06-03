"use client";

import { motion } from "framer-motion";

export function Currently() {
  return (
    <section id="currently" className="py-24 px-6 max-w-4xl mx-auto border-t border-accent/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-serif text-foreground tracking-tight">Professional</h2>
          <ul className="space-y-4 text-foreground/80 font-sans">
            <li>
              <strong>Engineering at Meta:</strong> Building tools and infrastructure that scale. Deeply focused on product quality, leveraging LLMs for engineering workflows, and system architecture.
            </li>
            <li>
              <strong>Web Development:</strong> Crafting high-performance digital experiences with React, Next.js, and TypeScript. I care about brutalist, highly-functional design and accessible user interfaces.
            </li>
            <li>
              <strong>Data Automation:</strong> Building scraping pipelines and machine learning integrations (TensorFlow) to solve real-world problems.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-serif text-foreground tracking-tight">Upcoming</h2>
          <ul className="space-y-4 text-foreground/80 font-sans">
            <li>
              <strong>Japan (May 2026):</strong> Kumano Kodo Nakahechi pilgrimage.
            </li>
            <li>
              <strong>Freediving:</strong> Getting into NorCal cold water diving. Gear kit 33% built, Monterey intro class planned.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
