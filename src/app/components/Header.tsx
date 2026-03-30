import React, { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      dir="rtl"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/80 backdrop-blur-sm"
      }`}
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
            style={{ background: "linear-gradient(135deg, #006B6B, #008080)" }}
          >
            <span className="text-white text-lg">🕌</span>
          </div>
          <div>
            <div
              className="text-xl"
              style={{ color: "#006B6B", fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
            >
              السجادة الطبية
            </div>
            <div className="text-xs" style={{ color: "#C5A059", fontWeight: 500 }}>
              للصلاة براحة تامة
            </div>
          </div>
        </div>

        {/* Right side - CTA + trust badge */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm" style={{ color: "#555" }}>
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
            <span style={{ fontFamily: "'Cairo', sans-serif" }}>الدفع عند الاستلام</span>
          </div>
          <button
            onClick={scrollToOrder}
            className="px-5 py-2.5 rounded-full text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{
              background: "linear-gradient(135deg, #C5A059, #d4b06e)",
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
            }}
          >
            اطلب الآن
          </button>
        </div>
      </div>
    </header>
  );
}
