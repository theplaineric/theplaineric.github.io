"use client";

import { motion } from "framer-motion";

const adventures = [
  {
    title: "New Zealand",
    date: "November 2025",
    description: "Road-tripped and camped across New Zealand. The Southern Hemisphere version of the Iceland energy — dramatic landscapes, freedom of the open road, camping under unfamiliar stars.",
    callout: ""
  },
  {
    title: "Mt. Rainier & Mt. Baker — Kautz Route",
    date: "July 2025",
    description: "10-Day Mountaineering Course. Six days of intensive training on the north side of Mt. Baker: glacier travel, crevasse rescue, ice climbing. Then drove south to Mt. Rainier for the final four days — summiting via the Kautz Glacier, one of Rainier's most technical routes.",
    callout: "Thankful @alpineascents had me on belay for ice climbing so I could make it to the top unscathed."
  },
  {
    title: "Norway — Lofoten & Senja",
    date: "March 2025",
    description: "Road-tripped and camped through the Lofoten Islands and Senja Island. 3am hikes during the season when the sun barely sets. Arctic landscapes, fishing villages, dramatic peaks rising straight out of the Norwegian Sea.",
    callout: "3am hikes aren't so bad here."
  },
  {
    title: "Ukraine — Hostomel, Kyiv",
    date: "October 2024",
    description: "Spent 3 days volunteering with the Gurtum Charity Foundation in Hostomel, a suburb of Kyiv devastated during the early days of the Russian invasion. Rebuilt houses. The trip came during a difficult personal period and became a turning point.",
    callout: ""
  },
  {
    title: "Fjallraven Classic USA",
    date: "July 2024",
    description: "Completed the Fjallraven Classic — a multi-day trekking event through backcountry wilderness. Self-supported hiking with everything on your back. The kind of experience that makes you realize how little you actually need.",
    callout: ""
  },
  {
    title: "Iceland — Winter & Summer",
    date: "August & December 2023",
    description: "Went twice in the same year. August was the remote Westfjords. December was winter Iceland: black sand, ice, and the kind of silence that rewires your brain. Drove on gravel roads that still live rent-free in my head.",
    callout: ""
  }
];

export function Adventures() {
  return (
    <section id="adventures" className="py-24 px-6 max-w-4xl mx-auto border-t border-accent/20">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground tracking-tight">Adventures</h2>
        <p className="mt-4 text-lg text-foreground/70">The stories along the way.</p>
      </div>

      <div className="space-y-16 md:space-y-24 relative before:absolute before:inset-0 before:ml-2 md:before:ml-0 md:before:-translate-x-1/2 before:w-px before:bg-accent/20">
        {adventures.map((adv, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative pl-10 md:pl-16"
          >
            <div className="absolute left-[-3px] top-2 md:left-[-24px] w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
            
            <div className="space-y-3">
              <span className="text-sm font-semibold uppercase tracking-widest text-accent/80">
                {adv.date}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-foreground">{adv.title}</h3>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl font-sans">
                {adv.description}
              </p>
              {adv.callout && (
                <blockquote className="border-l-2 border-accent pl-4 italic text-foreground/60 mt-4 text-sm md:text-base">
                  &quot;{adv.callout}&quot;
                </blockquote>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
