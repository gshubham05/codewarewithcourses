"use client";

import Link from "next/link";
import { useState } from "react";
import students from "./data";
import Script from "next/script";

const ITEMS_PER_PAGE = 8;

export default function InternshipHome() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentStudents = students.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <Script
        id="interns-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Codeware IT Internship Students",
            itemListElement: students.map((student, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Person",
                name: student.name,
                jobTitle: student.role,
                image: `https://www.codewareit.in/${student.image}`,
                url: `https://www.codewareit.in/intern/${student.id}`,
                alumniOf: {
                  "@type": "Organization",
                  name: "Codeware IT Pvt Ltd",
                  url: "https://www.codewareit.in",
                },
              },
            })),
          }),
        }}
      />

      <main className="bg-gradient-to-r from-blue-800 to-purple-900 min-h-screen text-white mt-20">
        {/* Hero */}
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Internship Program at{" "}
            <span className="text-purple-300">Codeware IT</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Join our expert-led internship for college students and passionate
            learners. Gain real-world skills, project experience, and a
            certified internship to boost your career.
          </p>

          <Link href="/apply">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
              Apply Now
            </button>
          </Link>
        </section>

        {/* What You'll Learn */}
        <section className="bg-white text-black py-12 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">What You’ll Learn</h2>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>Full Stack Development (MERN)</li>
                <li>Real-world Project Building</li>
                <li>Version Control with Git & GitHub</li>
                <li>Mentorship from Industry Experts</li>
                <li>Internship Certification</li>
              </ul>
            </div>

            <img src="/intern.png" alt="Learning" className="w-full h-auto" />
          </div>
        </section>

        {/* Interns Section */}
        <section className="py-16 px-6 text-white">
          <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight">
            Meet Our <span className="text-purple-300">Interns</span>
          </h2>

          <p className="text-center text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Talented students from different colleges have completed live
            projects and gained industry experience with us.
          </p>

          {/* Intern Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentStudents.map((student) => (
              <Link href={`/intern/${student.id}`} key={student.id}>
                <div className="bg-white rounded-xl shadow hover:shadow-xl transition-all overflow-hidden">
                  <img
                    src={student.image}
                    alt={student.name}
                    onError={(e) =>
                      (e.currentTarget.src = "/intern/default.jpg")
                    }
                    className="w-full h-[19rem] object-cover"
                  />

                  <div className="py-4 px-4 text-center">
                    <h3 className="text-lg font-bold text-gray-800">
                      {student.name}
                    </h3>

                    <p className="text-sm text-gray-500">{student.role}</p>

                    <div className="mt-2">
                      <span className="text-sm text-blue-600 font-medium hover:underline">
                        View Profile →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {currentPage === totalPages && (
              <Link href="/apply">
                <div className="relative group rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 border-4">
                  <img
                    src="/youarenext.jpeg"
                    alt="You're Next"
                    className="w-full h-[26rem] object-cover group-hover:opacity-90 transition-opacity duration-300"
                  />

                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2 animate-bounce">
                      Next is You →
                    </h3>

                    <p className="text-base md:text-lg">
                      Be the next intern at Codeware IT
                    </p>

                    <span className="mt-4 underline text-sm animate-pulse">
                      Apply Now
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-white text-blue-700"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}