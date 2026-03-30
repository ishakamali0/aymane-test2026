import React from "react";
import { motion } from "motion/react";

const trustBadges = [
  { icon: "🚚", title: "توصيل لكل الولايات", sub: "58 ولاية في الجزائر" },
  { icon: "💳", title: "الدفع عند الاستلام", sub: "بدون أي دفع مسبق" },
  { icon: "🔄", title: "ضمان الإرجاع", sub: "خلال 7 أيام كاملة" },
  { icon: "🏅", title: "معتمد طبياً", sub: "موصى به من أطباء العظام" },
];

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      dir="rtl"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      {/* Trust band */}
      <div
        className="py-10 px-4 sm:px-6"
        style={{ background: "#f5f9f9", borderTop: "1px solid #d8eaea" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {trustBadges.map((b, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 rounded-2xl border"
                style={{ background: "#fff", borderColor: "#d0eaea" }}
              >
                <span style={{ fontSize: "1.6rem", marginBottom: "0.4rem" }}>{b.icon}</span>
                <span style={{ fontWeight: 800, fontSize: "0.82rem", color: "#008080" }}>
                  {b.title}
                </span>
                <span style={{ fontSize: "0.68rem", color: "#8aabab", marginTop: 2 }}>
                  {b.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div
        className="py-10 px-4 sm:px-6"
        style={{ background: "#0d2020" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #005f5f, #008080)" }}
                >
                  <span>🕌</span>
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: "#d0eaea", fontSize: "1rem" }}>السجادة الطبية</div>
                  <div style={{ fontSize: "0.62rem", color: "#f5a623" }}>الجزائر — للصلاة براحة تامة</div>
                </div>
              </div>
              <p style={{ fontSize: "0.78rem", color: "#5a8080", lineHeight: 1.9 }}>
                نؤمن بأن كل مسلم يستحق أن يصلي براحة تامة دون ألم. منتجاتنا مصممة خصيصاً لحماية مفاصلك وإتاحة الخشوع الكامل.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 style={{ fontWeight: 700, color: "#c0d8d8", fontSize: "0.85rem", marginBottom: "1rem" }}>
                روابط سريعة
              </h4>
              <div className="space-y-2">
                {["من نحن", "سياسة الإرجاع", "الشحن والتوصيل", "تواصل معنا"].map((l, i) => (
                  <div key={i}>
                    <a
                      href="#"
                      style={{ fontSize: "0.78rem", color: "#5a8080", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#f5a623")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#5a8080")}
                    >
                      {l}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontWeight: 700, color: "#c0d8d8", fontSize: "0.85rem", marginBottom: "1rem" }}>
                تواصل معنا
              </h4>
              <div className="space-y-2.5">
                {[
                  { icon: "📞", text: "0658181217" },
                  { icon: "📧", text: "support@dzelt.com" },
                  { icon: "📍", text: "نوصل لجميع ولايات الجزائر الـ 58" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span style={{ fontSize: "0.9rem", marginTop: 1 }}>{item.icon}</span>
                    <span style={{ fontSize: "0.76rem", color: "#5a8080", lineHeight: 1.6 }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderColor: "#1a3535" }}
          >
            <p style={{ fontSize: "0.72rem", color: "#3a5a5a" }}>
              © {year} السجادة الطبية الجزائر — جميع الحقوق محفوظة
            </p>
            <div className="flex gap-4">
              {["سياسة الخصوصية", "الشروط والأحكام"].map((l, i) => (
                <a
                  key={i}
                  href="#"
                  style={{ fontSize: "0.68rem", color: "#3a5a5a", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#f5a623")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#3a5a5a")}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
