import React from "react";
import Link from "next/link";

const courseCategories = [
  {
    id: "school-icse",
    badge: "ICSE",
    badgeColor: "bg-blue-500",
    tag: "Class 9 & 10",
    title: "ICSE Java Programming",
    subtitle: "Board Exam Excellence",
    description:
      "Expert coaching for ICSE Class 9 & 10 Computer Science. Master Java with BlueJ, OOP concepts, and board-focused practice. Small batches of max 10 students ensure personalised attention.",
    highlights: ["Java with BlueJ", "Board Exam Prep", "OOP Concepts", "Doubt Sessions"],
    icon: "📘",
    gradient: "from-blue-600 to-indigo-700",
    borderColor: "border-blue-500/30",
    link: "/Courses/icse-class-9-java-dehradun",
    links: [
      { label: "Class 9 — Java", href: "/Courses/icse-class-9-java-dehradun" },
      { label: "Class 10 — Java", href: "/Courses/icse-class-10-java-dehradun" },
    ],
  },
  {
    id: "school-cbse",
    badge: "CBSE",
    badgeColor: "bg-green-500",
    tag: "Class 11 & 12",
    title: "CBSE Python Programming",
    subtitle: "Informatics Practices",
    description:
      "Comprehensive coaching for CBSE Class 11 & 12 Computer Science and Informatics Practices. Python, SQL, and MySQL covered with board paper practice and practical viva preparation.",
    highlights: ["Python + SQL", "MySQL Integration", "Practical Viva Prep", "Board Papers"],
    icon: "📗",
    gradient: "from-green-600 to-teal-700",
    borderColor: "border-green-500/30",
    link: "/Courses/cbse-class-11-python-dehradun",
    links: [
      { label: "Class 11 — Python", href: "/Courses/cbse-class-11-python-dehradun" },
      { label: "Class 12 — Python + SQL", href: "/Courses/cbse-class-12-python-dehradun" },
    ],
  },
  {
    id: "ug-pg",
    badge: "UG / PG",
    badgeColor: "bg-purple-500",
    tag: "BCA · MCA · BTech CSE · BSc IT",
    title: "Programming Languages",
    subtitle: "University Syllabus Coverage",
    description:
      "Complete programming support for BCA, MCA, BTech CSE, BSc IT students. C, C++, Java, Python, PHP, C# — all university-syllabus subjects covered with assignment help, project guidance and semester exam prep.",
    highlights: ["C, C++, Java, Python", "DBMS / MySQL", "Final Year Projects", "Assignment Help"],
    icon: "🎓",
    gradient: "from-purple-600 to-pink-700",
    borderColor: "border-purple-500/30",
    link: "/Courses/java-python-programming-dehradun",
    links: [
      { label: "BCA / BSc IT — All Languages", href: "/Courses/java-python-programming-dehradun" },
      { label: "BTech / MCA — DSA & DBMS", href: "/Courses/java-python-programming-dehradun" },
    ],
  },
  {
    id: "job-ready",
    badge: "Job Ready",
    badgeColor: "bg-orange-500",
    tag: "Full Stack · Frontend · Backend",
    title: "Full Stack Development",
    subtitle: "Industry-Ready Training",
    description:
      "Job-focused Full Stack training covering MERN Stack, React.js, Next.js, Node.js, Frontend, and Backend. Build 5 real projects, get internship certificate, and land ₹4–8 LPA packages with placement support.",
    highlights: ["MERN Stack", "React.js / Next.js", "Node.js / Backend", "Placement Support"],
    icon: "🚀",
    gradient: "from-orange-600 to-red-700",
    borderColor: "border-orange-500/30",
    link: "/Courses/fullstack-course-dehradun",
    links: [
      { label: "Full Stack (MERN)", href: "/Courses/fullstack-course-dehradun" },
      { label: "Frontend — React.js", href: "/Courses/react-js-course-dehradun" },
      { label: "Frontend — Next.js", href: "/Courses/nextjs-course-dehradun" },
      { label: "Frontend Development", href: "/Courses/frontend-course-dehradun" },
      { label: "Backend / Node.js", href: "/Courses/backend-course-dehradun" },
    ],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-[#040A26] py-20 px-4 sm:px-6" aria-labelledby="courses-heading">

      {/* Structured data for courses */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Coding Courses at CodewareIT Dehradun",
            itemListElement: courseCategories.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Course",
                name: c.title,
                description: c.description,
                provider: {
                  "@type": "Organization",
                  name: "CodewareIT Pvt Ltd",
                  sameAs: "https://www.codewareit.in",
                },
              },
            })),
          }),
        }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 text-purple-300 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium mb-4">
            🎓 Courses for Every Stage
          </span>
          <h2 id="courses-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            What Would You Like to Learn?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            From school board exam preparation to job-ready full stack training — we have the right course for every student in Dehradun.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {courseCategories.map((cat) => (
            <article
              key={cat.id}
              aria-label={`${cat.title} at CodewareIT Dehradun`}
              className={`relative bg-white/5 border ${cat.borderColor} rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                    {cat.icon}
                  </div>
                  <div>
                    <span className={`inline-block text-xs font-bold text-white px-2.5 py-1 rounded-full ${cat.badgeColor} mb-1`}>
                      {cat.badge}
                    </span>
                    <p className="text-gray-400 text-xs">{cat.tag}</p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">{cat.title}</h3>
              <p className={`text-sm font-semibold bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent mb-3`}>
                {cat.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{cat.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-5">
                {cat.highlights.map((h, i) => (
                  <span key={i} className="text-xs bg-white/10 border border-white/10 text-gray-300 px-3 py-1 rounded-full">
                    ✓ {h}
                  </span>
                ))}
              </div>

              {/* Sub-course links */}
              <div className="border-t border-white/10 pt-4 mb-5 space-y-1">
                {cat.links.map((l, i) => (
                  <Link
                    key={i}
                    href={l.href}
                    className="flex items-center justify-between text-sm text-gray-400 hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-lg transition-all group"
                  >
                    <span>{l.label}</span>
                    <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={`https://wa.me/9837218345?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(cat.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center text-sm font-semibold text-white py-2.5 px-4 rounded-xl bg-gradient-to-r ${cat.gradient} hover:opacity-90 transition-opacity`}
                >
                  Book FREE Demo
                </a>
                <Link
                  href={cat.link}
                  className="flex-1 text-center text-sm font-semibold text-gray-300 border border-white/20 py-2.5 px-4 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">Not sure which course is right for you?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/9837218345?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform text-sm"
            >
              💬 Talk to a Counsellor — Free
            </a>
            <Link
              href="/Courses"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/20 transition-colors text-sm"
            >
              📚 View All Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
