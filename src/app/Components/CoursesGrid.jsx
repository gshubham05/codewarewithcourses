"use client";

function fireGA4(eventName, params = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

const courses = [
  { name: "MERN Stack", outcome: "Full Stack Developer", duration: "4 months", slug: "fullstack-course-dehradun", hot: true },
  { name: "React.js", outcome: "Frontend Developer", duration: "2 months", slug: "react-js-course-dehradun" },
  { name: "Next.js", outcome: "Full Stack Engineer", duration: "2.5 months", slug: "nextjs-course-dehradun" },
  { name: "Node.js", outcome: "Backend Developer", duration: "2 months", slug: "backend-course-dehradun" },
  { name: "Python", outcome: "Python Developer / CBSE", duration: "2 months", slug: "cbse-class-11-python-dehradun" },
  { name: "Java", outcome: "Java Developer / ICSE", duration: "2 months", slug: "icse-class-9-java-dehradun" },
  { name: "DSA", outcome: "Interview-Ready Engineer", duration: "3 months", slug: "fullstack-course-dehradun", hot: true },
  { name: "PHP", outcome: "Web Backend Developer", duration: "1.5 months", slug: "backend-course-dehradun" },
  { name: "C / C++ / C#", outcome: "Systems Programmer", duration: "2 months", slug: "fullstack-course-dehradun" },
  { name: "Full Stack", outcome: "Full Stack Developer", duration: "5 months", slug: "fullstack-course-dehradun" },
  { name: "Frontend Dev", outcome: "UI Engineer", duration: "2 months", slug: "frontend-course-dehradun" },
  { name: "Backend Dev", outcome: "API Developer", duration: "2 months", slug: "backend-course-dehradun" },
  { name: "Industrial Training", outcome: "Industry-Certified Engineer", duration: "6 months", slug: "fullstack-course-dehradun", hot: true },
  { name: "Internship Program", outcome: "Real-World Experience", duration: "3 months", slug: "fullstack-course-dehradun" },
];

export default function CoursesGrid({ onOpenForm }) {
  return (
    <section className="py-20 px-4 bg-white" aria-label="IT courses in Dehradun" id="courses">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#2C2C2A] mb-3">
            Job-Ready Courses in Dehradun
          </h2>
          <p className="text-[#5F5E5A] max-w-xl mx-auto">
            Every course is built around one goal: getting you hired. Pick yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {courses.map((c, i) => (
            <div
              key={i}
              className="group relative bg-[#F8F7F4] border border-[#2C2C2A]/8 rounded-[14px] p-5 hover:bg-white hover:border-[#E8593C]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              {c.hot && (
                <span className="absolute -top-2.5 right-3 bg-[#E8593C] text-white text-[9px] font-black px-2 py-0.5 rounded-full tracking-wide uppercase">
                  HOT
                </span>
              )}
              <div className="mb-3">
                <h3 className="font-black text-[#2C2C2A] text-base leading-tight">{c.name}</h3>
                <p className="text-[#1D9E75] text-xs font-semibold mt-0.5">
                  Get hired as {c.outcome}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-[#2C2C2A]/8 text-[#5F5E5A] px-2.5 py-1 rounded-full font-medium">
                  {c.duration}
                </span>
                <button
                  onClick={() => {
                    fireGA4("cta_courses_click", { course: c.name });
                    if (onOpenForm) onOpenForm(c.name);
                    else {
                      const el = document.getElementById("apply-form");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-xs font-bold text-[#E8593C] hover:text-white hover:bg-[#E8593C] px-3 py-1.5 rounded-[6px] border border-[#E8593C]/30 hover:border-transparent transition-all"
                >
                  Apply →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
