"use client";

import Link from "next/link";
import { useState } from "react";
import Script from "next/script";
import students from "./data";

const ITEMS_PER_PAGE = 8;

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Internship Students at Best Computer Coding Institute in Dehradun — CodewareIT",
  description: "IT interns trained at CodewareIT — the best computer coding institute in Dehradun — in MERN Stack, React.js, Node.js, Frontend and Backend development.",
  itemListElement: students.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    description: `${s.role} at CodewareIT Dehradun${s.college ? ` from ${s.college}` : ""}`,
  })),
};

const internBenefits = [
  { emoji: "💻", title: "Live Project Work",       desc: "Build real apps that go live — not dummy assignments." },
  { emoji: "🐙", title: "GitHub Portfolio",         desc: "Every project pushed to GitHub. Your profile speaks for you." },
  { emoji: "🧑‍🏫", title: "Mentored by Shubham Goyal", desc: "Direct mentorship from the founder — not TAs or juniors." },
  { emoji: "🏆", title: "Certificate + LOR",        desc: "Internship certificate and letter of recommendation on completion." },
  { emoji: "🚀", title: "Placement Support",        desc: "Resume reviews, mock interviews, and referrals." },
  { emoji: "🔧", title: "MERN · React · Next.js",   desc: "Industry-relevant stack that companies actually hire for." },
];

export default function InternContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStudents = students.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <Script id="interns-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="min-h-screen bg-gray-50 mt-[5rem]">

        {/* Hero */}
        <section className="relative overflow-hidden py-20 text-center px-6" style={{ background: "linear-gradient(135deg, #060B1F 0%, #1a0533 50%, #0a1628 100%)" }}>
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="absolute top-10 left-10 w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #2563eb, transparent)" }} />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
              <span className="text-yellow-400 text-sm">⭐</span>
              <span className="text-white/80 text-sm font-medium">Best Computer Coding Institute in Dehradun</span>
              <span className="text-yellow-400 text-sm">⭐</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              IT <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #f472b6)" }}>Internship</span><br />
              in Dehradun
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Real internships at CodewareIT — not certificate farms. You build live projects, push to GitHub, and leave with a portfolio that gets you hired.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/apply" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 30px #7c3aed55" }}>
                Apply for Internship →
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                Ask a Question
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">What You Get</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">
                Internship That Actually <span className="gradient-text">Builds You</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {internBenefits.map((b) => (
                <div key={b.title} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                  <span className="text-3xl mb-3 block">{b.emoji}</span>
                  <h3 className="font-black text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interns Grid */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">Our Interns</span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-2">Meet the Team</h2>
            <p className="text-gray-500 mt-3">Students who chose real learning over fake certificates.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {currentStudents.map((student) => (
              <Link
                key={student.id}
                href={`/intern/${student.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={student.image}
                  alt={`${student.name} — ${student.role} at CodewareIT Dehradun`}
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(student.name)}&backgroundColor=7c3aed&textColor=ffffff`;
                  }}
                />
                <div className="p-3">
                  <p className="font-bold text-gray-900 text-sm truncate">{student.name}</p>
                  <p className="text-violet-600 text-xs font-medium truncate mt-0.5">{student.role.trim()}</p>
                  {student.college && (
                    <p className="text-gray-400 text-xs truncate mt-0.5">{student.college}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}
                className="px-5 py-2 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-violet-400 hover:text-violet-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button key={page} onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${currentPage === page ? "text-white shadow-lg" : "border-2 border-gray-200 text-gray-600 hover:border-violet-400"}`}
                  style={currentPage === page ? { background: "linear-gradient(135deg, #7c3aed, #2563eb)" } : {}}>
                  {page}
                </button>
              ))}
              <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
                className="px-5 py-2 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-violet-400 hover:text-violet-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                Next →
              </button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to intern at Dehradun&apos;s best?</h2>
          <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto">Limited seats per batch. Apply now and build what you are proud of.</p>
          <Link href="/apply" className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-8 py-4 rounded-xl text-lg hover:scale-105 transition-all shadow-lg">
            Apply Now →
          </Link>
        </section>
      </div>
    </>
  );
}
