"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why should I choose CodewareIT for learning MERN Stack in Dehradun?",
      answer:
        "CodewareIT is recognized as the best coding and programming institute in Dehradun. We provide industry-focused MERN Stack and Next.js training with live projects, real-time deployment, and one-on-one mentorship under expert trainers."
    },
    {
      question: "Do you provide internships after the MERN Stack course?",
      answer:
        "Yes! After completing your MERN Stack or Next.js course, CodewareIT offers 100% internship opportunities. Students work on live projects with industry tools, gaining hands-on experience that makes them job-ready."
    },
    {
      question: "What is the duration of the Full Stack Web Development course?",
      answer:
        "Our Full Stack Development program (MERN + Next.js + Deployment) generally takes 4 to 6 months depending on the batch type (regular/fast-track). This includes coding sessions, project work, and internship opportunities."
    },
    {
      question: "Do you help students with placements?",
      answer:
        "Yes, CodewareIT provides complete placement assistance. We conduct mock interviews, resume building, portfolio development, and connect students with top IT companies in Dehradun and across India."
    },
    {
      question: "What projects will I build during the MERN Stack course?",
      answer:
        "You will work on real-world projects like E-commerce websites, Blogging platforms, SaaS applications, Authentication systems, and Deployment on cloud servers with Nginx. These projects are designed to boost your resume and portfolio."
    },
    {
      question: "Do I need prior programming knowledge to join?",
      answer:
        "No prior experience is required. At CodewareIT, we start from scratch with HTML, CSS, and JavaScript basics, and then move toward advanced MERN Stack, Next.js, and deployment."
    },
    {
      question: "What is the fee structure at CodewareIT?",
      answer:
        "Our MERN Stack and Next.js course fees are affordable compared to industry standards. We also provide flexible installment options. For detailed fee information, contact us directly at +91 9837218345."
    },
    {
      question: "Why is CodewareIT called the best coding institute in Dehradun?",
      answer:
        "Because we combine practical learning, live projects, industry-level mentorship, internships, and placement support. Our motto is 'Learn here & Earn anywhere.' That’s why CodewareIT is trusted by hundreds of students in Dehradun."
    }
  ];

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      {/* SEO Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
        FAQs – CodewareIT | Best Coding & Programming Institute in Dehradun
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
            >
              {faq.question}
              <ChevronDown
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180 text-blue-600" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="px-5 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
