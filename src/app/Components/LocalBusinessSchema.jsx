/**
 * LocalBusinessSchema — JSON-LD for Local SEO
 * NAP matches Google My Business exactly: House No. 2, Shakti Vihar, Suman Nagar, Adhoiwala, Dehradun
 */
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "CodewareIT Pvt Ltd",
    alternateName: "Codeware IT",
    url: "https://www.codewareit.in",
    logo: "https://www.codewareit.in/logo.png",
    image: "https://www.codewareit.in/og-image.jpg",
    description:
      "Best Java, Python, MERN Stack & Full Stack training institute in Dehradun. ICSE & CBSE coding coaching for Class 9–12, plus job-ready Full Stack courses with internship support.",
    telephone: "+91-9837218345",
    email: "info@codewareit.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "House No. 2, Shakti Vihar, Suman Nagar, Adhoiwala",
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.3523",
      longitude: "78.0536",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "07:00",
        closes: "22:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    hasMap: "https://maps.app.goo.gl/xu8jqx467KMPTKzY7",
    sameAs: [
      "https://www.instagram.com/codewareit.in",
      "https://www.facebook.com/share/1FKkhHpFEx",
      "https://www.linkedin.com/company/codeware-it-dehradun",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "36",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Programming Courses in Dehradun",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "ICSE Class 9 Java" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "ICSE Class 10 Java" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "CBSE Class 11 Python" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "CBSE Class 12 Python" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "BCA MCA BTech Programming" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Full Stack Web Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "MERN Stack Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "React JS Course" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Next.js Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Backend Node.js Development" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}
