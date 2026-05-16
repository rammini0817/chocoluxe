import { motion } from "framer-motion";

export function CtaFooter() {
  return (
    <footer id="cta" className="relative pt-32 lg:pt-44 pb-12 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.13_78/0.12),transparent_60%)] blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs tracking-[0.4em] uppercase text-gold/80">Be the first to taste</span>
          <h2 className="mt-6 font-display text-5xl md:text-8xl leading-[0.95] tracking-tight">
            Reserve your <br />
            <span className="italic text-gradient-gold">first box.</span>
          </h2>
          <p className="mt-6 text-foreground/70 font-light">
            Limited launch this season. Join the list — we'll write only when something is worth opening.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 rounded-full glass px-6 py-4 text-sm focus:outline-none focus:border-gold/60 placeholder:text-foreground/40"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-7 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
            >
              Reserve
            </button>
          </form>
        </motion.div>

        <div className="mt-32 pt-10 border-t border-border/50 flex flex-col md:flex-row gap-6 items-center justify-between text-xs text-foreground/50">
          <div className="font-display text-xl text-gradient-gold">Maison Cocoa</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Press</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Maison Cocoa — Lyon, France</div>
        </div>
      </div>
    </footer>
  );
}
