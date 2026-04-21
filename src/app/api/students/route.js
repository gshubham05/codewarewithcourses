import { NextResponse } from "next/server";
import Student from "../../models/Student";
import { connectDB } from "../../lib/db";
import { verifyToken } from "../../lib/verifyToken";
import nodemailer from "nodemailer";

/* ============================
   POST → PUBLIC (Lead Form)
============================ */
export async function POST(req) {
  try {
    await connectDB();

    const { name, email, phone, course, qualification } = await req.json();

    if (!name || !email || !phone || !course || !qualification) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ SAVE TO MONGODB (FIRST)
    const student = await Student.create({
      name,
      email,
      phone,
      course,
      qualification,
    });

    /* ============================
       EMAIL (OPTIONAL - SAFE)
    ============================ */
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Codeware IT Leads" <${process.env.EMAIL_USER}>`,
        to: "gshubham.05@gmail.com",
        subject: "📚 New Course Enquiry",
        html: `
          <h2>New Student Enquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Course:</b> ${course}</p>
          <p><b>Qualification:</b> ${qualification}</p>
        `,
      });
    } catch (mailError) {
      console.error("⚠️ Email failed but data saved:", mailError);
    }

    return NextResponse.json({ success: true, student });
  } catch (error) {
    console.error("❌ API ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
