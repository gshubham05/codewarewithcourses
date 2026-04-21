"use client";
import { useState } from "react";

export default function NonCodingCoursesSection() {
  const [active, setActive] = useState("seo");

  const seoKeywordsArray = [
    "best computer institute in Dehradun",
    "best python institute in Dehradun",
    "best java institute in Dehradun",
    "best MERN stack institute in Dehradun",
    "best MEAN stack institute in Dehradun",
    "best PHP programming institute in Dehradun",
    "best programming institute in Dehradun",
    "best full stack development Dehradun",
    "industrial training in Dehradun",
    "summer internship in Dehradun",
    "best internship in IT in Dehradun",
    "coding bootcamp in Dehradun",
    "web development internship in Dehradun",
    "software development internship in Dehradun",
    "best computer institute in India",
    "best python institute in India",
    "best java institute in India",
    "best MEAN stack institute in India",
    "best PHP programming institute in India",
    "best programming institute in India",
    "best full stack development in India",
    "industrial training in India",
    "summer internship in India",
    "best internship in IT in India",
    "coding internship in IT in India",
    "Bootstrap",
    "Tailwind",
    "HTML",
    "CSS",
    "JS",
    "JWT",
    "JSON",
    "BSON",
    "bcrypt",
    "python",
    "java",
    "javascript",
    "Codeware IT Pvt Ltd Dehradun",
    "Shubham Goyal",
    "9837218345",
    "www.codewareit.in"
  ];

  const nonCodingCourses = {
    seo: {
      title: "SEO & SEM",
      image: "/seo.png",
      description:
        "Master Search Engine Optimization and Marketing to rank higher and attract targeted traffic with keywords like best computer institute in Dehradun, best python institute in India, and more.",
      type: "Digital Marketing Core",
      overview:
        "Learn On-Page & Off-Page SEO, technical SEO, Google Ads, SEM strategies, and how to use tools like Google Search Console, Ahrefs, and SEMrush. Improve your digital presence with relevant keywords including Java, Bootstrap, Tailwind, and JWT.",
      syllabus: [
        "SEO Fundamentals & Algorithms",
        "Keyword Research & Planning",
        "On-Page SEO (Meta Tags, Structure)",
        "Off-Page SEO & Link Building",
        "Technical SEO (Crawlability & Indexing)",
        "Google Ads & Campaign Strategy",
        "Analytics: Google Analytics, Search Console",
        "SEO Tools: SEMrush, Ahrefs, Screaming Frog",
      ],
      details:
        "Perfect for marketers, business owners, and content creators aiming to boost visibility and search rankings. Real-world strategies with live campaign experience.",
      skills: [
        "On-Page SEO",
        "Google Ads",
        "Technical SEO",
        "SEM Campaigns",
        "Keyword Strategy",
        "SEO Tools (SEMrush, Ahrefs)",
      ],
    },
    marketing: {
      title: "Digital Marketing",
      image: "/dm.png",
      description:
        "Complete digital marketing course covering social media, funnels, email marketing, and growth hacking.",
      type: "Career Track",
      overview:
        "Explore paid ads, organic reach, content planning, brand building, analytics, and real-world funnels to generate leads and drive growth.",
      syllabus: [
        "Intro to Digital Marketing Ecosystem",
        "Marketing Funnels & Strategy",
        "Facebook & Instagram Ads",
        "Email Marketing & Automation",
        "Influencer & Affiliate Marketing",
        "Analytics & Data-Driven Campaigns",
        "Copywriting for Conversions",
        "Brand Positioning & Storytelling",
      ],
      details:
        "Ideal for freelancers, startups, and professionals. You’ll build and launch real campaigns using best practices from top-performing brands.",
      skills: [
        "Facebook Ads",
        "Email Marketing",
        "Conversion Funnels",
        "Analytics",
        "Branding",
        "Social Media Strategy",
      ],
    },
    design: {
      title: "Graphic Design",
      image: "/gd.jpeg",
      description:
        "Become a professional designer using Photoshop, Illustrator, and Canva for branding and social media.",
      type: "Creative Track",
      overview:
        "Learn principles of design, color, typography, and branding. Projects include social media posts, logo design, presentations, and digital products.",
      syllabus: [
        "Intro to Design Thinking & Tools",
        "Typography & Layout Principles",
        "Color Theory & Branding Basics",
        "Adobe Photoshop & Illustrator",
        "Canva for Quick Designs",
        "Social Media Kit Design",
        "Portfolio Projects & Mockups",
        "Exporting for Print & Digital Use",
      ],
      details:
        "Great for beginners, influencers, or small businesses wanting to create stunning visuals. Learn by doing through project-based modules.",
      skills: [
        "Adobe Photoshop",
        "Illustrator",
        "Canva",
        "Social Media Kits",
        "Design Theory",
        "Branding",
      ],
    },
  };

  return (
    <section className="bg-gray-50 min-h-screen mt-20">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-extrabold leading-tight drop-shadow-md">
            🚀 Non-Coding Courses at Codeware IT
          </h1>
          <p className="text-lg md:text-xl mt-4 opacity-90">
            Explore our range of non-coding courses designed to enhance your
            skills in various domains and improve your career prospects in
            programming technologies like Python, Java, JavaScript, MERN, and more.
          </p>
          <p className="mt-2 text-sm opacity-70">
            Popular SEO Keywords: {seoKeywordsArray.join(", ")}
          </p>
        </div>
      </section>
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

      <section className="relative bg-white">
        <nav className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b shadow-sm">
          <ul className="flex overflow-x-auto snap-x snap-mandatory gap-9 px-4 py-3 md:justify-center scrollbar-hide">
            {Object.keys(nonCodingCourses).map((key) => (
              <li key={key} className="snap-start shrink-0">
                <button
                  onClick={() => setActive(key)}
                  className={`relative whitespace-nowrap px-5 py-2 md:px-6 md:py-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 overflow-hidden ${
                    active === key
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-white text-indigo-600 border border-indigo-300 hover:bg-indigo-50"
                  }`}
                >
                  <span className="relative z-10">
                    {nonCodingCourses[key].title}
                  </span>
                  {active === key && (
                    <>
                      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 blur-sm animate-glow" />
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-400 via-blue-300 to-blue-400 blur-sm animate-glow delay-100" />
                      <span className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-blue-400 via-blue-300 to-indigo-400 blur-sm animate-glow delay-200" />
                      <span className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-indigo-400 via-blue-300 to-blue-400 blur-sm animate-glow delay-300" />
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4">
          <div className="max-w-7xl mx-auto bg-white p-8 transition-all duration-300 space-y-10">
            <div className="md:grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-3xl font-bold text-gray-900">
                  {nonCodingCourses[active].title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {nonCodingCourses[active].description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 text-sm rounded-full">
                    📘 {nonCodingCourses[active].type}
                  </span>
                </div>
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

              <div className="space-y-8 mt-5 md:mt-0">
                <img
                  src={nonCodingCourses[active].image}
                  alt={nonCodingCourses[active].title}
                  className="rounded-xl w-full object-cover border shadow"
                />
                <a
                  href={`https://wa.me/9837218345?text=I'm%20interested%20in%20the%20${encodeURIComponent(
                    nonCodingCourses[active].title
                  )}%20course`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-full transition shadow"
                >
                  Enroll Now
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                What You’ll Learn
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                {nonCodingCourses[active].overview}
              </p>
            </div>

            {nonCodingCourses[active].skills &&
              nonCodingCourses[active].skills.length > 0 && (
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                    Skills You’ll Gain
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {nonCodingCourses[active].skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-gray-50 p-4 rounded-xl border hover:shadow-md transition"
                      >
                        ✅ {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {nonCodingCourses[active].syllabus &&
              nonCodingCourses[active].syllabus.length > 0 && (
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                    Course Content
                  </h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    {nonCodingCourses[active].syllabus.map((topic, index) => (
                      <li key={index} className="hover:text-blue-600 transition">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                Course Details
              </h4>
              <p className="text-lg leading-relaxed text-gray-700">
                {nonCodingCourses[active].details}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
