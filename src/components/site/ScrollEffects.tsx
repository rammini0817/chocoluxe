import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollEffects() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal: any [data-reveal] fades + slides up
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // 2. Stagger reveal: children of [data-reveal-group]
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const children = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
        gsap.from(children, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: group, start: "top 80%", once: true },
        });
      });

      // 3. Text mask reveal: [data-mask] — wraps lines and slides them up
      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) => {
        gsap.from(el, {
          backgroundSize: "0% 100%",
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // 4. Parallax: [data-parallax] translates with scroll
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.2");
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // 5. Image cover zoom: [data-img-zoom]
      gsap.utils.toArray<HTMLElement>("[data-img-zoom]").forEach((el) => {
        gsap.fromTo(
          el,
          { scale: 1.25 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });

      // 6. Section pin: [data-pin] pins for a beat
      gsap.utils.toArray<HTMLElement>("[data-pin]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "+=60%",
          pin: true,
          pinSpacing: true,
        });
        gsap.to(el.querySelector("[data-pin-content]"), {
          scale: 1.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=60%",
            scrub: 1,
          },
        });
      });

      // 7. Chocolate drip: top border element grows down
      gsap.utils.toArray<HTMLElement>("[data-drip]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top",
            ease: "power2.out",
            duration: 1.4,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          }
        );
      });

      // 8. Floating: gentle infinite Y for [data-float]
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
        gsap.to(el, {
          y: "+=14",
          duration: 3 + (i % 3) * 0.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    });

    // Recalc after fonts/images load
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);

    return () => {
      ctx.revert();
      window.removeEventListener("load", refresh);
      clearTimeout(t);
    };
  }, []);

  return null;
}
