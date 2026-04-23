// ============================================================
// CodewareIT — HIGH-CONVERTING HOMEPAGE
// Drop this file into: src/app/page.js  (replace entire file)
// Layout already provides: <Navbar>, <Footer>, <Whatsappicon>
// so this page only contains the homepage sections.
// ============================================================

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────
// CONFIGURATION  ← Edit these without touching anything else
// ─────────────────────────────────────────────────────────────
const CONFIG = {
  whatsapp:     "919837218345",
  phone:        "+919837218345",
  phoneDisplay: "+91 98372 18345",
  batchDate:    "May 1, 2026",   // ← next batch date
  seatsLeft:    "12",              // ← seats remaining
  adsId:        "AW-16549958925",
};

const WA_URL   = `https://wa.me/${CONFIG.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20about%20courses%20at%20CodewareIT`;
const WA_APPLY = `https://wa.me/${CONFIG.whatsapp}?text=Hi%2C%20I%20want%20a%20FREE%20counselling%20session%20at%20CodewareIT%20Dehradun!`;

// ─────────────────────────────────────────────────────────────
// ANALYTICS HELPERS
// ─────────────────────────────────────────────────────────────
function ga(event, params = {}) {
  if (typeof window !== "undefined" && window.gtag)
    window.gtag("event", event, params);
}
function gadsConversion(label = "APPLY_CLICK") {
  if (typeof window !== "undefined" && window.gtag)
    window.gtag("event", "conversion", { send_to: `${CONFIG.adsId}/${label}` });
}

// ─────────────────────────────────────────────────────────────
// JSON-LD SCHEMAS
// ─────────────────────────────────────────────────────────────
const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: "CodewareIT Pvt Ltd",
  description:
    "Best IT training institute in Dehradun. MERN Stack, Python, Java, React, Full Stack, DSA, PHP, C/C++/C# courses. School ICSE/CBSE coaching. 100+ students placed.",
  url: "https://www.codewareit.in",
  telephone: "+919837218345",
  email: "info@codewareit.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 2, Shakti Vihar, Suman Nagar, Adhoiwala",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.3165, longitude: 78.0322 },
  openingHours: "Mo-Su 07:00-22:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "40",
    bestRating: "5",
  },
  sameAs: [
    "https://www.instagram.com/codewareit",
    "https://www.linkedin.com/company/codewareit",
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need prior coding experience to join?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No prior experience needed. We start from absolute basics and take you to job-ready level step by step.",
      },
    },
    {
      "@type": "Question",
      name: "What certificate will I get after the course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You receive a CodewareIT Course Completion Certificate and an Internship Certificate (for eligible programs), recognised by employers across India.",
      },
    },
    {
      "@type": "Question",
      name: "Is placement assistance provided?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 100%! We offer mock interviews, resume building, portfolio reviews, and direct referrals to hiring companies. Our 95% placement rate speaks for itself.",
      },
    },
    {
      "@type": "Question",
      name: "Can Class 9 or Class 10 students join?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We have dedicated ICSE Java batches for Class 9 & 10 and CBSE Python batches for Class 11 & 12. Max 10 students per batch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer online or hybrid classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer in-person, online, and hybrid options. Recorded sessions are also available so you never miss a class.",
      },
    },
  ],
};

const COURSE_SCHEMAS = [
  "MERN Stack","React.js","Next.js","Node.js","Python","Java",
  "DSA","PHP","Full Stack Development","Frontend Development",
  "Backend Development","Industrial Training",
].map((name) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: `${name} Course in Dehradun`,
  description: `Job-ready ${name} training at CodewareIT, Dehradun. Real projects, internship certificate, placement support.`,
  provider: {
    "@type": "Organization",
    name: "CodewareIT Pvt Ltd",
    sameAs: "https://www.codewareit.in",
  },
  courseMode: ["onsite", "online"],
  availableLanguage: ["Hindi", "English"],
  url: "https://www.codewareit.in/courses",
}));

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const AUDIENCES = [
  {
    icon: "📘", badge: "Class 9–12", color: "#2563EB",
    title: "School Students (Class 9–12)",
    seoH3: "ICSE Java & CBSE Python Courses Dehradun — School Batch",
    body: "ICSE Java · CBSE Python · Build real projects · Board exam + career prep",
    bullets: ["Small batches (max 10)", "Board exam focused", "Live coding practice", "Parent progress updates"],
    cta: "Apply for School Batch →",
  },
  {
    icon: "🎓", badge: "UG / PG", color: "#7C3AED", featured: true,
    title: "College & University Students",
    seoH3: "MERN Stack Full Stack DSA PHP Java Courses Dehradun — College Batch",
    body: "MERN Stack · Full Stack · DSA · PHP · Internship certificate · Project portfolio",
    bullets: ["Real-world projects", "Internship certificate", "Portfolio building", "Placement support"],
    cta: "Apply for College Batch →",
  },
  {
    icon: "🚀", badge: "Career Switch", color: "#1D9E75",
    title: "Industrial Training & Career Switch",
    seoH3: "Industrial Training C C++ C# Bootcamp Dehradun — Career Switch",
    body: "C/C++/C# · Complete bootcamps · Job-ready in 3–4 months · Placement support",
    bullets: ["Job-ready in 3–4 months", "Industry projects", "Resume + interview prep", "100% placement support"],
    cta: "Apply for Training →",
  },
];

const TESTIMONIALS = [
  { initials:"PS", name:"Prajwal Singh",  placed:"TCS",      course:"MERN Stack Graduate",   grad:"from-blue-500 to-indigo-600",  quote:"The live projects changed everything. I walked into my TCS interview with 3 production-grade apps in my portfolio." },
  { initials:"AA", name:"Arjun Anand",    placed:"Infosys",  course:"Full Stack Graduate",    grad:"from-green-500 to-teal-600",   quote:"Small batches meant I got personal attention every class. Within 4 months I had a complete portfolio and an Infosys offer." },
  { initials:"PR", name:"Priya Rawat",    placed:"Wipro",    course:"Python & DSA Graduate",  grad:"from-purple-500 to-pink-600",  quote:"Coming from a non-CS background I was nervous. The placement support made sure I landed my dream job." },
  { initials:"MK", name:"Mohit Kumar",    placed:"HCL",      course:"React.js Bootcamp",      grad:"from-orange-500 to-red-600",   quote:"I tried 2 other institutes before CodewareIT. This is the only place where you build REAL projects, not just theory." },
];

const COURSES = [
  { name:"MERN Stack",         outcome:"Full Stack Developer",        duration:"4 months",   hot:true  },
  { name:"React.js",           outcome:"Frontend Developer",          duration:"2 months"              },
  { name:"Next.js",            outcome:"Full Stack Engineer",         duration:"2.5 months"            },
  { name:"Node.js",            outcome:"Backend Developer",           duration:"2 months"              },
  { name:"Python",             outcome:"Python Developer / CBSE",     duration:"2 months"              },
  { name:"Java",               outcome:"Java Developer / ICSE",       duration:"2 months"              },
  { name:"DSA",                outcome:"Interview-Ready Engineer",    duration:"3 months",   hot:true  },
  { name:"PHP",                outcome:"Web Backend Developer",       duration:"1.5 months"            },
  { name:"C / C++ / C#",       outcome:"Systems Programmer",          duration:"2 months"              },
  { name:"Full Stack",         outcome:"Full Stack Developer",        duration:"5 months"              },
  { name:"Frontend Dev",       outcome:"UI Engineer",                 duration:"2 months"              },
  { name:"Backend Dev",        outcome:"API Developer",               duration:"2 months"              },
  { name:"Industrial Training",outcome:"Industry-Certified Engineer", duration:"6 months",   hot:true  },
  { name:"Internship Program", outcome:"Real-World Experience",       duration:"3 months"              },
];

const FAQS = [
  { q:"Do I need prior coding experience to join?",       a:"No prior experience required! We start from absolute basics — whether you've never written a line of code or have some exposure. Our curriculum takes you from zero to job-ready, step by step." },
  { q:"What certificate will I get after the course?",    a:"You receive a CodewareIT Course Completion Certificate and an Internship Certificate (for eligible programs). These are recognised by employers across India and add real value to your resume." },
  { q:"Is placement assistance provided?",                a:"Yes — 100%! We offer mock interviews, resume building, portfolio reviews, and direct referrals to hiring companies. Our 95% placement rate speaks for itself. We don't stop until you get hired." },
  { q:"Can Class 9 or Class 10 students join?",           a:"Absolutely. We have dedicated ICSE Java batches for Class 9 & 10 and CBSE Python batches for Class 11 & 12, specially designed for board exams plus real coding skills. Max 10 students per batch." },
  { q:"Do you offer online or hybrid classes?",           a:"Yes! We offer in-person, online, and hybrid classes at our Dehradun centre. Recorded sessions are also available so you never miss a class. WhatsApp us to discuss the best format for you." },
];

const COURSE_DROPDOWN = [
  "MERN Stack","React.js","Next.js","Node.js","Python","Java",
  "DSA","PHP","C / C++ / C#","Full Stack Development",
  "Frontend Development","Backend Development",
  "Industrial Training","Internship Program",
  "School — ICSE Java","School — CBSE Python",
];

// ─────────────────────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────────────────────
function Stars() {
  return (
    <span className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </span>
  );
}

function SectionHead({ title, sub }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-black text-[#2C2C2A] mb-3">{title}</h2>
      {sub && <p className="text-[#5F5E5A] max-w-xl mx-auto text-base">{sub}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// COUNTDOWN HOOK
// ─────────────────────────────────────────────────────────────
function useCountdown(dateStr) {
  const [t, setT] = useState({ days:0, hours:0, minutes:0, seconds:0 });
  useEffect(() => {
    const target = new Date(dateStr).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setT({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [dateStr]);
  return t;
}

// ═════════════════════════════════════════════════════════════
// SECTION 1 — HERO
// ═════════════════════════════════════════════════════════════
function Hero({ onApply }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => { if (c >= 500) { clearInterval(id); return 500; } return c + 10; });
    }, 20);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
      aria-label="Hero — IT Training Dehradun"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0"
          style={{ background:"radial-gradient(ellipse 80% 60% at 20% 30%,rgba(232,89,60,.10) 0%,transparent 60%),radial-gradient(ellipse 60% 80% at 80% 70%,rgba(29,158,117,.08) 0%,transparent 60%),#F8F7F4" }}/>
        <div className="absolute inset-0 opacity-[.035]"
          style={{ backgroundImage:"linear-gradient(#2C2C2A 1px,transparent 1px),linear-gradient(90deg,#2C2C2A 1px,transparent 1px)", backgroundSize:"52px 52px" }}/>
        <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-[#E8593C]/10"/>
        <div className="absolute -top-12 -right-12 w-[340px] h-[340px] rounded-full border border-[#E8593C]/08"/>
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full border border-[#1D9E75]/10"/>
        <div className="hidden xl:block absolute top-32 right-[6%] opacity-[.055] text-[11px] font-mono text-[#2C2C2A] whitespace-pre leading-5 select-none">
          {`const stack = [\n  'MongoDB','Express',\n  'React','Node.js'\n];\n\nstack.forEach(tech => {\n  buildFuture(tech);\n});`}
        </div>
        <div className="hidden xl:block absolute bottom-32 left-[4%] opacity-[.055] text-[11px] font-mono text-[#2C2C2A] whitespace-pre leading-5 select-none">
          {`def get_job_ready():\n  skills = learn(python)\n  projects = build(skills)\n  return hired`}
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Urgency pill */}
        <div className="inline-flex items-center gap-2 bg-[#E8593C]/10 border border-[#E8593C]/25 rounded-full px-4 py-2 mb-7 text-sm font-semibold text-[#E8593C]">
          <span className="w-2 h-2 bg-[#E8593C] rounded-full animate-pulse flex-shrink-0"/>
          🔥 Next batch starts {CONFIG.batchDate} — Only {CONFIG.seatsLeft} seats left
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-[60px] lg:text-[68px] font-black leading-[1.06] tracking-tight text-[#2C2C2A] mb-5">
          Get Job-Ready in IT —<br/>
          <span style={{ background:"linear-gradient(135deg,#E8593C 0%,#c9422a 40%,#1D9E75 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            MERN, Python &amp; Java
          </span><br/>
          Training in Dehradun
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[#5F5E5A] max-w-2xl mx-auto mb-8 leading-relaxed">
          <strong className="text-[#2C2C2A]">500+ students placed across India</strong> · School to PG · Internship + Certificate
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4">
          <button
            onClick={() => { ga("cta_hero_click"); gadsConversion("HERO_APPLY"); onApply(); }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white font-black text-lg px-9 py-4 rounded-[12px] transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-100"
            style={{ background:"linear-gradient(135deg,#E8593C,#c9422a)", boxShadow:"0 8px 28px rgba(232,89,60,.38)" }}
          >
            Apply for Free Counselling →
          </button>
          <a
            href={`tel:${CONFIG.phone}`}
            onClick={() => ga("call_click", { section:"hero" })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-semibold text-base px-7 py-4 rounded-[12px] border-2 border-[#2C2C2A]/15 text-[#2C2C2A] hover:border-[#2C2C2A]/30 hover:bg-[#2C2C2A]/5 transition-all"
          >
            📞 Call Now
          </a>
        </div>

        <p className="text-xs text-[#5F5E5A]/60 mb-14">
          ✓ No cost &nbsp;·&nbsp; ✓ No obligation &nbsp;·&nbsp; ✓ Meet your instructor before you commit
        </p>

        {/* Stat tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {[
            { val:`${count}+`, label:"Students Placed",  c:"#E8593C" },
            { val:"8+",        label:"Years Experience", c:"#1D9E75" },
            { val:"20+",       label:"Courses Offered",  c:"#E8593C" },
            { val:"95%",       label:"Placement Rate",   c:"#1D9E75" },
          ].map((s,i) => (
            <div key={i} className="bg-white rounded-[14px] border border-[#2C2C2A]/8 px-4 py-4 text-center shadow-sm">
              <div className="text-2xl sm:text-3xl font-black" style={{ color:s.c }}>{s.val}</div>
              <div className="text-xs text-[#5F5E5A] mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
// SECTION 2 — TRUST BAR
// ═════════════════════════════════════════════════════════════
function TrustBar() {
  const ref   = useRef(null);
  const [started, setStarted] = useState(false);
  const targets  = [500, 8, 20, 95];
  const suffixes = ["+","+","+","%"];
  const labels   = ["Students Placed","Years Experience","Courses","Placement Rate"];
  const [counts, setCounts] = useState([0,0,0,0]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold:0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => {
      setCounts(prev => {
        const next = prev.map((c,i) => Math.min(c + Math.ceil(targets[i]/40), targets[i]));
        if (next.every((c,i) => c >= targets[i])) clearInterval(id);
        return next;
      });
    }, 30);
    return () => clearInterval(id);
  }, [started]);

  const companies = ["TCS","Infosys","Wipro","HCL","Capgemini","Tech Mahindra","Accenture"];

  return (
    <section ref={ref} className="bg-[#2C2C2A] py-10 px-4" aria-label="Trust statistics">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center text-white mb-7">
          {counts.map((c,i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-black" style={{ color:"#E8593C" }}>{c}{suffixes[i]}</div>
              <div className="text-xs text-white/55 mt-1 font-medium">{labels[i]}</div>
            </div>
          ))}
          <div>
            <div className="text-2xl sm:text-3xl font-black" style={{ color:"#1D9E75" }}>#1</div>
            <div className="text-xs text-white/55 mt-1 font-medium">Dehradun Rank</div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="text-center text-white/35 text-xs font-semibold uppercase tracking-widest mb-3">Our students work at</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {companies.map(c => (
              <span key={c} className="text-xs sm:text-sm font-bold text-white/45 hover:text-white/75 transition-colors border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
// SECTION 3 — AUDIENCE CARDS
// ═════════════════════════════════════════════════════════════
function AudienceCards({ onApply }) {
  return (
    <section className="py-20 px-4 bg-white" aria-label="Which batch is right for you">
      <div className="max-w-6xl mx-auto">
        <SectionHead title="Which batch is right for you?" sub="From school students to career switchers — we have the right program for every stage."/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AUDIENCES.map((a,i) => (
            <div key={i}
              className="relative rounded-[18px] p-6 sm:p-7 flex flex-col border transition-all hover:-translate-y-1 hover:shadow-xl duration-200"
              style={{ background:a.color+"0D", borderColor:a.featured ? a.color : a.color+"28", borderWidth:a.featured?"2px":"1px" }}
            >
              {a.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-[11px] font-black uppercase tracking-wide" style={{ background:a.color }}>
                  Most Popular
                </div>
              )}
              <h3 className="sr-only">{a.seoH3}</h3>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl mt-0.5">{a.icon}</span>
                <div>
                  <span className="text-[11px] font-black rounded-full px-2.5 py-0.5 inline-block mb-1" style={{ background:a.color+"22", color:a.color }}>{a.badge}</span>
                  <div className="text-[17px] font-black text-[#2C2C2A] leading-tight">{a.title}</div>
                </div>
              </div>
              <p className="text-[#5F5E5A] text-sm mb-4 leading-relaxed">{a.body}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {a.bullets.map((b,j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-[#2C2C2A]">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[9px] font-black flex-shrink-0" style={{ background:a.color }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => { ga("cta_courses_click", { audience:a.title }); onApply(a.title); }}
                className="w-full font-bold py-3.5 rounded-[12px] text-white text-sm transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background:a.color }}
              >
                {a.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
// SECTION 4 — SOCIAL PROOF / TESTIMONIALS
// ═════════════════════════════════════════════════════════════
function SocialProof() {
  return (
    <section className="py-20 px-4 bg-[#F8F7F4]" aria-label="Student success stories">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white border border-[#2C2C2A]/10 rounded-2xl px-5 py-3 mb-6 shadow-sm">
            <Stars/>
            <span className="font-black text-[#2C2C2A] text-xl">5.0</span>
            <span className="text-[#5F5E5A] text-sm">· 40+ Google Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2C2C2A] mb-3">Our students are working at top companies</h2>
          <p className="text-[#5F5E5A] max-w-md mx-auto">Real results from real students — not fabricated success stories.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t,i) => (
            <div key={i} className="bg-white rounded-[16px] p-5 border border-[#2C2C2A]/8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col">
              <Stars/>
              <p className="text-[#2C2C2A] text-sm mt-3 mb-4 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-[#2C2C2A]/8">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.grad} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}>{t.initials}</div>
                <div>
                  <div className="text-sm font-bold text-[#2C2C2A]">{t.name}</div>
                  <div className="text-xs font-semibold" style={{ color:"#1D9E75" }}>Got placed at {t.placed}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
// SECTION 5 — COURSES GRID
// ═════════════════════════════════════════════════════════════
function CoursesGrid({ onApply }) {
  return (
    <section className="py-20 px-4 bg-white" id="courses" aria-label="IT courses Dehradun">
      <div className="max-w-6xl mx-auto">
        <SectionHead title="Job-Ready Courses in Dehradun" sub="Every course is built around one goal: getting you hired. Pick yours."/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {COURSES.map((c,i) => (
            <div key={i}
              className="relative group bg-[#F8F7F4] border border-[#2C2C2A]/8 rounded-[14px] p-5 hover:bg-white hover:border-[#E8593C]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              {c.hot && (
                <span className="absolute -top-2.5 right-3 bg-[#E8593C] text-white text-[9px] font-black px-2 py-0.5 rounded-full tracking-widest uppercase">HOT</span>
              )}
              <h3 className="font-black text-[#2C2C2A] text-base mb-1">{c.name}</h3>
              <p className="text-xs font-semibold mb-4" style={{ color:"#1D9E75" }}>Get hired as {c.outcome}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-[#2C2C2A]/8 text-[#5F5E5A] px-2.5 py-1 rounded-full font-medium">{c.duration}</span>
                <button
                  onClick={() => { ga("cta_courses_click", { course:c.name }); onApply(c.name); }}
                  className="text-xs font-bold px-3 py-1.5 rounded-[8px] border transition-all text-[#E8593C] border-[#E8593C]/30 hover:bg-[#E8593C] hover:text-white hover:border-[#E8593C]"
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

// ═════════════════════════════════════════════════════════════
// SECTION 6 — URGENCY + LEAD FORM
// ═════════════════════════════════════════════════════════════
function LeadForm({ defaultCourse }) {
  const [form, setForm] = useState({ name:"", phone:"", course: defaultCourse || "", city:"" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const t = useCountdown(CONFIG.batchDate);

  useEffect(() => {
    if (defaultCourse) setForm(f => ({ ...f, course:defaultCourse }));
  }, [defaultCourse]);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g,"")))
      e.phone = "Enter a valid 10-digit mobile number.";
    if (!form.course) e.course = "Please select a course.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStatus("loading");
    try {
      await fetch("/api/lead", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify(form),
      });
      ga("form_submit", { course:form.course });
      gadsConversion("FORM_SUBMIT");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-[10px] border text-[#2C2C2A] text-sm outline-none transition-all placeholder-[#5F5E5A]/40 ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-[#2C2C2A]/15 bg-white focus:border-[#E8593C] focus:ring-2 focus:ring-[#E8593C]/15"
    }`;

  return (
    <section id="apply-form" className="py-20 px-4 bg-[#F8F7F4]" aria-label="Apply for free counselling">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#2C2C2A] mb-3">Batch filling fast — secure your seat today</h2>
          <p className="text-[#5F5E5A] max-w-lg mx-auto mb-7">Book your FREE counselling session. No obligation. Our counsellor will guide you to the right course.</p>

          {/* Countdown */}
          <div className="inline-flex items-center gap-4 bg-[#2C2C2A] text-white rounded-[16px] px-6 py-4">
            <span className="text-white/50 text-sm font-medium hidden sm:block">Next batch in</span>
            {[{ v:t.days,l:"Days" },{ v:t.hours,l:"Hrs" },{ v:t.minutes,l:"Mins" },{ v:t.seconds,l:"Secs" }].map((x,i) => (
              <div key={i} className="text-center min-w-[36px]">
                <div className="text-2xl font-black" style={{ color:"#E8593C" }}>{String(x.v).padStart(2,"0")}</div>
                <div className="text-[10px] text-white/45 font-medium">{x.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-white rounded-[22px] border border-[#2C2C2A]/8 shadow-xl p-8">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#1D9E75]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" style={{ color:"#1D9E75" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#2C2C2A] mb-2">You&apos;re on the list! 🎉</h3>
              <p className="text-[#5F5E5A] text-sm mb-5">Our counsellor will call you within 24 hours. For a faster response:</p>
              <a
                href={WA_APPLY} target="_blank" rel="noopener noreferrer"
                onClick={() => ga("whatsapp_click", { location:"form_success" })}
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-[12px] transition-all hover:opacity-90"
                style={{ background:"#25D366" }}
              >
                💬 WhatsApp Us Now
              </a>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-1.5">Full Name *</label>
                  <input type="text" placeholder="e.g. Rahul Sharma" value={form.name}
                    onChange={e => setForm({ ...form, name:e.target.value })} className={inputCls("name")}/>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-1.5">Phone Number *</label>
                  <input type="tel" placeholder="10-digit mobile number" value={form.phone}
                    onChange={e => setForm({ ...form, phone:e.target.value })} className={inputCls("phone")}/>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-1.5">Course Interest *</label>
                  <select value={form.course} onChange={e => setForm({ ...form, course:e.target.value })} className={inputCls("course")}>
                    <option value="">Select a course…</option>
                    {COURSE_DROPDOWN.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-1.5">
                    City <span className="font-normal text-[#5F5E5A]">(optional)</span>
                  </label>
                  <input type="text" placeholder="e.g. Dehradun" value={form.city}
                    onChange={e => setForm({ ...form, city:e.target.value })} className={inputCls("city")}/>
                </div>
                <button
                  type="submit" disabled={status === "loading"}
                  className="w-full font-black text-white py-4 rounded-[14px] text-base transition-all hover:scale-[1.02] active:scale-100 disabled:opacity-60 mt-1"
                  style={{ background:"linear-gradient(135deg,#E8593C,#c9422a)", boxShadow:"0 8px 28px rgba(232,89,60,.35)" }}
                >
                  {status === "loading" ? "Submitting…" : "Book My Free Counselling Session"}
                </button>
                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong.{" "}
                    <a href={`tel:${CONFIG.phone}`} className="underline font-semibold">Call us directly.</a>
                  </p>
                )}
                <p className="text-center text-xs text-[#5F5E5A]/60">🔒 Your info is safe with us. No spam, ever.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
// SECTION 7 — FAQ
// ═════════════════════════════════════════════════════════════
function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-20 px-4 bg-white" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto">
        <SectionHead title="Common questions" sub="Still not sure? We've answered the most common ones below."/>
        <div className="space-y-3">
          {FAQS.map((f,i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`border rounded-[14px] overflow-hidden transition-all ${isOpen ? "border-[#E8593C]/40 shadow-sm" : "border-[#2C2C2A]/10 hover:border-[#2C2C2A]/20"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-transparent"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#2C2C2A] text-sm sm:text-base">{f.q}</span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all"
                    style={isOpen ? { background:"#E8593C", borderColor:"#E8593C", color:"#fff", transform:"rotate(45deg)" } : { borderColor:"rgba(44,44,42,.2)", color:"#5F5E5A" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14"/>
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-[#5F5E5A] text-sm leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#5F5E5A] text-sm mb-4">Still have a question?</p>
          <a
            href={WA_URL} target="_blank" rel="noopener noreferrer"
            onClick={() => ga("whatsapp_click", { location:"faq" })}
            className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-[12px] transition-all hover:opacity-90"
            style={{ background:"#25D366" }}
          >
            💬 Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════
// SECTION 8 — STICKY ELEMENTS
// ═════════════════════════════════════════════════════════════
function StickyElements({ onApply }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Condensed sticky header */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#2C2C2A]/10 shadow-sm transition-all duration-300"
        style={{ transform:scrolled?"translateY(0)":"translateY(-100%)", opacity:scrolled?1:0 }}
        aria-hidden={!scrolled}
      >
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <span className="font-black text-[#2C2C2A] text-base tracking-tight">CodewareIT</span>
          <div className="flex items-center gap-2">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => ga("whatsapp_click", { location:"sticky_header" })}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold border px-3 py-1.5 rounded-full hover:bg-[#25D366]/10 transition-colors"
              style={{ color:"#25D366", borderColor:"rgba(37,211,102,.3)" }}>
              💬 WhatsApp
            </a>
            <button
              onClick={() => { ga("cta_click", { section:"sticky_header" }); onApply(); }}
              className="text-white text-xs font-bold px-4 py-2 rounded-[8px] transition-all hover:opacity-90"
              style={{ background:"#E8593C" }}>
              Free Counselling →
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      {/* <button
        onClick={() => { ga("whatsapp_click", { location:"floating" }); window.open(WA_URL,"_blank"); }}
        className="fixed bottom-24 sm:bottom-8 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
        style={{ background:"#25D366", boxShadow:"0 4px 20px rgba(37,211,102,.42)" }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.107 1.522 5.83L.057 23.942l6.27-1.447A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.491-5.22-1.351l-.374-.222-3.88.894.92-3.768-.243-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </button> */}

      {/* Mobile sticky bottom bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#2C2C2A]/10 shadow-lg px-4 py-3 flex gap-3">
        <a href={`tel:${CONFIG.phone}`}
          onClick={() => ga("call_click", { location:"mobile_bar" })}
          className="flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-[10px] border-2 border-[#2C2C2A]/15 text-[#2C2C2A]">
          📞 Call
        </a>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer"
          onClick={() => ga("whatsapp_click", { location:"mobile_bar" })}
          className="flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-[10px] text-white"
          style={{ background:"#25D366" }}>
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}

// ═════════════════════════════════════════════════════════════
// ROOT PAGE — wires everything together
// ═════════════════════════════════════════════════════════════
export default function Page() {
  const [course, setCourse] = useState("");

  const scrollToForm = (c = "") => {
    setCourse(typeof c === "string" ? c : "");
    setTimeout(() => {
      document.getElementById("apply-form")?.scrollIntoView({ behavior:"smooth", block:"start" });
    }, 60);
  };

  return (
    <>
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(FAQ_SCHEMA) }}/>
      {COURSE_SCHEMAS.map((s,i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(s) }}/>
      ))}

      {/* Page sections */}
      <Hero          onApply={scrollToForm}/>
      <TrustBar/>
      <AudienceCards onApply={scrollToForm}/>
      <SocialProof/>
      <CoursesGrid   onApply={scrollToForm}/>
      <LeadForm      defaultCourse={course}/>
      <FAQ/>
      <StickyElements onApply={scrollToForm}/>

      {/* Spacer so mobile sticky bar doesn't overlap footer */}
      <div className="sm:hidden h-16" aria-hidden="true"/>
    </>
  );
}
