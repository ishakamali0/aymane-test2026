import React from "react";

export function TopBar() {
  return (
    <div
      dir="rtl"
      className="w-full py-2.5 px-4 flex items-center justify-center gap-6 flex-wrap"
      style={{
        background: "linear-gradient(90deg, #005f5f, #008080, #005f5f)",
        fontFamily: "'Cairo', sans-serif",
      }}
    >
      {[
        { icon: "🚚", text: "توصيل سريع لكل الولايات" },
        { icon: "💳", text: "الدفع عند الاستلام" },
        { icon: "🔄", text: "ضمان الإرجاع خلال 7 أيام" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>
          <span
            style={{
              color: "#fff",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.01em",
            }}
          >
            {item.text}
          </span>
          {i < 2 && (
            <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.3)", margin: "0 8px" }}>
              |
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
