"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  Code2, Flame, Star, Trophy, Users, Zap, Target,
  ArrowRight, CheckCircle, GitBranch, Monitor, Layers,
  Award, TrendingUp, Heart, Flag
} from "lucide-react";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CodewareIT Private Ltd",
  alternateName: "Best Computer Coding Institute in Dehradun",
  url: "https://www.codewareit.in",
  logo: "https://www.codewareit.in/codewarelogo.png",
  description:
    "CodewareIT Pvt Ltd — the best computer coding institute in Dehradun. Practical Java classes for ICSE Class 9-10, Python for CBSE Class 11-12, and full MERN Stack, React.js, Next.js, Node.js for BTech, BCA, BScIT, MCA students.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karanpur and Prem Nagar",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },
  contactPoint: { "@type": "ContactPoint", telephone: "+91-9837218345", contactType: "customer service" },
  founder: { "@type": "Person", name: "Shubham Goyal", jobTitle: "Founder & Lead Instructor" },
  sameAs: [
    "https://www.facebook.com/codewareit",
    "https://www.linkedin.com/company/codewareit-pvt-ltd",
  ],
};

const historyData = [
  {
    year: "2023", title: "The Spark — Founded in Dehradun",
    description: "CodewareIT was born on March 2, 2023 with one bold promise: no student should ever fear code again. Starting with school students in Dehradun who dreaded Java, we flipped that fear into passion — one practical class at a time.",
    icon: Flag, color: "from-violet-500 to-purple-600",
  },
  {
    year: "2024", title: "The Ignition — Hundreds of Students Transformed",
    description: "Word spread fast. ICSE Class 9 and 10 students who once feared Java started scoring maximum marks. CBSE 11 and 12 students conquered Python. College students from BTech, BCA, BScIT, MCA built real projects on GitHub. We did not just teach — we transformed.",
    icon: TrendingUp, color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2025", title: "The Launch — Industry-Ready Engineers",
    description: "Full MERN Stack, React.js, Next.js, Node.js, GitHub portfolio projects. Our college students stopped worrying about placement and started building apps that get them hired. CodewareIT became Dehradun's #1 coding institute for practical education.",
    icon: Zap, color: "from-orange-500 to-pink-500",
  },
];

const whyUsFeatures = [
  { icon: Flame,    title: "Fear → Maximum Marks",    desc: "ICSE Class 9 & 10 students who once feared Java? They now score maximum. That transformation is our proof.",                          color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Code2,    title: "100% Practical Learning",  desc: "Every concept is coded live. No theory dumps. You build, you break, you fix — that is how real programmers are made.",             color: "text-violet-600", bg: "bg-violet-50" },
  { icon: GitBranch,title: "Real GitHub Portfolio",    desc: "BTech, BCA, BScIT, MCA students push projects to GitHub. Your portfolio is ready before your degree is finished.",                  color: "text-blue-600",   bg: "bg-blue-50"   },
  { icon: Monitor,  title: "MERN + Next.js Mastery",   desc: "React.js, Node.js, Express, MongoDB, Next.js — the full modern stack that companies actually hire for.",                             color: "text-cyan-600",   bg: "bg-cyan-50"   },
  { icon: Users,    title: "Small Batches, Big Attention", desc: "No crowded classrooms. Every student gets focused attention, doubt clearing, and personal mentorship.",                        color: "text-green-600",  bg: "bg-green-50"  },
  { icon: Trophy,   title: "Results That Speak",        desc: "School toppers, placed college graduates, working professionals — our results are our reputation.",                                color: "text-yellow-600", bg: "bg-yellow-50" },
];

const studentJourneys = [
  { emoji: "📘", board: "ICSE Class 9 & 10",         subject: "Java",                   before: '"Java lagta hai rocket science hai..."',     after: "Maximum marks in practicals & theory ✅", color: "from-blue-600 to-indigo-600",   tag: "School"  },
  { emoji: "📗", board: "CBSE Class 11 & 12",        subject: "Python",                 before: '"Python ka syllabus bahut bada hai..."',     after: "Full syllabus covered + real programs ✅",  color: "from-green-600 to-emerald-600", tag: "School"  },
  { emoji: "🎓", board: "BTech / BCA / BScIT / MCA", subject: "MERN · Next.js · React", before: '"Projects sirf copy karte the..."',          after: "Live GitHub projects + hired ✅",           color: "from-violet-600 to-purple-600", tag: "College" },
];

function AnimatedCounter({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let n = 0;
        const step = Math.ceil(target / 60);
        const iv = setInterval(() => {
          n += step;
          if (n >= target) { setCount(target); clearInterval(iv); } else setCount(n);
        }, 25);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white mb-1">{count}{suffix}</div>
      <div className="text-sm text-white/70 uppercase tracking-widest font-medium">{label}</div>
    </div>
  );
}

export default function AboutContent() {
  return (
    <>
      <Script id="about-schema" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden mt-[5rem]">
          <div className="absolute inset-0 bg-[#060B1F]" />
          <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 50% -10%, #7c3aed55 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 80% 80%, #2563eb33 0%, transparent 60%)" }} />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
          <div className="absolute top-20 left-10 w-48 h-48 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #7c3aed, transparent)", animation: "float1 7s ease-in-out infinite" }} />
          <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #2563eb, transparent)", animation: "float2 9s ease-in-out infinite" }} />

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-5 py-2 mb-8">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white/80 text-sm font-medium tracking-wide">Best Computer Coding Institute in Dehradun</span>
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              We Do Not Just<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa, #f472b6)" }}>Teach Code.</span><br />
              <span className="text-white">We Build Futures.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
              Founded by <span className="text-white font-semibold">Shubham Goyal</span> in Dehradun — where school students went from{" "}
              <span className="text-red-400 font-semibold">fearing Java</span> to <span className="text-green-400 font-semibold">scoring maximum marks</span>,
              and college students went from copying assignments to <span className="text-violet-400 font-semibold">building live GitHub projects</span>.
            </p>
            <div className="inline-block bg-white/5 backdrop-blur border border-white/10 rounded-2xl px-8 py-5 mb-10">
              <p className="text-white/90 text-base md:text-lg italic font-light leading-relaxed">
                &ldquo;The secret of getting ahead is getting started. The only way to do great work is to love what you do.&rdquo;
              </p>
              <p className="text-white/40 text-sm mt-2">— Steve Jobs</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/courses-best-computer-coding-institute-in-dehradun" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 30px #7c3aed55" }}>
                Explore Courses <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-all">
                Talk to Us
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-16" style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #0891b2 100%)" }}>
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
            <AnimatedCounter target={500} suffix="+" label="Students Trained" />
            <AnimatedCounter target={2}   suffix="+" label="Years of Impact"  />
            <AnimatedCounter target={10}  suffix="+" label="Courses Offered"  />
            <AnimatedCounter target={100} suffix="%" label="Practical Learning" />
          </div>
        </section>

        {/* ── ABOUT / FOUNDER ── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative flex justify-center">
                <div className="absolute inset-0 rounded-3xl opacity-10 blur-2xl" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }} />
                <div className="relative rounded-3xl p-1" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb, #ec4899)" }}>
                  <div className="bg-white rounded-3xl p-10 flex flex-col items-center gap-6">
                    <img src="/codewarelogo.png" alt="CodewareIT — Best Computer Coding Institute Dehradun" loading="lazy" className="w-44 h-44 object-contain" />
                    <div className="text-center">
                      <p className="text-2xl font-black text-gray-900">Shubham Goyal</p>
                      <p className="text-violet-600 font-semibold mt-1">Founder & Lead Instructor</p>
                      <p className="text-gray-500 text-sm mt-2">CodewareIT Private Ltd, Dehradun</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {["Java", "Python", "MERN", "Next.js", "React", "Node.js"].map((t) => (
                        <span key={t} className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">Our Story</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                  Born from a <span className="gradient-text">Bold Belief</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Founded on <strong className="text-gray-900">March 2, 2023</strong> in <strong className="text-gray-900">Dehradun</strong>,{" "}
                  <strong className="text-gray-900">CodewareIT Private Ltd</strong> was built on one conviction:{" "}
                  <em className="text-violet-600">anyone can code — if taught the right way.</em>
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  <strong className="text-gray-900">Shubham Goyal</strong> started with ICSE school students in Dehradun who were terrified of Java.
                  Today, those same students score maximum marks. CBSE students master Python. And BTech, BCA, BScIT, MCA graduates
                  build complete MERN and Next.js projects live on GitHub — ready for the real world. No technical background required to join.
                </p>
                <div className="space-y-3">
                  {[
                    "Technical background? Not required to join.",
                    "Practical implementation in every single session.",
                    "Real GitHub projects — not bookwork assignments.",
                    "Portfolio ready before your exams are done.",
                    "ICSE, CBSE, BTech, BCA, BScIT, MCA — all covered.",
                  ].map((pt) => (
                    <div key={pt} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-700 font-medium">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STUDENT JOURNEYS ── */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">Real Transformations</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
                From <span className="text-red-500">Fear</span> to <span className="text-green-500">Full Marks</span>
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">Every student who walks in leaves transformed. Here is how.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {studentJourneys.map((j) => (
                <article key={j.board} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${j.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-4xl">{j.emoji}</span>
                      <span className="text-xs font-bold uppercase tracking-widest bg-white/20 rounded-full px-3 py-1">{j.tag}</span>
                    </div>
                    <h3 className="text-xl font-black">{j.board}</h3>
                    <p className="text-white/80 font-semibold text-sm mt-1">{j.subject}</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="bg-red-50 rounded-xl p-4 border-l-4 border-red-400">
                      <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Before CodewareIT</p>
                      <p className="text-gray-700 text-sm italic">{j.before}</p>
                    </div>
                    <div className="flex justify-center text-2xl">↓</div>
                    <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                      <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">After CodewareIT</p>
                      <p className="text-gray-700 text-sm font-semibold">{j.after}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">Why Students Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
                The CodewareIT <span className="gradient-text">Difference</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyUsFeatures.map((f) => (
                <article key={f.title} className={`${f.bg} rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white shadow-sm">
                    <f.icon size={24} className={f.color} />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── HISTORY TIMELINE ── */}
        <section className="py-24 px-6" style={{ background: "#060B1F" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-violet-400 font-bold text-sm uppercase tracking-widest">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3 leading-tight">
                How We Got <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #60a5fa)" }}>Here</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-blue-500 to-cyan-500 hidden md:block" />
              <div className="space-y-12">
                {historyData.map((event, i) => (
                  <article key={i} className="relative flex gap-8 items-start">
                    <div className={`hidden md:flex shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} items-center justify-center shadow-lg z-10`}>
                      <event.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-all">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-sm font-black text-transparent bg-clip-text bg-gradient-to-r ${event.color}`}>{event.year}</span>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>
                      <h3 className="text-xl font-black text-white mb-3">{event.title}</h3>
                      <p className="text-white/60 leading-relaxed text-sm">{event.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VALUES ── */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">What Drives Us</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">Mission & Values</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="rounded-3xl p-1" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}>
                <div className="bg-white rounded-3xl p-10 h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}>
                    <Target size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To transform every student — school or college, technical or non-technical — into a{" "}
                    <strong className="text-gray-900">confident, job-ready programmer</strong> through practical, project-based learning.
                    Whether you are in ICSE, CBSE, or pursuing BTech, BCA, MCA in Dehradun — we build builders.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Flame,  title: "Practical First",    desc: "Every session = hands-on code. No passive learning.",             color: "text-orange-500" },
                  { icon: Heart,  title: "Student Success",    desc: "Your marks, your career, your confidence — that is our KPI.",     color: "text-rose-500"   },
                  { icon: Award,  title: "Excellence",         desc: "Maximum marks is the floor, not the ceiling.",                    color: "text-yellow-500" },
                  { icon: Layers, title: "Depth Over Breadth", desc: "Fewer topics taught better — not everything shallowly.",          color: "text-cyan-500"   },
                ].map((v) => (
                  <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                    <v.icon size={28} className={`${v.color} mb-3`} />
                    <h4 className="font-black text-gray-900 mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── QUOTE BANNER ── */}
        <section className="py-20 px-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 60%, #0891b2 100%)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
          <div className="relative max-w-3xl mx-auto">
            <div className="text-6xl text-white/30 font-serif mb-4">&ldquo;</div>
            <blockquote className="text-2xl md:text-3xl text-white font-bold leading-relaxed mb-6">
              The expert in anything was once a beginner. At CodewareIT, we meet you at the beginning — and walk with you to excellence.
            </blockquote>
            <cite className="text-white/70 font-semibold not-italic">— Shubham Goyal, Founder · Best Computer Coding Institute in Dehradun</cite>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">Ready?</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6 leading-tight">
              Your Coding Journey <span className="gradient-text">Starts Today</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10">
              Whether you are a Class 9 student in Dehradun scared of Java, or an MCA student who wants to build and deploy a full MERN app — we have a seat for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/courses-best-computer-coding-institute-in-dehradun" className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all hover:scale-105 hover:shadow-2xl" style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)", boxShadow: "0 0 40px #7c3aed44" }}>
                See All Courses <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 text-gray-700 font-bold px-10 py-4 rounded-xl text-lg border-2 border-gray-200 hover:border-violet-400 hover:text-violet-600 transition-all">
                Book a Free Demo
              </Link>
            </div>
          </div>
        </section>

      </div>

      <style jsx global>{`
        @keyframes float1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(20px,-30px) scale(1.1)} 66%{transform:translate(-15px,20px) scale(.95)} }
        @keyframes float2 { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(-25px,20px) scale(1.05)} 70%{transform:translate(15px,-25px) scale(.9)} }
      `}</style>
    </>
  );
}
