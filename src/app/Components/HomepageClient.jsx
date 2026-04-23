"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import NewHero from "./NewHero";
import TrustBar from "./TrustBar";
import AudienceCards from "./AudienceCards";
import SocialProof from "./SocialProof";
import CoursesGrid from "./CoursesGrid";
import LeadForm from "./LeadForm";
import FAQSection from "./FAQSection";
import StickyElements from "./StickyElements";
import NewFooter from "./NewFooter";

export default function HomepageClient() {
  const [formDefaultCourse, setFormDefaultCourse] = useState("");

  const openForm = (course = "") => {
    setFormDefaultCourse(typeof course === "string" ? course : "");
    setTimeout(() => {
      const el = document.getElementById("apply-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>
      {/* Navigation */}
      {/* <Navbar /> */}

      {/* SECTION 1: HERO */}
      <NewHero onOpenForm={openForm} />

      {/* SECTION 2: TRUST BAR */}
      <TrustBar />

      {/* SECTION 3: AUDIENCE CARDS */}
      <AudienceCards onOpenForm={openForm} />

      {/* SECTION 4: SOCIAL PROOF */}
      <SocialProof />

      {/* SECTION 5: COURSES GRID */}
      <CoursesGrid onOpenForm={openForm} />

      {/* SECTION 6: URGENCY + LEAD FORM */}
      <LeadForm defaultCourse={formDefaultCourse} />

      {/* SECTION 7: FAQ */}
      <FAQSection />

      {/* SECTION 8: STICKY ELEMENTS (WhatsApp, header, mobile bar) */}
      <StickyElements onOpenForm={openForm} />

      {/* SECTION 9: FOOTER */}
      {/* <NewFooter /> */}
    </div>
  );
}
