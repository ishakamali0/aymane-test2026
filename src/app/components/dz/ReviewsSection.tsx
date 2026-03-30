import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const REVIEWS = [
  {
    name: "حاج عبد الرحمن",
    wilaya: "المسيلة",
    avatar: "https://images.unsplash.com/photo-1613394242132-1268854bde44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGdlcmlhbiUyMG1hbiUyMHNlbmlvciUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NjkyNTN8MA&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    headline: "أفضل ما اشتريته في حياتي!",
    text: "كنت أعاني من آلام شديدة في الركبتين لأكثر من 3 سنوات وكانت الصلاة عذاباً حقيقياً. بعد ما جربت السجادة الطبية، والله ما حسيت بأي ألم. التوصيل وصل لوهراني من باب دارنا خلال يومين فقط. الدفع عند الاستلام ريّحني 100%.",
    date: "قبل أسبوعين",
    verified: true,
    tag: "آلام الركبة",
  },
  {
    name: "أم صلاح",
    wilaya: "وهران",
    avatar: "https://images.unsplash.com/photo-1762380831516-5365112b26c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J0aCUyMGFmcmljYW4lMjB3b21hbiUyMG1hdHVyZSUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzQ4NjkyNTZ8MA&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    headline: "هدية مثالية لأمي الكبيرة في السن",
    text: "اشتريت السجادة هدية لأمي البالغة من العمر 72 سنة. كانت تتألم دائماً وقت السجود. الآن تصلي بدون أي شكوى وتقول إنها أحسن سجادة جربتها. الغطاء ناعم جداً وسهل التنظيف. أنصح به لكل عائلة جزائرية.",
    date: "قبل 3 أيام",
    verified: true,
    tag: "كبار السن",
  },
  {
    name: "محمد أمين",
    wilaya: "قسنطينة",
    avatar: "https://images.unsplash.com/photo-1761475050348-cd71a74f54c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwb2xkZXIlMjBtYW4lMjBoYXBweSUyMHBvcnRyYWl0JTIwd2FybXxlbnwxfHx8fDE3NzQ4NjkyNTd8MA&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    headline: "والله ما توقعت تكون بهالجودة!",
    text: "صراحة كنت متردد في البداية لأني خفت من الغش. لكن لما وصلت ورأيت جودة المنتج ذهلت. السماكة واضحة والميموري فوم حقيقي. عمودي الفقري ما وجعني منذ استعملتها. سأطلب قطعة ثانية لأخي.",
    date: "قبل شهر",
    verified: true,
    tag: "آلام الظهر",
  },
];

export function ReviewsSection() {
  return (
    <section
      dir="rtl"
      className="py-20 px-4 sm:px-6"
      style={{
        background: "#fff",
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
              background: "#fffbec",
              border: "1px solid #f0d898",
              color: "#c47e0a",
              fontSize: "0.78rem",
              fontWeight: 700,
            }}
          >
            ⭐ آراء زبائننا من مختلف الولايات
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
            أكثر من{" "}
            <span style={{ color: "#f5a623" }}>2,400 زبون جزائري</span>
            {" "}يثقون بنا
          </h2>
          <p style={{ fontSize: "0.88rem", color: "#6a8a8a" }}>
            تقييمات حقيقية من زبائن موثقين في كل أنحاء الجزائر
          </p>

          {/* Overall rating bar */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#f5a623", fontSize: "1.4rem" }}>★</span>
              ))}
            </div>
            <span style={{ fontWeight: 900, fontSize: "1.3rem", color: "#1a2e2e" }}>4.9</span>
            <span style={{ color: "#9aabab", fontSize: "0.82rem" }}>/ 5 — من 2,347 تقييم</span>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{
                background: "#fff",
                borderColor: "#e8f0f0",
                boxShadow: "0 4px 20px rgba(0,128,128,0.07)",
              }}
            >
              {/* Stars + tag */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(r.rating)].map((_, j) => (
                    <span key={j} style={{ color: "#f5a623", fontSize: "0.9rem" }}>★</span>
                  ))}
                </div>
                <span
                  className="px-2.5 py-1 rounded-full"
                  style={{
                    background: "#e8f5f5",
                    color: "#008080",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    border: "1px solid #c0e0e0",
                  }}
                >
                  {r.tag}
                </span>
              </div>

              {/* Headline */}
              <div
                className="px-3 py-2 rounded-lg"
                style={{
                  background: "#f0f9f9",
                  borderRight: "3px solid #008080",
                }}
              >
                <p style={{ fontWeight: 800, fontSize: "0.88rem", color: "#008080" }}>
                  "{r.headline}"
                </p>
              </div>

              {/* Review text */}
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#5a7070",
                  lineHeight: 1.95,
                  flex: 1,
                }}
              >
                {r.text}
              </p>

              {/* Divider */}
              <div style={{ borderTop: "1px solid #f0f5f5" }} />

              {/* User info */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: "2px solid #e0eeee" }}
                >
                  <ImageWithFallback
                    src={r.avatar}
                    alt={r.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#1a2e2e" }}>
                    {r.name}
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#9aabab" }}>
                    📍 {r.wilaya} · {r.date}
                  </div>
                </div>
                {r.verified && (
                  <div
                    className="flex items-center gap-1 px-2 py-1 rounded-lg flex-shrink-0"
                    style={{ background: "#f0faf6", border: "1px solid #b0e0c8" }}
                  >
                    <span style={{ color: "#2a7a50", fontSize: "0.6rem" }}>✓</span>
                    <span style={{ fontSize: "0.6rem", color: "#2a7a50", fontWeight: 700 }}>
                      شراء موثق
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white transition-all hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #f5a623, #e8941a)",
              fontWeight: 900,
              fontSize: "1.05rem",
              boxShadow: "0 8px 30px rgba(245,166,35,0.4)",
            }}
          >
            <span>🛒</span>
            <span>أنا أيضاً أريد الراحة — اطلب الآن</span>
            <span>←</span>
          </button>
          <p style={{ fontSize: "0.75rem", color: "#9aabab", marginTop: "0.75rem" }}>
            الدفع عند الاستلام · توصيل لجميع ولايات الجزائر
          </p>
        </motion.div>
      </div>
    </section>
  );
}
