import React from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const heroImage = "https://images.unsplash.com/photo-1550696043-8d6b42d33931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwTXVzbGltJTIwbWFuJTIwcHJheWluZyUyMHBlYWNlZnVsJTIwbW9ybmluZyUyMGxpZ2h0fGVufDF8fHx8MTc3NDg2ODUzMXww&ixlib=rb-4.1.0&q=80&w=1080";

const badges = [
  { icon: "🏅", label: "معتمد طبياً" },
  { icon: "✅", label: "ضمان سنة كاملة" },
  { icon: "🚚", label: "توصيل مجاني" },
];

export function HeroSection() {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      dir="rtl"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{ background: "linear-gradient(135deg, #f9f9f7 0%, #f0f7f7 50%, #f9f6ef 100%)" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #008080 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #C5A059 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-12 w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1 text-right"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
            style={{
              background: "linear-gradient(90deg, #fff8ec, #fff)",
              borderColor: "#C5A059",
              color: "#C5A059",
              fontFamily: "'Cairo', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 600,
            }}
          >
            <span>⭐</span>
            <span>الأكثر مبيعاً في المملكة</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-4"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.25,
              color: "#1a2e2e",
            }}
          >
            صلي براحة تامة..{" "}
            <span style={{ color: "#006B6B" }}>وداعاً لآلام</span>
            <br />
            <span style={{ color: "#C5A059" }}>المفاصل</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mb-8"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "#5a6b6b",
              lineHeight: 1.9,
            }}
          >
            السجادة الطبية المعتمدة من خبراء العظام،
            <br />
            لخشوع دون تشتت.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <button
              onClick={scrollToOrder}
              className="group relative px-8 py-4 rounded-2xl text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #C5A059 0%, #d4b06e 50%, #C5A059 100%)",
                backgroundSize: "200% 200%",
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 800,
                fontSize: "1.1rem",
              }}
            >
              <span>🛒</span>
              <span>اطلب الآن ووفر 30%</span>
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
            </button>

            <div className="flex items-center gap-2" style={{ color: "#888" }}>
              <span className="text-green-500">✓</span>
              <span style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.85rem" }}>
                الدفع عند الاستلام
              </span>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border"
                style={{
                  background: "#fff",
                  borderColor: "#e0eded",
                  boxShadow: "0 2px 8px rgba(0,107,107,0.06)",
                }}
              >
                <span>{badge.icon}</span>
                <span
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "0.78rem",
                    color: "#444",
                    fontWeight: 500,
                  }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
            <ImageWithFallback
              src={heroImage}
              alt="رجل مسن يصلي على السجادة الطبية بارتياح تام"
              className="w-full h-full object-cover"
            />
            {/* Warm sunrise overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(197,160,89,0.1) 0%, rgba(0,107,107,0.15) 100%)",
              }}
            />

            {/* Floating rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute top-6 left-6 bg-white rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "#C5A059", fontSize: "0.9rem" }}>★</span>
                ))}
              </div>
              <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.7rem", color: "#555", fontWeight: 600 }}>
                +٢٠٠٠ عميل راضٍ
              </div>
            </motion.div>

            {/* Floating discount badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute bottom-6 left-6 rounded-2xl px-4 py-3 shadow-xl"
              style={{ background: "linear-gradient(135deg, #006B6B, #008080)" }}
            >
              <div className="text-white text-center">
                <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: "1.4rem", fontWeight: 900 }}>30%</div>
                <div style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.65rem", opacity: 0.9 }}>خصم لفترة محدودة</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative ring */}
          <div
            className="absolute -top-4 -right-4 w-32 h-32 rounded-full border-2 opacity-20"
            style={{ borderColor: "#C5A059" }}
          />
          <div
            className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-30"
            style={{ background: "#006B6B" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
