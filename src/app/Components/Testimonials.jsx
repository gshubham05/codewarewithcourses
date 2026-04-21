"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1, type: "text",
    name: "Rahul Sharma", role: "Full Stack Dev @ TechCorp India",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    rating: 5, course: "MERN Stack", location: "Dehradun",
    text: "Codeware IT completely transformed my career! The MERN stack training was hands-on and practical. Within 3 months I landed a ₹6 LPA package.",
  },
  {
    id: 2, type: "text",
    name: "Priya Negi", role: "Python Developer @ StartupHub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5, course: "Python & AI", location: "Haridwar",
    text: "Best investment of my life! The Python & AI course here is top-notch. I went from zero coding knowledge to getting placed in just 4 months!",
  },
  {
    id: 3, type: "text",
    name: "Arjun Bisht", role: "React Developer @ WebAgency",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
    rating: 5, course: "Full Stack Dev", location: "Dehradun",
    text: "Small batches, personalized attention, and practical projects made all the difference. Got placed before I even finished the course!",
  },
  {
    id: 4, type: "text",
    name: "Sneha Rawat", role: "Java Developer @ InfoSys Partner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
    rating: 5, course: "Java Development", location: "Roorkee",
    text: "The Java course curriculum is aligned with industry standards. Placement team helped me crack interviews at 3 companies!",
  },
  {
    id: 5, type: "text",
    name: "Amit Kumar", role: "Software Engineer @ MNC",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    rating: 5, course: "MERN Stack", location: "Dehradun",
    text: "CodewareIT's mentorship program is genuinely different. Every session involves building something real. The community boosted my confidence massively.",
  },
  {
    id: 6, type: "text",
    name: "Kavita Thakur", role: "Frontend Dev @ Remote Agency",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavita",
    rating: 5, course: "React & Next.js", location: "Mussoorie",
    text: "Trainers have actual industry experience. Got a remote job offer from a Bangalore company — couldn't be happier!",
  },
];

const courseColors = {
  "MERN Stack":      "bg-green-100 text-green-700",
  "Python & AI":     "bg-yellow-100 text-yellow-700",
  "Full Stack Dev":  "bg-blue-100 text-blue-700",
  "Java Development":"bg-orange-100 text-orange-700",
  "React & Next.js": "bg-purple-100 text-purple-700",
};

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

export default function Testimonials() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "MERN Stack", "Python & AI", "Full Stack Dev", "Java Development", "React & Next.js"];
  const shown = filter === "All" ? testimonials : testimonials.filter((t) => t.course === filter);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-3">
            ⭐ Student Success Stories
          </span>
          <h2 id="testimonials-heading" className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#040A26] mb-3">
            Real Students. Real Results.
          </h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            Hear directly from students who transformed their careers with Codeware IT.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-xs sm:text-sm text-gray-600">
            <span>⭐ <strong>4.9/5</strong> avg rating</span>
            <span>🎓 <strong>500+</strong> students trained</span>
            <span>💼 <strong>95%</strong> placement rate</span>
          </div>
        </div>

        {/* Filters — horizontally scrollable on mobile */}
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
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-purple-100 flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs leading-snug">{t.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Stars n={t.rating} />
                    <span className="text-xs text-gray-400">📍 {t.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1 relative z-10">"{t.text}"</p>

              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${courseColors[t.course] || "bg-gray-100 text-gray-600"}`}>
                  {t.course}
                </span>
                <span className="text-xs text-green-600 font-medium">✅ Verified</span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <p className="text-gray-500 text-sm mb-3">Ready to write your own success story?</p>
          <a href="https://wa.me/9837218345" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-purple-200 hover:scale-105 transition-transform text-sm sm:text-base">
            💬 Talk to a Counselor — It's Free
          </a>
        </div>
      </div>
    </section>
  );
}
