import React from "react";
import { TopBar } from "./components/dz/TopBar";
import { Navbar } from "./components/dz/Navbar";
import { HeroWithForm } from "./components/dz/HeroWithForm";
import { FeaturesSection } from "./components/dz/FeaturesSection";
import { ReviewsSection } from "./components/dz/ReviewsSection";
import { StickyMobileCTA } from "./components/dz/StickyMobileCTA";
import { FooterSection } from "./components/dz/FooterSection";

export default function App() {
  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'Cairo', sans-serif",
        minHeight: "100vh",
        background: "#fff",
        /* Extra padding at bottom so sticky CTA doesn't cover content on mobile */
        paddingBottom: 0,
      }}
    >
      {/* Announcement bar */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* ── ABOVE THE FOLD: Hero + Order Form ── */}
      <HeroWithForm />

      {/* ── BELOW THE FOLD ── */}
      <FeaturesSection />
      <ReviewsSection />
      <FooterSection />

      {/* Sticky Mobile CTA — only on small screens */}
      <StickyMobileCTA />
    </div>
  );
}
