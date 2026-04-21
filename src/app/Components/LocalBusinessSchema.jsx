/**
 * LocalBusinessSchema — JSON-LD for Local SEO
 * Place in layout.js or homepage for Google Maps & local pack ranking.
 */
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "Codeware IT Pvt Ltd",
    alternateName: "CodewareIT",
    url: "https://www.codewareit.in",
    logo: "https://www.codewareit.in/logo.png",
    image: "https://www.codewareit.in/og-image.jpg",
    description:
      "Best Java, Python, C Language, MERN Stack & AI training institute in Dehradun. ICSE, CBSE coaching for Class 9-12, plus job-ready full stack courses with internships.",
    telephone: "+91-9837218345",
    email: "info@codewareit.in", // UPDATE IF DIFFERENT
    address: {
      "@type": "PostalAddress",
      streetAddress: "Your Street Address, Landmark", // UPDATE THIS
      addressLocality: "Dehradun",
      addressRegion: "Uttarakhand",
      postalCode: "248001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "30.3165", // UPDATE with exact lat
      longitude: "78.0322", // UPDATE with exact lng
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Bank Transfer",
    hasMap: "https://maps.google.com/?q=Codeware+IT+Dehradun", // UPDATE with Maps link
    sameAs: [
      "https://www.instagram.com/codewareit",
      "https://www.facebook.com/codewareit",
      "https://www.youtube.com/@codewareit",
      "https://www.linkedin.com/company/codewareit",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150", // UPDATE with real count
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
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Full Stack Web Development" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "React JS Course" } },
        { "@type": "Offer", itemOffered: { "@type": "Course", name: "Backend Development" } },
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
