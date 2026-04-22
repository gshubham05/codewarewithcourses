"use client";

import React from "react";
import CountUp from "react-countup";

const statsData = [
  { value: 100, suffix: "+", label: "Students Trained", icon: "🎓", bgColor: "bg-purple-50 border-purple-200" },
  { value: 98, suffix: "%", label: "Board Exam Pass Rate", icon: "📝", bgColor: "bg-green-50 border-green-200" },
  { value: 50, suffix: "+", label: "Live Projects", icon: "🚀", bgColor: "bg-blue-50 border-blue-200" },
  { value: 10, suffix: "+", label: "Expert Mentors", icon: "👨‍💻", bgColor: "bg-orange-50 border-orange-200" },
  { value: 5, suffix: "+", label: "Years Experience", icon: "🏆", bgColor: "bg-yellow-50 border-yellow-200" },
  { value: 5.0, suffix: "/5", label: "Google Rating", icon: "⭐", decimals: 1, bgColor: "bg-red-50 border-red-200" },
];

const trustBadges = [
  { icon: "✅", text: "Google Verified Business" },
  { icon: "🏅", text: "Certified Trainers" },
  { icon: "📋", text: "Structured Curriculum" },
  { icon: "🔒", text: "Safe Learning Environment" },
];

export default function Statistics() {
  return (
    <section aria-labelledby="stats-heading" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-3">
            📊 Our Track Record
          </span>
          <h2 id="stats-heading" className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#040A26] mb-3">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Empowering learners with hands-on IT training, real projects &amp; board exam excellence in Dehradun, Uttarakhand.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-10">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl border ${stat.bgColor} flex flex-col justify-center items-center text-center transition-transform hover:scale-105 hover:shadow-lg`}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                <CountUp start={0} end={stat.value} duration={2.5} decimals={stat.decimals || 0} separator="," enableScrollSpy scrollSpyOnce />
                {stat.suffix}
              </h3>
              <p className="text-sm text-gray-600 font-semibold mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust badges — ISO Certified removed */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {trustBadges.map((b, i) => (
            <div key={i} className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-full text-sm text-gray-700 font-medium">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
