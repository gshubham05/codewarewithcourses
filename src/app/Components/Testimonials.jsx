"use client";

import { useState } from "react";
import Link from "next/link";

// Real students from codewareit.in/Students
const realStudents = [
  {
    id: 1,
    name: "Prajwal Singh",
    course: "Java Programming",
    school: "Oasis Academy School",
    type: "ICSE",
    photo: null, // Will use initials avatar
    initials: "PS",
    color: "from-blue-500 to-indigo-600",
    text: "The Java programming course at Codeware IT completely changed how I approach problem-solving. The practical, hands-on teaching style made board exam preparation feel easy and fun.",
    rating: 5,
    badge: "ICSE Java",
    badgeColor: "bg-blue-100 text-blue-700",
    hasCertificate: true,
  },
  {
    id: 2,
    name: "Arjun Anad",
    course: "Java Programming",
    school: "Summer Valley Dehradun",
    type: "ICSE",
    photo: null,
    initials: "AA",
    color: "from-green-500 to-teal-600",
    text: "Codeware IT's structured Java curriculum helped me understand OOP concepts clearly. The small batch size meant I got personal attention every class — something you never get in school.",
    rating: 5,
    badge: "ICSE Java",
    badgeColor: "bg-blue-100 text-blue-700",
    hasCertificate: true,
  },
  {
    id: 3,
    name: "Anurag Rawat",
    course: "MERN Stack",
    school: "DBIT Dehradun",
    type: "College",
    photo: null,
    initials: "AR",
    color: "from-purple-500 to-pink-600",
    text: "The MERN Stack course gave me industry-ready skills. Real projects, GitHub portfolio, and the mentorship I received at Codeware IT helped me stand out in campus placements.",
    rating: 5,
    badge: "MERN Stack",
    badgeColor: "bg-green-100 text-green-700",
    hasCertificate: false,
  },
  {
    id: 4,
    name: "Aman",
    course: "MERN Stack",
    school: "DBIT Dehradun",
    type: "College",
    photo: null,
    initials: "AM",
    color: "from-orange-500 to-red-500",
    text: "From barely knowing HTML to building full-stack applications in 6 months — that's what Codeware IT did for me. The placement support and interview prep made all the difference.",
    rating: 5,
    badge: "MERN Stack",
    badgeColor: "bg-green-100 text-green-700",
    hasCertificate: false,
  },
  {
    id: 5,
    name: "Priya Negi",
    course: "Python & AI",
    school: "BCA Graduate",
    type: "College",
    photo: null,
    initials: "PN",
    color: "from-yellow-500 to-orange-500",
    text: "Best investment of my life! The Python & AI course is top-notch. I went from zero coding knowledge to getting placed in just 4 months. Highly recommend Codeware IT!",
    rating: 5,
    badge: "Python & AI",
    badgeColor: "bg-yellow-100 text-yellow-700",
    hasCertificate: false,
  },
  {
    id: 6,
    name: "Sneha Rawat",
    course: "Java Development",
    school: "BTech CSE",
    type: "College",
    photo: null,
    initials: "SR",
    color: "from-teal-500 to-cyan-600",
    text: "The Java course curriculum is perfectly aligned with industry standards. The placement team at Codeware IT helped me crack interviews at 3 companies simultaneously!",
    rating: 5,
    badge: "Java Development",
    badgeColor: "bg-orange-100 text-orange-700",
    hasCertificate: false,
  },
];

const filters = ["All", "ICSE Java", "MERN Stack", "Python & AI", "Java Development"];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < n ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ student }) {
  return (
    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${student.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
      <span className="text-white font-bold text-lg">{student.initials}</span>
    </div>
  );
}

export default function Testimonials() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? realStudents : realStudents.filter((t) => t.badge === filter);

  const handleWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "whatsapp_click", page: "testimonials" });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-3">
            ⭐ Real Student Success Stories
          </span>
          <h2 id="testimonials-heading" className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#040A26] mb-3">
            Real Students. Real Results.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Hear directly from our students who transformed their careers &amp; scores at Codeware IT, Dehradun.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-xs sm:text-sm text-gray-600">
            <span>⭐ <strong>5.0/5</strong> Google Rating</span>
            <span>🎓 <strong>100+</strong> students trained</span>
            <span>📝 <strong>98%</strong> board exam pass rate</span>
            <span>📝 <strong>98%</strong> board exam pass rate</span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 sm:flex-wrap sm:justify-center overflow-x-auto pb-2 sm:pb-0 mb-8 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                filter === f
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-400 hover:text-purple-600"
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {shown.map((t) => (
            <article key={t.id} className="group bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden flex flex-col">
              {/* Decorative quote */}
              <div className="absolute top-3 right-4 text-6xl text-purple-50 font-serif leading-none select-none pointer-events-none">"</div>

              <div className="flex items-start gap-3 mb-4">
                <Avatar student={t} />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs leading-snug">{t.course} · {t.school}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Stars n={t.rating} />
                    <span className="text-xs text-gray-400">📍 Dehradun</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 relative z-10">"{t.text}"</p>

              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.badgeColor}`}>
                  {t.badge}
                </span>
                <span className="text-xs text-green-600 font-medium">✅ Verified Student</span>
                {t.hasCertificate && (
                  <span className="text-xs text-blue-600 font-medium">🏅 Certified</span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* View all students CTA */}
        <div className="text-center mt-8">
          <Link href="/Students" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm border border-purple-200 hover:border-purple-400 px-5 py-2.5 rounded-full transition-all hover:bg-purple-50">
            👨‍🎓 View All Our Students
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
          <p className="text-gray-700 font-semibold text-lg mb-1">Ready to write your own success story?</p>
          <p className="text-gray-500 text-sm mb-5">Book a FREE demo class — no cost, no obligation. Meet your instructor first.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/9837218345?text=Hi%2C%20I%20want%20to%20book%20a%20FREE%20Demo%20Class!"
              target="_blank" rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-purple-200 hover:scale-105 transition-transform text-sm sm:text-base"
            >
              🎁 Book FREE Demo Class
            </a>
            <a
              href="tel:9837218345"
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
            >
              📞 Call: +91 98372 18345
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
