import { useRef, type ReactNode, type MouseEvent, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function useMagnet(strength: number) {
  const ref = useRef<HTMLElement | null>(null);
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
  return { ref, sx, sy, move, leave };
}

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  strength?: number;
};

export function MagneticLink({ children, strength = 0.25, className, ...rest }: AnchorProps) {
  const { ref, sx, sy, move, leave } = useMagnet(strength);
  return (
    <motion.a
      {...rest}
      ref={ref as never}
      data-magnetic
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  strength?: number;
};

export function MagneticButton({ children, strength = 0.25, className, ...rest }: ButtonProps) {
  const { ref, sx, sy, move, leave } = useMagnet(strength);
  return (
    <motion.button
      {...rest}
      ref={ref as never}
      data-magnetic
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
