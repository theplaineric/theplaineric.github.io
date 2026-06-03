"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Adventures", href: "#adventures" },
  { name: "Building", href: "#building" },
  { name: "Currently", href: "#currently" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center max-w-7xl mx-auto right-0 bg-background/80 backdrop-blur-sm"
    >
      <Link href="/" className="font-serif text-xl tracking-tight text-foreground hover:text-accent transition-colors">
        Eric Zhu.
      </Link>
      <div className="flex gap-6 md:gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
