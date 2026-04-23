// ============================================================
// CodewareIT — Lead Capture API  (MongoDB + Email)
// Path: src/app/api/lead/route.js
// ============================================================

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectDB from "@/app/lib/db";
import Lead from "@/app/models/Lead";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, phone, course, city } = body;

    // ── Validation ───────────────────────────────────────────
    if (!name || !phone || !course) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, course" },
        { status: 400 }
      );
    }

    // ── Save to MongoDB ──────────────────────────────────────
    const newLead = new Lead({
      name,
      phone,
      course,
      city: city || "",
      source: "homepage-form",
    });
    await newLead.save();

    // ── Send email notification ──────────────────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"CodewareIT Leads" <${process.env.EMAIL_USER}>`,
      to: "codewareit@gmail.com",
      subject: `🔔 New Lead: ${name} — ${course}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;border:1px solid #eee;border-radius:12px;overflow:hidden">
          <div style="background:#E8593C;padding:20px 24px">
            <h2 style="color:#fff;margin:0;font-size:18px">🔔 New Counselling Lead</h2>
          </div>
          <div style="padding:24px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr>
                <td style="padding:8px 0;color:#5F5E5A;width:100px"><strong>Name</strong></td>
                <td style="padding:8px 0;color:#2C2C2A">${name}</td>
              </tr>
              <tr style="background:#F8F7F4">
                <td style="padding:8px 6px;color:#5F5E5A"><strong>Phone</strong></td>
                <td style="padding:8px 0;color:#2C2C2A">
                  <a href="tel:+91${phone}" style="color:#E8593C;font-weight:bold">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#5F5E5A"><strong>Course</strong></td>
                <td style="padding:8px 0;color:#2C2C2A">${course}</td>
              </tr>
              <tr style="background:#F8F7F4">
                <td style="padding:8px 6px;color:#5F5E5A"><strong>City</strong></td>
                <td style="padding:8px 0;color:#2C2C2A">${city || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding:8px 0;color:#5F5E5A"><strong>Time</strong></td>
                <td style="padding:8px 0;color:#2C2C2A">
                  ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
                </td>
              </tr>
            </table>

            <div style="margin-top:24px">
              <a
                href="https://wa.me/91${phone}?text=Hi%20${encodeURIComponent(name)}%2C%20this%20is%20CodewareIT.%20We%20received%20your%20interest%20in%20${encodeURIComponent(course)}.%20When%20can%20we%20connect%3F"
                style="display:inline-block;background:#25D366;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:13px;margin-right:10px"
              >
                💬 WhatsApp Student
              </a>
              <a
                href="tel:+91${phone}"
                style="display:inline-block;background:#2C2C2A;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:13px"
              >
                📞 Call Student
              </a>
            </div>
          </div>
          <div style="background:#F8F7F4;padding:12px 24px;font-size:11px;color:#5F5E5A">
            Sent from codewareit.in homepage lead form
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Error in POST /api/lead:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
