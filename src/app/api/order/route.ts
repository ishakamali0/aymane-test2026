import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, wilaya, commune, quantity } = body;

    // 1. إعداد رسالة التليجرام بتنسيق احترافي
    const telegramMessage = `
🛍️ **طلب جديد من الموقع!**
────────────────
👤 **الاسم:** ${name}
📞 **الهاتف:** ${phone}
📍 **الولاية:** ${wilaya}
🏘️ **البلدية:** ${commune}
📦 **الكمية:** ${quantity}
────────────────
⏰ **التوقيت:** ${new Date().toLocaleString('ar-DZ')}
    `.trim();

    // 2. إرسال إلى Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    
    const telegramPromise = fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "Markdown",
      }),
    });

    // 3. إرسال إلى Google Sheets (اختياري إذا أردت معالجة الإثنين معاً)
    const googleSheetUrl = process.env.GOOGLE_SCRIPT_URL;
    const sheetPromise = googleSheetUrl 
      ? fetch(googleSheetUrl, { method: "POST", body: JSON.stringify(body) })
      : Promise.resolve();

    // تنفيذ الطلبات بالتوازي لسرعة الاستجابة
    await Promise.all([telegramPromise, sheetPromise]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Order Error:", error);
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
  }
}