import React from "react";
import Head from "next/head";
import {
  UserCheck,
  Users,
  Laptop,
  ClipboardCheck,
  HelpCircle,
  Briefcase,
} from "lucide-react";
import { Target, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { Flag, BookOpen } from "lucide-react";

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

// Structured Data for About Page - Organization + Mission
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodewareIT Private Ltd",
  url: "https://www.codewareit.in",
  logo: "https://www.codewareit.in/codewarelogo.png",
  description:
    "CodewareIT Pvt Ltd is a premier coding institute in Dehradun, Uttarakhand offering practical coding classes, internships, and job assistance in MERN, Java, Python, PHP, and more.",
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
    contactType: "customer service",
  },
  sameAs: [
    "https://www.facebook.com/codewareit",
    "https://www.linkedin.com/company/codewareit-pvt-ltd",
    // add your official social URLs here
  ],
  // Adding Mission in structured data for enhanced SEO
  employee: {
    "@type": "Person",
    name: "Shubham Goyal",
    jobTitle: "Founder & CEO",
  },
};

export default function About() {
  return (
    <>
      <Head>
        <title>
          About CodewareIT - Coding Classes, Internships & IT Training in Dehradun
        </title>
        <meta
          name="description"
          content="Learn about CodewareIT Pvt Ltd - the top coding institute in Dehradun, Uttarakhand offering Java, Python, PHP, ReactJS courses with internship and job assistance."
        />
        <meta
          name="keywords"
          content="coding classes Dehradun, Java classes Dehradun, Python classes Dehradun, PHP classes Dehradun, ReactJS classes, backend classes, IT internship Dehradun"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-800 to-purple-900  text-white py-24 text-center shadow-lg mt-[5rem]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-xl mt-4 font-light">
            Empowering individuals through coaching and mentorship.
          </p>
        </div>

        {/* Company Section */}
        <section
          aria-label="About CodewareIT Company Information"
          className="flex flex-col lg:flex-row items-center lg:items-start mt-20 lg:mt-32 gap-12 lg:gap-24 px-6 lg:px-20"
        >
          {/* Left Side Image */}
          <div className="flex-shrink-0">
            <img
              src="/codewarelogo.png"
              alt="Codeware Logo"
              loading="lazy"
              className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72  shadow-xl object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-extrabold text-3xl sm:text-4xl mb-6 text-gray-900">
              About <span className="text-blue-600">CodewareIT Private Ltd</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Founded on <strong>March 2, 2023</strong>, in{" "}
              <strong>Dehradun</strong>,{" "}
              <strong>CodewareIT Private Ltd</strong> was established under the
              visionary leadership of <strong>Shubham Goyal</strong>. With a
              strong commitment to excellence, the company specializes in{" "}
              <strong>training</strong>, delivering innovative solutions tailored
              to meet the evolving needs of clients.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
              Guided by a mission to drive growth and innovation,{" "}
              <strong>Shubham Goyal</strong> and his team work tirelessly to
              provide high-quality products and services while fostering
              long-term partnerships. As a forward-thinking organization, the
              company continues to expand its presence, ensuring customer
              satisfaction and sustainable success.
            </p>
          </div>
        </section>

        {/* our mission */}

        <section
          aria-label="Our Mission and Values"
          className="py-20 bg-gradient-to-b from-blue-50 to-white sm:mt-[5rem] mt-[3rem]"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Dedicated to shaping a brighter future through education,
              mentorship, and unwavering integrity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission Card */}
              <article
                aria-labelledby="mission-heading"
                className="p-10 bg-white rounded-xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3 flex flex-col items-center text-center"
              >
                <Target size={60} className="text-blue-600 mb-4" />
                <h3
                  id="mission-heading"
                  className="text-3xl font-bold text-gray-900"
                >
                  Our Mission
                </h3>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  Our mission is to empower students with{" "}
                  <strong>knowledge</strong>, <strong>skills</strong>, and{" "}
                  <strong>confidence</strong> to excel in their academic and
                  professional careers. We aim to create an environment where
                  learning is interactive, engaging, and tailored to individual
                  needs. Through expert mentorship, we nurture future leaders
                  who are not only academically strong but also critical
                  thinkers, problem solvers, and innovators in their fields.
                </p>
              </article>

              {/* Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Value 1 */}
                <article
                  aria-labelledby="value1-heading"
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex items-center gap-4"
                >
                  <HeartHandshake size={50} className="text-blue-600" />
                  <div>
                    <h4
                      id="value1-heading"
                      className="text-xl font-semibold text-gray-900"
                    >
                      Integrity
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We uphold honesty and transparency in everything we do,
                      ensuring trust and respect in our relationships.
                    </p>
                  </div>
                </article>

                {/* Value 2 */}
                <article
                  aria-labelledby="value2-heading"
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex items-center gap-4"
                >
                  <Lightbulb size={50} className="text-blue-600" />
                  <div>
                    <h4
                      id="value2-heading"
                      className="text-xl font-semibold text-gray-900"
                    >
                      Innovation
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We embrace creativity and adapt to modern teaching methods
                      to provide the best learning experience.
                    </p>
                  </div>
                </article>

                {/* Value 3 */}
                <article
                  aria-labelledby="value3-heading"
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex items-center gap-4"
                >
                  <ShieldCheck size={50} className="text-blue-600" />
                  <div>
                    <h4
                      id="value3-heading"
                      className="text-xl font-semibold text-gray-900"
                    >
                      Commitment
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We are dedicated to providing top-quality education,
                      ensuring student success at every level.
                    </p>
                  </div>
                </article>

                {/* Value 4 */}
                <article
                  aria-labelledby="value4-heading"
                  className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex items-center gap-4"
                >
                  <HeartHandshake size={50} className="text-blue-600" />
                  <div>
                    <h4
                      id="value4-heading"
                      className="text-xl font-semibold text-gray-900"
                    >
                      Excellence
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We strive for the highest standards in teaching and
                      learning, pushing students towards success.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* our history */}

        <section
          aria-label="Company History Timeline"
          className="py-20 bg-gradient-to-b from-white to-gray-100"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold text-gray-900">Our History</h2>
              <p className="text-lg text-gray-700 mt-4">
                A journey of excellence, innovation, and transformation in
                education.
              </p>
            </div>

            <div className="relative border-l-4 border-blue-500 pl-6">
              {historyData.map((event, index) => (
                <article key={index} className="mb-10" aria-label={event.title}>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-full text-white shadow-lg">
                      <event.icon size={30} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {event.year}
                      </h3>
                      <h4 className="text-xl font-medium text-blue-600">
                        {event.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-2 ml-14 leading-relaxed">
                    {event.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* why us */}

        <section
          aria-label="Why Choose CodewareIT"
          className="py-20 bg-gradient-to-b from-blue-50 to-white mt-[4rem]"
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Empowering students with the best teaching methods to achieve
              academic success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <UserCheck size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Expert Teachers
                </h3>
                <p className="text-gray-600 mt-2">
                  Learn from highly qualified educators with years of
                  experience.
                </p>
              </article>

              {/* Feature 2 */}
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <Users size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Small Batch Sizes
                </h3>
                <p className="text-gray-600 mt-2">
                  Get personalized attention with small and interactive
                  classes.
                </p>
              </article>

              {/* Feature 3 */}
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <Laptop size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Online & Offline Classes
                </h3>
                <p className="text-gray-600 mt-2">
                  Flexible learning with both online and offline options.
                </p>
              </article>

              {/* Feature 4 */}
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <ClipboardCheck size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Regular Tests & Feedback
                </h3>
                <p className="text-gray-600 mt-2">
                  Track your progress with regular assessments and feedback.
                </p>
              </article>

              {/* Feature 5 */}
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <HelpCircle size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Doubt Clearing Sessions
                </h3>
                <p className="text-gray-600 mt-2">
                  Clear all your doubts with dedicated doubt-solving sessions.
                </p>
              </article>

              {/* Feature 6 */}
              <article className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <Briefcase size={40} className="text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Career Guidance
                </h3>
                <p className="text-gray-600 mt-2">
                  Get expert advice on career paths and future opportunities.
                </p>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
