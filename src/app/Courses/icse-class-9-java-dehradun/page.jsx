"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// ── Syllabus data ──────────────────────────────────────────────────
const SYLLABUS = [
  {
    unit: "Unit 1",
    title: "Introduction to Java",
    topics: [
      "What is Java? History & Features",
      "Setting up BlueJ IDE on your computer",
      "Your first Java program — Hello World!",
      "Understanding tokens, keywords & identifiers",
      "Comments in Java (single-line & multi-line)",
    ],
  },
  {
    unit: "Unit 2",
    title: "Data Types, Variables & Operators",
    topics: [
      "Primitive data types — int, float, double, char, boolean",
      "Variable declaration and initialisation",
      "Arithmetic, Relational & Logical operators",
      "Increment / Decrement operators",
      "Type casting — implicit and explicit",
      "Math class methods — pow(), sqrt(), abs()",
    ],
  },
  {
    unit: "Unit 3",
    title: "Input & Output",
    topics: [
      "Scanner class — reading user input",
      "System.out.print() vs println() vs printf()",
      "String concatenation with +",
      "Formatting output with escape sequences",
    ],
  },
  {
    unit: "Unit 4",
    title: "Conditional Statements",
    topics: [
      "if, if-else, if-else-if ladder",
      "Nested if statements",
      "switch-case with break & default",
      "Ternary operator (?:)",
      "Practice problems — grade calculator, leap year, ATM",
    ],
  },
  {
    unit: "Unit 5",
    title: "Loops",
    topics: [
      "for loop — syntax and use cases",
      "while loop — entry-controlled",
      "do-while loop — exit-controlled",
      "Nested loops — number patterns & star patterns",
      "break and continue statements",
    ],
  },
  {
    unit: "Unit 6",
    title: "Arrays",
    topics: [
      "Single-dimensional arrays — declaration & traversal",
      "Array operations — sum, min, max, average",
      "Sorting arrays (Bubble Sort)",
      "Searching in arrays (Linear Search)",
      "Two-dimensional arrays — matrix operations",
    ],
  },
  {
    unit: "Unit 7",
    title: "Strings",
    topics: [
      "String class — declaration and initialisation",
      "Important methods — length(), charAt(), substring()",
      "indexOf(), toUpperCase(), toLowerCase(), trim()",
      "String comparison — equals() vs ==",
      "String programs — palindrome, vowel count, reverse",
    ],
  },
  {
    unit: "Unit 8",
    title: "Methods (Functions)",
    topics: [
      "Defining and calling methods",
      "Parameters and return types",
      "Method overloading",
      "Introduction to recursion",
      "Library methods — Integer, Character classes",
    ],
  },
  {
    unit: "Unit 9",
    title: "Introduction to OOP",
    topics: [
      "Classes and Objects — concepts",
      "Instance variables and methods",
      "Constructors — default and parameterised",
      "this keyword",
      "Access specifiers — public, private",
    ],
  },
  {
    unit: "Unit 10",
    title: "Exam Prep & Practice",
    topics: [
      "ICSE 2023, 2024 paper walkthroughs",
      "BlueJ program writing techniques",
      "Common mistakes & how to avoid them",
      "Speed-coding practice sessions",
      "Full-length mock test with corrections",
    ],
  },
];

const SCHOOLS = [
  "Brightlands School",
  "St. Joseph's Academy",
  "St. Jude's School",
  "St. Thomas' College",
  "Convent of Jesus & Mary",
  "Wynberg Allen School",
  "Summer Valley School",
  "Doon School",
  "Blossom School",
  "& many more",
];

// ── Quote shown on page load ───────────────────────────────────────
const ENTRY_QUOTE = {
  text: "The best time to plant a tree was 20 years ago. The second best time is now.",
  author: "Chinese Proverb",
};

/* export const metadata = {
  title: "ICSE Class 9 Java Course in Dehradun | Codeware IT",
  description:
    "Best ICSE Class 9 Java coaching in Dehradun. Syllabus-aligned curriculum, BlueJ practice, 95%+ results from top schools. Free demo available. Codeware IT Pvt Ltd.",
};
 */
export default function ICSEClass9JavaPage() {
  const router = useRouter();
  const [showQuote, setShowQuote] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    studentClass: "Class 9",
    school: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeUnit, setActiveUnit] = useState(null);

  // Show motivational quote on mount
  useEffect(() => {
    const t = setTimeout(() => setShowQuote(true), 400);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.school) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    setLoading(true);

    // ✅ CREATE MESSAGE ON FRONTEND (MOST IMPORTANT)
    const message = `Hello Codeware IT
Name: ${formData.name}
Phone: ${formData.phone}
Class: ${formData.studentClass}
School: ${formData.school}
Course: ICSE Class 9 Java`;

    const whatsappURL = `https://wa.me/919837218345?text=${encodeURIComponent(message)}`;

    // ✅ OPEN WHATSAPP FIRST (NO ERROR)
    window.open(whatsappURL, "_blank");

    try {
      // optional save
      await fetch("/api/demo-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          course: "ICSE Class 9 Java — Dehradun",
        }),
      });

      // redirect after opening whatsapp
      router.push("/Courses/thank-you");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF] mt-3 pt-[4.5rem] font-sans">
      {/* ── MOTIVATIONAL QUOTE BANNER ───────────────────────────── */}
      <div
        className={`bg-gradient-to-r from-[#040A26] via-[#0A1C55] to-[#040A26] text-white text-center py-3 px-4 transition-all duration-700 ${
          showQuote ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <p className="text-sm md:text-base font-medium tracking-wide">
          <span className="text-blue-300 mr-2">❝</span>
          {ENTRY_QUOTE.text}
          <span className="text-blue-300 ml-2">❞</span>
          <span className="ml-3 text-xs text-gray-400">
            — {ENTRY_QUOTE.author}
          </span>
        </p>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#040A26] via-[#0d1f5c] to-[#040A26] text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20 relative z-10 text-center md:text-left">
          <span className="inline-block text-xs font-bold uppercase tracking-widest bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full mb-5">
            📘 ICSE • Class 9 • Java
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            ICSE Class 9{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#60a5fa,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Java
            </span>{" "}
            Coaching
            <br className="hidden md:block" />
            <span className="text-3xl md:text-4xl font-semibold text-gray-300">
              in Dehradun
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed">
            Clear, practical Java coaching — fully aligned with the ICSE Class 9
            syllabus. From your first program to exam-ready, we guide every step
            of the way.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
            {[
              ["📍", "Dehradun Centre"],
              ["⏱️", "3–4 Months"],
              ["💻", "Offline & Online"],
              ["🏆", "95%+ Results"],
            ].map(([icon, label]) => (
              <span
                key={label}
                className="flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-gray-200"
              >
                {icon} {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT: Syllabus + Form ───────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-[1fr_420px] gap-10 items-start">
        {/* ── LEFT: Syllabus ───────────────────────────────────── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-lg">
              📚
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#040A26]">
                Complete Course Syllabus
              </h2>
              <p className="text-gray-500 text-sm">
                10 units · 100% ICSE Board aligned
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {SYLLABUS.map((unit, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setActiveUnit(activeUnit === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-1 rounded-md min-w-[60px] text-center">
                      {unit.unit}
                    </span>
                    <span className="font-semibold text-[#040A26] group-hover:text-blue-600 transition-colors">
                      {unit.title}
                    </span>
                  </div>
                  <span
                    className={`text-gray-400 text-lg transition-transform duration-200 flex-shrink-0 ml-2 ${
                      activeUnit === i ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {activeUnit === i && (
                  <div className="px-5 pb-5 border-t border-gray-50">
                    <ul className="mt-3 space-y-2">
                      {unit.topics.map((topic, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <span className="text-blue-500 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── TRUST STRIP ────────────────────────────────────── */}
          <div className="mt-12 bg-gradient-to-br from-[#040A26] to-[#0d1f5c] rounded-2xl p-7 text-white">
            <h3 className="text-xl font-bold mb-2">
              5+ Years of Teaching Excellence
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              We have proudly guided students from Dehradun's top schools to
              outstanding results in their ICSE Computer Applications exam.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                ["5+", "Years Experience"],
                ["95%+", "Exam Results"],
                ["500+", "Students Taught"],
              ].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-extrabold text-blue-400">
                    {num}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* School chips */}
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Students from
            </p>
            <div className="flex flex-wrap gap-2">
              {SCHOOLS.map((s) => (
                <span
                  key={s}
                  className="text-xs bg-white/10 border border-white/10 text-gray-300 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Course highlights */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "✅ Full practical knowledge",
                "✅ Completed in 3–4 months",
                "✅ BlueJ-based lab sessions",
                "✅ Previous year paper solving",
                "✅ Doubt clearing on WhatsApp",
                "✅ Certificate on completion",
              ].map((point) => (
                <p key={point} className="text-sm text-gray-300">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Demo Registration Form ────────────────────── */}
        <div className="lg:sticky lg:top-24">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Form header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-7 text-white text-center">
              <div className="text-4xl mb-2">🎓</div>
              <h2 className="text-xl font-bold mb-1">
                Book Your Free Demo Class
              </h2>
              <p className="text-blue-100 text-sm">
                No payment. No pressure. Just great teaching.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-7 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Aarav Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition placeholder-gray-400"
                />
              </div>

              {/* Class */}
              <div>
                <label
                  htmlFor="studentClass"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Class
                </label>
                <select
                  id="studentClass"
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-white cursor-pointer"
                >
                  <option value="Class 9">Class 9</option>
                  <option value="Class 10">Class 10</option>
                </select>
              </div>

              {/* School */}
              <div>
                <label
                  htmlFor="school"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  School Name
                </label>
                <input
                  id="school"
                  name="school"
                  type="text"
                  required
                  placeholder="e.g. Brightlands School"
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition placeholder-gray-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Phone Number (WhatsApp)
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-sm text-gray-500 font-medium">
                    +91
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className="flex-1 border border-gray-200 rounded-r-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-2">
                  ⚠️ {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white text-base flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background:
                    "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                  boxShadow: "0 4px 20px #25D36640",
                }}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.854L.057 23.5l5.785-1.517A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.636-.49-5.157-1.346l-.37-.215-3.835 1.006 1.024-3.735-.236-.385A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    Book My Free Demo
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-400 leading-relaxed">
                Your details go directly to our team on WhatsApp. We will
                confirm your demo class within a few hours.
              </p>
            </form>
          </div>

          {/* Below form — trust badge */}
          <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4 text-center">
            <p className="text-sm font-semibold text-blue-800 mb-1">
              Why students choose us
            </p>
            <p className="text-xs text-blue-600 leading-relaxed">
              Complete practical course in just 3–4 months · Expert faculty with
              5+ years experience · Students from Brightlands, St. Joseph's,
              Wynberg Allen & more achieving 95%+ in exams.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOTTOM BANNER ───────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#040A26] to-[#0A1C55] text-white text-center py-14 px-6">
        <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
          A thought to carry with you
        </p>
        <p className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto leading-snug">
          "An investment in knowledge pays the best interest."
        </p>
        <p className="text-gray-400 mt-2 mb-8">— Benjamin Franklin</p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg"
        >
          Book Free Demo ↑
        </a>
      </section>
    </div>
  );
}
