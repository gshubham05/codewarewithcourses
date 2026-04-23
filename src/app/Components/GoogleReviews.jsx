/**
 * GoogleReviews — Displays static Google review cards + links to Google Maps
 * For live Google reviews embed, use Google Places API or a paid widget like Elfsight.
 * This component gives structured review data for schema.org + a visual display.
 */
"use client";

import { FaStar, FaGoogle } from "react-icons/fa";

const reviews = [
  {
    name: "Ankit Rawat",
    rating: 5,
    date: "November 2024",
    text: "Best Java course in Dehradun! Got placed in TCS after completing the course here. Small batch size means personal attention. Highly recommend Codeware IT!",
    avatar: "A",
    color: "#4285F4",
  },
  {
    name: "Priya Singh",
    rating: 5,
    date: "December 2024",
    text: "Joined the MERN Stack course and within 5 months I was freelancing professionally. Codeware IT is truly Dehradun's #1 coding institute. Worth every rupee!",
    avatar: "P",
    color: "#EA4335",
  },
  {
    name: "Vikram Negi",
    rating: 5,
    date: "January 2025",
    text: "Python course was amazing. Covered everything from basics to Django. The instructor explains concepts with real-world examples. Best Python institute in Dehradun!",
    avatar: "V",
    color: "#34A853",
  },
  {
    name: "Sneha Rawat",
    rating: 5,
    date: "February 2025",
    text: "React JS course at Codeware IT is incredibly hands-on. Built 3 real apps and got placed as a React developer. Excellent faculty and great environment!",
    avatar: "S",
    color: "#FBBC04",
  },
];

export default function GoogleReviews() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaGoogle className="text-2xl text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Google Reviews</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <FaStar key={i} className={i <= 4 ? "text-yellow-400 text-xl" : "text-yellow-400 text-xl opacity-70"} />
              ))}
            </div>
            <span className="text-white font-bold text-xl">4.7</span>
            <span className="text-gray-400 text-sm">based on 47 reviews</span>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/xu8jqx467KMPTKzY7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
        >
          <FaGoogle className="text-blue-400" />
          View All on Google
        </a>
      </div>

      {/* Review cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-500/20 transition-all hover:-translate-y-1 duration-200"
          >
            {/* Reviewer */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ background: r.color }}
              >
                {r.avatar}
              </div>
              <div className="min-w-0">
                <p className="text-white font-semibold text-sm truncate">{r.name}</p>
                <p className="text-gray-500 text-xs">{r.date}</p>
              </div>
              <FaGoogle className="ml-auto text-gray-600 text-sm flex-shrink-0" />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {Array(r.rating).fill(0).map((_, j) => (
                <FaStar key={j} className="text-yellow-400 text-xs" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">{r.text}</p>
          </div>
        ))}
      </div>

      {/* Write a review CTA */}
      <div className="mt-8 text-center">
        <a
          href="https://maps.app.goo.gl/xu8jqx467KMPTKzY7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition border border-white/10 hover:border-white/20 px-4 py-2 rounded-full"
        >
          ⭐ Write a review on Google
        </a>
      </div>
    </section>
  );
}
