import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 22, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-magnetic]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="fixed top-0 left-0 z-[60] pointer-events-none mix-blend-screen"
      >
        <motion.div
          animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 0.9 : 0.6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="-translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.13 78 / 0.18), transparent 60%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        className="fixed top-0 left-0 z-[61] pointer-events-none"
      >
        <motion.div
          animate={{ scale: hover ? 0 : 1 }}
          className="-translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold"
        />
      </motion.div>
    </>
  );
}
