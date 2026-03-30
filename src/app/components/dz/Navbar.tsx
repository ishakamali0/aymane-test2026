import React from "react";

export function Navbar() {
  const scrollToForm = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      dir="rtl"
      className="w-full px-6 py-3 flex items-center justify-between border-b"
      style={{
        background: "#fff",
        borderColor: "#e8f0f0",
        fontFamily: "'Cairo', sans-serif",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #005f5f, #008080)" }}
        >
          <span style={{ fontSize: "1.1rem" }}>🕌</span>
        </div>
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: "1rem",
              color: "#005f5f",
            }}
          >
            السجادة الطبية
          </div>
          <div style={{ fontSize: "0.6rem", color: "#f5a623", fontWeight: 600 }}>
            الجزائر ‏| للصلاة براحة تامة
          </div>
        </div>
      </div>

      {/* Right: CTA */}
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span style={{ fontSize: "0.75rem", color: "#555", fontWeight: 500 }}>
            متوفر الآن — عروض محدودة
          </span>
        </div>
        <button
          onClick={scrollToForm}
          className="px-5 py-2 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #f5a623, #e8941a)",
            fontWeight: 800,
            fontSize: "0.85rem",
            boxShadow: "0 4px 15px rgba(245,166,35,0.4)",
          }}
        >
          اطلب الآن 🛒
        </button>
      </div>
    </nav>
  );
}
