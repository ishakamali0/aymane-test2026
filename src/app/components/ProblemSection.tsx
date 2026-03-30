import React from "react";
import { motion } from "motion/react";

const problems = [
  {
    icon: "🦵",
    emoji: "😣",
    title: "ألم الركبتين",
    description: "الجلوس على الأرض الصلبة يضغط على الركبتين ويسبب ألماً متزايداً مع الوقت",
    stat: "٧٢%",
    statLabel: "من كبار السن يعانون منه",
    color: "#ff6b6b",
    bgColor: "#fff5f5",
    borderColor: "#ffd5d5",
  },
  {
    icon: "🔙",
    emoji: "😖",
    title: "آلام الظهر",
    description: "غياب الدعم الطبي يجعل الصلاة مؤلمة وتسبب توتراً مزمناً في الفقرات القطنية",
    stat: "٦٨%",
    statLabel: "من المصلين يشكون منه",
    color: "#ff8c42",
    bgColor: "#fff8f3",
    borderColor: "#ffe0c8",
  },
  {
    icon: "⚡",
    emoji: "😰",
    title: "التنميل والخدر",
    description: "قطع تدفق الدم خلال فترة الصلاة يؤدي إلى التنميل المزعج الذي يشتت الخشوع",
    stat: "٥٩%",
    statLabel: "من المصلين يشعرون به",
    color: "#6c63ff",
    bgColor: "#f8f7ff",
    borderColor: "#dddaff",
  },
];

export function ProblemSection() {
  return (
    <section
      dir="rtl"
      className="py-24 relative overflow-hidden"
      style={{ background: "#fff" }}
    >
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-1 opacity-30"
        style={{ background: "linear-gradient(90deg, transparent, #C5A059, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4 text-sm"
            style={{
              background: "#fff3f3",
              color: "#e05555",
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 600,
              border: "1px solid #ffd5d5",
            }}
          >
            هل تعاني من هذه المشاكل؟
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              color: "#1a2e2e",
              lineHeight: 1.3,
            }}
          >
            الصلاة لا يجب أن تكون{" "}
            <span style={{ color: "#e05555" }}>مؤلمة</span>
          </h2>
          <p
            style={{
              fontFamily: "'Cairo', sans-serif",
              color: "#7a9090",
              fontSize: "1rem",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            ملايين المسلمين حول العالم يعانون من هذه المشاكل يومياً — وهذا لم يعد ضرورياً
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              style={{
                background: problem.bgColor,
                borderColor: problem.borderColor,
              }}
            >
              {/* Icon circle */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                style={{ background: "#fff", border: `2px solid ${problem.borderColor}` }}
              >
                <span style={{ fontSize: "2rem" }}>{problem.icon}</span>
              </div>

              {/* Content */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.2rem",
                  color: "#1a2e2e",
                }}
              >
                {problem.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  color: "#6b7b7b",
                  fontSize: "0.88rem",
                  lineHeight: 1.9,
                }}
              >
                {problem.description}
              </p>

              {/* Stat */}
              <div
                className="mt-5 pt-5 border-t flex items-center justify-between"
                style={{ borderColor: problem.borderColor }}
              >
                <span
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.8rem",
                    color: problem.color,
                  }}
                >
                  {problem.stat}
                </span>
                <span
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "0.75rem",
                    color: "#8a9a9a",
                    textAlign: "left",
                    maxWidth: 120,
                  }}
                >
                  {problem.statLabel}
                </span>
              </div>

              {/* Hover emoji */}
              <div
                className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity text-2xl"
              >
                {problem.emoji}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transition arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <div
            className="inline-flex flex-col items-center gap-2"
            style={{ color: "#006B6B" }}
          >
            <span style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 600 }}>
              اكتشف الحل المثالي
            </span>
            <span className="text-2xl animate-bounce">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
