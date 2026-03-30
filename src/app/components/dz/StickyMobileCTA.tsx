import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          dir="rtl"
          style={{ fontFamily: "'Cairo', sans-serif" }}
        >
          {/* Gradient fade above */}
          <div
            className="h-6 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.05))",
            }}
          />

          <div
            className="px-4 pb-safe-area-inset-bottom"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid #e0eaea",
              paddingBottom: "env(safe-area-inset-bottom, 12px)",
              paddingTop: "12px",
            }}
          >
            <div className="flex items-center gap-3">
              {/* Price tag */}
              <div
                className="flex flex-col items-center px-3 py-1.5 rounded-xl flex-shrink-0"
                style={{ background: "#f0f9f9", border: "1px solid #c0e0e0" }}
              >
                <span style={{ fontSize: "0.6rem", color: "#888", textDecoration: "line-through" }}>
                  3500 دج
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 900, color: "#008080" }}>
                  2500 دج
                </span>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToForm}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-white transition-all active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #f5a623, #e8941a)",
                  fontWeight: 900,
                  fontSize: "1rem",
                  boxShadow: "0 6px 20px rgba(245,166,35,0.45)",
                }}
              >
                <span>🛒</span>
                <span>اطلب الآن — الدفع عند الاستلام</span>
              </button>
            </div>

            {/* Trust micro-text */}
            <div className="flex items-center justify-center gap-4 mt-2">
              {["🚚 توصيل لكل الولايات", "✅ دفع عند الاستلام", "🔒 آمن 100%"].map((t, i) => (
                <span key={i} style={{ fontSize: "0.6rem", color: "#9aabab" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
