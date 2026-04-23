import React from "react";
import Herosection from "./Components/Herosection";
import Aboutcompany from "./Components/Aboutcompany";
import Faq from "./Components/Faq";
import Cstatistics from "./Components/Cstatistics";
import BlogPreview from "./Components/BlogPreview";
import Testimonials from "./Components/Testimonials";
import BatchSchedule from "./Components/BatchSchedule";
import Courses from "./Components/Courses";
import GoogleReviews from "./Components/GoogleReviews";

// ── FAQPage Schema ──────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What coding courses are offered at CodewareIT in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Java, Python, MERN Stack, React JS, Node.js, Full Stack Development courses, and ICSE/CBSE school coding classes in Dehradun.",
      },
    },
    {
      "@type": "Question",
      name: "Where is CodewareIT located in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at 6/6 Karanpur & Rajpur Road, Dehradun, Uttarakhand 248001. Conveniently accessible from all areas of Dehradun.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide a free demo class in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a 100% FREE demo class with no obligation. Book via WhatsApp at +91 98372 18345 or fill the form on any course page.",
      },
    },
    {
      "@type": "Question",
      name: "Is the best Java course available in Dehradun at CodewareIT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Java course covers Core Java, OOP, Collections, JDBC, and Spring Boot with real projects and placement support. Rated 4.7★ by students.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Python course in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CodewareIT's Python course in Dehradun covers Python basics, OOP, Django, data science with NumPy/Pandas, and web scraping. Job placement support included.",
      },
    },
    {
      "@type": "Question",
      name: "Do you teach MERN Stack in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we offer the best MERN Stack course in Dehradun covering MongoDB, Express, React JS, and Node.js with real full-stack projects and job placement support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide internships at CodewareIT Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide hands-on internships in MERN Stack, React JS, Node.js, and Full Stack to help students gain real-world experience before job placement.",
      },
    },
    {
      "@type": "Question",
      name: "How many students are in each batch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We keep batches small — maximum 10–15 students — ensuring every student gets personal attention from the instructor.",
      },
    },
  ],
};

// ── ItemList Schema for the 6 main courses ──────────────────────────────────
const courseListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Best Coding Courses in Dehradun",
  description: "Top coding courses offered by CodewareIT Pvt Ltd in Dehradun, Uttarakhand",
  numberOfItems: 6,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Best Java Course in Dehradun", url: "https://www.codewareit.in/java-course-dehradun" },
    { "@type": "ListItem", position: 2, name: "Best Python Course in Dehradun", url: "https://www.codewareit.in/python-course-dehradun" },
    { "@type": "ListItem", position: 3, name: "Best MERN Stack Course in Dehradun", url: "https://www.codewareit.in/mern-stack-course-dehradun" },
    { "@type": "ListItem", position: 4, name: "Best React JS Course in Dehradun", url: "https://www.codewareit.in/react-js-course-dehradun" },
    { "@type": "ListItem", position: 5, name: "Best Node.js Course in Dehradun", url: "https://www.codewareit.in/nodejs-course-dehradun" },
    { "@type": "ListItem", position: 6, name: "Best Full Stack Course in Dehradun", url: "https://www.codewareit.in/full-stack-course-dehradun" },
  ],
};

export const metadata = {
  title: "Dehradun's #1 Coding Institute | Java, Python, MERN Stack Courses | CodewareIT",
  description:
    "Join CodewareIT Pvt Ltd — Dehradun's #1 coding institute for Java, Python, MERN Stack, React JS, Node.js & Full Stack courses. Real projects, placement support & FREE demo class. 6/6 Karanpur & Rajpur Road, Dehradun.",
  keywords: [
    "coding courses Dehradun",
    "coding institute Dehradun",
    "best coding institute Dehradun",
    "java course Dehradun",
    "python course Dehradun",
    "MERN stack course Dehradun",
    "React JS course Dehradun",
    "Node.js course Dehradun",
    "full stack course Dehradun",
    "IT training Dehradun",
    "free demo class Dehradun",
    "ICSE java coaching Dehradun",
    "CBSE python classes Dehradun",
  ],
  openGraph: {
    title: "Dehradun's #1 Coding Institute | Java, Python, MERN Stack | CodewareIT",
    description:
      "Join CodewareIT for Java, Python, MERN Stack, React JS, Node.js & Full Stack courses in Dehradun. Real projects, placement support, FREE demo class.",
    url: "https://www.codewareit.in",
    siteName: "Codeware IT Pvt Ltd",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

function Page() {
  return (
    <>
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />

      {/* ── Page Sections ── */}
      <Herosection />
      <Aboutcompany />
      <Courses />
      <BatchSchedule />
      <Cstatistics />
      <Testimonials />
      <GoogleReviews />
      <BlogPreview />
      <Faq />
    </>
  );
}

export default Page;
