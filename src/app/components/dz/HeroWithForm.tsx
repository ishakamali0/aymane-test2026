import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

import matImage from "../../../assets/images/mat.jpg";
import foamImage from "../../../assets/images/foam.jpg";

const images = [matImage, foamImage];
// All 58 Algerian Wilayas
const WILAYAS = [
  "01 - أدرار",
  "02 - الشلف",
  "03 - الأغواط",
  "04 - أم البواقي",
  "05 - باتنة",
  "06 - بجاية",
  "07 - بسكرة",
  "08 - بشار",
  "09 - البليدة",
  "10 - البويرة",
  "11 - تمنراست",
  "12 - تبسة",
  "13 - تلمسان",
  "14 - تيارت",
  "15 - تيزي وزو",
  "16 - الجزائر العاصمة",
  "17 - الجلفة",
  "18 - جيجل",
  "19 - سطيف",
  "20 - سعيدة",
  "21 - سكيكدة",
  "22 - سيدي بلعباس",
  "23 - عنابة",
  "24 - قالمة",
  "25 - قسنطينة",
  "26 - المدية",
  "27 - مستغانم",
  "28 - المسيلة",
  "29 - معسكر",
  "30 - ورقلة",
  "31 - وهران",
  "32 - البيض",
  "33 - إليزي",
  "34 - برج بوعريريج",
  "35 - بومرداس",
  "36 - الطارف",
  "37 - تندوف",
  "38 - تيسمسيلت",
  "39 - الوادي",
  "40 - خنشلة",
  "41 - سوق أهراس",
  "42 - تيبازة",
  "43 - ميلة",
  "44 - عين الدفلى",
  "45 - النعامة",
  "46 - عين تموشنت",
  "47 - غرداية",
  "48 - غليزان",
  "49 - تيميمون",
  "50 - برج باجي مختار",
  "51 - أولاد جلال",
  "52 - بني عباس",
  "53 - عين صالح",
  "54 - عين قزام",
  "55 - تقرت",
  "56 - جانت",
  "57 - المغير",
  "58 - المنيعة",
];

const QUANTITIES = [
  { value: "1", label: "قطعة واحدة", price: "2500 دج", oldPrice: null, badge: null },
  { value: "2", label: "قطعتان", price: "4500 دج", oldPrice: "5000 دج", badge: "وفّر 500 دج" },
  { value: "3", label: "3 قطع", price: "6000 دج", oldPrice: "7500 دج", badge: "🔥 الأكثر طلبًا" },
];

type FormState = {
  name: string;
  phone: string;
  wilaya: string;
  commune: string;
  quantity: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export function HeroWithForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    wilaya: "",
    commune: "",
    quantity: "1",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

 

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "الرجاء إدخال الاسم الكامل";
    if (!form.phone.match(/^(0)(5|6|7)[0-9]{8}$/))
      e.phone = "أدخل رقم هاتف جزائري صحيح (0XYZ...)";
    if (!form.wilaya) e.wilaya = "الرجاء اختيار الولاية";
    if (!form.commune.trim()) e.commune = "الرجاء إدخال البلدية";
    return e;
  };

  // داخل handleSubmit في ملف HeroWithForm.tsx
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // تأكد من جلب القيم من البيئة (Environment Variables) 
    // في Vite يجب أن تبدأ بـ VITE_ لتظهر في المتصفح
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const googleUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  
    setLoading(true);
  
    try {
      // 1. إعداد نص الرسالة
      const telegramMessage = `
  🛍️ **طلب جديد!**
  👤 الاسم: ${form.name}
  📞 الهاتف: ${form.phone}
  📍 الولاية: ${form.wilaya}
  🏘️ البلدية: ${form.commune}
  📦 الكمية: ${form.quantity}
      `.trim();
  
      // 2. الإرسال إلى Telegram
      const telegramPromise = fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      });
  
      // 3. الإرسال إلى Google Sheets
      const googlePromise = fetch(googleUrl, {
        method: "POST",
        mode: "no-cors", // مهم جداً مع Google Scripts من المتصفح
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      await Promise.all([telegramPromise, googlePromise]);
      
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء الإرسال");
    } finally {
      setLoading(false);
    }
  };
  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: "1.5px solid #d0e8e8",
    background: "#f8fbfb",
    fontFamily: "'Cairo', sans-serif",
    fontSize: "0.92rem",
    color: "#1a2e2e",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    textAlign: "right" as const,
    direction: "rtl" as const,
  };

  const focusHandlers = (hasError: boolean) => ({
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      e.target.style.borderColor = "#008080";
      e.target.style.boxShadow = "0 0 0 3px rgba(0,128,128,0.12)";
      e.target.style.background = "#fff";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
      e.target.style.borderColor = hasError ? "#e05555" : "#d0e8e8";
      e.target.style.boxShadow = "none";
      e.target.style.background = "#f8fbfb";
    },
  });

  return (
    <section
      id="hero"
      dir="rtl"
      className="w-full"
      style={{
        background: "linear-gradient(160deg, #f0f9f9 0%, #fff 50%, #fffbf3 100%)",
        fontFamily: "'Cairo', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── LEFT: Product + Hook ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Urgency badge */}
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border"
                style={{
                  background: "#fff8ec",
                  borderColor: "#f5d08a",
                  color: "#c47e0a",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse inline-block" />
                عرض محدود — الكميات تنفد!
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
                  color: "#0d2020",
                  lineHeight: 1.35,
                  marginBottom: "0.6rem",
                }}
              >
                تخلص من آلام الركبة والمفاصل..{" "}
                <span style={{ color: "#008080" }}>واطلب سجادتك الطبية الآن!</span>
              </h1>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#5a7070",
                  lineHeight: 1.9,
                  fontWeight: 400,
                }}
              >
                سجادة طبية معتمدة من خبراء العظام — مصنوعة من الميموري فوم عالي الكثافة، تحمي ركبتيك وعمودك الفقري أثناء الصلاة.
              </p>
            </div>

            {/* Product image with thumbnails */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "16/10" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={images[activeImg]}
                    alt="السجادة الطبية"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 60%, rgba(0,50,50,0.3) 100%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Thickness badge */}
              <div
                className="absolute top-4 left-4 rounded-xl px-3 py-2 shadow-lg"
                style={{ background: "rgba(255,255,255,0.95)" }}
              >
                <div style={{ fontSize: "0.65rem", color: "#888", fontWeight: 500 }}>سماكة الميموري فوم</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 900, color: "#008080" }}>6 سم</div>
              </div>

              {/* Thumbnail switchers */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="rounded-lg overflow-hidden border-2 transition-all"
                    style={{
                      width: 44,
                      height: 36,
                      borderColor: activeImg === i ? "#f5a623" : "rgba(255,255,255,0.6)",
                      boxShadow: activeImg === i ? "0 0 0 2px #f5a623" : "none",
                    }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Trust badges row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: "🚚", title: "توصيل لكل الولايات", color: "#008080" },
                { icon: "💳", title: "الدفع عند الاستلام", color: "#008080" },
                { icon: "🛡️", title: "ضمان 7 أيام", color: "#2a7a4a" },
                { icon: "🏅", title: "معتمد طبياً", color: "#c47e0a" },
              ].map((b, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border text-center"
                  style={{ background: "#fff", borderColor: "#e0eaea" }}
                >
                  <span style={{ fontSize: "1.3rem" }}>{b.icon}</span>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: b.color,
                      lineHeight: 1.3,
                    }}
                  >
                    {b.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Social proof mini */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl border"
              style={{ background: "#f0faf6", borderColor: "#b0e0c8" }}
            >
              <div className="flex -space-x-2 flex-shrink-0">
                {["👴", "👵", "🧔"].map((e, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center"
                    style={{ background: "#d0ede0", fontSize: "0.9rem" }}
                  >
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "#f5a623", fontSize: "0.75rem" }}>★</span>
                  ))}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#3a6a50", fontWeight: 600 }}>
                  +2,400 زبون جزائري راضٍ هذا الشهر
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Order Form ── */}
          <motion.div
            id="order-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:sticky lg:top-4"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="rounded-2xl p-8 text-center"
                  style={{
                    background: "#fff",
                    border: "2px solid #80d8b0",
                    boxShadow: "0 20px 60px rgba(0,128,128,0.15)",
                  }}
                >
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>✅</div>
                  <h3
                    style={{
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: "#008080",
                      marginBottom: "0.5rem",
                    }}
                  >
                    تم تسجيل طلبك بنجاح!
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#5a7070", lineHeight: 1.9 }}>
                    شكراً <strong>{form.name}</strong> 🙏
                    <br />
                    سيتصل بك أحد وكلائنا على الرقم{" "}
                    <strong style={{ color: "#008080", direction: "ltr", display: "inline-block" }}>
                      {form.phone}
                    </strong>
                    <br />
                    لتأكيد توصيل طلبك إلى <strong>{form.wilaya}</strong>
                  </p>
                  <div
                    className="mt-5 p-3 rounded-xl"
                    style={{ background: "#f0faf6", border: "1px solid #b0e0c8" }}
                  >
                    <p style={{ fontSize: "0.8rem", color: "#2a7a50", fontWeight: 600 }}>
                      ✓ الدفع عند الاستلام &nbsp;·&nbsp; ✓ توصيل مجاني &nbsp;·&nbsp; ✓ ضمان 7 أيام
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "#fff",
                    boxShadow: "0 20px 60px rgba(0,128,128,0.13), 0 4px 20px rgba(0,0,0,0.06)",
                    border: "1.5px solid #d8eeee",
                  }}
                >
                  {/* Form header bar */}
                  <div
                    className="px-6 py-4 flex items-center justify-between"
                    style={{
                      background: "linear-gradient(90deg, #005f5f, #008080)",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: "#fff",
                          fontWeight: 900,
                          fontSize: "1.05rem",
                          lineHeight: 1.3,
                        }}
                      >
                        سجّل طلبك الآن
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.72rem" }}>
                        الدفع عند الاستلام — بدون أي دفع مسبق
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.15)" }}
                    >
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                      <span style={{ color: "#fff", fontSize: "0.7rem", fontWeight: 600 }}>متاح الآن</span>
                    </div>
                  </div>

                  {/* Discount strip */}
                  <div
                    className="px-6 py-2.5 flex items-center justify-between"
                    style={{ background: "#fffbec", borderBottom: "1px solid #f5e8b0" }}
                  >
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: "0.85rem" }}>⚡</span>
                      <span style={{ fontSize: "0.78rem", color: "#a06010", fontWeight: 700 }}>
                        عرض خاص: خصم 30% لفترة محدودة
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span style={{ fontSize: "0.8rem", color: "#bbb", textDecoration: "line-through" }}>3500 دج</span>
                      <span style={{ fontSize: "1rem", fontWeight: 900, color: "#e07010" }}>2500 دج</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Full Name */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "#2a4040",
                          marginBottom: "6px",
                        }}
                      >
                        الاسم الكامل <span style={{ color: "#e05555" }}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="مثال: أحمد بن علي"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{
                          ...inputBase,
                          borderColor: errors.name ? "#e05555" : "#d0e8e8",
                          background: errors.name ? "#fff8f8" : "#f8fbfb",
                        }}
                        {...focusHandlers(!!errors.name)}
                      />
                      {errors.name && (
                        <p style={{ fontSize: "0.72rem", color: "#e05555", marginTop: 4 }}>
                          ⚠ {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "#2a4040",
                          marginBottom: "6px",
                        }}
                      >
                        رقم الهاتف <span style={{ color: "#e05555" }}>*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="05 XX XX XX XX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={{
                          ...inputBase,
                          borderColor: errors.phone ? "#e05555" : "#d0e8e8",
                          background: errors.phone ? "#fff8f8" : "#f8fbfb",
                          direction: "ltr",
                          textAlign: "left",
                        }}
                        {...focusHandlers(!!errors.phone)}
                      />
                      {errors.phone && (
                        <p style={{ fontSize: "0.72rem", color: "#e05555", marginTop: 4 }}>
                          ⚠ {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Wilaya */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "#2a4040",
                          marginBottom: "6px",
                        }}
                      >
                        الولاية <span style={{ color: "#e05555" }}>*</span>
                      </label>
                      <div style={{ position: "relative" }}>
                        <select
                          value={form.wilaya}
                          onChange={(e) => setForm({ ...form, wilaya: e.target.value })}
                          style={{
                            ...inputBase,
                            borderColor: errors.wilaya ? "#e05555" : "#d0e8e8",
                            background: errors.wilaya ? "#fff8f8" : "#f8fbfb",
                            appearance: "none",
                            cursor: "pointer",
                            color: form.wilaya ? "#1a2e2e" : "#9aabab",
                            paddingLeft: "36px",
                          }}
                          {...focusHandlers(!!errors.wilaya)}
                        >
                          <option value="">اختر ولايتك...</option>
                          {WILAYAS.map((w) => (
                            <option key={w} value={w}>
                              {w}
                            </option>
                          ))}
                        </select>
                        <span
                          style={{
                            position: "absolute",
                            left: "12px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "#008080",
                            pointerEvents: "none",
                            fontSize: "0.8rem",
                          }}
                        >
                          ▼
                        </span>
                      </div>
                      {errors.wilaya && (
                        <p style={{ fontSize: "0.72rem", color: "#e05555", marginTop: 4 }}>
                          ⚠ {errors.wilaya}
                        </p>
                      )}
                    </div>

                    {/* Commune */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "#2a4040",
                          marginBottom: "6px",
                        }}
                      >
                        البلدية <span style={{ color: "#e05555" }}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="اسم بلديتك..."
                        value={form.commune}
                        onChange={(e) => setForm({ ...form, commune: e.target.value })}
                        style={{
                          ...inputBase,
                          borderColor: errors.commune ? "#e05555" : "#d0e8e8",
                          background: errors.commune ? "#fff8f8" : "#f8fbfb",
                        }}
                        {...focusHandlers(!!errors.commune)}
                      />
                      {errors.commune && (
                        <p style={{ fontSize: "0.72rem", color: "#e05555", marginTop: 4 }}>
                          ⚠ {errors.commune}
                        </p>
                      )}
                    </div>

                    {/* Quantity selector */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "#2a4040",
                          marginBottom: "6px",
                        }}
                      >
                        الكمية
                      </label>
                      <div className="flex flex-col gap-2">
                        {QUANTITIES.map((q) => (
                          <label
                            key={q.value}
                            className="flex items-center justify-between px-4 py-3 rounded-xl border cursor-pointer transition-all"
                            style={{
                              borderColor:
                                form.quantity === q.value ? "#008080" : "#d0e8e8",
                              background:
                                form.quantity === q.value ? "#e8f5f5" : "#f8fbfb",
                              borderWidth: form.quantity === q.value ? "2px" : "1.5px",
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="radio"
                                name="quantity"
                                value={q.value}
                                checked={form.quantity === q.value}
                                onChange={(e) =>
                                  setForm({ ...form, quantity: e.target.value })
                                }
                                style={{ accentColor: "#008080", width: 16, height: 16 }}
                              />
                              <span
                                style={{
                                  fontSize: "0.85rem",
                                  fontWeight: form.quantity === q.value ? 700 : 500,
                                  color: "#1a2e2e",
                                }}
                              >
                                {q.label}
                              </span>
                              {q.badge && (
                                <span
                                  className="px-2 py-0.5 rounded-md"
                                  style={{
                                    fontSize: "0.65rem",
                                    fontWeight: 800,
                                    background: q.badge.includes("🔥") ? "#fff0e8" : "#e8f5f5",
                                    color: q.badge.includes("🔥") ? "#e05515" : "#008080",
                                    border: q.badge.includes("🔥") ? "1px solid #f5cdb0" : "1px solid #b0dede",
                                  }}
                                >
                                  {q.badge}
                                </span>
                              )}
                            </div>
                            <div className="text-left flex items-center gap-1.5">
                              {q.oldPrice && (
                                <span style={{ fontSize: "0.72rem", color: "#aaa", textDecoration: "line-through" }}>
                                  {q.oldPrice}
                                </span>
                              )}
                              <span style={{ fontSize: "0.92rem", fontWeight: 800, color: "#008080" }}>
                                {q.price}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Submit CTA */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      style={{
                        padding: "16px 24px",
                        background: loading
                          ? "#ccc"
                          : "linear-gradient(135deg, #f5a623 0%, #e8941a 60%, #d4820e 100%)",
                        color: "#fff",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                        boxShadow: loading
                          ? "none"
                          : "0 8px 30px rgba(245,166,35,0.45), 0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      {loading ? (
                        <>
                          <div
                            className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"
                          />
                          <span>جاري تسجيل طلبك...</span>
                        </>
                      ) : (
                        <>
                          <span>✅</span>
                          <span>تأكيد الطلب بنجاح</span>
                          <span>←</span>
                        </>
                      )}
                    </button>

                    {/* Security line */}
                    <div className="flex items-center justify-center gap-4 pt-1">
                      {["🔒 آمن 100%", "📦 توصيل مجاني", "💳 دفع عند الاستلام"].map((t, i) => (
                        <span
                          key={i}
                          style={{ fontSize: "0.65rem", color: "#8aabab", fontWeight: 500 }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
