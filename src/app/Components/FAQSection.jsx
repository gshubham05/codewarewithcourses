"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need prior coding experience to join?",
    a: "No prior experience is required! We start from absolute basics — whether you've never written a line of code or have some exposure. Our curriculum is designed to take you from zero to job-ready, step by step.",
  },
  {
    q: "What certificate will I get after the course?",
    a: "You receive a CodewareIT Course Completion Certificate and an Internship Certificate (for eligible programs). These are recognised by employers across India and add real value to your resume and LinkedIn profile.",
  },
  {
    q: "Is placement assistance provided?",
    a: "Yes — 100%! We offer mock interviews, resume building, portfolio reviews, and direct referrals to hiring companies. Our 95% placement rate speaks for itself. We don't stop until you get hired.",
  },
  {
    q: "Can Class 9 or Class 10 students join?",
    a: "Absolutely. We have dedicated batches for ICSE Class 9 & 10 (Java) and CBSE Class 11 & 12 (Python). These are specially designed for school board exams plus real coding skills. Small batches of max 10 students ensure personalised attention.",
  },
  {
    q: "Do you offer online or hybrid classes?",
    a: "Yes! We offer in-person classes at our Dehradun centre, as well as online and hybrid options. Recorded sessions are also available so you never miss a class. Contact us on WhatsApp to discuss the format that works best for you.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-20 px-4 bg-white" aria-label="Frequently asked questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#2C2C2A] mb-3">Common questions</h2>
          <p className="text-[#5F5E5A]">Still not sure? We've answered the most common ones below.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-[14px] overflow-hidden transition-all ${
                  isOpen
                    ? "border-[#E8593C]/40 shadow-sm"
                    : "border-[#2C2C2A]/10 hover:border-[#2C2C2A]/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-transparent"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#2C2C2A] text-sm sm:text-base">{faq.q}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                      isOpen
                        ? "border-[#E8593C] bg-[#E8593C] text-white rotate-45"
                        : "border-[#2C2C2A]/20 text-[#5F5E5A]"
                    }`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-[#5F5E5A] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#5F5E5A] text-sm mb-4">Still have a question?</p>
          <a
            href="https://wa.me/919837218345?text=Hi%2C%20I%20have%20a%20question%20about%20courses%20at%20CodewareIT!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-[10px] hover:bg-[#1fba58] transition-colors"
          >
            💬 Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
