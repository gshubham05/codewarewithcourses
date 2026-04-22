"use client";

import { useState, useEffect } from "react";

const batches = [
  {
    course: "ICSE Class 9/10 — Java",
    date: "May 1, 2026",
    time: "Mon·Wed·Fri | 5–6 PM",
    seats: 3,
    total: 10,
    tag: "School",
    tagColor: "bg-blue-100 text-blue-700",
    href: "/Courses/icse-class-9-java-dehradun",
  },
  {
    course: "CBSE Class 11/12 — Python",
    date: "May 1, 2026",
    time: "Mon·Wed·Fri | 6–7 PM",
    seats: 5,
    total: 12,
    tag: "School",
    tagColor: "bg-green-100 text-green-700",
    href: "/Courses/cbse-class-11-python-dehradun",
  },
  {
    course: "MERN Stack — Job Ready",
    date: "May 10, 2026",
    time: "Mon–Fri | 10 AM–12 PM",
    seats: 4,
    total: 15,
    tag: "Job Ready",
    tagColor: "bg-purple-100 text-purple-700",
    href: "/Courses/fullstack-course-dehradun",
  },
  {
    course: "BCA / BTech Programming",
    date: "May 5, 2026",
    time: "Weekends | 11 AM–1 PM",
    seats: 6,
    total: 12,
    tag: "College",
    tagColor: "bg-orange-100 text-orange-700",
    href: "/Courses/java-python-programming-dehradun",
  },
];

function SeatBar({ seats, total }) {
  const pct = Math.round(((total - seats) / total) * 100);
  const urgency = seats <= 3 ? "bg-red-500" : seats <= 5 ? "bg-orange-400" : "bg-green-500";
  return (
    <div className="mt-3">
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{total - seats} enrolled</span>
        <span className={seats <= 3 ? "text-red-600 font-bold" : "text-gray-500"}>
          {seats <= 3 ? `⚠️ Only ${seats} seats left!` : `${seats} seats available`}
        </span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className={`h-2 rounded-full transition-all ${urgency}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function BatchSchedule() {
  const handleBook = (courseName) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "demo_booking_click", course: courseName, page: "batch_schedule" });
    }
    window.open(
      `https://wa.me/9837218345?text=Hi%2C%20I%20want%20to%20book%20a%20FREE%20Demo%20for%20${encodeURIComponent(courseName)}`,
      "_blank"
    );
  };

  return (
    <section className="py-14 sm:py-20 bg-[#040A26]" aria-labelledby="batches-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-3">
            🔥 Limited Seats Available
          </span>
          <h2 id="batches-heading" className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
            Upcoming Batches — May 2026
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Small batches of max 10–15 students for personalized attention. Seats fill fast — book your free demo today.
          </p>
        </div>

        {/* Batch cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {batches.map((b, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col hover:bg-white/10 transition-all hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${b.tagColor}`}>{b.tag}</span>
                {b.seats <= 3 && (
                  <span className="text-xs bg-red-500/20 border border-red-400/30 text-red-300 px-2 py-0.5 rounded-full">ALMOST FULL</span>
                )}
              </div>
              <h3 className="text-white font-bold text-sm leading-snug mb-2">{b.course}</h3>
              <div className="text-gray-400 text-xs space-y-1">
                <p>📅 Starts: <span className="text-gray-200">{b.date}</span></p>
                <p>⏰ {b.time}</p>
              </div>
              <SeatBar seats={b.seats} total={b.total} />
              <button
                onClick={() => handleBook(b.course)}
                className="mt-4 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              >
                Book FREE Demo
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-sm mb-4">Can't find your preferred time? We also offer 1-on-1 sessions &amp; weekend batches.</p>
          <a
            href="tel:9837218345"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
          >
            📞 Call Us: +91 98372 18345
          </a>
        </div>
      </div>
    </section>
  );
}
