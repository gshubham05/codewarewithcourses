import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Whatsappicon from "./Components/Whatsappicon";
import MetaPixel from "./Components/MetaPixel";
import RouteChangeTracker from "./Components/RouteChangeTracker";
import GoogleAnalytics from "./Components/GoogleAnalytics";
import PopupBanner from "./Components/PopupBanner";
import LocalBusinessSchema from "./Components/LocalBusinessSchema";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.codewareit.in"),

  title: {
    default: "Best Java, Python, C Language & MERN Stack Institute in Dehradun | Codeware IT Pvt Ltd",
    template: "%s | Codeware IT Pvt Ltd",
  },

  description:
    "Looking for the best Java institute in Dehradun or best Python institute in Dehradun? Join Codeware IT Pvt Ltd for MERN Stack, C language, AI training & IT internships in Dehradun.",

  keywords: [
    "best java institute in dehradun",
    "best python institute in dehradun",
    "best c language institute in dehradun",
    "mern stack institute in dehradun",
    "internship in IT in dehradun",
    "learn AI in dehradun",
    "IT training institute in dehradun",
    "coding classes in dehradun",
    "software development internship dehradun",
    "best computer institute in dehradun",
    "ICSE class 9 java dehradun",
    "ICSE class 10 java dehradun",
    "CBSE class 11 python dehradun",
    "CBSE class 12 python dehradun",
  ],

  openGraph: {
    title: "Best Java, Python, C & AI Institute in Dehradun | Codeware IT",
    description:
      "Top coding institute in Dehradun offering Java, Python, C language, MERN Stack & AI courses with IT internships.",
    url: "https://www.codewareit.in",
    siteName: "Codeware IT Pvt Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Programming Institute in Dehradun",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Coding & AI Institute in Dehradun",
    description:
      "Join Codeware IT Pvt Ltd for Java, Python, C language, AI & IT internships in Dehradun.",
    images: ["/og-image.jpg"],
    creator: "@codewareit",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  // ✅ FIXED: Real Google Search Console verification token
  verification: {
    google: "u0dg_3sL_qMJR07RLlLDUPvFCQiE0jBTrn-lPW0mF1A",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#040A26" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* ✅ Local Business JSON-LD Schema for local SEO */}
        <LocalBusinessSchema />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MetaPixel />
        <RouteChangeTracker />
        <Navbar />

        {/* ✅ GA4 + Google Ads unified tracking */}
        <GoogleAnalytics />

        <PopupBanner />
        {children}
        <Whatsappicon />
        <Footer />

        {/* ✅ Google Ads Tag: AW-16549958925 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16549958925"
          strategy="afterInteractive"
        />

        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());

            // GA4
            gtag('config', 'G-CHHEXD2NKX', {
              page_path: window.location.pathname,
              send_page_view: true,
            });

            // Google Ads
            gtag('config', 'AW-16549958925');
          `}
        </Script>

        {/* ✅ Google Ads: form_start conversion event helper (Click type) */}
        <Script id="gtag-form-start-helper" strategy="afterInteractive">
          {`
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') {
                  window.location = url;
                }
              };
              gtag('event', 'form_start', {
                'send_to': 'AW-16549958925',
                'event_callback': callback,
                'event_timeout': 2000,
              });
              return false;
            }
            // Make available globally
            window.gtagSendEvent = gtagSendEvent;
          `}
        </Script>
      </body>
    </html>
  );
}
