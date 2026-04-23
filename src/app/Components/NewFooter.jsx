import Link from "next/link";

const NAP = {
  name: "CodewareIT Pvt Ltd",
  address: "House No. 2, Shakti Vihar, Suman Nagar, Adhoiwala, Dehradun, Uttarakhand 248001",
  mapsUrl: "https://maps.app.goo.gl/HkbbrxyjhjJu2eGn9",
  phone: "+91 98372 18345",
  phonePlain: "+919837218345",
  email: "info@codewareit.in",
  website: "codewareit.in",
  hours: "Mon–Sun: 7:00 AM – 10:00 PM",
};

// LocalBusiness + EducationalOrganization JSON-LD
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  name: NAP.name,
  description:
    "Best IT training institute in Dehradun offering MERN Stack, Python, Java, Full Stack, React.js, Next.js, DSA, and school coding courses for ICSE & CBSE students.",
  url: "https://www.codewareit.in",
  telephone: NAP.phonePlain,
  email: NAP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 2, Shakti Vihar, Suman Nagar, Adhoiwala",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 30.3165, longitude: 78.0322 },
  openingHours: "Mo-Su 07:00-22:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "40",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/codewareit.in",
    "https://in.linkedin.com/company/codeware-it-dehradun",
  ],
};

const quickLinks = [
  { label: "MERN Stack Course", href: "/courses/fullstack-course-dehradun" },
  { label: "React.js Course", href: "/courses/react-js-course-dehradun" },
  { label: "Python Course", href: "/courses/cbse-class-11-python-dehradun" },
  { label: "Java Course", href: "/courses/icse-class-9-java-dehradun" },
  { label: "Full Stack Course", href: "/courses/fullstack-course-dehradun" },
  { label: "Frontend Dev", href: "/courses/frontend-course-dehradun" },
  { label: "Backend Dev", href: "/courses/backend-course-dehradun" },
  { label: "Next.js Course", href: "/courses/nextjs-course-dehradun" },
];

export default function NewFooter() {
  return (
    <footer className="bg-[#2C2C2A] text-white" role="contentinfo" itemScope itemType="https://schema.org/LocalBusiness">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* NAP column */}
        <div className="lg:col-span-2">
          <h2 className="font-black text-xl mb-2" itemProp="name">{NAP.name}</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-4 max-w-xs">
            Dehradun&apos;s most trusted IT training institute. Real projects, small batches, guaranteed
            placement support.
          </p>

          {/* Google Rating */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 py-2.5 mb-5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold">5.0</span>
            <span className="text-white/50 text-xs">· 40+ Google Reviews</span>
          </div>

          {/* Contact info */}
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 text-white/70">
              <span className="mt-0.5">📍</span>
              <span itemProp="address">{NAP.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href={`tel:${NAP.phonePlain}`} className="text-white/70 hover:text-white transition-colors" itemProp="telephone">
                {NAP.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href={`mailto:${NAP.email}`} className="text-white/70 hover:text-white transition-colors" itemProp="email">
                {NAP.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <span>🕐</span>
              <span>{NAP.hours}</span>
            </div>
          </div>

          {/* Google Maps link */}
          <a
            href={NAP.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-xs font-semibold text-white/50 hover:text-white border border-white/15 hover:border-white/30 px-3 py-2 rounded-lg transition-colors"
          >
            🗺️ View on Google Maps
          </a>
        </div>

        {/* Quick links */}
        <nav aria-labelledby="footer-courses-heading">
          <h3 id="footer-courses-heading" className="font-bold text-base mb-4 text-white">Courses</h3>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect column */}
        <div>
          <h3 className="font-bold text-base mb-4 text-white">Connect</h3>
          <div className="space-y-3 mb-6">
            <a
              href="https://wa.me/919837218345?text=Hi%2C%20I%20want%20to%20know%20about%20courses%20at%20CodewareIT"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              💬 WhatsApp Us
            </a>
            <a
              href="https://www.instagram.com/codewareit.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              📸 Instagram
            </a>
            <a
              href="https://in.linkedin.com/company/codeware-it-dehradun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              💼 LinkedIn
            </a>
          </div>

          {/* Apply CTA */}
          <a
            href="#apply-form"
            className="w-full inline-block text-center font-bold text-sm py-3 rounded-[10px] text-white transition-all hover:opacity-90"
            style={{ background: "#E8593C" }}
          >
            Apply for Free Counselling →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} {NAP.name}. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <span itemProp="url">{NAP.website}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
