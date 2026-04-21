import React from "react";
import Head from "next/head";
import {
  FaReact, FaLaptopCode, FaCode, FaIndustry,
  FaPaintBrush, FaChartLine
} from "react-icons/fa";
import { Target, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { Flag, BookOpen, Briefcase, UserCheck, Users, Laptop, ClipboardCheck, HelpCircle } from "lucide-react";

const courses = [
  {
    name: "MERN Stack",
    icon: <FaReact className="text-5xl text-purple-400" />,
    description: "Master MongoDB, Express.js, React, and Node.js to become a full-stack developer.",
    link: "Courses/mern-stack-development",
  },
  {
    name: "Full Stack",
    icon: <FaLaptopCode className="text-5xl text-blue-400" />,
    description: "Comprehensive training in front-end and back-end technologies for full-stack development.",
    link: "Courses/full-stack-development",
  },
  {
    name: "Programming Language",
    icon: <FaCode className="text-5xl text-green-400" />,
    description: "Learn essential programming languages like Python, Java, C++, and more.",
    link: "Courses/programming-languages",
  },
  {
    name: "Industrial Training",
    icon: <FaIndustry className="text-5xl text-orange-400" />,
    description: "Hands-on industry experience with real-world projects and mentorship.",
    link: "Courses/industrial-training",
  },
  {
    name: "Graphic Design",
    icon: <FaPaintBrush className="text-5xl text-pink-400" />,
    description: "Enhance your creativity with Photoshop, Illustrator, and other design tools.",
    link: "Courses/graphic-design",
  },
  {
    name: "SEO & Digital Marketing",
    icon: <FaChartLine className="text-5xl text-yellow-400" />,
    description: "Optimize web presence and master digital marketing strategies.",
    link: "Courses/seo-digital-marketing",
  },
];

const historyData = [
  {
    year: "2023",
    title: "Founded the Company",
    description: `Our journey began in Dehradun with a vision to revolutionize education.
      We started with a small but passionate team, determined to provide high-quality learning experiences.
      From day one, our goal has been to create an innovative platform that bridges the gap between students and expert educators.`,
    icon: Flag,
  },
  {
    year: "2024",
    title: "Expanded to Multiple Cities",
    description: `With overwhelming student success and positive feedback, we expanded to multiple cities.
      Our hybrid learning model—both online and offline—enabled students from different locations to access top-notch education.
      We also introduced interactive learning sessions, ensuring a more engaging and effective teaching approach.`,
    icon: Briefcase,
  },
  {
    year: "2025",
    title: "Launched Advanced Courses",
    description: `Recognizing the diverse needs of students, we introduced specialized courses tailored for various career paths.
      Our curriculum was enriched with real-world applications, industry-driven projects, and mentorship programs.
      By leveraging technology, we ensured that learning became more practical, dynamic, and impactful.`,
    icon: BookOpen,
  },
];

// JSON-LD Structured Data for Organization and Local Business SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "CodewareIT Pvt Ltd",
  url: "https://www.codewareit.in",
  logo: "https://www.codewareit.in/og-image.jpg",
  description:
    "CodewareIT Pvt Ltd is the premier coding and programming training institute and company in Dehradun, Uttarakhand offering expert courses in MERN stack, Python, Java, PHP, and IT internships.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Karanpur and Prem Nagar",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9837218345",
    contactType: "customer support",
  },
  sameAs: [
    "https://www.facebook.com/codewareit",
    "https://www.linkedin.com/company/codewareit-pvt-ltd",
    // Add your other official social URLs
  ],
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          CodewareIT - Best Coding and Programming Training Institute & Company in Dehradun, Uttarakhand
        </title>
        <meta
          name="description"
          content="CodewareIT Pvt Ltd offers expert and job-ready training in MERN, Python, Java, PHP, ReactJS, and industry internships. The best coding institute and company in Dehradun, Uttarakhand."
        />
        <meta
          name="keywords"
          content="CodewareIT, coding institute Dehradun, programming training Uttarakhand, MERN stack Dehradun, Python training, Java classes, PHP programming, IT internship Dehradun"
        />
        <meta property="og:title" content="CodewareIT - Premier Coding Institute in Dehradun" />
        <meta
          property="og:description"
          content="Join CodewareIT Pvt Ltd for best coding courses and internships in Dehradun, Uttarakhand. Learn MERN stack, Python, Java, PHP and get job assistance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codewareit.in" />
        <meta property="og:image" content="https://www.codewareit.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CodewareIT - Top Coding & Programming Institute in Dehradun" />
        <meta
          name="twitter:description"
          content="Enroll at CodewareIT Pvt Ltd, the best coding training and internship provider in Dehradun, Uttarakhand."
        />
        <meta name="twitter:image" content="https://www.codewareit.in/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main>
        {/* Hero Section */}
        {/* <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="animate-fadeInLeft">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Elevate Your <br /> IT Skills, Tech Career, and Future with Codeware IT
              </h1>
              <p className="mt-6 text-gray-700 text-lg">
                Empowering aspiring developers through expert training in Full Stack Development, Python, Java, MERN Stack, and more.
              </p>
              <a
                href="#courses"
                className="mt-6 inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Explore Our Courses
              </a>
            </div>
            <div className="relative flex flex-col items-center gap-6">
              <article className="bg-gradient-to-r from-blue-400 to-purple-500 shadow-xl p-6 rounded-lg w-96 text-center transform hover:scale-105 transition-transform animate-fadeInUp delay-200">
                <h3 className="font-bold text-white text-xl">Transform Your Career</h3>
                <p className="text-white mt-2">Join our community and gain industry-relevant skills.</p>
              </article>

              <article className="bg-gradient-to-r from-green-400 to-blue-500 shadow-xl p-6 rounded-lg w-96 text-center transform hover:scale-105 transition-transform animate-fadeInUp delay-400">
                <h3 className="font-bold text-white text-xl">Expert-Led Training</h3>
                <p className="text-white mt-2">Learn from industry professionals with hands-on experience.</p>
              </article>

              <article className="bg-gradient-to-r from-purple-400 to-pink-500 shadow-xl p-6 rounded-lg w-96 text-center transform hover:scale-105 transition-transform animate-fadeInUp delay-600">
                <h3 className="font-bold text-white text-xl">Job-Ready Programs</h3>
                <p className="text-white mt-2">Get certified and step into your dream IT career.</p>
              </article>
            </div>
          </div>
        </section> */}

        {/* Courses Section */}
        <section id="courses" className="bg-white text-[#040A26] py-20 px-6" aria-label="Courses Offered">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-[#040A26]">Our Courses</h2>
            <p className="text-lg text-black">
              Explore our job-ready programs and elevate your skills with Codeware IT Pvt Ltd.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {courses.map((course, idx) => (
              <article key={idx} aria-label={`${course.name} Course`} className="bg-[#0B122F] border border-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-purple-600/20 hover:scale-[1.02] transition duration-300">
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{course.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                <a href={`/${course.link}`} className="inline-block text-sm bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-medium transition">
                  Learn More
                </a>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <a href="/Courses" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 transition">
              View All Courses
            </a>
          </div>
        </section>

        {/* About Section */}
        {/* <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-24 text-center shadow-lg mt-[5rem]" aria-label="About CodewareIT">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">About Us</h2>
          <p className="text-lg md:text-xl mt-4 font-light">
            CodewareIT Pvt Ltd, located in Dehradun, Uttarakhand, is a leading company in coding education and IT training with top-notch programs and industry internships.
          </p>
        </section> */}

        {/* History Section */}
        {/* <section className="py-20 bg-gradient-to-b from-white to-gray-100" aria-label="Our History Timeline">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12">Our History</h2>
            <div className="relative border-l-4 border-blue-500 pl-6">
              {historyData.map((event, index) => (
                <article key={index} className="mb-10" aria-label={event.title}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full text-white shadow-lg">
                      <event.icon size={30} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">{event.year}</h3>
                      <h4 className="text-xl font-medium text-blue-600">{event.title}</h4>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2 ml-14 leading-relaxed">{event.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        {/* Why Choose Us Section */}
        {/* <section className="py-20 bg-gradient-to-b from-blue-50 to-white mt-[4rem]" aria-label="Why Choose CodewareIT">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 mb-12">Empowering students with the best teaching methods to achieve academic success.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <UserCheck size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Expert Teachers</h3>
                <p className="text-gray-600 mt-2">Learn from highly qualified educators with years of experience.</p>
              </article>
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <Users size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Small Batch Sizes</h3>
                <p className="text-gray-600 mt-2">Get personalized attention with small and interactive classes.</p>
              </article>
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <Laptop size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Online & Offline Classes</h3>
                <p className="text-gray-600 mt-2">Flexible learning with both online and offline options.</p>
              </article>
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <ClipboardCheck size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Regular Tests & Feedback</h3>
                <p className="text-gray-600 mt-2">Track your progress with regular assessments and feedback.</p>
              </article>
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <HelpCircle size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Doubt Clearing Sessions</h3>
                <p className="text-gray-600 mt-2">Clear all your doubts with dedicated doubt-solving sessions.</p>
              </article>
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <Briefcase size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">Career Guidance</h3>
                <p className="text-gray-600 mt-2">Get expert advice on career paths and future opportunities.</p>
              </article>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
}
