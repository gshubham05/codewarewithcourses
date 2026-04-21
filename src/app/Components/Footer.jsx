"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const courseLinks = [
  { label: "ICSE Class 9 — Java", href: "/Courses/icse-class-9-java-dehradun" },
  { label: "ICSE Class 10 — Java", href: "/Courses/icse-class-10-java-dehradun" },
  { label: "CBSE Class 11 — Python", href: "/Courses/cbse-class-11-python-dehradun" },
  { label: "CBSE Class 12 — Python", href: "/Courses/cbse-class-12-python-dehradun" },
  { label: "MERN Stack", href: "/Courses/mern-stack-development" },
  { label: "Full Stack Dev", href: "/Courses/fullstack-course-dehradun" },
  { label: "React JS", href: "/Courses/react-js-course-dehradun" },
  { label: "Next.js", href: "/Courses/nextjs-course-dehradun" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/Aboutus" },
  { label: "All Courses", href: "/Courses" },
  { label: "Blog", href: "/blog" },
  { label: "Internship", href: "/intern" },
  { label: "Students", href: "/Students" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/PrivacyPolicy" },
];

const socials = [
  { Icon: FaFacebookF, href: "https://www.facebook.com/share/1FKkhHpFEx/?mibextid=qi2Omg", label: "Facebook", color: "#1877f2" },
  { Icon: FaInstagram, href: "https://www.instagram.com/codewareit.in?igsh=dnA3c3l5OWZpZGdx", label: "Instagram", color: "#e1306c" },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/company/codeware-it-dehradun/", label: "LinkedIn", color: "#0077b5" },
  { Icon: FaWhatsapp, href: "https://wa.me/9837218345", label: "WhatsApp", color: "#25d366" },
];

const badges = ["MERN Stack", "React.js", "Next.js", "Python", "Java", "Full Stack", "Node.js", "MongoDB"];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .footer-body { font-family: 'DM Sans', sans-serif; }
        .footer-link {
          color: rgba(156,163,175,1);
          font-size: 0.8125rem;
          transition: color 0.2s, padding-left 0.2s;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-link:hover { color: white; padding-left: 4px; }
        .footer-link::before { content: '→'; font-size: 10px; opacity: 0; transition: opacity 0.2s; }
        .footer-link:hover::before { opacity: 1; }
        .social-btn {
          width: 38px; height: 38px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: rgba(156,163,175,1);
          transition: all 0.25s;
        }
        .social-btn:hover { color: white; transform: translateY(-3px); }
        .badge-item { transition: all 0.2s; }
        .badge-item:hover { background: rgba(124,58,237,0.2); border-color: rgba(124,58,237,0.4); color: #c084fc; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .marquee-track { animation: marquee 20s linear infinite; display: flex; width: max-content; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <footer className="footer-body bg-[#020817] text-white relative overflow-hidden" role="contentinfo">
        {/* Top gradient accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

        {/* Scrolling tech band */}
        <div className="bg-white/[0.025] border-b border-white/5 py-3 overflow-hidden">
          <div className="marquee-track">
            {[...badges, ...badges].map((b, i) => (
              <span key={i} className="badge-item inline-flex items-center gap-1.5 mx-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-400 text-xs font-medium whitespace-nowrap cursor-default">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />{b}
              </span>
            ))}
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand col */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4 group">
                <div className="relative">
                  <Image src="/logo.png" width={42} height={42} alt="CodewareIT" className="rounded-xl" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#020817] animate-pulse" />
                </div>
                <span className="font-bold text-lg" style={{fontFamily:"'Syne',sans-serif"}}>
                  Codeware<span className="text-purple-400">IT</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Dehradun's most trusted IT training institute. We turn aspiring developers into industry-ready professionals.
              </p>
              <div className="flex gap-2 mb-6">
                {socials.map(({ Icon, href, label, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="social-btn"
                    style={{"--hover-color": color}}
                    onMouseEnter={(e) => { e.currentTarget.style.background = color + "20"; e.currentTarget.style.borderColor = color + "50"; e.currentTarget.style.color = color; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = ""; e.currentTarget.style.borderColor = ""; e.currentTarget.style.color = ""; }}>
                    <Icon size={15} />
                  </a>
                ))}
              </div>
              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {["🏆 #1 in Dehradun", "✅ ISO Certified", "🎓 500+ Alumni"].map((b) => (
                  <span key={b} className="text-[10px] font-semibold bg-white/5 border border-white/10 text-gray-400 px-2.5 py-1 rounded-lg">{b}</span>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-widest" style={{fontFamily:"'Syne',sans-serif"}}>Courses</h3>
              <ul className="space-y-2.5">
                {courseLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-widest" style={{fontFamily:"'Syne',sans-serif"}}>Quick Links</h3>
              <ul className="space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-sm text-white mb-4 uppercase tracking-widest" style={{fontFamily:"'Syne',sans-serif"}}>Get in Touch</h3>
              <ul className="space-y-4">
                <li>
                  <a href="https://goo.gl/maps/xu8jqx467KMPTKzY7" target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                    <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0 group-hover:text-purple-300 transition-colors" />
                    <span>Adhohi wala (Sahastradhara Crossing) &amp; Prem Nagar, Dehradun, Uttarakhand 248001</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919837218345" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                    <FaPhoneAlt className="text-green-400 flex-shrink-0 group-hover:text-green-300 transition-colors" />
                    +91 9837218345
                  </a>
                </li>
                <li>
                  <a href="mailto:gshubham.05@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                    <FaEnvelope className="text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                    gshubham.05@gmail.com
                  </a>
                </li>
              </ul>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/9837218345" target="_blank" rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/25 w-full justify-center">
                <FaWhatsapp size={16} /> Chat with Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Codeware IT Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-600 text-xs">
              <span>Made with</span>
              <span className="text-red-500">♥</span>
              <span>in Dehradun 🏔️</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
