"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "MERN STACK DEVELOPMENT",
    provider: "Codeware IT",
    image: "/mern.avif",
    link: "Courses/mern-stack-development",
  },
  {
    id: 2,
    title: "FULL STACK DEVELOPMENT",
    provider: "Codeware IT",
    image: "/fullstack (1).jpg",
    link: "Courses/full-stack-development",
  },
  {
    id: 3,
    title: "PROGRAMMING LANGUAGES",
    provider: "Codeware IT",
    image: "/pl.jpg",
    link: "Courses/programming-languages",
  },
  {
    id: 4,
    title: "MEAN STACK DEVELOPMENT",
    provider: "Codeware IT",
    image: "/mean.jpg",
    link: "Courses/mean-stack-development",
  },
  {
    id: 5,
    title: "INDUSTRIAL TRAINING",
    provider: "Codeware IT",
    image: "/industrial2.jpg",
    link: "Courses/industrial-training",
  },
  {
    id: 6,
    title: "SEO AND DIGITAL MARKETING",
    provider: "Codeware IT",
    image: "/digital3.jpg",
    link: "Courses/seo-digital-marketing",
  },
  {
    id: 7,
    title: "GRAPHIC DESIGNING",
    provider: "Codeware IT",
    image: "/graphic.jpg",
    link: "Courses/graphic-design",
  },
  {
    id: 8,
    title: "DATA STRUCTURE AND ALGORITHMS",
    provider: "Codeware IT",
    image: "/data.jpg",
    link: "Courses/data-structures-algorithms",
  },
];

export default function GenerativeAIBanner() {
  return (
    <>
      <Head>
        <title>
          CodewareIT - Best Coding & Programming Training Institute in Dehradun, Uttarakhand | Live Projects & Internships
        </title>
        <meta
          name="description"
          content="Join CodewareIT Pvt Ltd to master technologies like JWT, MongoDB, Mongoose, Bcrypt, Multer, Cloudinary, Next.js, MERN Stack, and more. Live projects and expert mentorship under one roof!"
        />
        <meta
          name="keywords"
          content="CodewareIT, coding training Dehradun, programming courses Uttarakhand, MERN stack, Full Stack development, internship training, live projects, JWT, MongoDB, Next.js, job placement"
        />
        <meta property="og:title" content="CodewareIT - Coding & Internship Training Dehradun" />
        <meta property="og:description" content="Get trained in programming and development with live projects and internships at CodewareIT, the best coding institute in Uttarakhand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codewareit.in" />
        <meta property="og:image" content="https://www.codewareit.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodewareIT - Best Coding & Programming Institute Dehradun" />
        <meta name="twitter:description" content="Expert coding training, live projects, and job-ready internships at CodewareIT Pvt Ltd in Dehradun, Uttarakhand." />
        <meta name="twitter:image" content="https://www.codewareit.in/og-image.jpg" />
      </Head>

      <article>
        {/* Heading section */}
        <header className="relative w-full h-[280px] sm:h-[320px] mt-20 bg-gradient-to-r from-blue-800 to-purple-900 flex items-center justify-center text-white text-center px-4" aria-label="Empower Your Future with Codeware IT heading">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
              Empower Your Future with <br />
              <span className="text-white font-semibold">Codeware IT</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              Master the Latest Technologies & Elevate Your Career with CodeWare IT
            </p>
            <a
              href="https://wa.me/9837218345"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-5 py-3 md:px-6 md:py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300" aria-label="Enroll now at Codeware IT">
                Enroll Now
              </button>
            </a>
          </div>
        </header>

        {/* Courses Section */}
        <section
          className="px-4 sm:px-10 md:px-16 py-8 md:py-14 lg:py-20"
          aria-labelledby="courses-heading"
        >
          <h2 id="courses-heading" className="text-gray-600 text-sm md:text-lg font-semibold">
            Courses and Professional Certificates
          </h2>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mt-2">
            Start learning with Us
          </h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base mb-8">
            Explore our most popular programs, get job-ready for an in-demand career.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <article
                key={course.id}
                className="border rounded-lg shadow-md p-4 bg-white"
                aria-label={`${course.title} course`}
              >
                <div className="relative">
                  <Image
                    src={course.image}
                    width={300}
                    height={200}
                    alt={`${course.title} Image`}
                    className="rounded-lg w-full md:h-[100px] lg:h-[160px]"
                    priority={false}
                  />
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-gray-600 text-xs md:text-sm">{course.provider}</p>
                  <h4 className="text-sm md:text-lg font-semibold">{course.title}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">Professional Certificate</p>
                </div>
                <div>
                  <Link href={course.link} aria-label={`Read more about ${course.title} course`}>
                    <p className="mt-6 md:mt-8 text-xs md:text-sm text-blue-900 hover:font-bold hover:underline">
                      Read More →
                    </p>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Subscribe section */}
        <section
          aria-label="Subscribe to newsletter for coding and training updates"
          className="w-full mx-auto text-center py-8 px-4 md:px-6 lg:px-10 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Stay Updated!
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-6">
            Subscribe to our newsletter and never miss an update on our latest courses and training programs.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email address for newsletter subscription"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </section>
      </article>
    </>
  );
}
