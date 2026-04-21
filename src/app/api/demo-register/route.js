import { NextResponse } from "next/server";

// ✅ Replace with your actual WhatsApp number in .env
// Format: country code + number, no +, no spaces
// Example: 917895123456  (91 = India)
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER || "917895XXXXXX";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, classOrCourse, course, school } = body;

    if (!name || !phone || !classOrCourse || !course) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Build a clean WhatsApp message
    const lines = [
      `📚 *Free Demo Registration — Codeware IT*`,
      ``,
      `👤 *Name:* ${name}`,
      `📞 *Phone:* +91${phone}`,
      `🎓 *Class / Course:* ${classOrCourse}`,
      school ? `🏫 *School:* ${school}` : null,
      `📘 *Course:* ${course}`,
      ``,
      `_Registered via codewareit.in_`,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;

    return NextResponse.json({ success: true, waUrl });
  } catch (err) {
    console.error("Demo register error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
