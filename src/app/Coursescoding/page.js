"use client";
import { useState } from "react";

export default function CodingCoursesPage() {
  const [active, setActive] = useState("overview");

  const courses = {
    overview: {
      id: "overview",
      title: "Overview",
      image: "/overview.png", // Update with actual path
      description:
        "Get started with our complete coding pathway—explore MERN, Next.js, Full‑Stack and foundational programming. Ideal for beginners to advanced learners.",
      type: "Career Pathway",
      overview:
        "This pathway introduces the full roadmap of web development including frontend, backend, and popular stacks. Designed for beginners to advanced learners, this track helps build strong foundations and advance through modern frameworks with real-world projects.",
      syllabus: [
        "Roadmap of Web Development",
        "HTML, CSS, and JavaScript Basics",
        "Frontend Libraries Overview (React, Tailwind)",
        "Backend Basics: Node.js & Express",
        "Intro to Databases: MongoDB",
        "Version Control: Git & GitHub",
        "Overview of Hosting & Deployment",
        "Project Building Guidelines & Structure",
      ],
      details:
        "This track is ideal for anyone starting their coding journey or looking to master full-stack development. It’s structured to guide learners step-by-step across all essential technologies. You'll be exposed to everything from static websites to fully functional web applications.",
      skills: [
        "Frontend Development",
        "Backend Basics",
        "Version Control",
        "Project Planning",
        "Git & GitHub",
        "Deployment Concepts",
      ],
    },

    MERN: {
      id: "mern-stack-development",
      title: "MERN Stack Development",
      image: "/mern.png",
      description:
        "Master MongoDB, Express.js, React, and Node.js to become a full-stack web developer.",
      type: "Professional Certificate",
      overview:
        "This course provides a complete understanding of MERN stack development, covering both frontend and backend technologies. You will build dynamic, scalable, and high-performance web applications using JavaScript frameworks. The course includes hands-on projects, REST API integration, database management, authentication, and deployment strategies.",
      syllabus: [
        "Introduction to MERN Stack and its Architecture",
        "MongoDB: NoSQL Database Fundamentals and Data Modeling",
        "Express.js: Backend Development, Middleware, and API Creation",
        "React.js: Component-Based UI Development, Hooks, and State Management",
        "Node.js: Server-Side Development, File Handling, and API Routes",
        "User Authentication: JWT, OAuth, and Role-Based Access Control",
        "Building Full-Stack Applications with Real-World Use Cases",
        "Hosting & Deployment (AWS, Vercel, Netlify, and Docker)",
      ],
      details:
        "This course is ideal for aspiring web developers who want to specialize in JavaScript-based full-stack development. By the end of the program, you'll be proficient in designing, developing, and deploying modern web applications. Career opportunities include Full-Stack Developer, JavaScript Developer, Backend Engineer, and Frontend Developer. You'll also work on capstone projects that mimic real-world applications used in the industry.",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
        "Docker",
        "Deployment (Vercel/AWS)",
      ],
    },

    NextJS: {
      id: "nextjs-development",
      title: "Next.js Development",
      image: "/nextjs.png",
      description:
        "Master modern React with Next.js and build blazing-fast web apps using SSR, SSG, and SEO techniques.",
      type: "Professional Certificate",
      overview:
        "Learn advanced concepts of React using Next.js, including App Router, server components, metadata for SEO, and hybrid rendering. Build full-scale applications with file-based routing and backend integrations.",
      syllabus: [
        "Intro to Next.js: Setup, File Structure, and Routing",
        "Pages vs App Router",
        "Static Site Generation (SSG) and Server Side Rendering (SSR)",
        "API Routes & Server Actions",
        "Dynamic Routing & Metadata for SEO",
        "Authentication with NextAuth.js",
        "Integrating MongoDB & Prisma",
        "Deploying to Vercel with CI/CD",
      ],
      details:
        "This course is for developers familiar with React who want to level up with Next.js. It's perfect for building portfolio-ready projects and professional applications. You'll learn all the core concepts and how to apply them in real-world environments.",
      skills: [
        "Next.js",
        "App Router",
        "SSR/SSG",
        "Metadata SEO",
        "API Routes",
        "MongoDB",
        "Authentication",
        "Vercel Deployment",
      ],
    },

    FullStack: {
      id: "fullstack-development",
      title: "Full Stack Development",
      image: "/fullstackcourse.png",
      description:
        "Become a full stack developer by mastering both frontend and backend technologies with practical projects.",
      type: "Professional Certificate",
      overview:
        "This all-in-one course covers HTML, CSS, JS, React, Node, Express, MongoDB, APIs, authentication, CI/CD, and more. Ideal for anyone looking to build and deploy complete web applications from scratch.",
      syllabus: [
        "HTML, CSS & Responsive Design",
        "JavaScript Fundamentals & ES6+",
        "React.js with Hooks and Routing",
        "Node.js and Express API Building",
        "MongoDB Database Management",
        "Authentication with JWT",
        "State Management & Redux",
        "Project Structure, Git & Deployment",
      ],
      details:
        "This course is ideal for learners who want an end-to-end understanding of web development. By completing this track, you'll be job-ready for frontend, backend, or full-stack roles and will have multiple real-world projects in your portfolio.",
      skills: [
        "HTML/CSS/JS",
        "React",
        "Node & Express",
        "MongoDB",
        "Authentication",
        "Redux",
        "Git/GitHub",
        "CI/CD & Deployment",
      ],
    },

    Languages: {
      id: "programming-languages",
      title: "Programming Languages",
      image: "/pl.png",
      description:
        "Strengthen your core with essential programming languages for development, logic, and DSA.",
      type: "Foundation Track",
      overview:
        "This course builds strong coding logic through foundational languages. Perfect for beginners, it covers syntax, problem solving, and data structures in popular languages like JavaScript, Python, Java, and C/C++.",
      syllabus: [
        "JavaScript Fundamentals & DOM",
        "Python Basics & File Handling",
        "Java OOPs & Exception Handling",
        "C/C++ Memory Management & Loops",
        "Problem Solving Techniques",
        "Basic Data Structures: Arrays, Strings, Stacks",
        "Recursion, Sorting & Searching",
        "Competitive Coding Practice Sets",
      ],
      details:
        "This track is for students preparing for interviews or competitive programming. It strengthens logic, improves coding habits, and builds confidence in solving problems using multiple languages.",
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "C/C++",
        "Logic Building",
        "DSA Basics",
        "Problem Solving",
      ],
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans mt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
            🚀 Coding Courses at Codeware IT
          </h1>
          <p className="text-lg md:text-xl mt-4 opacity-90">
            Learn job-ready skills through real-world projects, live sessions &
            certification.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Why Choose Codeware IT?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {[
            {
              icon: "📚",
              text: "Live project‑based training with expert mentors.",
            },
            {
              icon: "💼",
              text: "Mock interviews, resume reviews, & career support.",
            },
            {
              icon: "⏰",
              text: "Flexible timings – Online & Offline batches.",
            },
            { icon: "🏆", text: "Get certified & job-ready after completion." },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <span className="text-3xl">{item.icon}</span>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Course Tab Navigation */}
      <section className="relative bg-white">
        <nav className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b shadow-sm">
          <ul className="flex overflow-x-auto snap-x snap-mandatory gap-9 px-4 py-3 md:justify-center scrollbar-hide">
            {Object.keys(courses).map((key) => (
              <li key={key} className="snap-start shrink-0">
                <button
                  onClick={() => setActive(key)}
                  className={`relative whitespace-nowrap px-5 py-2 md:px-6 md:py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 overflow-hidden
            ${
              active === key
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                : "bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-50"
            }`}
                >
                  <span className="relative z-10">{courses[key].title}</span>

                  {/* Glowing Borders only if active */}
                  {active === key && (
                    <>
                      {/* Top Glow Line */}
                      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 blur-sm animate-glow" />

                      {/* Bottom Glow Line */}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-400 via-blue-300 to-blue-400 blur-sm animate-glow delay-100" />

                      {/* Left Glow Line */}
                      <span className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-blue-400 via-blue-300 to-indigo-400 blur-sm animate-glow delay-200" />

                      {/* Right Glow Line */}
                      <span className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-indigo-400 via-blue-300 to-blue-400 blur-sm animate-glow delay-300" />
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Course Content Display */}
        <div className="p-4">
          <div className="max-w-7xl mx-auto bg-white p-8  transition-all duration-300 space-y-10">
            {/* Title & Description */}
            <div className="md:grid md:grid-cols-3 gap-8">
              {/* Left Text */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  {courses[active].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {courses[active].description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full">
                    📘 {courses[active].type}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">
                    ⏳ Duration: {courses[active].duration}
                  </span>
                </div>

                {/* Highlights */}
                <div className="pt-5 flex flex-col gap-4 text-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 text-xl">📁</span>
                    <span>
                      <strong>Real-world</strong> Projects
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-rose-500 text-xl">❓</span>
                    <span>
                      <strong>Doubt Clearing</strong> Sessions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-700 text-xl">💼</span>
                    <span>
                      <strong>Placement</strong> Assistance
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Image & CTA */}
              <div className="space-y-8 mt-5 md:mt-0">
                <img
                  src={courses[active].image}
                  alt={courses[active].title}
                  className="rounded-xl w-full object-cover border shadow"
                />
                <a
                  href={`https://wa.me/9837218345?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                    courses[active].title
                  )}%20course`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition shadow"
                >
                  Enroll Now
                </a>
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                What You’ll Learn
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                {courses[active].overview}
              </p>
            </div>

            {/* Skills */}
            {courses[active].skills && courses[active].skills.length > 0 && (
              <div className="p-6 mt-6">
                <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                  Skills You’ll Gain
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {courses[active].skills.map((skill, i) => (
                    <li
                      key={i}
                      className="animated-border bg-black text-white p-4  hover:shadow-md transition"
                    >
                      ✅ {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Syllabus */}
            {courses[active].syllabus &&
              courses[active].syllabus.length > 0 && (
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                    Course Content
                  </h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {courses[active].syllabus.map((topic, index) => (
                      <li
                        key={index}
                        className="hover:text-blue-600 transition"
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Course Details */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                Course Details
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                {courses[active].details}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
