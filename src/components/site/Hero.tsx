import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import heroChocolate from "@/assets/hero-chocolate.jpg";
import { MagneticLink } from "./Magnetic";
import { SplineScene } from "./SplineScene";

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 10 + Math.random() * 12;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/40 blur-[1px]"
            style={{ left: `${left}%`, width: size, height: size, bottom: -10 }}
            animate={{ y: [-10, -800], opacity: [0, 0.8, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
          />
        );
      })}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-12, 12]);
  const tx = useTransform(sx, [-0.5, 0.5], [-15, 15]);
  const ty = useTransform(sy, [-0.5, 0.5], [-15, 15]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set(e.clientX / w - 0.5);
      my.set(e.clientY / h - 0.5);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  const words = "Handcrafted Moments".split(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center noise"
    >
      <Particles />
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-[radial-gradient(circle,oklch(0.78_0.13_78/0.18),transparent_60%)] blur-2xl" />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-28 pb-20 grid place-items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center gap-2 text-xs tracking-[0.4em] uppercase text-gold/80 mb-6"
        >
          <span className="h-px w-8 bg-gold/60" /> Est. 2019 — Atelier de Chocolat <span className="h-px w-8 bg-gold/60" />
        </motion.span>

        <h1 className="font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.95] tracking-tight">
          {words.map((w, i) => (
            <span key={w} className="inline-block overflow-hidden pb-2 mr-4">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.6 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block ${i === 1 ? "italic text-gradient-gold" : ""}`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="mt-8 max-w-xl text-base md:text-lg text-foreground/70 font-light"
        >
          Luxury homemade chocolates crafted for gifting and unforgettable experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticLink
            href="#flavors"
            className="group relative inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow"
          >
            Explore Flavors
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </MagneticLink>
          <MagneticLink
            href="#cta"
            className="inline-flex items-center gap-3 rounded-full glass px-7 py-3.5 text-sm font-medium hover:border-gold/40 transition-all"
          >
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            Launching Soon
          </MagneticLink>
        </motion.div>

        {/* Floating 3D chocolate scene */}
        <motion.div
          style={{ y: parallaxY }}
          className="relative mt-16 [perspective:1200px]"
        >
          <motion.div
            style={{ rotateX: rotX, rotateY: rotY, x: tx, y: ty }}
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[min(80vw,640px)] aspect-[4/3] rounded-3xl overflow-hidden shadow-luxe ring-1 ring-gold/20"
          >
            <div className="absolute -inset-10 bg-[radial-gradient(circle_at_50%_50%,oklch(0.78_0.13_78/0.35),transparent_60%)] blur-2xl" />
            {/* Fallback image (shown until Spline loads / on reduced motion) */}
            <img
              src={heroChocolate}
              alt="Handcrafted luxury chocolate box"
              width={1536}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Spline 3D scene: floating chocolate cubes, rotating gift box */}
            <div className="absolute inset-0">
              <SplineScene />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-foreground/40"
        >
          Scroll to taste
        </motion.div>
      </motion.div>
    </section>
  );
}
