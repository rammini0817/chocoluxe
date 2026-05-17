import { motion } from "framer-motion";

const links = [
  { label: "Flavors", href: "#flavors" },
  { label: "Gift Boxes", href: "#gifts" },
  { label: "Story", href: "#story" },
  { label: "Journal", href: "#reels" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-wide text-gradient-gold"><img src="favicon.ico" /></span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-foreground/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 rounded-full glass px-5 py-2 text-sm hover:border-gold/50 transition-all"
        >
          Reserve
        </a>
      </div>
    </motion.header>
  );
}
