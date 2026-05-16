import { Suspense, lazy, useEffect, useState } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

// Default scene: a public Spline demo featuring floating geometric objects
// with realistic materials and ambient lighting. Replace `scene` prop with
// your own published Spline URL for a custom chocolate box scene.
const DEFAULT_SCENE =
  "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

export function SplineScene({
  scene = DEFAULT_SCENE,
  className = "",
}: SplineSceneProps) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on very small / low-power devices to keep things smooth
    const mq = window.matchMedia("(max-width: 640px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) setEnabled(false);
    const update = () => setEnabled(!reduce.matches);
    mq.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense
        fallback={
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-10 w-10 rounded-full border border-gold/30 border-t-gold animate-spin" />
          </div>
        }
      >
        <Spline scene={scene} style={{ width: "100%", height: "100%" }} />
      </Suspense>
    </div>
  );
}
