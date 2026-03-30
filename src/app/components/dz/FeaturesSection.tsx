import React from "react";
import { motion } from "motion/react";

const features = [
  {
    icon: "🧠",
    title: "ميموري فوم بسماكة 6 سم",
    description:
      "تقنية الميموري فوم عالي الكثافة تتكيف مع شكل جسمك تلقائياً وتوزع الوزن بشكل متساوٍ، مما يقلل الضغط على الركبتين بنسبة تصل إلى 70%.",
    stat: "70%",
    statLabel: "تخفيف الضغط على الركبتين",
    color: "#008080",
    bg: "linear-gradient(135deg, #e8f7f7, #fff)",
    border: "#c0e0e0",
    accent: "#008080",
  },
  {
    icon: "🫧",
    title: "غطاء قابل للغسيل",
    description:
      "غطاء خارجي من القماش الطبي الفاخر قابل للفصل والغسيل الكامل في الغسالة — يبقى نظيفاً وطازجاً دائماً لكل صلاة.",
    stat: "60°",
    statLabel: "يُغسل حتى",
    color: "#2a7a5a",
    bg: "linear-gradient(135deg, #e8f5ee, #fff)",
    border: "#b0d8c0",
    accent: "#2a7a5a",
  },
  {
    icon: "🔒",
    title: "قاعدة مانعة للانزلاق",
    description:
      "طبقة مطاطية طبية في القاعدة تثبت السجادة بإحكام على أي سطح — باركيه، سيراميك، أو موكيت — لضمان سلامتك أثناء السجود.",
    stat: "100%",
    statLabel: "ثبات على جميع الأسطح",
    color: "#5a6abf",
    bg: "linear-gradient(135deg, #eeeeff, #fff)",
    border: "#c8ccee",
    accent: "#5a6abf",
  },
  {
    icon: "🏅",
    title: "اعتماد طبي معتمد",
    description:
      "مصممة بالتشاور مع أطباء العظام والمفاصل، وتحمل شهادة المطابقة للمواصفات الطبية الدولية. انعم بالخشوع دون قلق صحي.",
    stat: "✓",
    statLabel: "معتمدة دولياً",
    color: "#c47e0a",
    bg: "linear-gradient(135deg, #fffbec, #fff)",
    border: "#f0d898",
    accent: "#c47e0a",
  },
];

export function FeaturesSection() {
  return (
    <section
      dir="rtl"
      className="py-20 px-4 sm:px-6"
      style={{
        background: "#f5f9f9",
        fontFamily: "'Cairo', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "#e8f5f5",
              border: "1px solid #b0dede",
              color: "#008080",
              fontSize: "0.78rem",
              fontWeight: 700,
            }}
          >
            لماذا تختار السجادة الطبية؟
          </span>
          <h2
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              color: "#0d2020",
              lineHeight: 1.35,
              marginBottom: "0.5rem",
            }}
          >
            مصممة بدقة علمية{" "}
            <span style={{ color: "#008080" }}>لراحتك الحقيقية</span>
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#6a8a8a",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.85,
            }}
          >
            أربع مزايا حصرية تجعل هذه السجادة الخيار الأول لآلاف الجزائريين
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              style={{
                background: f.bg,
                borderColor: f.border,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                style={{
                  background: "#fff",
                  border: `1.5px solid ${f.border}`,
                  fontSize: "1.7rem",
                }}
              >
                {f.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  style={{
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    color: "#0d2020",
                    marginBottom: "0.5rem",
                    lineHeight: 1.4,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.78rem",
                    color: "#6a8080",
                    lineHeight: 1.85,
                  }}
                >
                  {f.description}
                </p>
              </div>

              {/* Stat */}
              <div
                className="flex items-center justify-between pt-4 border-t"
                style={{ borderColor: f.border }}
              >
                <span
                  style={{
                    fontWeight: 900,
                    fontSize: "1.6rem",
                    color: f.accent,
                  }}
                >
                  {f.stat}
                </span>
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: "#8aabab",
                    textAlign: "left",
                    maxWidth: 90,
                    lineHeight: 1.4,
                  }}
                >
                  {f.statLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border"
          style={{
            background: "linear-gradient(90deg, #005f5f, #008080)",
            borderColor: "#005f5f",
          }}
        >
          <div className="text-right">
            <h4
              style={{
                fontWeight: 800,
                fontSize: "1.1rem",
                color: "#fff",
                marginBottom: "0.3rem",
              }}
            >
              السجادة الطبية مقابل السجادة العادية
            </h4>
            <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
              بينما تسبب السجادات العادية آلاماً مزمنة، تحمي سجادتنا مفاصلك وتمنحك خشوعاً حقيقياً
            </p>
          </div>
          <div className="flex gap-8 flex-shrink-0">
            {[
              { label: "السجادة العادية", val: "❌", items: ["ألم الركبة", "انزلاق", "غير قابلة للغسيل"] },
              { label: "السجادة الطبية", val: "✅", items: ["راحة تامة", "ثابتة", "قابلة للغسيل"] },
            ].map((col, i) => (
              <div key={i} className="text-center">
                <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", fontWeight: 600, marginBottom: 8 }}>
                  {col.label}
                </div>
                {col.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-1.5 mb-1.5"
                  >
                    <span style={{ fontSize: "0.8rem" }}>{col.val}</span>
                    <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.85)" }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
