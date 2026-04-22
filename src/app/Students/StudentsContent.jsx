"use client";

import Link from "next/link";
import { useState } from "react";
import Script from "next/script";
import courseStudents from "./data";

const ITEMS_PER_PAGE = 8;

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Students of Best Computer Coding Institute in Dehradun — CodewareIT",
  description: "Real students trained at CodewareIT — the best computer coding institute in Dehradun — in Java, Python, MERN Stack, React.js, Next.js, and Full Stack development.",
  itemListElement: courseStudents.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    description: `${s.role} student at CodewareIT Dehradun${s.college ? ` from ${s.college}` : ""}`,
  })),
};

export default function StudentsContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courseStudents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStudents = courseStudents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <Script id="students-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="min-h-screen bg-gray-50 mt-[5rem]">

        {/* Hero */}
        <section className="relative overflow-hidden py-20 text-center px-6" style={{ background: "linear-gradient(135deg, #060B1F 0%, #1e1b4b 50%, #0a1628 100%)" }}>
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-6">
              <span className="text-yellow-400 text-sm">⭐</span>
              <span className="text-white/80 text-sm font-medium">Best Computer Coding Institute in Dehradun</span>
              <span className="text-yellow-400 text-sm">⭐</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Our <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)" }}>Students</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real students. Real projects. Real transformations. Meet the coders trained at CodewareIT — Dehradun&apos;s best computer coding institute.
            </p>
          </div>
        </section>

        {/* Students Grid */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {currentStudents.map((student) => (
              <Link
                key={student.id}
                href={`/Students/${student.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={student.image}
                    alt={`${student.name} — ${student.role} at CodewareIT Dehradun`}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(student.name)}&backgroundColor=7c3aed&textColor=ffffff`;
                    }}
                  />
                  {student.placed && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
                      ✅ Placed
                    </div>
                  )}
                </div>
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

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-3 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-5 py-2 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-violet-400 hover:text-violet-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${currentPage === page ? "text-white shadow-lg" : "border-2 border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600"}`}
                  style={currentPage === page ? { background: "linear-gradient(135deg, #7c3aed, #2563eb)" } : {}}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-5 py-2 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-violet-400 hover:text-violet-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                Next →
              </button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Want to be on this list?</h2>
          <p className="text-white/70 mb-8 text-lg">Join the best computer coding institute in Dehradun and start your transformation today.</p>
          <Link href="/courses-best-computer-coding-institute-in-dehradun" className="inline-flex items-center gap-2 bg-white text-violet-700 font-bold px-8 py-4 rounded-xl text-lg hover:scale-105 transition-all shadow-lg">
            View Courses →
          </Link>
        </section>
      </div>
    </>
  );
}
