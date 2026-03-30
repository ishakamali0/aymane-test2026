import React, { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const matImage = "https://images.unsplash.com/photo-1605249386237-f506931f510d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZ3JlZW4lMjBwcmF5ZXIlMjBtYXQlMjB0ZXh0dXJlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzQ4Njg1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const layers = [
  {
    id: 1,
    title: "طبقة الميموري فوم الذكية",
    description: "تتكيف مع شكل جسمك تلقائياً، توزع الضغط بشكل متساوٍ وتحمي مفاصلك أثناء الصلاة",
    icon: "🧠",
    color: "#006B6B",
    position: { top: "15%", right: "-5%" },
  },
  {
    id: 2,
    title: "قاعدة مانعة للانزلاق",
    description: "تقنية الجريب المتطورة تثبت السجادة على أي سطح لضمان الأمان الكامل أثناء السجود",
    icon: "🔒",
    color: "#C5A059",
    position: { bottom: "20%", right: "-5%" },
  },
  {
    id: 3,
    title: "نسيج طبي ناعم",
    description: "قماش مضاد للبكتيريا، سهل التنظيف، ناعم كالحرير على الجلد ومريح على الركبتين",
    icon: "✨",
    color: "#4a9b7f",
    position: { top: "50%", left: "-5%" },
  },
];

const features = [
  { icon: "💊", text: "معتمد طبياً من أخصائيي العظام" },
  { icon: "🧴", text: "مضاد للبكتيريا والروائح" },
  { icon: "♻️", text: "مواد صديقة للبيئة" },
  { icon: "📏", text: "مقاسات متعددة للعائلة" },
  { icon: "🎨", text: "ألوان وتصاميم متنوعة" },
  { icon: "🔄", text: "ضمان الاستبدال سنة كاملة" },
];

export function SolutionSection() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <section
      dir="rtl"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f4f9f9 0%, #f0f6f6 100%)" }}
    >
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
              background: "linear-gradient(90deg, #e0f4f4, #fff)",
              color: "#006B6B",
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 600,
              border: "1px solid #b0dede",
            }}
          >
            تشريح المنتج
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
            مصممة بدقة علمية{" "}
            <span style={{ color: "#006B6B" }}>لصحة جسمك</span>
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
            ثلاث طبقات متطورة تعمل معاً لتمنحك تجربة صلاة لا مثيل لها
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mat Image with Callouts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            >
              <ImageWithFallback
                src={matImage}
                alt="طبقات السجادة الطبية"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(0,107,107,0.05) 0%, rgba(197,160,89,0.08) 100%)",
                }}
              />
            </div>

            {/* Callout Pointers */}
            {layers.map((layer) => (
              <motion.button
                key={layer.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: layer.id * 0.2 }}
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                className="absolute flex items-center gap-2 cursor-pointer"
                style={layer.position}
              >
                <div
                  className="rounded-xl px-3 py-2 shadow-lg border flex items-center gap-2 transition-all hover:scale-105"
                  style={{
                    background: activeLayer === layer.id ? layer.color : "#fff",
                    borderColor: layer.color,
                    maxWidth: 160,
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{layer.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: activeLayer === layer.id ? "#fff" : layer.color,
                      lineHeight: 1.3,
                    }}
                  >
                    {layer.title}
                  </span>
                </div>
                {/* Connector dot */}
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ background: layer.color, flexShrink: 0 }}
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Layers Detail Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:shadow-lg"
                style={{
                  background: activeLayer === layer.id ? `${layer.color}12` : "#fff",
                  borderColor: activeLayer === layer.id ? layer.color : "#e0eded",
                  borderWidth: activeLayer === layer.id ? 2 : 1,
                }}
                onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{ background: `${layer.color}15`, border: `1px solid ${layer.color}30` }}
                  >
                    <span style={{ fontSize: "1.4rem" }}>{layer.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="mb-1"
                      style={{
                        fontFamily: "'Cairo', sans-serif",
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: layer.color,
                      }}
                    >
                      الطبقة {index + 1}: {layer.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Cairo', sans-serif",
                        fontSize: "0.85rem",
                        color: "#6b7b7b",
                        lineHeight: 1.8,
                      }}
                    >
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Features grid */}
            <div
              className="rounded-2xl p-6 mt-6"
              style={{ background: "linear-gradient(135deg, #006B6B, #008080)" }}
            >
              <h4
                className="mb-4 text-white"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                }}
              >
                ✨ مزايا إضافية
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span style={{ fontSize: "0.9rem" }}>{f.icon}</span>
                    <span
                      style={{
                        fontFamily: "'Cairo', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.9)",
                      }}
                    >
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
