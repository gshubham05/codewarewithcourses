"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

// ── SEO-friendly lowercase URLs ─────────────────────────────────────
const courseMenu = [
  {
    label: "ICSE",
    emoji: "📘",
    color: "#2563eb",
    items: [
      { label: "Class 9 — Java",  href: "/courses/icse-class-9-java-dehradun"  },
      { label: "Class 10 — Java", href: "/courses/icse-class-10-java-dehradun" },
    ],
  },
  {
    label: "CBSE",
    emoji: "📗",
    color: "#16a34a",
    items: [
      { label: "Class 11 — Python", href: "/courses/cbse-class-11-python-dehradun" },
      { label: "Class 12 — Python", href: "/courses/cbse-class-12-python-dehradun" },
    ],
  },
  {
    label: "Graduation",
    emoji: "🎓",
    color: "#7c3aed",
    items: [
      { label: "Java · Python · C · C++ · C# · PHP", href: "/courses/java-python-programming-dehradun"  },
      { label: "Web Development",                    href: "/courses/web-development-course-dehradun"  },
    ],
  },
  {
    label: "Job Ready",
    emoji: "🚀",
    color: "#db2777",
    items: [
      { label: "React JS",    href: "/courses/react-js-course-dehradun"  },
      { label: "Next.js",     href: "/courses/nextjs-course-dehradun"    },
      { label: "Frontend",    href: "/courses/frontend-course-dehradun"  },
      { label: "Backend",     href: "/courses/backend-course-dehradun"   },
      { label: "Full Stack",  href: "/courses/fullstack-course-dehradun" },
    ],
  },
];

function MobileLink({ href, icon, label, onClick }) {
  return (
    <li className="flex items-center p-3 rounded-lg hover:bg-[#0C1233] transition" role="none">
      <div className="flex items-center gap-3">
        <span className="text-lg" aria-hidden="true">{icon}</span>
        <Link href={href} onClick={onClick} className="text-sm font-medium" role="menuitem">
          {label}
        </Link>
      </div>
    </li>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(null);
  const leaveTimer = useRef(null);

  const handleMouseEnter = (menu) => { clearTimeout(leaveTimer.current); setOpenMenu(menu); };
  const handleMouseLeave = () => { leaveTimer.current = setTimeout(() => setOpenMenu(null), 120); };
  const toggleMobileMenu = () => { setIsOpen(!isOpen); setMobileCoursesOpen(false); setMobileCategoryOpen(null); };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary"
        className="bg-[#040A26] shadow-md px-2 fixed top-0 left-0 w-full z-50 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" aria-label="Home - CodewareIT Best Computer Coding Institute Dehradun">
              <Image src="/logo.png" width={80} height={90} alt="CodewareIT — Best Computer Coding Institute Dehradun" priority className="pt-1" />
            </Link>
            <Link href="/" aria-label="Homepage - CodewareIT">
              <h1 className="text-2xl font-bold text-white cursor-pointer ml-2">CodewareIT</h1>
            </Link>
          </div>

          <button onClick={toggleMobileMenu} className="md:hidden text-2xl" aria-label={isOpen ? "Close Menu" : "Open Menu"} aria-expanded={isOpen} aria-controls="mobile-menu">
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>

          <ul className="hidden md:flex space-x-8 text-white items-center" role="menubar">
            <li role="none">
              {/* SEO URL: /about-best-computer-coding-institute-in-dehradun */}
              <Link href="/about-best-computer-coding-institute-in-dehradun" className="hover:text-blue-400 transition-colors text-sm font-medium">About Us</Link>
            </li>

            <li className="relative" role="none" onMouseEnter={() => handleMouseEnter("Courses")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-400 transition-colors py-6" aria-haspopup="true" aria-expanded={openMenu === "Courses"}>
                Courses
                <FaChevronDown className={`text-xs transition-transform duration-200 ${openMenu === "Courses" ? "rotate-180" : ""}`} />
              </button>

              {openMenu === "Courses" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 z-50" role="menu" aria-label="Courses mega menu" onMouseEnter={() => handleMouseEnter("Courses")} onMouseLeave={handleMouseLeave}>
                  <div className="bg-[#0A1C55] border border-white/10 rounded-2xl shadow-2xl p-5 mt-1 w-[680px] grid grid-cols-2 gap-4">
                    {courseMenu.map((cat) => (
                      <div key={cat.label} className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2 px-3" style={{ color: cat.color }}>
                          <span>{cat.emoji}</span>{cat.label}
                        </div>
                        {cat.items.map((item) => (
                          <Link key={item.href} href={item.href} role="menuitem" onClick={() => setOpenMenu(null)} className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-150">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <div className="col-span-2 border-t border-white/10 pt-3 flex gap-4">
                      {/* SEO URL: /courses-best-computer-coding-institute-in-dehradun */}
                      <Link href="/courses-best-computer-coding-institute-in-dehradun" onClick={() => setOpenMenu(null)} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">→ All Coding Courses</Link>
                      <Link href="/Coursesnoncoding" onClick={() => setOpenMenu(null)} className="text-xs text-blue-400 hover:text-blue-300 transition-colors">→ Non-Coding Courses</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* SEO URL: /blog-best-computer-coding-institute-in-dehradun */}
            <li role="none"><Link href="/blog" className="hover:text-blue-400 transition-colors text-sm font-medium">Blog</Link></li>

            {/* SEO URL: /internship-best-computer-coding-institute-in-dehradun */}
            <li role="none"><Link href="/internship-best-computer-coding-institute-in-dehradun" className="hover:text-blue-400 transition-colors text-sm font-medium">Internship</Link></li>

            {/* SEO URL: /students-best-computer-coding-institute-in-dehradun */}
            <li role="none"><Link href="/students-best-computer-coding-institute-in-dehradun" className="hover:text-blue-400 transition-colors text-sm font-medium">Students</Link></li>

            <li role="none">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="fixed top-[5rem] left-0 w-full h-screen bg-[#040A26] z-50 p-4 md:hidden overflow-y-auto" role="menu">
          <ul className="text-white space-y-2">
            <MobileLink href="/about-best-computer-coding-institute-in-dehradun" icon="ℹ️" label="About Us" onClick={toggleMobileMenu} />

            <li className="rounded-lg overflow-hidden">
              <button onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-[#0C1233] transition">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📚</span>
                  <span className="text-sm font-medium">Courses</span>
                </div>
                <FaChevronDown className={`text-gray-400 text-sm transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileCoursesOpen && (
                <div className="bg-[#0C1233] rounded-b-lg ml-2 mr-2 mb-1">
                  {courseMenu.map((cat) => (
                    <div key={cat.label}>
                      <button onClick={() => setMobileCategoryOpen(mobileCategoryOpen === cat.label ? null : cat.label)} className="w-full flex items-center justify-between px-4 py-3 text-left">
                        <span className="text-xs font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: cat.color }}>{cat.emoji} {cat.label}</span>
                        <FaChevronDown className={`text-gray-500 text-xs transition-transform duration-200 ${mobileCategoryOpen === cat.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileCategoryOpen === cat.label && (
                        <div className="pl-6 pb-2 space-y-1">
                          {cat.items.map((item) => (
                            <Link key={item.href} href={item.href} onClick={toggleMobileMenu} className="block py-2 px-3 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="px-4 pb-3 pt-2 border-t border-white/10 space-y-1">
                    <Link href="/courses-best-computer-coding-institute-in-dehradun" onClick={toggleMobileMenu} className="block text-xs text-blue-400 hover:text-blue-300 py-1">→ All Coding Courses</Link>
                    <Link href="/Coursesnoncoding" onClick={toggleMobileMenu} className="block text-xs text-blue-400 hover:text-blue-300 py-1">→ Non-Coding Courses</Link>
                  </div>
                </div>
              )}
            </li>

            <MobileLink href="/blog"                                                         icon="📰"  label="Blog"        onClick={toggleMobileMenu} />
            <MobileLink href="/internship-best-computer-coding-institute-in-dehradun"        icon="🧑‍💼" label="Internship"  onClick={toggleMobileMenu} />
            <MobileLink href="/students-best-computer-coding-institute-in-dehradun"          icon="👨‍🎓" label="Students"    onClick={toggleMobileMenu} />
            <MobileLink href="/contact"                                                       icon="📞"  label="Contact Us"  onClick={toggleMobileMenu} />
          </ul>
          <div className="border-t border-t-[#0C1233] mt-4 pt-4">
            <p className="text-sm text-center text-white">&copy; {new Date().getFullYear()} Codeware IT. All rights reserved.</p>
          </div>
        </div>
      )}
    </>
  );
}
