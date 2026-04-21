"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaLaptop,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
  FaBook,
  FaCalendarAlt,
  FaUserGraduate,
  FaStar,
} from "react-icons/fa";
import { trackFormStart, trackDemoRegister, trackWhatsApp, trackCourseView } from "@/app/lib/gtag";

export default function CourseLandingPage({ course }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    classOrCourse: "",
  });
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Fire course view for Google Ads remarketing
  useEffect(() => {
    trackCourseView({ course: course.title, category: course.category });
  }, [course.title, course.category]);

  const faqs = [
    {
      q: `Is this ${course.title} course available offline in Dehradun?`,
      a: "Yes! We offer both offline classes at our Dehradun centre and live online sessions. You can choose what works best for you.",
    },
    {
      q: "Will I get a certificate after completing the course?",
      a: "Absolutely. Every student receives a Codeware IT course completion certificate which is widely recognised by employers and institutions.",
    },
    {
      q: "Is the free demo class really free?",
      a: "100% free, no strings attached. Attend a full demo session and decide if you want to enroll. No payment required for the demo.",
    },
    {
      q: "What batch timings are available?",
      a: "We have morning, afternoon, and evening batches to suit school/college schedules. Weekend batches are also available.",
    },
    {
      q: "Do you provide study material?",
      a: "Yes — printed notes, code examples, practice sheets, and recorded session access are all included with enrollment.",
    },
  ];

  // Fires when user first interacts with the form (Google Ads "Click" conversion)
  const handleFormFocus = () => {
    trackFormStart({ course: course.title, source: "course_landing_form" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.phone) {
      alert("Please fill all details");
      setLoading(false);
      return;
    }

    const message = `Hello Codeware IT\nName: ${formData.name}\nPhone: ${formData.phone}\nCourse: ${course.title}\nClass: ${formData.classOrCourse}`;
    const whatsappURL = `https://wa.me/919837218345?text=${encodeURIComponent(message)}`;

    // Track WhatsApp open as a conversion
    trackWhatsApp({ label: "demo_form_whatsapp", course: course.title });

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    try {
      await fetch("/api/demo-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, course: course.title }),
      });

      // Track successful lead submission in GA4 + Google Ads
      trackDemoRegister({ course: course.title, source: "course_landing_form" });

      setSubmitted(true);
      setTimeout(() => router.push("/thank-you"), 800);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#040A26] min-h-screen text-white pt-[4.5rem]">
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #040A26 0%, #0A1C55 50%, #040A26 100%)`,
        }}
        aria-label="Course hero"
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: course.color }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: course.color }}
        />

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <div>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: `${course.color}30`, color: course.color }}
            >
              {course.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
              {course.heroTitle}
              <br />
              <span
                className="font-extrabold"
                style={{
                  background: `linear-gradient(90deg, ${course.color}, #ec4899)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {course.heroSubtitle}
              </span>
            </h1>
            <p className="text-gray-300 text-lg mt-4 mb-8 max-w-xl">
              {course.heroTagline}
            </p>

            <div className="flex flex-wrap gap-4 text-sm mb-8">
              <span className="flex items-center gap-2 text-gray-300">
                <FaMapMarkerAlt style={{ color: course.color }} />
                Dehradun, Uttarakhand
              </span>
              <span className="flex items-center gap-2 text-gray-300">
                <FaClock style={{ color: course.color }} />
                {course.duration}
              </span>
              <span className="flex items-center gap-2 text-gray-300">
                <FaLaptop style={{ color: course.color }} />
                {course.mode}
              </span>
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#demo-form"
                className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${course.color}, #7c3aed)`,
                  boxShadow: `0 4px 24px ${course.color}40`,
                }}
              >
                Book Free Demo Class
              </a>

              <a
                href="https://wa.me/919837218345"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-green-600 hover:bg-green-500 transition-all duration-200 hover:scale-105"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — Quick info card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{course.icon}</span>
              <div>
                <h2 className="font-bold text-lg">{course.title}</h2>
                <p className="text-sm text-gray-400">{course.targetAudience}</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-gray-300">
              {[
                ["📚 Syllabus", "100% aligned with your curriculum"],
                ["👨‍🏫 Faculty", "Experienced industry + academic trainers"],
                ["🏆 Certificate", "Codeware IT completion certificate"],
                ["📝 Study Material", "Notes, code, practice sheets included"],
                ["🕐 Batch Timings", "Morning / Evening / Weekend"],
                ["💻 Mode", course.mode],
              ].map(([label, val]) => (
                <li key={label} className="flex items-start gap-3">
                  <FaCheckCircle
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: course.color }}
                  />
                  <span>
                    <strong className="text-white">{label}: </strong>
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SYLLABUS ── */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="syllabus">
        <div className="flex items-center gap-3 mb-10">
          <span
            className="flex items-center justify-center w-10 h-10 rounded-xl text-white"
            style={{ background: course.color }}
          >
            <FaBook />
          </span>
          <div>
            <h2 className="text-3xl font-bold text-white">Course Syllabus</h2>
            <p className="text-gray-400 text-sm">
              What you will learn in {course.title}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {course.syllabus.map((topic, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-blue-500/40 transition-all duration-200"
            >
              <span
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: `${course.color}60` }}
              >
                {i + 1}
              </span>
              <span className="text-gray-200 text-sm leading-relaxed">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEMO REGISTRATION FORM ── */}
      <section
        id="demo-form"
        className="bg-gradient-to-b from-[#0A1C55]/50 to-[#040A26] py-16"
      >
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: `${course.color}30`, color: course.color }}
            >
              Free Demo Class
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">
              Register for a Free Demo
            </h2>
            <p className="text-gray-400">
              Fill the form below and we will confirm your free demo session.
              Your details will be sent directly to our WhatsApp.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-900/30 border border-green-500/40 rounded-2xl p-8 text-center">
              <FaWhatsapp className="text-5xl text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                Registration Successful! 🎉
              </h3>
              <p className="text-gray-300 mb-4">
                Your details have been sent to our team on WhatsApp. We will
                confirm your free demo class shortly.
              </p>
              <p className="text-green-400 text-sm font-medium">
                WhatsApp opened automatically — if not,{" "}
                <a
                  href={`https://wa.me/9837218345`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  click here
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5 backdrop-blur-sm"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number (WhatsApp) *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="e.g. 9837218345"
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                />
              </div>

              {/* Class / Course */}
              <div>
                <label
                  htmlFor="classOrCourse"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Class / Course *
                </label>
                <select
                  id="classOrCourse"
                  required
                  value={formData.classOrCourse}
                  onChange={(e) =>
                    setFormData({ ...formData, classOrCourse: e.target.value })
                  }
                  className="w-full bg-[#0A1C55] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select your class or course
                  </option>
                  <optgroup label="School — ICSE">
                    <option value="Class 9 (ICSE)">Class 9 (ICSE)</option>
                    <option value="Class 10 (ICSE)">Class 10 (ICSE)</option>
                  </optgroup>
                  <optgroup label="School — CBSE">
                    <option value="Class 11 (CBSE)">Class 11 (CBSE)</option>
                    <option value="Class 12 (CBSE)">Class 12 (CBSE)</option>
                  </optgroup>
                  <optgroup label="Graduation">
                    <option value="BCA">BCA</option>
                    <option value="BSc IT">BSc IT</option>
                    <option value="BTech">BTech</option>
                    <option value="MCA">MCA</option>
                    <option value="Other Graduation">Other Graduation</option>
                  </optgroup>
                  <optgroup label="Job Ready Courses">
                    <option value="Web Development">Web Development</option>
                    <option value="React JS">React JS</option>
                    <option value="Next.js">Next.js</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Full Stack">Full Stack</option>
                  </optgroup>
                </select>
              </div>

              {/* Course interested in (pre-filled) */}
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm">
                <span className="text-gray-400">Course Interested In: </span>
                <span className="text-white font-medium">{course.title}</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white text-base flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: `linear-gradient(135deg, #25D366, #128C7E)`,
                  boxShadow: "0 4px 24px #25D36640",
                }}
              >
                <FaWhatsapp className="text-xl" />
                {loading ? "Sending..." : "Book My Free Demo via WhatsApp"}
              </button>

              <p className="text-xs text-center text-gray-500">
                By submitting, you agree to be contacted on WhatsApp. We respect
                your privacy.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── WHY CODEWARE IT ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose <span className="gradient-text">Codeware IT</span> in
          Dehradun?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "🏆",
              title: "Expert Faculty",
              desc: "Learn from developers with 5+ years of industry experience and certified trainers.",
            },
            {
              icon: "📁",
              title: "Real Projects",
              desc: "Build actual projects during the course — add them directly to your portfolio.",
            },
            {
              icon: "🎯",
              title: "Board-Focused",
              desc: "For school students — every topic is syllabus-aligned for maximum exam score.",
            },
            {
              icon: "📍",
              title: "Located in Dehradun",
              desc: "Conveniently located in Dehradun with easy access for students across the city.",
            },
            {
              icon: "💬",
              title: "WhatsApp Support",
              desc: "Doubt-clearing anytime via WhatsApp — no student left stuck on a problem.",
            },
            {
              icon: "📜",
              title: "Recognised Certificate",
              desc: "Codeware IT certificate recognised by colleges and recruiters across Uttarakhand.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-200 hover:-translate-y-1"
            >
              <span className="text-3xl mb-4 block">{icon}</span>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="text-sm leading-relaxed">{faq.q}</span>
                {openFaq === i ? (
                  <FaChevronUp className="flex-shrink-0 ml-4 text-gray-400" />
                ) : (
                  <FaChevronDown className="flex-shrink-0 ml-4 text-gray-400" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FOOTER ── */}
      <section
        className="py-16 text-center px-6"
        style={{
          background: `linear-gradient(135deg, #0A1C55, #040A26)`,
        }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to start learning{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${course.color}, #ec4899)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {course.heroTitle}
          </span>
          ?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Attend a free demo class — no payment, no pressure. See the quality of
          teaching for yourself before you enroll.
        </p>
        <a
          href="#demo-form"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${course.color}, #7c3aed)`,
            boxShadow: `0 4px 24px ${course.color}40`,
          }}
        >
          Book Free Demo <FaArrowRight />
        </a>
      </section>
    </div>
  );
}
