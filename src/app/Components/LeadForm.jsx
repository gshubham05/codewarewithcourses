"use client";

import { useState, useEffect } from "react";

const BATCH_DATE = process.env.NEXT_PUBLIC_BATCH_DATE || "May 12, 2025";

const courses = [
  "MERN Stack",
  "React.js",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "DSA",
  "PHP",
  "C / C++ / C#",
  "Full Stack Development",
  "Frontend Development",
  "Backend Development",
  "Industrial Training",
  "Internship Program",
  "School — ICSE Java",
  "School — CBSE Python",
];

function fireGA4(eventName, params = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

function fireAdsConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", { send_to: "AW-16549958925/FORM_SUBMIT_LABEL" });
  }
}

function useCountdown(targetDateStr) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDateStr).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDateStr]);

  return time;
}

export default function LeadForm({ defaultCourse = "" }) {
  const [form, setForm] = useState({ name: "", phone: "", course: defaultCourse, city: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const countdown = useCountdown(BATCH_DATE);

  useEffect(() => {
    if (defaultCourse) setForm((f) => ({ ...f, course: defaultCourse }));
  }, [defaultCourse]);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      e.phone = "Enter a valid 10-digit Indian mobile number.";
    if (!form.course) e.course = "Please select a course.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      fireGA4("form_submit", { course: form.course });
      fireAdsConversion();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-[10px] border text-[#2C2C2A] text-sm outline-none transition-all placeholder-[#5F5E5A]/50 ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-[#2C2C2A]/15 bg-white focus:border-[#E8593C] focus:ring-2 focus:ring-[#E8593C]/15"
    }`;

  return (
    <section
      id="apply-form"
      className="py-20 px-4 bg-[#F8F7F4]"
      aria-label="Apply for free counselling"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#2C2C2A] mb-3">
            Batch filling fast — secure your seat today
          </h2>
          <p className="text-[#5F5E5A] max-w-lg mx-auto mb-6">
            Book your FREE counselling session. No obligation. Our counsellor will guide you to the
            right course for your goals.
          </p>

          {/* Countdown */}
          <div className="inline-flex items-center gap-4 bg-[#2C2C2A] text-white rounded-[14px] px-6 py-4">
            <span className="text-white/60 text-sm font-medium">Next batch in</span>
            {[
              { val: countdown.days, label: "Days" },
              { val: countdown.hours, label: "Hrs" },
              { val: countdown.minutes, label: "Mins" },
              { val: countdown.seconds, label: "Secs" },
            ].map((t, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black" style={{ color: "#E8593C" }}>
                  {String(t.val).padStart(2, "0")}
                </div>
                <div className="text-[10px] text-white/50 font-medium">{t.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-[20px] border border-[#2C2C2A]/8 shadow-xl p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#1D9E75]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1D9E75]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#2C2C2A] mb-2">You&apos;re on the list!</h3>
              <p className="text-[#5F5E5A] text-sm mb-4">
                Our counsellor will call you within 24 hours. For faster response, WhatsApp us.
              </p>
              <a
                href="https://wa.me/919837218345?text=Hi%2C%20I%20just%20applied%20for%20free%20counselling%20at%20CodewareIT!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-[10px] hover:bg-[#1fba58] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.107 1.522 5.83L.057 23.942l6.27-1.447A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.491-5.22-1.351l-.374-.222-3.88.894.92-3.768-.243-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp Us Now
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass("name")}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass("phone")}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-1.5">
                    Course Interest *
                  </label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className={inputClass("course")}
                  >
                    <option value="">Select a course…</option>
                    {courses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-1.5">
                    City <span className="text-[#5F5E5A] font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dehradun"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className={inputClass("city")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full font-black text-white py-4 rounded-[12px] text-base transition-all hover:scale-[1.02] active:scale-100 disabled:opacity-70 mt-2"
                  style={{
                    background: "linear-gradient(135deg, #E8593C, #c9422a)",
                    boxShadow: "0 8px 24px rgba(232,89,60,0.35)",
                  }}
                >
                  {status === "loading" ? "Submitting…" : "Book My Free Counselling Session"}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please{" "}
                    <a href="tel:+919837218345" className="underline">call us directly</a>.
                  </p>
                )}

                <p className="text-center text-xs text-[#5F5E5A]/70">
                  🔒 Your info is safe with us. No spam, ever.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
