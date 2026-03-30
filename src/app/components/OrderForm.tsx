import React, { useState } from "react";
import { motion } from "motion/react";

const cities = [
  "الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام",
  "الخبر", "الظهران", "تبوك", "أبها", "القصيم", "حائل",
  "نجران", "جازان", "القطيف", "الأحساء", "الطائف",
  "دبي", "أبوظبي", "الكويت", "الدوحة", "المنامة", "مسقط", "عمّان", "بيروت", "القاهرة",
];

const quantities = [
  { value: "1", label: "١ سجادة — ١٩٩ ريال", badge: null },
  { value: "2", label: "٢ سجادات — ٣٤٩ ريال", badge: "وفّر ٢٥%" },
  { value: "3", label: "٣ سجادات — ٤٧٩ ريال", badge: "الأكثر توفيراً 🔥" },
];

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    quantity: "1",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "يرجى إدخال الاسم الكامل";
    if (!formData.phone.match(/^[0-9+\-\s]{9,15}$/)) errs.phone = "يرجى إدخال رقم هاتف صحيح";
    if (!formData.city) errs.city = "يرجى اختيار المدينة";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="order-form"
        dir="rtl"
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f4f9f9, #fff8ec)" }}
      >
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.7 }}
            className="rounded-3xl p-12 shadow-2xl"
            style={{ background: "#fff", border: "2px solid #b0e8d0" }}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h3
              className="mb-3"
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 900,
                fontSize: "1.6rem",
                color: "#006B6B",
              }}
            >
              تم استلام طلبك!
            </h3>
            <p style={{ fontFamily: "'Cairo', sans-serif", color: "#5a6b6b", lineHeight: 1.9 }}>
              شكراً لك <strong>{formData.name}</strong>،
              <br />
              سيتصل بك فريقنا على الرقم <strong style={{ color: "#006B6B" }}>{formData.phone}</strong>
              <br />
              لتأكيد طلبك وترتيب التوصيل إلى <strong>{formData.city}</strong>
            </p>
            <div
              className="mt-6 p-4 rounded-xl"
              style={{ background: "#f0faf6", border: "1px solid #b0e8d0" }}
            >
              <p style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.85rem", color: "#2a8a5a" }}>
                ✓ الدفع عند الاستلام · ✓ توصيل مجاني · ✓ ضمان سنة كاملة
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="order-form"
      dir="rtl"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f4f9f9 0%, #fff8ec 100%)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #006B6B, #C5A059, #006B6B)" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: Benefits */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-right"
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
            عرض محدود المدة ⚡
          </span>

          <h2
            className="mb-5"
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.3rem)",
              color: "#1a2e2e",
              lineHeight: 1.4,
            }}
          >
            لا تفوّت هذا{" "}
            <span style={{ color: "#C5A059" }}>العرض الاستثنائي</span>
          </h2>

          {/* Price Display */}
          <div
            className="rounded-2xl p-6 mb-6"
            style={{ background: "#fff", border: "1px solid #e0eded", boxShadow: "0 4px 20px rgba(0,107,107,0.08)" }}
          >
            <div className="flex items-center justify-between mb-2">
              <span style={{ fontFamily: "'Cairo', sans-serif", color: "#999", textDecoration: "line-through", fontSize: "1.1rem" }}>
                ٢٨٩ ريال
              </span>
              <span
                className="px-3 py-1 rounded-full text-sm"
                style={{ background: "#ffe8e8", color: "#e05555", fontFamily: "'Cairo', sans-serif", fontWeight: 700 }}
              >
                خصم ٣٠%
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 900,
                  fontSize: "2.5rem",
                  color: "#006B6B",
                }}
              >
                ١٩٩
              </span>
              <span style={{ fontFamily: "'Cairo', sans-serif", color: "#006B6B", fontSize: "1rem" }}>ريال فقط</span>
            </div>
            <p style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.8rem", color: "#999", marginTop: 4 }}>
              الدفع عند الاستلام — بدون أي رسوم مسبقة
            </p>
          </div>

          {/* What's included */}
          {[
            { icon: "🧘", text: "سجادة طبية فاخرة بثلاث طبقات" },
            { icon: "🚚", text: "توصيل مجاني لجميع المدن" },
            { icon: "📦", text: "تغليف فاخر مناسب للهدايا" },
            { icon: "🔄", text: "ضمان الاستبدال لمدة سنة" },
            { icon: "📞", text: "دعم عملاء على مدار الساعة" },
            { icon: "💳", text: "الدفع عند الاستلام — بدون مخاطرة" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-3">
              <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
              <span style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.9rem", color: "#4a6b6b" }}>
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Right: Order Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="rounded-3xl p-8 shadow-2xl border"
            style={{
              background: "#fff",
              borderColor: "#e0eded",
              boxShadow: "0 20px 60px rgba(0,107,107,0.12)",
            }}
          >
            {/* Form header */}
            <div className="text-center mb-7">
              <div className="text-3xl mb-2">🛒</div>
              <h3
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.3rem",
                  color: "#1a2e2e",
                }}
              >
                احجز سجادك الآن
              </h3>
              <p
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: "0.82rem",
                  color: "#7a9090",
                  marginTop: 4,
                }}
              >
                الدفع عند الاستلام — لا حاجة لبطاقة بنكية
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#2a4040",
                  }}
                >
                  الاسم الكامل <span style={{ color: "#e05555" }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border outline-none transition-all duration-200"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "0.9rem",
                    color: "#1a2e2e",
                    borderColor: errors.name ? "#e05555" : "#d0e0e0",
                    background: errors.name ? "#fff8f8" : "#f8fbfb",
                    textAlign: "right",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#006B6B";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.name ? "#e05555" : "#d0e0e0";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {errors.name && (
                  <p style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.75rem", color: "#e05555", marginTop: 4 }}>
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#2a4040",
                  }}
                >
                  رقم الهاتف <span style={{ color: "#e05555" }}>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="05XXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border outline-none transition-all duration-200"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "0.9rem",
                    color: "#1a2e2e",
                    borderColor: errors.phone ? "#e05555" : "#d0e0e0",
                    background: errors.phone ? "#fff8f8" : "#f8fbfb",
                    direction: "ltr",
                    textAlign: "left",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#006B6B";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.phone ? "#e05555" : "#d0e0e0";
                    e.target.style.boxShadow = "none";
                  }}
                />
                {errors.phone && (
                  <p style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.75rem", color: "#e05555", marginTop: 4 }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#2a4040",
                  }}
                >
                  المدينة <span style={{ color: "#e05555" }}>*</span>
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border outline-none transition-all duration-200 cursor-pointer"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontSize: "0.9rem",
                    color: formData.city ? "#1a2e2e" : "#9ab0b0",
                    borderColor: errors.city ? "#e05555" : "#d0e0e0",
                    background: errors.city ? "#fff8f8" : "#f8fbfb",
                    textAlign: "right",
                    appearance: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#006B6B";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,107,107,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.city ? "#e05555" : "#d0e0e0";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <option value="">اختر مدينتك</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                {errors.city && (
                  <p style={{ fontFamily: "'Cairo', sans-serif", fontSize: "0.75rem", color: "#e05555", marginTop: 4 }}>
                    {errors.city}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "'Cairo', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "#2a4040",
                  }}
                >
                  الكمية
                </label>
                <div className="space-y-2">
                  {quantities.map((q) => (
                    <label
                      key={q.value}
                      className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200"
                      style={{
                        borderColor: formData.quantity === q.value ? "#006B6B" : "#d0e0e0",
                        background: formData.quantity === q.value ? "#e8f5f5" : "#f8fbfb",
                      }}
                    >
                      <input
                        type="radio"
                        name="quantity"
                        value={q.value}
                        checked={formData.quantity === q.value}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        style={{ accentColor: "#006B6B" }}
                      />
                      <span
                        className="flex-1"
                        style={{
                          fontFamily: "'Cairo', sans-serif",
                          fontSize: "0.85rem",
                          color: "#2a4040",
                          fontWeight: formData.quantity === q.value ? 700 : 400,
                        }}
                      >
                        {q.label}
                      </span>
                      {q.badge && (
                        <span
                          className="px-2 py-0.5 rounded-md text-xs"
                          style={{
                            background: q.badge.includes("🔥") ? "#ffe8e8" : "#e0f4f4",
                            color: q.badge.includes("🔥") ? "#e05555" : "#006B6B",
                            fontFamily: "'Cairo', sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {q.badge}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3 mt-2"
                style={{
                  background: loading
                    ? "#888"
                    : "linear-gradient(135deg, #C5A059 0%, #d4b06e 40%, #b89040 100%)",
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.05rem",
                  boxShadow: loading ? "none" : "0 8px 30px rgba(197,160,89,0.4)",
                }}
              >
                {loading ? (
                  <>
                    <div
                      className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"
                    />
                    <span>جاري تأكيد الطلب...</span>
                  </>
                ) : (
                  <>
                    <span>✅</span>
                    <span>تأكيد الطلب — الدفع عند الاستلام</span>
                  </>
                )}
              </button>

              {/* Security note */}
              <p
                className="text-center"
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  fontSize: "0.75rem",
                  color: "#9aabab",
                }}
              >
                🔒 بياناتك محمية ولن تُشارك مع أي جهة
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
