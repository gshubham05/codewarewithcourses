"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1, name: "Rahul Sharma", role: "Full Stack Dev @ TechCorp India",
    avatar: "RS", avatarBg: "from-purple-500 to-blue-600",
    rating: 5, course: "MERN Stack", location: "Dehradun", package: "₹6 LPA",
    text: "Codeware IT completely transformed my career! The MERN stack training was hands-on and practical. Within 3 months I landed a ₹6 LPA package. The mentors felt like partners in my journey.",
  },
  {
    id: 2, name: "Priya Negi", role: "Python Developer @ StartupHub",
    avatar: "PN", avatarBg: "from-pink-500 to-rose-600",
    rating: 5, course: "Python & AI", location: "Haridwar", package: "₹5.5 LPA",
    text: "Best investment of my life! The Python & AI course here is top-notch. I went from zero coding knowledge to getting placed in just 4 months. The curriculum is very well structured.",
  },
  {
    id: 3, name: "Arjun Bisht", role: "React Developer @ WebAgency",
    avatar: "AB", avatarBg: "from-cyan-500 to-blue-600",
    rating: 5, course: "Full Stack Dev", location: "Dehradun", package: "₹7 LPA",
    text: "Small batches, personalized attention, and practical projects made all the difference. Got placed before I even finished the course! The real-project experience is unmatched.",
  },
  {
    id: 4, name: "Sneha Rawat", role: "Java Developer @ InfoSys Partner",
    avatar: "SR", avatarBg: "from-orange-400 to-amber-600",
    rating: 5, course: "Java Development", location: "Roorkee", package: "₹5 LPA",
    text: "The Java course curriculum is aligned with industry standards. Placement team helped me crack interviews at 3 companies! I'm so grateful for the guidance I received.",
  },
  {
    id: 5, name: "Amit Kumar", role: "Software Engineer @ MNC",
    avatar: "AK", avatarBg: "from-green-500 to-teal-600",
    rating: 5, course: "MERN Stack", location: "Dehradun", package: "₹8 LPA",
    text: "CodewareIT's mentorship program is genuinely different. Every session involves building something real. The community boosted my confidence massively. Highly recommended!",
  },
  {
    id: 6, name: "Kavita Thakur", role: "Frontend Dev @ Remote Agency",
    avatar: "KT", avatarBg: "from-violet-500 to-purple-600",
    rating: 5, course: "React & Next.js", location: "Mussoorie", package: "₹6.5 LPA",
    text: "Trainers have actual industry experience. Got a remote job offer from a Bangalore company — couldn't be happier! The Next.js training was especially valuable.",
  },
];

const courseColors = {
  "MERN Stack":       { bg: "bg-green-500/15",  text: "text-green-400",  border: "border-green-500/30" },
  "Python & AI":      { bg: "bg-yellow-500/15", text: "text-yellow-400", border: "border-yellow-500/30" },
  "Full Stack Dev":   { bg: "bg-blue-500/15",   text: "text-blue-400",   border: "border-blue-500/30" },
  "Java Development": { bg: "bg-orange-500/15", text: "text-orange-400", border: "border-orange-500/30" },
  "React & Next.js":  { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/30" },
};

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-3.5 h-3.5 ${i < n ? "text-amber-400" : "text-gray-700"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActive((p) => (p + 1) % testimonials.length);
      }, 4500);
    }
  };

  useEffect(() => { startTimer(); return () => clearInterval(timerRef.current); }, [isPlaying]);

  const go = (idx) => {
    setActive(idx);
    clearInterval(timerRef.current);
    if (isPlaying) startTimer();
  };

  const featured = testimonials[active];
  const cc = courseColors[featured.course] || { bg: "bg-gray-500/15", text: "text-gray-400", border: "border-gray-500/30" };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .ts-section { font-family: 'DM Sans', sans-serif; }
        .ts-fade { animation: tsFade 0.45s ease; }
        @keyframes tsFade {
          from { opacity:0; transform: translateX(16px); }
          to   { opacity:1; transform: translateX(0); }
        }
        .dot-btn { transition: all 0.25s; }
        .scroll-cards::-webkit-scrollbar { display: none; }
        .scroll-cards { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="ts-section py-20 sm:py-28 bg-gradient-to-b from-[#040A26] via-[#050C2A] to-[#040A26] relative overflow-hidden" aria-labelledby="ts-heading">
        {/* Decorative glows */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-600/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />
        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{backgroundImage:"radial-gradient(rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px"}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4">
              ⭐ Student Stories
            </span>
            <h2 id="ts-heading" className="text-3xl sm:text-5xl font-extrabold text-white mb-4" style={{fontFamily:"'Syne',sans-serif"}}>
              Real Students.<br/>
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">Life-Changing Results.</span>
            </h2>
            <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
              500+ students have transformed their careers with us. Here are some of their stories.
            </p>
            {/* Stats strip */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-7 text-sm">
              {[["4.9/5","Avg Rating","⭐"],["500+","Students Trained","🎓"],["95%","Placement Rate","💼"],["₹6+ LPA","Avg Package","💰"]].map(([val,lab,ico])=>(
                <div key={lab} className="text-center">
                  <div className="text-xl font-extrabold text-white">{ico} {val}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{lab}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured card */}
          <div className="max-w-3xl mx-auto mb-10">
            <div key={active} className="ts-fade bg-gradient-to-br from-[#0a1240] to-[#0d1650] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl shadow-black/50">
              {/* Decorative quote */}
              <div className="absolute top-4 right-6 text-9xl font-serif text-white/3 leading-none select-none pointer-events-none" aria-hidden="true">"</div>

              {/* Course badge */}
              <div className={`inline-flex items-center gap-2 ${cc.bg} border ${cc.border} ${cc.text} px-3 py-1.5 rounded-full text-xs font-bold mb-6`}>
                📚 {featured.course}
              </div>

              {/* Quote */}
              <blockquote className="text-white text-base sm:text-xl leading-relaxed font-medium relative z-10 mb-8">
                "{featured.text}"
              </blockquote>

              {/* Person */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${featured.avatarBg} flex items-center justify-center text-white font-extrabold text-base shadow-lg`}>
                    {featured.avatar}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base">{featured.name}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{featured.role}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Stars n={featured.rating} />
                      <span className="text-gray-500 text-xs">📍 {featured.location}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-0.5">Got placed at</div>
                  <div className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">{featured.package}</div>
                  <div className="text-xs text-green-600 flex items-center gap-1 justify-end mt-0.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Verified
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots + mini thumbs */}
          <div className="flex justify-center items-center gap-3 mb-8">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`dot-btn rounded-full ${i === active ? "w-8 h-3 bg-purple-500" : "w-3 h-3 bg-white/20 hover:bg-white/40"}`}
                aria-label={`Go to ${t.name}'s testimonial`}
              />
            ))}
          </div>

          {/* Scroll row of mini cards */}
          <div className="scroll-cards flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {testimonials.map((t, i) => {
              const cc2 = courseColors[t.course] || { bg:"bg-gray-500/15", text:"text-gray-400", border:"border-gray-500/30"};
              return (
                <button key={i} onClick={() => go(i)}
                  className={`flex-shrink-0 text-left p-3.5 rounded-2xl border transition-all duration-200 w-52 sm:w-48 ${
                    i === active
                      ? "bg-white/10 border-purple-500/40 shadow-lg"
                      : "bg-white/[0.03] border-white/8 hover:bg-white/8 hover:border-white/15"
                  }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white text-[10px] font-extrabold flex-shrink-0`}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">{t.name}</p>
                      <p className="text-gray-500 text-[10px] leading-tight">{t.package}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-[10px] leading-relaxed line-clamp-2">{t.text}</p>
                  <span className={`mt-2 inline-block text-[9px] font-bold px-2 py-0.5 rounded-md ${cc2.bg} ${cc2.text}`}>{t.course}</span>
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm mb-5">Your success story starts with a single step 🚀</p>
            <a href="https://wa.me/9837218345" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              💬 Talk to a Counselor — It's Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
