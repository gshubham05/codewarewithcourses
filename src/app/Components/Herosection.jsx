"use client";

import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { value: "100+", label: "Students Trained", icon: "🎓" },
  { value: "50+",  label: "Live Projects",    icon: "🚀" },
  { value: "98%",  label: "Board Exam Pass Rate",   icon: "📝" },
  { value: "10+",  label: "Expert Mentors",   icon: "👨‍💻" },
];

const techBadges = [
  { name: "MERN Stack", color: "bg-green-500/20 border-green-400/40 text-green-300" },
  { name: "Python",     color: "bg-yellow-500/20 border-yellow-400/40 text-yellow-300" },
  { name: "Java",       color: "bg-orange-500/20 border-orange-400/40 text-orange-300" },
  { name: "React.js",   color: "bg-blue-500/20 border-blue-400/40 text-blue-300" },
  { name: "Next.js",    color: "bg-gray-500/20 border-gray-400/40 text-gray-300" },
  { name: "AI / ML",    color: "bg-purple-500/20 border-purple-400/40 text-purple-300" },
];

export default function HeroBanner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleDemoClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "demo_booking_click", page: "hero" });
    }
    window.open(
      "https://wa.me/9837218345?text=Hi%2C%20I%20want%20to%20book%20a%20FREE%20Demo%20Class!",
      "_blank"
    );
  };

  const handleCallClick = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "phone_click", phone_number: "9837218345" });
    }
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen mt-[4rem] sm:mt-[4.5rem] px-4 overflow-hidden"
      aria-label="Hero Banner"
    >
      {/* Video BG */}
      <video autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover z-0" aria-hidden="true">
        <source src="/144590-785095798.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-[#040A26] z-[1]" aria-hidden="true" />
      <div className="absolute inset-0 z-[1] opacity-[0.07]"
        style={{ backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)", backgroundSize: "55px 55px" }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/15 rounded-full blur-3xl z-[1] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/15 rounded-full blur-3xl z-[1] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto text-white px-2 sm:px-6 py-12 sm:py-20 w-full">

        {/* Urgency + Trust badges row */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm border border-red-400/40 rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-red-200">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
            🔥 May Batch — Only 4 Seats Left!
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-purple-200">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
            🏆 #1 IT Training Institute in Dehradun
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4">
          <span className="block text-white">Empower Your Future</span>
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent min-h-[1.2em]">
            {mounted && (
              <Typewriter
                words={["with MERN Stack", "with Python & AI", "with Full Stack Dev", "with Codeware IT"]}
                loop={0} cursor cursorStyle="|" typeSpeed={75} deleteSpeed={45} delaySpeed={2200}
              />
            )}
          </span>
        </h1>

        {/* Sub */}
        <p className="text-sm sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mt-3">
          Join Dehradun's most trusted coding institute —
          <strong className="text-white"> real-world projects</strong>, expert mentorship &amp;
          <strong className="text-white"> guaranteed results guaranteed placement supportamp; placement support</strong>.
        </p>

        {/* Phone + WhatsApp row */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:9837218345"
            onClick={handleCallClick}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            📞 <span>+91 98372 18345</span>
          </a>
          <a
            href="https://wa.me/9837218345"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 border border-green-400/40 text-green-300 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            💬 WhatsApp Us
          </a>
        </div>

        {/* PRIMARY CTA Buttons */}
        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={handleDemoClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 hover:-translate-y-0.5"
          >
            🎁 Book FREE Demo Class
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <Link href="/Courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:scale-105 hover:-translate-y-0.5">
            📚 Explore Courses
          </Link>
        </div>

        <p className="mt-3 text-xs text-gray-400">✓ No Cost &nbsp;·&nbsp; ✓ No Obligation &nbsp;·&nbsp; ✓ Meet Your Instructor Before You Commit</p>

        {/* Stats row */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl py-3 sm:py-4 px-2">
              <div className="text-xl sm:text-2xl mb-0.5">{s.icon}</div>
              <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">{s.value}</div>
              <div className="text-xs text-gray-400 mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
          {techBadges.map((b, i) => (
            <span key={i} className={`inline-flex items-center backdrop-blur-sm border rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium ${b.color}`}>
              {b.name}
            </span>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="mt-10 sm:mt-14 flex flex-col items-center gap-2 text-white/30 text-xs">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center pt-1">
            <div className="w-1 h-2.5 bg-purple-400/70 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
