interface DripProps {
  className?: string;
}

// Decorative chocolate-drip divider — SVG mask with GSAP scaleY reveal via [data-drip]
export function ChocolateDrip({ className }: DripProps) {
  return (
    <div
      data-drip
      aria-hidden
      className={`relative w-full h-16 origin-top ${className ?? ""}`}
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.78 0.13 78 / 0.5), oklch(0.78 0.13 78 / 0.0))",
        maskImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 80' preserveAspectRatio='none'><path d='M0,0 L1200,0 L1200,18 C1150,18 1130,55 1090,55 C1050,55 1040,22 1010,22 C980,22 970,68 935,68 C900,68 895,30 860,30 C825,30 820,60 780,60 C740,60 735,25 700,25 C665,25 660,70 620,70 C580,70 575,32 540,32 C505,32 500,58 460,58 C420,58 415,22 380,22 C345,22 340,64 300,64 C260,64 255,28 220,28 C185,28 180,52 140,52 C100,52 95,20 60,20 C30,20 20,40 0,40 Z' fill='black'/></svg>\")",
        WebkitMaskImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 80' preserveAspectRatio='none'><path d='M0,0 L1200,0 L1200,18 C1150,18 1130,55 1090,55 C1050,55 1040,22 1010,22 C980,22 970,68 935,68 C900,68 895,30 860,30 C825,30 820,60 780,60 C740,60 735,25 700,25 C665,25 660,70 620,70 C580,70 575,32 540,32 C505,32 500,58 460,58 C420,58 415,22 380,22 C345,22 340,64 300,64 C260,64 255,28 220,28 C185,28 180,52 140,52 C100,52 95,20 60,20 C30,20 20,40 0,40 Z' fill='black'/></svg>\")",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
