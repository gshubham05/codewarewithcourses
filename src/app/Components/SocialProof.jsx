"use client";

const testimonials = [
  {
    initials: "PS",
    name: "Prajwal Singh",
    role: "Got placed at TCS",
    school: "MERN Stack Graduate",
    color: "from-blue-500 to-indigo-600",
    quote: "The live projects changed everything for me. I walked into my TCS interview with 3 production-grade apps. The mentorship here is unmatched.",
    rating: 5,
  },
  {
    initials: "AA",
    name: "Arjun Anand",
    role: "Got placed at Infosys",
    school: "Full Stack Graduate",
    color: "from-green-500 to-teal-600",
    quote: "Small batches meant I got personal attention every class. Within 4 months I had a complete portfolio and an Infosys offer letter.",
    rating: 5,
  },
  {
    initials: "PR",
    name: "Priya Rawat",
    role: "Got placed at Wipro",
    school: "Python & DSA Graduate",
    color: "from-purple-500 to-pink-600",
    quote: "Coming from a non-CS background, I was nervous. But the step-by-step approach and placement support made sure I landed my dream job.",
    rating: 5,
  },
  {
    initials: "MK",
    name: "Mohit Kumar",
    role: "Got placed at HCL",
    school: "React.js Bootcamp",
    color: "from-orange-500 to-red-600",
    quote: "I tried 2 other institutes before CodewareIT. This is the only place where you build REAL projects, not just theory exercises.",
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 px-4 bg-[#F8F7F4]" aria-label="Student success stories">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          {/* Google rating */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#2C2C2A]/10 rounded-2xl px-5 py-3 mb-6 shadow-sm">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-black text-[#2C2C2A] text-lg">5</span>
            <span className="text-[#5F5E5A] text-sm">· 40+ Google Reviews</span>
            <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-5 h-5 object-contain" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#2C2C2A] mb-3">
            Our students are working at top companies
          </h2>
          <p className="text-[#5F5E5A] max-w-xl mx-auto">
            Real results from real students — not fabricated success stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-[16px] p-5 border border-[#2C2C2A]/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <Stars count={t.rating} />
              <p className="text-[#2C2C2A] text-sm mt-3 mb-4 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-[#2C2C2A]/8">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#2C2C2A]">{t.name}</div>
                  <div className="text-xs text-[#1D9E75] font-semibold">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
