/**
 * LocalBusinessSchema — JSON-LD for Local SEO
 * Covers: LocalBusiness, Course (6 main courses), FAQPage, Review, AggregateRating
 * Address: 6/6 Karanpur & Rajpur Road, Dehradun, Uttarakhand 248001
 */
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "CodewareIT Pvt Ltd",
    alternateName: ["Codeware IT", "Codeware IT Dehradun"],
    url: "https://www.codewareit.in",
    logo: "https://www.codewareit.in/logo.png",
    image: "https://www.codewareit.in/og-image.jpg",
    description:
      "Dehradun's #1 coding institute offering Java, Python, MERN Stack, React JS, Node.js & Full Stack developer courses with real projects, small batches and placement support.",
    telephone: "+91-9837218345",
    email: "info@codewareit.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6/6 Karanpur & Rajpur Road",
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
      ratingValue: "4.7",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Ankit Rawat" },
        reviewBody: "Best Java course in Dehradun. Got placed in TCS after completing the course here. Small batch, personal attention — highly recommend Codeware IT!",
        datePublished: "2024-11-15",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Priya Singh" },
        reviewBody: "Joined the MERN Stack course and within 5 months I was freelancing. Codeware IT is truly Dehradun's #1 coding institute!",
        datePublished: "2024-12-02",
      },
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Person", name: "Vikram Negi" },
        reviewBody: "Python course was amazing. The instructor covered everything from basics to Django. Best coaching institute in Dehradun for Python!",
        datePublished: "2025-01-20",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coding Courses in Dehradun",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Best Java Course in Dehradun",
            description: "Learn Java from basics to Spring Boot. OOP, data structures, JDBC & real projects. Job placement support included.",
            provider: { "@type": "Organization", name: "CodewareIT Pvt Ltd", sameAs: "https://www.codewareit.in" },
            url: "https://www.codewareit.in/java-course-dehradun",
            courseMode: ["offline", "online"],
            educationalLevel: "Beginner to Advanced",
            inLanguage: "hi-IN, en-IN",
            offers: { "@type": "Offer", category: "Paid", priceCurrency: "INR", availability: "https://schema.org/InStock" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Best Python Course in Dehradun",
            description: "Python training with Django, data science & automation. Real-world projects and placement support at Codeware IT.",
            provider: { "@type": "Organization", name: "CodewareIT Pvt Ltd", sameAs: "https://www.codewareit.in" },
            url: "https://www.codewareit.in/python-course-dehradun",
            courseMode: ["offline", "online"],
            educationalLevel: "Beginner to Advanced",
            inLanguage: "hi-IN, en-IN",
            offers: { "@type": "Offer", category: "Paid", priceCurrency: "INR", availability: "https://schema.org/InStock" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Best MERN Stack Course in Dehradun",
            description: "MongoDB, Express, React & Node.js — build full-stack web apps from scratch. Job placement support at Codeware IT Dehradun.",
            provider: { "@type": "Organization", name: "CodewareIT Pvt Ltd", sameAs: "https://www.codewareit.in" },
            url: "https://www.codewareit.in/mern-stack-course-dehradun",
            courseMode: ["offline", "online"],
            educationalLevel: "Intermediate",
            inLanguage: "hi-IN, en-IN",
            offers: { "@type": "Offer", category: "Paid", priceCurrency: "INR", availability: "https://schema.org/InStock" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Best React JS Course in Dehradun",
            description: "Learn React JS with hooks, Redux, React Router and build real apps. Job-ready training at Codeware IT Dehradun.",
            provider: { "@type": "Organization", name: "CodewareIT Pvt Ltd", sameAs: "https://www.codewareit.in" },
            url: "https://www.codewareit.in/react-js-course-dehradun",
            courseMode: ["offline", "online"],
            educationalLevel: "Intermediate",
            inLanguage: "hi-IN, en-IN",
            offers: { "@type": "Offer", category: "Paid", priceCurrency: "INR", availability: "https://schema.org/InStock" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Best Node.js Course in Dehradun",
            description: "Backend development with Node.js & Express. Build scalable REST APIs, real-time apps & deploy to cloud. Placement support included.",
            provider: { "@type": "Organization", name: "CodewareIT Pvt Ltd", sameAs: "https://www.codewareit.in" },
            url: "https://www.codewareit.in/nodejs-course-dehradun",
            courseMode: ["offline", "online"],
            educationalLevel: "Intermediate",
            inLanguage: "hi-IN, en-IN",
            offers: { "@type": "Offer", category: "Paid", priceCurrency: "INR", availability: "https://schema.org/InStock" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Best Full Stack Developer Course in Dehradun",
            description: "The most comprehensive full stack course in Dehradun. React + Node + MongoDB + deployment. 6 months, real projects, guaranteed placement support.",
            provider: { "@type": "Organization", name: "CodewareIT Pvt Ltd", sameAs: "https://www.codewareit.in" },
            url: "https://www.codewareit.in/full-stack-course-dehradun",
            courseMode: ["offline", "online"],
            educationalLevel: "Beginner to Advanced",
            inLanguage: "hi-IN, en-IN",
            offers: { "@type": "Offer", category: "Paid", priceCurrency: "INR", availability: "https://schema.org/InStock" },
          },
        },
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
