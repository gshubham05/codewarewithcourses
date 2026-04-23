"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

// NAP must exactly match Google My Business listing
const NAP = {
  name: "CodewareIT Pvt Ltd",
  address: "House No. 2, Shakti Vihar, Suman Nagar, Adhoiwala, Dehradun, Uttarakhand 248001",
  mapsUrl: "https://maps.app.goo.gl/xu8jqx467KMPTKzY7",
  phone: "+91 98372 18345",
  phonePlain: "+919837218345",
  email: "info@codewareit.in",
  hours: "Mon–Sun: 7:00 AM – 10:00 PM",
};

export default function Footer() {
  return (
    <footer className="bg-[#040A26] text-white py-12 px-6 md:px-16" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Company Info */}
        <section aria-labelledby="footer-about" className="md:col-span-2">
          <h2 id="footer-about" className="text-2xl font-bold text-white">
            {NAP.name}
          </h2>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            {NAP.name} is the best coding and programming training institute in
            Dehradun, Uttarakhand. We provide top-notch training in MERN Stack,
            Full Stack Development, Python, Java, and school coding classes for
            ICSE &amp; CBSE students.
          </p>
          {/* Google Rating badge */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-white">5.0</span>
            <span className="text-xs text-gray-400">· 36 Google Reviews</span>
          </div>
        </section>

        {/* Courses */}
        <nav aria-labelledby="footer-courses">
          <h3 id="footer-courses" className="font-bold text-lg text-white mb-3">
            Courses
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/courses/icse-class-9-java-dehradun" className="hover:text-purple-300 transition-colors">
                ICSE Class 9 &amp; 10 — Java
              </Link>
            </li>
            <li>
              <Link href="/courses/cbse-class-11-python-dehradun" className="hover:text-purple-300 transition-colors">
                CBSE Class 11 &amp; 12 — Python
              </Link>
            </li>
            <li>
              <Link href="/courses/java-python-programming-dehradun" className="hover:text-purple-300 transition-colors">
                UG/PG Programming (BCA, MCA, BTech)
              </Link>
            </li>
            <li>
              <Link href="/courses/fullstack-course-dehradun" className="hover:text-purple-300 transition-colors">
                Full Stack Development
              </Link>
            </li>
            <li>
              <Link href="/courses/react-js-course-dehradun" className="hover:text-purple-300 transition-colors">
                React.js / Next.js
              </Link>
            </li>
            <li>
              <Link href="/courses/backend-course-dehradun" className="hover:text-purple-300 transition-colors">
                Backend / Node.js
              </Link>
            </li>
          </ul>
        </nav>

        {/* Quick Links */}
        <nav aria-labelledby="footer-quicklinks">
          <h3 id="footer-quicklinks" className="font-bold text-lg text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-purple-300 transition-colors">Home</Link></li>
            <li><Link href="/Aboutus" className="hover:text-purple-300 transition-colors">About Us</Link></li>
            <li><Link href="/Courses" className="hover:text-purple-300 transition-colors">All Courses</Link></li>
            <li><Link href="/Students" className="hover:text-purple-300 transition-colors">Our Students</Link></li>
            <li><Link href="/intern" className="hover:text-purple-300 transition-colors">Internship</Link></li>
            <li><Link href="/blog" className="hover:text-purple-300 transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link></li>
            <li><Link href="/PrivacyPolicy" className="hover:text-purple-300 transition-colors">Privacy Policy</Link></li>
          </ul>
        </nav>

        {/* Address — NAP exactly matching GMB */}
        <address aria-labelledby="footer-address" className="not-italic">
          <h3 id="footer-address" className="font-bold text-lg text-white mb-3">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="font-semibold text-white">{NAP.name}</li>
            <li>
              <a
                href={NAP.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Directions to CodewareIT Pvt Ltd"
                className="hover:text-purple-300 transition-colors flex items-start gap-2"
              >
                <FaMapMarkerAlt className="mt-0.5 flex-shrink-0 text-purple-400" aria-hidden="true" />
                <span>{NAP.address}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${NAP.email}`} title="Email CodewareIT" className="hover:text-purple-300 transition-colors flex items-center gap-2">
                <FaEnvelope className="text-purple-400 flex-shrink-0" aria-hidden="true" />
                <span>{NAP.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${NAP.phonePlain}`} title="Call CodewareIT" className="hover:text-purple-300 transition-colors flex items-center gap-2">
                <FaPhoneAlt className="text-purple-400 flex-shrink-0" aria-hidden="true" />
                <span>{NAP.phone}</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/9837218345" target="_blank" rel="noopener noreferrer" title="WhatsApp CodewareIT" className="hover:text-green-300 transition-colors flex items-center gap-2">
                <FaWhatsapp className="text-green-400 flex-shrink-0" aria-hidden="true" />
                <span>WhatsApp: {NAP.phone}</span>
              </a>
            </li>
            <li className="text-gray-400 text-xs">
              🕐 {NAP.hours}
            </li>
          </ul>
        </address>
      </div>

      {/* Social Media */}
      <div className="mt-8 flex justify-center space-x-6" role="navigation" aria-label="Social Media Links">
        <a
          href="https://www.facebook.com/share/1FKkhHpFEx/?mibextid=qi2Omg"
          className="text-gray-400 hover:text-white text-2xl transition-colors"
          aria-label="Facebook — CodewareIT"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/codewareit.in?igsh=dnA3c3l5OWZpZGdx"
          className="text-gray-400 hover:text-white text-2xl transition-colors"
          aria-label="Instagram — CodewareIT"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/codeware-it-dehradun/"
          className="text-gray-400 hover:text-white text-2xl transition-colors"
          aria-label="LinkedIn — CodewareIT"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} {NAP.name}. All rights reserved.</p>
        <p>
          Made with ❤️ in Dehradun, Uttarakhand |{" "}
          <Link href="/PrivacyPolicy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
}
