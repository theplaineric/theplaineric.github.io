"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[90vh] px-6 max-w-4xl mx-auto flex flex-col justify-center pt-32 pb-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="space-y-6"
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-accent/80">
          SF Bay Area | Eternally stuck reading matcha reviews
        </span>
        
        <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] tracking-tight">
          Software engineer at Meta by day. Mountain chaser and matcha obsessive by nature.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="mt-16 md:mt-24 space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-sans max-w-3xl"
      >
        <p>
          I&apos;m Eric Zhu, 27. Grew up in Castro Valley, studied EECS at UC Berkeley, now based in Fremont, CA.
        </p>
        <p>
          On paper I&apos;m a software engineer. In practice I&apos;m the guy who will book your flight, plan the entire trip, drive through volcanic gravel roads at midnight, and then write a matcha review about the latte we had at the airport.
        </p>
        <p>
          I care about depth over breadth — in friendships, in travel, in the things I make. My Instagram has six posts. Each one earned its spot.
        </p>
      </motion.div>
    </section>
  );
}
