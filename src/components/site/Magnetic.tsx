import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "a" | "button";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Magnetic({
  children,
  className,
  strength = 0.25,
  as = "div",
  href,
  onClick,
  type,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      ref={ref as never}
      data-magnetic
      href={href}
      onClick={onClick}
      type={type}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </Comp>
  );
}
