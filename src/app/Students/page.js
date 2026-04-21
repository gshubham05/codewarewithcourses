"use client";

import Link from "next/link";
import { useState } from "react";
import courseStudents from "./data";
import Script from "next/script";

const ITEMS_PER_PAGE = 8;

export default function CourseStudentsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courseStudents.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStudents = courseStudents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Script
        id="students-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Codeware IT Course Students",
            description:
              "Students who completed industry-ready courses at Codeware IT Pvt Ltd Dehradun including MERN Stack, Full Stack Development and Programming.",
            itemListElement: courseStudents.map((student, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Person",
                name: student.name,
                jobTitle: student.role,
                image: `https://www.codewareit.in/${student.image}`,
                url: `https://www.codewareit.in/Students/${student.id}`,
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
      <main className="bg-gradient-to-r from-blue-800 to-purple-900  min-h-screen text-white mt-20">
        {/* Hero */}
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Courses at <span className="text-purple-300">Codeware IT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Explore our career-oriented courses designed for students and
            learners to build strong foundations in development and IT. Learn
            from mentors and get certified.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
              Enroll Now
            </button>
          </Link>
        </section>
        <section className=" bg-white text-black py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Course Students
              </h2>
              <ul className="space-y-4 text-lg text-black/90">
                <li className="flex items-start gap-2">
                  <span className="text-xl">✅</span> Completed Full Stack &
                  MERN Training
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✅</span> Built Real-World Projects
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✅</span> Gained Hands-on GitHub &
                  Deployment Skills
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✅</span> Mentored by Industry
                  Experts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-xl">✅</span> Received Internship
                  Certificates
                </li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/course.png"
                alt="Course Students"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Students Section with Pagination */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-purple-900  text-white">
          <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight">
            Meet Our <span className="text-purple-300">Course Students</span>
          </h2>
          <p className="text-center text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            These students completed specialized skill courses with us — some
            are now placed in tech companies!
          </p>

          {/* Card Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentStudents.map((student) => (
              <Link href={`/Students/${student.id}`} key={student.id}>
                <div
                  className={`bg-white rounded-xl shadow hover:shadow-xl transition-all overflow-hidden border-2 h-[30rem] flex flex-col justify-between ${
                    student.placed ? "border-green-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    onError={(e) =>
                      (e.currentTarget.src = "/intern/default.jpg")
                    }
                    className="w-full h-[19rem] object-cover"
                  />

                  <div className="py-4 px-4 text-center flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {student.name}
                      </h3>
                      <p className="text-sm text-gray-500">{student.role}</p>
                      <p className="text-xs text-gray-400">{student.college}</p>

                      {student.placed && (
                        <div className="mt-2">
                          <span className="inline-block text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                            🎉 Placed
                          </span>
                        </div>
                      )}
                    </div>

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
              <Link href="/contact">
                <div className="relative group rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 border-4">
                  {/* Full Image */}
                  <img
                    src="/youarenext.jpeg"
                    alt="You're Next!"
                    className="w-full h-[29rem] object-cover group-hover:opacity-90 transition-opacity duration-300"
                  />

                  {/* Overlay Text */}
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center px-4 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2 animate-bounce">
                      Next is You →
                    </h3>
                    <p className="text-base md:text-lg">
                      Start your journey with Codeware IT today
                    </p>
                    <span className="mt-4 underline text-sm animate-pulse">
                      Apply Now
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Pagination Controls */}
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
