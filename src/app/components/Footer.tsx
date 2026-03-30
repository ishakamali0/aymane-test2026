import React from "react";
import { motion } from "motion/react";

const trustBadges = [
  {
    icon: "🚚",
    title: "توصيل مجاني",
    subtitle: "لجميع المدن",
    color: "#006B6B",
    bg: "#e0f4f4",
    border: "#b0dede",
  },
  {
    icon: "💯",
    title: "ضمان ١٠٠%",
    subtitle: "استرداد كامل أو استبدال",
    color: "#4a9b7f",
    bg: "#e8f9f3",
    border: "#b0e0d0",
  },
  {
    icon: "🏆",
    title: "معتمد طبياً",
    subtitle: "من أخصائيي العظام",
    color: "#C5A059",
    bg: "#fff8ec",
    border: "#e8d5a8",
  },
  {
    icon: "💳",
    title: "الدفع عند الاستلام",
    subtitle: "بدون أي مخاطرة",
    color: "#7a6abf",
    bg: "#f5f3ff",
    border: "#d5ceee",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden"
      style={{ background: "#0d2020" }}
    >
      {/* Trust Badges Band */}
      <div
        className="py-10 px-6"
        style={{ background: "#f4f9f9", borderTop: "1px solid #d0e8e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {trustBadges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-md"
                style={{
                  background: badge.bg,
                  borderColor: badge.border,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-sm"
                  style={{ background: "#fff", border: `1px solid ${badge.border}` }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{badge.icon}</span>
                </div>
                <div
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.9rem",
                    color: badge.color,
                    marginBottom: 2,
                  }}
                >
                  {badge.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "0.72rem",
                    color: "#7a9090",
                  }}
                >
                  {badge.subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #006B6B, #008080)" }}
                >
                  <span className="text-white text-lg">🕌</span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#e0f4f4",
                    }}
                  >
                    السجادة الطبية
                  </div>
                  <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.7rem", color: "#C5A059" }}>
                    للصلاة براحة تامة
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: "0.82rem",
                  color: "#6a9090",
                  lineHeight: 2,
                  maxWidth: 260,
                }}
              >
                نؤمن بأن الصلاة تجربة روحية وجسدية في آنٍ معاً. مهمتنا توفير أفضل منتج طبي لمساعدتك على التركيز والخشوع.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                  color: "#c0d8d8",
                  fontSize: "0.9rem",
                }}
              >
                روابط سريعة
              </h4>
              <div className="space-y-2.5">
                {["من نحن", "سياسة الاسترجاع", "الشحن والتوصيل", "تواصل معنا", "الأسئلة الشائعة"].map((link) => (
                  <div key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "'Cairo', sans-serif",
                        fontSize: "0.82rem",
                        color: "#6a9090",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A059")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6a9090")}
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="mb-5"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                  color: "#c0d8d8",
                  fontSize: "0.9rem",
                }}
              >
                تواصل معنا
              </h4>
              <div className="space-y-3">
                {[
                  { icon: "📞", text: "+966 50 000 0000" },
                  { icon: "📧", text: "info@medical-mat.com" },
                  { icon: "🕐", text: "٩ص — ١١م · كل أيام الأسبوع" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    <span
                      style={{
                        fontFamily: "'Cairo', sans-serif",
                        fontSize: "0.82rem",
                        color: "#6a9090",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social icons */}
              <div className="flex gap-3 mt-5">
                {["📱", "💬", "📸"].map((icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "#1a3030", border: "1px solid #2a4444" }}
                  >
                    <span style={{ fontSize: "1rem" }}>{icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
            style={{ borderColor: "#1a3030" }}
          >
            <p
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontSize: "0.75rem",
                color: "#4a6060",
              }}
            >
              © {year} السجادة الطبية. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-4">
              {["سياسة الخصوصية", "الشروط والأحكام"].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "0.72rem",
                    color: "#4a6060",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C5A059")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4a6060")}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
