"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaCheckCircle, FaWhatsapp, FaMapMarkerAlt, FaClock,
  FaLaptop, FaChevronDown, FaChevronUp, FaArrowRight,
  FaBook, FaStar, FaUserGraduate, FaPhone,
} from "react-icons/fa";
import {
  trackFormStart, trackDemoRegister, trackWhatsApp, trackCourseView,
} from "@/app/lib/gtag";

// GTM dataLayer push helper
function pushGTM(eventName, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

export default function CourseLandingPage({ course }) {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", phone: "", classOrCourse: "" });
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    trackCourseView({ course: course.title, category: course.category });
    pushGTM("course_page_view", { course_name: course.title, course_slug: course.slug });
  }, [course.title, course.category, course.slug]);

  // ── Extended FAQs (6+) ─────────────────────────────────────────────────
  const faqs = [
    {
      q: `Is this ${course.title} available offline in Dehradun?`,
      a: "Yes! We offer both offline classes at our Karanpur & Rajpur Road centre in Dehradun and live online sessions. You choose what works best for you.",
    },
    {
      q: "Will I get a certificate after completing the course?",
      a: "Absolutely. Every student receives a Codeware IT course completion certificate, widely recognised by employers and institutions across Uttarakhand.",
    },
    {
      q: "Is the free demo class really free?",
      a: "100% free — no strings attached. Attend a full demo session and decide if you want to enroll. No payment required for the demo.",
    },
    {
      q: "What batch timings are available?",
      a: "We have morning (7 AM–10 AM), afternoon (12 PM–3 PM), and evening (5 PM–8 PM) batches. Weekend batches (Sat–Sun) are also available.",
    },
    {
      q: "Do you provide placement support?",
      a: "Yes — our placement support includes resume building, mock interviews, LinkedIn profile optimisation, and direct referrals to our hiring partners in Dehradun and across India.",
    },
    {
      q: "How many students are in each batch?",
      a: "We keep batches small — maximum 10–15 students — so every student gets personal attention from the instructor.",
    },
    {
      q: "Do you provide study material?",
      a: "Yes — printed notes, code examples, practice sheets, and recorded session access are all included with your enrollment.",
    },
    {
      q: `What is the fee for the ${course.title}?`,
      a: "Please call or WhatsApp us for the latest fee details. We offer flexible EMI options and early-bird discounts for students who enroll before the batch fills up.",
    },
  ];

  const handleFormFocus = () => {
    trackFormStart({ course: course.title, source: "course_landing_form" });
    pushGTM("form_start", { course_name: course.title });
  };

  const handlePhoneClick = () => {
    pushGTM("phone_click", { course_name: course.title, phone: "9837218345" });
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16549958925/PHONE_LABEL",   // ← Replace PHONE_LABEL with your label
      });
    }
  };

  const handleWhatsAppClick = (label = "whatsapp_cta") => {
    trackWhatsApp({ label, course: course.title });
    pushGTM("whatsapp_click", { course_name: course.title, label });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.name || !formData.phone) {
      alert("Please fill all required fields");
      setLoading(false);
      return;
    }

    const message = `Hello Codeware IT 👋\nName: ${formData.name}\nPhone: ${formData.phone}\nCourse: ${course.title}\nClass/Course: ${formData.classOrCourse}`;
    const whatsappURL = `https://wa.me/919837218345?text=${encodeURIComponent(message)}`;

    // Track all conversion events
    trackWhatsApp({ label: "demo_form_whatsapp", course: course.title });
    pushGTM("demo_form_submit", {
      course_name: course.title,
      student_name: formData.name,
      conversion_type: "demo_registration",
    });

    // Fire Google Ads conversion
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16549958925/FORM_SUBMIT_LABEL",  // ← Replace with real label
        event_category: "leads",
        event_label: course.title,
      });
    }

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    try {
      await fetch("/api/demo-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, course: course.title }),
      });
      trackDemoRegister({ course: course.title, source: "course_landing_form" });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      // Redirect to Thank You page so Google Ads URL destination tracking fires
      router.push(`/thank-you?course=${encodeURIComponent(course.title)}&source=course_landing`);
    }
  };

  const testimonials = course.testimonials || [
    { name: "Ankit Rawat", role: "Student, Dehradun", text: "Codeware IT is the best coding institute in Dehradun. I loved the hands-on project approach!", rating: 5 },
    { name: "Priya Singh", role: "Working Professional", text: "Small batches with personalised attention — exactly what I needed to upskill quickly.", rating: 5 },
    { name: "Vikram Negi", role: "BCA Graduate", text: "Got placement support that actually worked. Highly recommend Codeware IT to everyone!", rating: 5 },
  ];

  const nextBatchDate = course.batchDate || "5 May 2025";
  const seatsLeft = course.seatsLeft ?? 8;

  return (
    <div className="bg-[#040A26] min-h-screen text-white pt-[4.5rem]">

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #040A26 0%, #0A1C55 50%, #040A26 100%)" }}
        aria-label="Course hero"
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: course.color }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: course.color }} />

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <div>
            {/* Urgency badge */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 text-xs font-semibold px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
                🔥 Next batch: {nextBatchDate} — Only {seatsLeft} seats left!
              </span>
            </div>

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

            <p className="text-gray-300 text-lg mt-4 mb-6 max-w-xl">{course.heroTagline}</p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6 text-sm">
              <span className="flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 px-3 py-1.5 rounded-full">
                ⭐ 4.7 Rated on Google
              </span>
              <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-300 px-3 py-1.5 rounded-full">
                ✅ Placement Support
              </span>
              <span className="flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-300 px-3 py-1.5 rounded-full">
                🛠 Real Projects
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-sm mb-8 text-gray-300">
              <span className="flex items-center gap-2"><FaMapMarkerAlt style={{ color: course.color }} /> Karanpur & Rajpur Rd, Dehradun</span>
              <span className="flex items-center gap-2"><FaClock style={{ color: course.color }} /> {course.duration}</span>
              <span className="flex items-center gap-2"><FaLaptop style={{ color: course.color }} /> {course.mode}</span>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#demo-form"
                className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
                style={{ background: `linear-gradient(135deg, ${course.color}, #7c3aed)`, boxShadow: `0 4px 24px ${course.color}40` }}
              >
                🎁 Book Free Demo Class
              </a>
              <a
                href="https://wa.me/919837218345"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleWhatsAppClick("hero_whatsapp")}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-green-600 hover:bg-green-500 transition-all duration-200 hover:scale-105"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:9837218345"
              onClick={handlePhoneClick}
              className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition"
            >
              <FaPhone className="text-xs" /> +91 98372 18345
            </a>
          </div>

          {/* Right — Quick info card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">{course.icon}</span>
              <div>
                <h2 className="font-bold text-lg">{course.title}</h2>
                <p className="text-sm text-gray-400">{course.targetAudience}</p>
              </div>
            </div>

            {/* Instructor bio */}
            {course.instructor && (
              <div className="flex items-start gap-3 mb-5 p-3 bg-white/5 rounded-xl border border-white/10">
                <FaUserGraduate className="text-xl mt-0.5 flex-shrink-0" style={{ color: course.color }} />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Your Instructor</p>
                  <p className="text-sm text-white font-medium">{course.instructor}</p>
                </div>
              </div>
            )}

            <ul className="space-y-3 text-sm text-gray-300">
              {[
                ["📚 Syllabus", "100% industry-aligned curriculum"],
                ["🏆 Certificate", "Codeware IT completion certificate"],
                ["📝 Study Material", "Notes, code & practice sheets included"],
                ["🕐 Batch Timings", "Morning / Evening / Weekend"],
                ["💻 Mode", course.mode],
                ["📍 Location", "6/6 Karanpur & Rajpur Road, Dehradun"],
              ].map(([label, val]) => (
                <li key={label} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 flex-shrink-0" style={{ color: course.color }} />
                  <span><strong className="text-white">{label}: </strong>{val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SYLLABUS ── */}
      <section className="max-w-7xl mx-auto px-6 py-16" id="syllabus">
        <div className="flex items-center gap-3 mb-10">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl text-white" style={{ background: course.color }}>
            <FaBook />
          </span>
          <div>
            <h2 className="text-3xl font-bold text-white">Course Curriculum</h2>
            <p className="text-gray-400 text-sm">What you will master in {course.title}</p>
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
              <span className="text-gray-200 text-sm leading-relaxed">{topic}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BATCH SCHEDULE / URGENCY ── */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-red-300 font-semibold mb-1">⏰ Limited Seats — Act Now</p>
            <h3 className="text-2xl font-bold text-white">Next Batch Starting: <span className="text-orange-400">{nextBatchDate}</span></h3>
            <p className="text-gray-400 text-sm mt-1">Only <strong className="text-red-400">{seatsLeft} seats remaining</strong> — batches fill up fast at Codeware IT Dehradun.</p>
          </div>
          <a
            href="#demo-form"
            className="flex-shrink-0 px-7 py-3 rounded-xl font-bold text-white text-base transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #ef4444, #f97316)", boxShadow: "0 4px 20px #ef444440" }}
          >
            Reserve My Seat →
          </a>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/20 transition-all">
              <div className="flex gap-0.5 mb-4">
                {Array(t.rating).fill(0).map((_, j) => (
                  <FaStar key={j} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEMO REGISTRATION FORM ── */}
      <section id="demo-form" className="bg-gradient-to-b from-[#0A1C55]/50 to-[#040A26] py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ background: `${course.color}30`, color: course.color }}
            >
              Free Demo Class
            </span>
            <h2 className="text-3xl font-bold text-white mb-3">Book Your Free Demo Class</h2>
            <p className="text-gray-400">Fill the form below — we will confirm your free demo session within minutes on WhatsApp.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5 backdrop-blur-sm"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
              <input
                id="name" type="text" required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onFocus={handleFormFocus}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number (WhatsApp) *</label>
              <input
                id="phone" type="tel" required
                placeholder="e.g. 9837218345"
                pattern="[6-9][0-9]{9}"
                title="Enter a valid 10-digit Indian mobile number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Class / Course */}
            <div>
              <label htmlFor="classOrCourse" className="block text-sm font-medium text-gray-300 mb-2">Your Class / Qualification *</label>
              <select
                id="classOrCourse" required
                value={formData.classOrCourse}
                onChange={(e) => setFormData({ ...formData, classOrCourse: e.target.value })}
                className="w-full bg-[#0A1C55] border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition appearance-none cursor-pointer"
              >
                <option value="" disabled>Select your class or qualification</option>
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
                  <option value="Java Course">Java Course</option>
                  <option value="Python Course">Python Course</option>
                  <option value="MERN Stack">MERN Stack</option>
                  <option value="React JS">React JS</option>
                  <option value="Node.js">Node.js</option>
                  <option value="Full Stack">Full Stack</option>
                </optgroup>
              </select>
            </div>

            {/* Pre-filled course */}
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm">
              <span className="text-gray-400">Course Interested In: </span>
              <span className="text-white font-medium">{course.title}</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-white text-base flex items-center justify-center gap-3 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 24px #25D36640" }}
            >
              <FaWhatsapp className="text-xl" />
              {loading ? "Sending…" : "Book My Free Demo via WhatsApp"}
            </button>

            <p className="text-xs text-center text-gray-500">✓ Free &nbsp;·&nbsp; ✓ No Obligation &nbsp;·&nbsp; ✓ Instant WhatsApp Confirmation</p>
          </form>
        </div>
      </section>

      {/* ── WHY CODEWARE IT ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Choose <span style={{ background: `linear-gradient(90deg, ${course.color}, #ec4899)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Codeware IT</span> in Dehradun?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🏆", title: "Expert Faculty", desc: "Learn from developers with 6+ years of industry experience. Real mentors, not just teachers." },
            { icon: "🛠", title: "Real Projects", desc: "Build actual projects during the course — add them directly to your portfolio and impress employers." },
            { icon: "🎯", title: "Small Batches", desc: "Max 10–15 students per batch means every student gets personal attention and doubt-clearing." },
            { icon: "📍", title: "Prime Location", desc: "Located at 6/6 Karanpur & Rajpur Road, Dehradun — easily accessible from all areas of the city." },
            { icon: "💬", title: "WhatsApp Support", desc: "Doubt-clearing anytime via WhatsApp — no student ever gets stuck on a problem overnight." },
            { icon: "💼", title: "Placement Support", desc: "Resume building, mock interviews, LinkedIn optimisation & direct referrals to our hiring partners." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-200 hover:-translate-y-1">
              <span className="text-3xl mb-4 block">{icon}</span>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="text-sm leading-relaxed">{faq.q}</span>
                {openFaq === i ? <FaChevronUp className="flex-shrink-0 ml-4 text-gray-400" /> : <FaChevronDown className="flex-shrink-0 ml-4 text-gray-400" />}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-3">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 text-center px-6" style={{ background: "linear-gradient(135deg, #0A1C55, #040A26)" }}>
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to start{" "}
          <span style={{ background: `linear-gradient(90deg, ${course.color}, #ec4899)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {course.heroTitle}
          </span>?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Attend a free demo class — no payment, no pressure. See the quality of teaching before you enroll.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#demo-form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${course.color}, #7c3aed)`, boxShadow: `0 4px 24px ${course.color}40` }}
          >
            🎁 Book Free Demo <FaArrowRight />
          </a>
          <a
            href="tel:9837218345"
            onClick={handlePhoneClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-105"
          >
            <FaPhone /> Call Now: +91 98372 18345
          </a>
        </div>
      </section>

      {/* ── STICKY MOBILE BAR ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#040A26]/95 backdrop-blur-md border-t border-white/10 flex items-center gap-0 shadow-2xl">
        <a
          href="tel:9837218345"
          onClick={handlePhoneClick}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition active:scale-95"
        >
          <FaPhone /> Call Now
        </a>
        <a
          href="https://wa.me/919837218345"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleWhatsAppClick("sticky_bar")}
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white bg-green-600 hover:bg-green-500 transition active:scale-95"
        >
          <FaWhatsapp /> WhatsApp
        </a>
        <a
          href="#demo-form"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold text-white bg-orange-500 hover:bg-orange-400 transition active:scale-95"
        >
          🎁 Free Demo
        </a>
      </div>

      {/* Bottom padding for mobile sticky bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
