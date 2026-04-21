"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#040A26] text-white py-10 px-6 md:px-16" role="contentinfo">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <section aria-labelledby="footer-about" className="md:col-span-2">
          <h2 id="footer-about" className="text-3xl font-bold">
            Codeware IT Pvt Ltd
          </h2>
          <p className="mt-4 text-gray-300">
            Codeware IT Pvt Ltd is the best coding and programming training
            institute cum company in Dehradun, Uttarakhand. We provide top-notch
            training in Full Stack Development, Python, Java, MERN stack, and other
            cutting-edge technologies. Master industry-relevant skills and build a
            successful career in tech.
          </p>
        </section>

        {/* Courses */}
        <nav aria-labelledby="footer-courses">
          <h3 id="footer-courses" className="font-bold text-lg">
            Courses
          </h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>
              <Link href="/Courses/full-stack-development" title="Full Stack Development Course">
                FULL STACK DEVELOPMENT
              </Link>
            </li>
            <li>
              <Link href="/Courses/mern-stack-development" title="MERN Stack Development Course">
                MERN STACK DEVELOPMENT
              </Link>
            </li>
            <li>
              <Link href="/Courses/programming-languages" title="Programming Languages Course">
                PROGRAMMING LANGUAGES
              </Link>
            </li>
            <li>
              <Link href="/Courses/industrial-training" title="Industrial Training Program">
                INDUSTRIAL TRAINING
              </Link>
            </li>
          </ul>
        </nav>

        {/* Quick Links */}
        <nav aria-labelledby="footer-quicklinks">
          <h3 id="footer-quicklinks" className="font-bold text-lg">
            Quick Links
          </h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>
              <Link href="/" title="Go to Home page">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Aboutus" title="Learn About Us">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/Courses" title="View Our Courses">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/contact" title="Contact Codeware IT">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" title="Read Our Blog">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/PrivacyPolicy" title="View Privacy Policy">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>

        {/* Address */}
        <address aria-labelledby="footer-address" className="not-italic">
          <h3 id="footer-address" className="font-bold text-lg">
            Address
          </h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li>Codeware IT Pvt Ltd</li>
            <li>
              <a
                href="https://goo.gl/maps/xu8jqx467KMPTKzY7"
                target="_blank"
                rel="noopener noreferrer"
                title="Directions to Codeware IT Pvt Ltd"
              >
                <FaMapMarkerAlt className="inline mr-2" aria-hidden="true" /><br /> (I) Adhohi wala (Sahastradhara Crossing), <br />(II) Prem Nagar, Dehradun,
                Uttarakhand 248001
              </a>
            </li>
            <li>
              <a href="mailto:gshubham.05@gmail.com" title="Send Email to Codeware IT">
                <FaEnvelope className="inline mr-2" aria-hidden="true" /> gshubham.05@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919837218345" title="Call Codeware IT">
                <FaPhoneAlt className="inline mr-2" aria-hidden="true" /> +91 9837218345
              </a>
            </li>
          </ul>
        </address>
      </div>

      {/* Social Media */}
      <div className="mt-8 flex justify-center space-x-6" role="navigation" aria-label="Social Media Links">
        <a
          href="https://www.facebook.com/share/1FKkhHpFEx/?mibextid=qi2Omg"
          className="text-gray-300 hover:text-white text-2xl"
          aria-label="Facebook"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/codewareit.in?igsh=dnA3c3l5OWZpZGdx"
          className="text-gray-300 hover:text-white text-2xl"
          aria-label="Instagram"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/codeware-it-dehradun/"
          className="text-gray-300 hover:text-white text-2xl"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-gray-400 text-sm">
        <a href="https://wa.me/message/WF4V4DY7R53QH1" title="WhatsApp Contact" rel="noopener noreferrer" target="_blank">
          © 2026 Codeware IT Pvt Ltd. All rights reserved.
        </a>
      </div>
    </footer>
  );
}
