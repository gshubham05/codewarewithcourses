import React from "react";
import Herosection from "./Components/Herosection";
import Aboutcompany from "./Components/Aboutcompany";
import Faq from "./Components/Faq";
import Courses from "./Components/Courses";
import Cstatistics from "./Components/Cstatistics";
import BlogPreview from "./Components/BlogPreview";
import Testimonials from "./Components/Testimonials";
import BatchSchedule from "./Components/BatchSchedule";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What coding courses are offered at CodewareIT in Dehradun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer MERN Stack, Python, Java, and PHP full-stack development courses, as well as ICSE/CBSE school coding classes.",
      },
    },
    {
      "@type": "Question",
      name: "Where is CodewareIT located in Uttarakhand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located in Karanpur and Prem Nagar, Dehradun, Uttarakhand, postal code 248001.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide a free demo class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer a 100% FREE demo class with no obligation. Book via WhatsApp at +91 98372 18345 or call us directly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide internships in the MERN stack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide hands-on internships specifically focused on the MERN stack to help students gain real-world experience.",
      },
    },
    {
      "@type": "Question",
      name: "Does CodewareIT offer job assistance in IT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide job assistance services to help our students secure employment in the IT industry after completing their courses.",
      },
    },
    {
      "@type": "Question",
      name: "What type of learning approach is used?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We focus solely on practical implementation of IT concepts through real projects and hands-on training. Small batches of max 10-15 students ensure personal attention.",
      },
    },
  ],
};

export const metadata = {
  title: "Best Coding Courses in Dehradun | CodewareIT Pvt Ltd",
  description:
    "Join CodewareIT Pvt Ltd in Dehradun, Uttarakhand for expert MERN Stack, Python, Java coding courses and internships. 98% board exam pass rate. Book FREE demo class today.",
  keywords: [
    "coding courses Dehradun",
    "coding institute Uttarakhand",
    "MERN stack classes Dehradun",
    "IT internship Uttarakhand",
    "best java institute Dehradun",
    "python training Dehradun",
    "free demo class Dehradun",
    "ICSE java coaching Dehradun",
    "CBSE python classes Dehradun",
  ],
  openGraph: {
    title: "Best Coding Courses in Dehradun | CodewareIT Pvt Ltd",
    description:
      "Join CodewareIT Pvt Ltd for expert MERN Stack, Python, Java coding courses and internships. 98% board exam pass rate. Book FREE demo class today.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Herosection />
      <Aboutcompany />
      <Courses />
      <BatchSchedule />
      <Cstatistics />
      <Testimonials />
      <BlogPreview />
      <Faq />
    </>
  );
}

export default Page;
