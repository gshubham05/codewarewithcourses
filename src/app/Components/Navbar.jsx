"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const courseMenu = [
  {
    label: "School – ICSE", emoji: "📘", color: "#60a5fa", bg: "from-blue-500/10 to-blue-600/5",
    items: [
      { label: "Class 9 — Java", href: "/Courses/icse-class-9-java-dehradun", tag: "ICSE" },
      { label: "Class 10 — Java", href: "/Courses/icse-class-10-java-dehradun", tag: "ICSE" },
    ],
  },
  {
    label: "School – CBSE", emoji: "📗", color: "#4ade80", bg: "from-green-500/10 to-green-600/5",
    items: [
      { label: "Class 11 — Python", href: "/Courses/cbse-class-11-python-dehradun", tag: "CBSE" },
      { label: "Class 12 — Python", href: "/Courses/cbse-class-12-python-dehradun", tag: "CBSE" },
    ],
  },
  {
    label: "College / Graduation", emoji: "🎓", color: "#c084fc", bg: "from-purple-500/10 to-purple-600/5",
    items: [
      { label: "Java · Python · C · C++ · C# · PHP", href: "/Courses/java-python-programming-dehradun", tag: "Lang" },
      { label: "Web Development", href: "/Courses/web-development-course-dehradun", tag: "Web" },
    ],
  },
  {
    label: "Job Ready", emoji: "🚀", color: "#f472b6", bg: "from-pink-500/10 to-pink-600/5",
    items: [
      { label: "React JS", href: "/Courses/react-js-course-dehradun", tag: "React" },
      { label: "Next.js", href: "/Courses/nextjs-course-dehradun", tag: "Next" },
      { label: "Frontend Dev", href: "/Courses/frontend-course-dehradun", tag: "FE" },
      { label: "Backend Dev", href: "/Courses/backend-course-dehradun", tag: "BE" },
      { label: "Full Stack", href: "/Courses/fullstack-course-dehradun", tag: "FS" },
    ],
  },
  {
    label: "Industrial Training", emoji: "🏭", color: "#fb923c", bg: "from-orange-500/10 to-orange-600/5",
    items: [
      { label: "MERN Stack Training", href: "/Courses/mern-stack-development", tag: "MERN" },
      { label: "Next.js Training", href: "/Courses/nextjs-course-dehradun", tag: "Next" },
      { label: "Frontend Training", href: "/Courses/frontend-course-dehradun", tag: "FE" },
      { label: "Backend Training", href: "/Courses/backend-course-dehradun", tag: "BE" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const leaveTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hoverEnter = (m) => { clearTimeout(leaveTimer.current); setOpenMenu(m); };
  const hoverLeave = () => { leaveTimer.current = setTimeout(() => setOpenMenu(null), 150); };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
        .nav-glass {
          background: rgba(4,10,38,${scrolled ? "0.95" : "0.7"});
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,${scrolled ? "0.08" : "0.04"});
          box-shadow: ${scrolled ? "0 4px 40px rgba(0,0,0,0.5)" : "none"};
          transition: all 0.4s ease;
        }
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          color: rgba(255,255,255,0.75);
          padding: 1.5rem 0.75rem;
          position: relative;
          transition: color 0.2s;
          display: inline-flex; align-items: center; gap: 4px;
        }
        .nav-link::after {
          content:''; position: absolute;
          bottom: 0.9rem; left: 0.75rem;
          width: 0; height: 2px;
          background: linear-gradient(90deg,#a855f7,#3b82f6);
          border-radius: 2px;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: white; }
        .nav-link:hover::after { width: calc(100% - 1.5rem); }
        .mega-panel { animation: megaIn 0.2s cubic-bezier(0.16,1,0.3,1); }
        @keyframes megaIn {
          from { opacity:0; transform: translateY(-8px) scale(0.98); }
          to   { opacity:1; transform: translateY(0) scale(1); }
        }
        .contact-btn {
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 0.875rem;
          color: white; padding: 0.6rem 1.25rem; border-radius: 0.75rem;
          transition: all 0.25s;
          box-shadow: 0 0 0 0 rgba(124,58,237,0.3);
        }
        .contact-btn:hover { box-shadow: 0 4px 20px rgba(124,58,237,0.5); transform: translateY(-1px); }
        .mobile-slide { animation: slideDown 0.3s cubic-bezier(0.16,1,0.3,1); }
        @keyframes slideDown {
          from { opacity:0; transform: translateY(-10px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .ci-tag {
          opacity:0; transform: scale(0.8);
          transition: all 0.15s; font-size: 9px; font-weight: 700;
          padding: 2px 6px; border-radius: 6px;
        }
        .ci:hover .ci-tag { opacity:1; transform: scale(1); }
      `}</style>

      <nav className="nav-glass fixed top-0 left-0 w-full z-50" role="navigation" aria-label="Primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center" style={{height:"4.25rem"}}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="CodewareIT Home">
            <div className="relative">
              <Image src="/logo.png" width={40} height={40} alt="CodewareIT" priority className="rounded-xl" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#040A26] animate-pulse" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-purple-300 transition-colors" style={{fontFamily:"'Syne',sans-serif"}}>
              Codeware<span className="text-purple-400">IT</span>
            </span>
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center" role="menubar">
            <li role="none"><Link href="/Aboutus" className="nav-link">About Us</Link></li>

            <li className="relative" role="none" onMouseEnter={() => hoverEnter("courses")} onMouseLeave={hoverLeave}>
              <button className="nav-link" aria-haspopup="true" aria-expanded={openMenu === "courses"}>
                Courses
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${openMenu === "courses" ? "rotate-180 text-purple-400" : ""}`} />
              </button>
              {openMenu === "courses" && (
                <div className="mega-panel absolute top-full left-1/2 -translate-x-1/2 mt-0 z-50" role="menu"
                  onMouseEnter={() => hoverEnter("courses")} onMouseLeave={hoverLeave}>
                  <div className="mt-1 bg-[#060D30] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden w-[780px]">
                    <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />
                    <div className="p-5 grid grid-cols-3 gap-2">
                      {courseMenu.map((cat) => (
                        <div key={cat.label} className={`rounded-xl p-3 bg-gradient-to-br ${cat.bg} border border-white/5`}>
                          <div className="flex items-center gap-1.5 mb-2.5">
                            <span className="text-sm">{cat.emoji}</span>
                            <span className="text-[10px] font-extrabold uppercase tracking-widest" style={{ color: cat.color }}>
                              {cat.label}
                            </span>
                          </div>
                          <div className="space-y-0.5">
                            {cat.items.map((item) => (
                              <Link key={item.href} href={item.href} role="menuitem"
                                onClick={() => setOpenMenu(null)}
                                className="ci flex items-center justify-between py-1.5 px-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all">
                                <span>{item.label}</span>
                                <span className="ci-tag" style={{ background: cat.color + "22", color: cat.color }}>{item.tag}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-white/5 px-5 py-3 flex justify-between items-center bg-white/[0.02]">
                      <Link href="/Coursescoding" onClick={() => setOpenMenu(null)} className="text-xs text-purple-400 hover:text-purple-300 transition-colors">→ All Coding Courses</Link>
                      <Link href="/Coursesnoncoding" onClick={() => setOpenMenu(null)} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">→ Non-Coding Courses</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li role="none"><Link href="/blog" className="nav-link">Blog</Link></li>
            <li role="none"><Link href="/intern" className="nav-link">Internship</Link></li>
            <li role="none"><Link href="/Students" className="nav-link">Students</Link></li>
            <li role="none" className="ml-3"><Link href="/contact" className="contact-btn">Contact Us</Link></li>
          </ul>

          {/* Mobile burger */}
          <button onClick={() => { setIsOpen(!isOpen); setMobileCoursesOpen(false); setMobileCatOpen(null); }}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div id="mobile-menu" className="mobile-slide fixed top-[4.25rem] left-0 w-full z-40 bg-[#040A26] overflow-y-auto" style={{height:"calc(100vh - 4.25rem)", fontFamily:"'DM Sans',sans-serif"}}>
          <div className="h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500" />
          <div className="p-4 space-y-1">
            <Link href="/Aboutus" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all text-sm font-medium">
              <span>ℹ️</span> About Us
            </Link>

            <div className="rounded-xl overflow-hidden">
              <button onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)} className="w-full flex items-center justify-between p-3.5 hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                <span className="flex items-center gap-3 text-sm font-medium"><span>📚</span> Courses</span>
                <FaChevronDown className={`text-xs text-gray-500 transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileCoursesOpen && (
                <div className="bg-white/[0.03] rounded-b-xl mx-1 mb-1 divide-y divide-white/5">
                  {courseMenu.map((cat) => (
                    <div key={cat.label}>
                      <button onClick={() => setMobileCatOpen(mobileCatOpen === cat.label ? null : cat.label)} className="w-full flex items-center justify-between px-4 py-3">
                        <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: cat.color }}>{cat.emoji} {cat.label}</span>
                        <FaChevronDown className={`text-gray-500 text-xs transition-transform duration-200 ${mobileCatOpen === cat.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileCatOpen === cat.label && (
                        <div className="pl-8 pb-2 space-y-0.5">
                          {cat.items.map((item) => (
                            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block py-2 px-3 text-xs text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition">{item.label}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {[{href:"/intern",icon:"🧑‍💼",label:"Internship"},{href:"/Students",icon:"👨‍🎓",label:"Students"},{href:"/blog",icon:"📰",label:"Blog"}].map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3.5 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all text-sm font-medium">
                <span>{l.icon}</span> {l.label}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm mt-2">
              📞 Contact Us
            </Link>
            <a href="https://wa.me/9837218345" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors">
              💬 WhatsApp Us
            </a>
          </div>
          <p className="text-center text-gray-600 text-xs pb-4">© 2026 Codeware IT Pvt Ltd</p>
        </div>
      )}
    </>
  );
}
