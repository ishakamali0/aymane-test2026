import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "أم خالد",
    location: "الرياض",
    image: "https://images.unsplash.com/photo-1560392934-94512cfbd875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjB3b21hbiUyMGVsZGVybHklMjBzZW5pb3IlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzc0ODY4NTM1fDA&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    review: "غيّرت حياتي بالكامل! كنت أعاني من آلام شديدة في الركبتين وبعد استخدام السجادة الطبية أصبح الصلاة متعة حقيقية دون أي ألم.",
    badge: "مشترية موثقة",
    highlight: "غيّرت حياتي",
    date: "منذ شهر",
  },
  {
    name: "الحاج محمد",
    location: "جدة",
    image: "https://images.unsplash.com/photo-1651596082255-bcb4993cee27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwc2VuaW9yJTIwbWFuJTIwcG9ydHJhaXQlMjBoYXBweXxlbnwxfHx8fDE3NzQ4Njg1Mzl8MA&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    review: "هدية ممتازة لوالدي الذي يعاني من آلام الظهر. أهديتها له في رمضان وأصبح لا يتوقف عن شكرها. جودة عالية جداً وسعر مناسب.",
    badge: "مشترٍ موثق",
    highlight: "هدية ممتازة لوالدي",
    date: "منذ أسبوعين",
  },
  {
    name: "سارة العمري",
    location: "الدمام",
    image: "https://images.unsplash.com/photo-1770796568095-2776d45840ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG11c2xpbSUyMHdvbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDg2ODU0MHww&ixlib=rb-4.1.0&q=80&w=200",
    rating: 5,
    review: "منتج رائع بكل المقاييس. الشعور بالراحة خلال السجود لا يوصف. أوصي به بشدة لكل من يعاني من مشاكل في المفاصل أو العمود الفقري.",
    badge: "مشترية موثقة",
    highlight: "منتج رائع بكل المقاييس",
    date: "منذ ٣ أيام",
  },
];

export function TestimonialsSection() {
  return (
    <section
      dir="rtl"
      className="py-24 relative overflow-hidden"
      style={{ background: "#fff" }}
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #e0f4f4 0%, transparent 50%), radial-gradient(circle at 80% 50%, #fff8ec 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
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
              background: "linear-gradient(90deg, #fff8ec, #fff)",
              color: "#C5A059",
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 600,
              border: "1px solid #e8d5a8",
            }}
          >
            آراء عملائنا
          </span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
              color: "#1a2e2e",
            }}
          >
            ماذا يقول{" "}
            <span style={{ color: "#C5A059" }}>عملاؤنا</span>
            {" "}السعداء؟
          </h2>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: "#C5A059", fontSize: "1.3rem" }}>★</span>
              ))}
            </div>
            <span style={{ fontFamily: "'Cairo', sans-serif", fontWeight: 700, color: "#333", fontSize: "1.1rem" }}>
              ٤.٩ / ٥
            </span>
            <span style={{ fontFamily: "'Cairo', sans-serif", color: "#999", fontSize: "0.85rem" }}>
              (٢,٣٤٧ تقييم)
            </span>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative rounded-3xl p-7 border flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
              style={{
                background: "#fff",
                borderColor: "#e8f0f0",
                boxShadow: "0 4px 30px rgba(0,107,107,0.07)",
              }}
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 left-6 text-5xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: "#006B6B", fontFamily: "Georgia, serif", lineHeight: 1 }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} style={{ color: "#C5A059", fontSize: "1rem" }}>★</span>
                ))}
              </div>

              {/* Highlighted quote */}
              <div
                className="mb-3 px-3 py-1.5 rounded-lg inline-block self-start"
                style={{
                  background: "linear-gradient(90deg, #e0f4f4, transparent)",
                  borderRight: "3px solid #006B6B",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#006B6B",
                  }}
                >
                  {t.highlight}
                </span>
              </div>

              {/* Review text */}
              <p
                className="flex-1 mb-6"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: "0.88rem",
                  color: "#5a6b6b",
                  lineHeight: 2,
                }}
              >
                {t.review}
              </p>

              {/* Divider */}
              <div className="border-t mb-4" style={{ borderColor: "#f0f5f5" }} />

              {/* User info */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2" style={{ ringColor: "#e0eded" }}>
                  <ImageWithFallback
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#1a2e2e",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "0.75rem",
                      color: "#9aabab",
                    }}
                  >
                    {t.location} · {t.date}
                  </div>
                </div>
                <div
                  className="px-2 py-1 rounded-md flex items-center gap-1"
                  style={{
                    background: "#f0faf0",
                    border: "1px solid #c0e8c0",
                  }}
                >
                  <span style={{ fontSize: "0.6rem", color: "#2a9a2a" }}>✓</span>
                  <span
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "0.62rem",
                      color: "#2a9a2a",
                      fontWeight: 600,
                    }}
                  >
                    {t.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8"
          style={{ background: "#f4f9f9", border: "1px solid #d0e8e8" }}
        >
          {[
            { num: "+٢٠٠٠", label: "عميل سعيد" },
            { num: "٤.٩★", label: "متوسط التقييم" },
            { num: "٩٨%", label: "نسبة الرضا" },
            { num: "+٥٠٠", label: "تقييم موثق" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  color: "#006B6B",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: "0.8rem",
                  color: "#7a9090",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
