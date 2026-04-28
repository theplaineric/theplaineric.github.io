"use client";

import { motion } from "framer-motion";

export function Building() {
  return (
    <section id="building" className="py-24 px-6 max-w-4xl mx-auto border-t border-accent/20">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground tracking-tight">What I&apos;m Building</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-serif text-foreground">ChasingMatcha & Kasen</h3>
          <p className="text-foreground/80 leading-relaxed font-sans">
            <strong>ChasingMatcha.com:</strong> What started as a personal log turned into a full site with 40+ matcha powder reviews and an automated event finder covering the Bay Area and NYC. Built with Next.js and Neon Postgres.
          </p>
          <p className="text-foreground/80 leading-relaxed font-sans">
            <strong>Kasen Matcha:</strong> A current experiment and passion project diving deeper into the sourcing and appreciation of ceremonial grades.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-serif text-foreground">Conversation Experiments</h3>
          <p className="text-foreground/80 leading-relaxed font-sans">
            Past projects exploring deeper human connection, now archived as open-source GitHub repositories: <em>Finding Sonder</em> (an audio-based storytelling platform) and <em>Unspiral</em>.
          </p>
          <p className="text-foreground/80 leading-relaxed font-sans">
            The premise: most people are interesting if you give them the right prompt and the right person to talk to. We paired people for intellectually honest, unscripted conversations that don&apos;t happen naturally on campus.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 md:col-span-2 pt-8 border-t border-accent/10"
        >
          <h3 className="text-xl font-serif text-foreground">Meta</h3>
          <p className="text-foreground/80 leading-relaxed font-sans max-w-2xl">
            Software engineer. Uses internal LLM tools for coding. Wears the Ray-Bans. Helped a friend recover a hacked Instagram account using internal tools because that&apos;s just what you do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
