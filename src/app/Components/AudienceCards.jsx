"use client";

function fireGA4(eventName, params = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

const audiences = [
  {
    icon: "📘",
    badge: "Class 9–12",
    h3: "School Students — ICSE Java & CBSE Python Courses Dehradun",
    title: "School Students (Class 9-12)",
    body: "ICSE Java · CBSE Python · Build real projects · Board exam + career prep",
    highlights: ["Small batches (max 10)", "Board exam focused", "Live coding practice", "Parent progress updates"],
    cta: "Apply for School Batch →",
    href: "/courses/icse-class-9-java-dehradun",
    accentColor: "#2563EB",
    bgColor: "rgba(37,99,235,0.06)",
    borderColor: "rgba(37,99,235,0.15)",
  },
  {
    icon: "🎓",
    badge: "UG / PG",
    h3: "College Students — MERN Stack Full Stack DSA Python Java Dehradun",
    title: "College & University Students",
    body: "MERN Stack · Full Stack · DSA · PHP · Internship certificate · Project portfolio",
    highlights: ["Real-world projects", "Internship certificate", "Portfolio building", "Placement support"],
    cta: "Apply for College Batch →",
    href: "/courses/fullstack-course-dehradun",
    accentColor: "#7C3AED",
    bgColor: "rgba(124,58,237,0.06)",
    borderColor: "rgba(124,58,237,0.15)",
    featured: true,
  },
  {
    icon: "🚀",
    badge: "Career Switch",
    h3: "Industrial Training Career Switch — C C++ C# Bootcamp Dehradun",
    title: "Industrial Training & Career Switch",
    body: "C/C++/C# · Complete bootcamps · Job-ready in 3-4 months · Placement support",
    highlights: ["Job-ready in 3–4 months", "Industry projects", "Resume + interview prep", "100% placement support"],
    cta: "Apply for Training →",
    href: "/courses/fullstack-course-dehradun",
    accentColor: "#1D9E75",
    bgColor: "rgba(29,158,117,0.06)",
    borderColor: "rgba(29,158,117,0.15)",
  },
];

export default function AudienceCards({ onOpenForm }) {
  return (
    <section className="py-20 px-4 bg-white" aria-label="Which batch is right for you">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#2C2C2A] mb-3">
            Which batch is right for you?
          </h2>
          <p className="text-[#5F5E5A] text-base max-w-xl mx-auto">
            From school students to career switchers — we have the right program for every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <div
              key={i}
              className="relative rounded-[16px] p-6 sm:p-7 flex flex-col border transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: a.bgColor,
                borderColor: a.featured ? a.accentColor : a.borderColor,
                borderWidth: a.featured ? "2px" : "1px",
              }}
            >
              {a.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold"
                  style={{ background: a.accentColor }}
                >
                  Most Popular
                </div>
              )}
              {/* Hidden H3 for SEO */}
              <h3 className="sr-only">{a.h3}</h3>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{a.icon}</span>
                <div>
                  <span
                    className="text-xs font-bold rounded-full px-2.5 py-0.5"
                    style={{ background: a.accentColor + "22", color: a.accentColor }}
                  >
                    {a.badge}
                  </span>
                  <div className="text-lg font-black text-[#2C2C2A] mt-1 leading-tight">
                    {a.title}
                  </div>
                </div>
              </div>

              <p className="text-[#5F5E5A] text-sm mb-4 leading-relaxed">{a.body}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {a.highlights.map((h, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#2C2C2A]">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                      style={{ background: a.accentColor }}>✓</span>
                    {h}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  fireGA4("cta_courses_click", { audience: a.title });
                  if (onOpenForm) onOpenForm();
                  else {
                    const el = document.getElementById("apply-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full font-bold py-3 rounded-[10px] text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: a.accentColor }}
              >
                {a.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
