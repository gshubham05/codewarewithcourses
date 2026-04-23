"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Students Placed" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Courses" },
  { value: 95, suffix: "%", label: "Placement Rate" },
  { label: "Dehradun #1", isText: true },
];

const companies = ["TCS", "Infosys", "Wipro", "HCL", "Capgemini", "Tech Mahindra"];

function AnimatedNumber({ target, suffix, started }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setDisplay(target); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{display}{suffix}</span>;
}

export default function TrustBar() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#2C2C2A] py-8 px-4" aria-label="Trust statistics">
      {/* Stats strip */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 text-white text-center mb-6">
          {stats.map((s, i) => (
            <div key={i} className="py-2">
              <div className="text-2xl sm:text-3xl font-black" style={{ color: "#E8593C" }}>
                {s.isText ? (
                  <span>#{1}</span>
                ) : (
                  <AnimatedNumber target={s.value} suffix={s.suffix} started={started} />
                )}
              </div>
              <div className="text-xs text-white/60 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Company logos strip */}
        <div className="border-t border-white/10 pt-5">
          <p className="text-center text-white/40 text-xs font-medium mb-3 uppercase tracking-widest">
            Our students work at
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {companies.map((c, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-bold text-white/50 hover:text-white/80 transition-colors px-3 py-1.5 rounded-md border border-white/10 hover:border-white/25"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
