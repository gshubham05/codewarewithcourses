"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const BATCH_DATE = process.env.NEXT_PUBLIC_BATCH_DATE || "May 12, 2025";
const SEATS_LEFT = process.env.NEXT_PUBLIC_SEATS_LEFT || "12";

function fireGA4(eventName, params = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

function fireAdsConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", { send_to: "AW-16549958925/APPLY_LABEL" });
  }
}

// Floating code particles background
function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Geometric gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(232,89,60,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 70%, rgba(29,158,117,0.10) 0%, transparent 60%), radial-gradient(ellipse 100% 100% at 50% 50%, #F8F7F4 0%, #FFFFFF 100%)",
        }}
      />
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#2C2C2A 1px, transparent 1px), linear-gradient(90deg, #2C2C2A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full border border-[#E8593C]/10" />
      <div className="absolute top-[-40px] right-[-40px] w-[320px] h-[320px] rounded-full border border-[#E8593C]/10" />
      <div className="absolute bottom-[-60px] left-[-60px] w-[340px] h-[340px] rounded-full border border-[#1D9E75]/10" />

      {/* Floating code snippets */}
      <div className="hidden lg:block absolute top-28 right-[5%] opacity-[0.07] text-[11px] font-mono text-[#2C2C2A] whitespace-pre leading-5 select-none">
        {`const stack = ['MongoDB','Express',\n  'React','Node.js'];\n\nstack.forEach(tech => {\n  buildFuture(tech);\n});`}
      </div>
      <div className="hidden lg:block absolute bottom-28 left-[3%] opacity-[0.07] text-[11px] font-mono text-[#2C2C2A] whitespace-pre leading-5 select-none">
        {`def get_job_ready():\n  skills = learn(python)\n  projects = build(skills)\n  return hired`}
      </div>
    </div>
  );
}

export default function NewHero({ onOpenForm }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c >= 500) { clearInterval(timer); return 500; }
        return c + 8;
      });
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const handleApplyClick = () => {
    fireGA4("cta_click", { section: "hero" });
    fireGA4("cta_hero_click");
    fireAdsConversion();
    if (onOpenForm) onOpenForm();
    else {
      const el = document.getElementById("apply-form");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCallClick = () => {
    fireGA4("call_click", { section: "hero" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4"
      aria-label="Hero — IT Training Dehradun"
    >
      <TechBackground />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Urgency pill */}
        <div className="inline-flex items-center gap-2 bg-[#E8593C]/10 border border-[#E8593C]/25 rounded-full px-4 py-2 mb-6 text-sm font-semibold text-[#E8593C]">
          <span className="w-2 h-2 bg-[#E8593C] rounded-full animate-pulse flex-shrink-0" />
          🔥 Next batch starts {BATCH_DATE} — Only {SEATS_LEFT} seats left
        </div>

        {/* H1 — primary SEO keyword */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black leading-[1.05] tracking-tight text-[#2C2C2A] mb-5"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Get Job-Ready in IT —
          <br />
          <span
            className="relative"
            style={{
              background: "linear-gradient(135deg, #E8593C 0%, #d94a2e 40%, #1D9E75 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            MERN, Python &amp; Java
          </span>
          <br />
          Training in Dehradun
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#5F5E5A] max-w-2xl mx-auto mb-8 leading-relaxed">
          <strong className="text-[#2C2C2A]">500+ students placed across India</strong> · School to
          PG · Internship + Certificate
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6">
          <button
            onClick={handleApplyClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-[10px] shadow-lg transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-100"
            style={{ background: "linear-gradient(135deg, #E8593C, #c9422a)", boxShadow: "0 8px 24px rgba(232,89,60,0.35)" }}
          >
            Apply for Free Counselling →
          </button>
          <a
            href="tel:+919837218345"
            onClick={handleCallClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-4 rounded-[10px] border-2 border-[#2C2C2A]/15 text-[#2C2C2A] hover:border-[#2C2C2A]/30 hover:bg-[#2C2C2A]/5 transition-all"
          >
            📞 Call Now
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className="text-xs text-[#5F5E5A]/70 mb-12">
          ✓ No cost &nbsp;·&nbsp; ✓ No obligation &nbsp;·&nbsp; ✓ Meet your instructor before you commit
        </p>

        {/* Animated counter cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {[
            { value: `${count}+`, label: "Students Placed", color: "#E8593C" },
            { value: "8+", label: "Years Experience", color: "#1D9E75" },
            { value: "20+", label: "Courses Offered", color: "#E8593C" },
            { value: "95%", label: "Boards Marks", color: "#1D9E75" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-[12px] border border-[#2C2C2A]/8 px-4 py-4 text-center shadow-sm"
            >
              <div className="text-2xl sm:text-3xl font-black" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-xs text-[#5F5E5A] mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
