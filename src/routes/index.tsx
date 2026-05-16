import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Flavors } from "@/components/site/Flavors";
import { GiftBoxes } from "@/components/site/GiftBoxes";
import { Story } from "@/components/site/Story";
import { Testimonials } from "@/components/site/Testimonials";
import { Reels } from "@/components/site/Reels";
import { CtaFooter } from "@/components/site/CtaFooter";
import { ScrollEffects } from "@/components/site/ScrollEffects";
import { CursorGlow } from "@/components/site/CursorGlow";
import { ChocolateDrip } from "@/components/site/ChocolateDrip";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maison Cocoa — Handcrafted Luxury Chocolate" },
      {
        name: "description",
        content:
          "Luxury homemade chocolates crafted for gifting and unforgettable experiences. Single-origin cacao, hand-finished in our Lyon atelier.",
      },
      { property: "og:title", content: "Maison Cocoa — Handcrafted Luxury Chocolate" },
      {
        property: "og:description",
        content: "Luxury homemade chocolates, hand-finished. Reserve your first box.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <CursorGlow />
      <ScrollEffects />
      <Navbar />
      <Hero />
      <ChocolateDrip />
      <Flavors />
      <GiftBoxes />
      <ChocolateDrip />
      <Story />
      <Testimonials />
      <Reels />
      <CtaFooter />
    </main>
  );
}
