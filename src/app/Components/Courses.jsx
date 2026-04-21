"use client";

import { useState } from "react";
import Link from "next/link";
import { trackCourseEnquiry, trackWhatsAppClick, trackLeadFormSubmit } from "@/app/lib/gtag";

const categories = [
  {
    id: "school",
    label: "School",
    emoji: "🏫",
    color: "#60a5fa",
    gradient: "from-blue-600/20 to-blue-800/10",
    border: "border-blue-500/30",
    courses: [
      { name: "ICSE Class 9 — Java", tag: "ICSE", href: "/Courses/icse-class-9-java-dehradun", desc: "Foundation of Java programming for ICSE students. Build logic & OOP skills.", duration: "3 months", mode: "Offline" },
      { name: "ICSE Class 10 — Java", tag: "ICSE", href: "/Courses/icse-class-10-java-dehradun", desc: "Advanced Java concepts with board exam prep and practical coding.", duration: "4 months", mode: "Offline" },
      { name: "CBSE Class 11 — Python", tag: "CBSE", href: "/Courses/cbse-class-11-python-dehradun", desc: "Python basics aligned with CBSE curriculum including algorithms.", duration: "3 months", mode: "Offline" },
      { name: "CBSE Class 12 — Python", tag: "CBSE", href: "/Courses/cbse-class-12-python-dehradun", desc: "Advanced Python with file handling, databases & board exam focus.", duration: "4 months", mode: "Offline" },
    ],
  },
  {
    id: "college",
    label: "College",
    emoji: "🎓",
    color: "#c084fc",
    gradient: "from-purple-600/20 to-purple-800/10",
    border: "border-purple-500/30",
    courses: [
      { name: "Programming Languages", tag: "Multi-Lang", href: "/Courses/java-python-programming-dehradun", desc: "Java · Python · C · C++ · C# · PHP — Pick your language and master it.", duration: "3–6 months", mode: "Online/Offline" },
      { name: "Web Development", tag: "Web Dev", href: "/Courses/web-development-course-dehradun", desc: "HTML, CSS, JS, Bootstrap, and full web development workflow.", duration: "4 months", mode: "Online/Offline" },
    ],
  },
  {
    id: "jobready",
    label: "Job Ready",
    emoji: "🚀",
    color: "#f472b6",
    gradient: "from-pink-600/20 to-pink-800/10",
    border: "border-pink-500/30",
    courses: [
      { name: "React JS", tag: "React", href: "/Courses/react-js-course-dehradun", desc: "Build dynamic UIs with React hooks, context, and real projects.", duration: "2 months", mode: "Online/Offline" },
      { name: "Next.js", tag: "Next.js", href: "/Courses/nextjs-course-dehradun", desc: "Full-stack Next.js with SSR, SSG, API routes and deployment.", duration: "2 months", mode: "Online/Offline" },
      { name: "Frontend Development", tag: "Frontend", href: "/Courses/frontend-course-dehradun", desc: "Complete frontend mastery — HTML, CSS, JS, React, Tailwind.", duration: "3 months", mode: "Online/Offline" },
      { name: "Backend Development", tag: "Backend", href: "/Courses/backend-course-dehradun", desc: "Node.js, Express, REST APIs, MongoDB, SQL databases.", duration: "3 months", mode: "Online/Offline" },
      { name: "Full Stack Dev", tag: "Full Stack", href: "/Courses/fullstack-course-dehradun", desc: "End-to-end development from UI to database. Job-guaranteed support.", duration: "6 months", mode: "Online/Offline" },
    ],
  },
  {
    id: "industrial",
    label: "Industrial Training",
    emoji: "🏭",
    color: "#fb923c",
    gradient: "from-orange-600/20 to-orange-800/10",
    border: "border-orange-500/30",
    courses: [
      { name: "MERN Stack Training", tag: "MERN", href: "/Courses/mern-stack-development", desc: "MongoDB, Express, React, Node — industry-grade training with live projects.", duration: "6 months", mode: "Offline + Live" },
      { name: "Next.js Industrial", tag: "Next.js", href: "/Courses/nextjs-course-dehradun", desc: "Professional Next.js development with real-world company projects.", duration: "4 months", mode: "Offline + Live" },
      { name: "Frontend Industrial", tag: "Frontend", href: "/Courses/frontend-course-dehradun", desc: "Agency-level frontend skills with client project exposure.", duration: "3 months", mode: "Offline + Live" },
      { name: "Backend Industrial", tag: "Backend", href: "/Courses/backend-course-dehradun", desc: "Server architecture, APIs, and backend systems at company scale.", duration: "3 months", mode: "Offline + Live" },
    ],
  },
];

const WA_NUMBER = "9837218345";

function CourseCard({ course, color, onEnquire }) {
  return (
    <article className="group relative bg-[#0a1240] border border-white/8 hover:border-white/20 rounded-2xl p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 cursor-pointer overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{background: `radial-gradient(ellipse at top right, ${color}15, transparent 70%)`}} />
      
      <div className="flex items-start justify-between mb-3 relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg" style={{background: color+"22", color}}>
          {course.tag}
        </span>
        <span className="text-[10px] text-gray-500 flex items-center gap-1">
          <span>🕒</span> {course.duration}
        </span>
      </div>

      <h3 className="text-white font-bold text-base mb-2 relative z-10 group-hover:text-white/90 transition-colors leading-snug">
        {course.name}
      </h3>
      <p className="text-gray-400 text-xs leading-relaxed flex-1 relative z-10 mb-4">{course.desc}</p>

      <div className="flex items-center gap-1.5 mb-4 relative z-10">
        <span className="text-[10px] bg-white/5 text-gray-400 px-2 py-1 rounded-md">{course.mode}</span>
      </div>

      <div className="flex items-center gap-2 relative z-10">
        <Link href={course.href} className="flex-1 text-center text-xs font-semibold py-2 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-white/30 transition-all">
          View Details
        </Link>
        <button onClick={() => { trackCourseEnquiry(course.name); onEnquire(course.name); }} className="flex-1 text-center text-xs font-semibold py-2 rounded-xl text-white transition-all" style={{background: color+"cc"}}>
          Enquire Now
        </button>
      </div>
    </article>
  );
}

function EnquiryModal({ courseName, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", category: "" });

  const handleSubmit = () => {
    if (!form.name || !form.phone) return alert("Please fill your name and phone number.");
    const msg = encodeURIComponent(
      `Hi CodewareIT! 🙏\n\nI'm interested in enrolling.\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Interested In:* ${courseName}${form.category ? `\n*Category:* ${form.category}` : ""}\n\nPlease share details.`
    );
    trackLeadFormSubmit(courseName);
    trackWhatsAppClick("enquiry_modal");
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-[#060D30] border border-white/15 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}>
        <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-400" />
        <div className="p-6">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">Enquire About Course</h3>
              <p className="text-gray-400 text-sm mt-1">{courseName}</p>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-xl ml-4 mt-0.5">✕</button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-1.5">Your Name *</label>
              <input
                type="text" placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-1.5">Phone Number *</label>
              <input
                type="tel" placeholder="Your WhatsApp number"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 font-medium block mb-1.5">I am a...</label>
              <select
                value={form.category}
                onChange={(e) => setForm({...form, category: e.target.value})}
                className="w-full bg-[#0a1240] border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-purple-500 transition-colors"
              >
                <option value="">Select your category</option>
                <option value="School Student (ICSE)">School Student — ICSE</option>
                <option value="School Student (CBSE)">School Student — CBSE</option>
                <option value="College / Graduation Student">College / Graduation Student</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Working Professional">Working Professional</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full mt-5 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.534 5.879L0 24l6.31-1.512A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.966 0-3.81-.519-5.4-1.426l-.387-.228-4.014.962.998-3.897-.253-.4A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Send Enquiry on WhatsApp
          </button>
          <p className="text-center text-gray-600 text-xs mt-3">Your info goes directly to our counselor 🎓</p>
        </div>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("school");
  const [enquiryCourse, setEnquiryCourse] = useState(null);
  const active = categories.find((c) => c.id === activeTab);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .cs-section { font-family: 'DM Sans', sans-serif; }
        .tab-pill {
          transition: all 0.25s;
          white-space: nowrap;
        }
        .tab-pill.active {
          color: white; font-weight: 600;
        }
        .grid-anim { animation: gridIn 0.3s ease; }
        @keyframes gridIn {
          from { opacity:0; transform: translateY(8px); }
          to   { opacity:1; transform: translateY(0); }
        }
      `}</style>

      {enquiryCourse && <EnquiryModal courseName={enquiryCourse} onClose={() => setEnquiryCourse(null)} />}

      <section className="cs-section py-20 sm:py-28 bg-[#040A26] relative overflow-hidden" id="courses" aria-labelledby="courses-heading">
        {/* BG glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4">
              🎓 Programs & Courses
            </span>
            <h2 id="courses-heading" className="text-3xl sm:text-5xl font-extrabold text-white mb-4" style={{fontFamily:"'Syne',sans-serif"}}>
              Find Your Perfect<br/>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Learning Path</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
              From school students to working professionals — we have a course crafted exactly for you.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 justify-start sm:justify-center mb-10 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`tab-pill flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm border flex-shrink-0 ${
                  activeTab === cat.id
                    ? "text-white border-transparent"
                    : "text-gray-400 border-white/10 hover:border-white/25 hover:text-gray-200"
                }`}
                style={activeTab === cat.id ? { background: cat.color+"25", borderColor: cat.color+"50", color: cat.color } : {}}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Course grid */}
          {active && (
            <div key={active.id} className={`grid-anim grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${active.courses.length <= 2 ? "2" : active.courses.length === 3 ? "3" : "4"} gap-4 sm:gap-5`}>
              {active.courses.map((course, i) => (
                <CourseCard key={i} course={course} color={active.color} onEnquire={setEnquiryCourse} />
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <p className="text-gray-500 text-sm mb-5">Not sure which course is right for you?</p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi! I need help choosing the right course at CodewareIT. Can you guide me?")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/25"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.534 5.879L0 24l6.31-1.512A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.966 0-3.81-.519-5.4-1.426l-.387-.228-4.014.962.998-3.897-.253-.4A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Get Free Counselling on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
