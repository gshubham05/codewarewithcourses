// ── SERVER COMPONENT — metadata lives here, no hydration issues ──
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Best Computer Coding Institute in Dehradun | CodewareIT",
  description:
    "Learn about CodewareIT — the best computer coding institute in Dehradun. Founded by Shubham Goyal, we teach Java (ICSE Class 9 & 10), Python (CBSE Class 11 & 12), MERN Stack, React.js, Next.js, Node.js with 100% practical training and live GitHub projects.",
  keywords: [
    "best computer coding institute in dehradun",
    "best computer institute in dehradun",
    "coding classes in dehradun",
    "java classes dehradun",
    "python classes dehradun",
    "mern stack dehradun",
    "shubham goyal codewareit",
    "icse java class 9 10 dehradun",
    "cbse python class 11 12 dehradun",
    "btech bca programming classes dehradun",
  ],
  alternates: {
    canonical: "https://www.codewareit.in/about-best-computer-coding-institute-in-dehradun",
  },
  openGraph: {
    title: "About Best Computer Coding Institute in Dehradun | CodewareIT",
    description:
      "CodewareIT — where school students go from fearing Java to scoring maximum marks, and college students build live MERN projects on GitHub.",
    url: "https://www.codewareit.in/about-best-computer-coding-institute-in-dehradun",
    siteName: "CodewareIT Pvt Ltd",
    images: [{ url: "/codewarelogo.png", width: 1200, height: 630, alt: "Best Computer Coding Institute in Dehradun" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Best Computer Coding Institute in Dehradun | CodewareIT",
    description: "Practical coding classes for school & college students in Dehradun — Java, Python, MERN, React, Next.js.",
    images: ["/codewarelogo.png"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
