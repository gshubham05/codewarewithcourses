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

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: new URL("https://www.codewareit.in"),
  title: {
    default:
      "Dehradun's #1 Coding Institute | Java, Python, MERN Stack | Codeware IT Pvt Ltd",
    template: "%s | Codeware IT Pvt Ltd",
  },
  description:
    "Dehradun's #1 coding institute for Java, Python, MERN Stack, React JS, Node.js & full stack courses. Real projects, placement support & FREE demo class. Codeware IT Pvt Ltd, Karanpur & Rajpur Road, Dehradun.",
  keywords: [
    "best java institute in dehradun",
    "best python institute in dehradun",
    "mern stack course dehradun",
    "react js course dehradun",
    "nodejs course dehradun",
    "full stack course dehradun",
    "coding institute dehradun",
    "coding classes dehradun",
    "IT training institute dehradun",
    "best computer institute dehradun",
    "java course dehradun",
    "python training dehradun",
    "web development course dehradun",
    "ICSE class 9 java dehradun",
    "ICSE class 10 java dehradun",
    "CBSE class 11 python dehradun",
    "CBSE class 12 python dehradun",
  ],
  openGraph: {
    title:
      "Dehradun's #1 Coding Institute | Java, Python, MERN Stack | Codeware IT",
    description:
      "Top coding institute in Dehradun offering Java, Python, MERN Stack, React JS, Node.js & full stack courses with real projects and placement support.",
    url: "https://www.codewareit.in",
    siteName: "Codeware IT Pvt Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dehradun's #1 Coding Institute — Codeware IT",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dehradun's #1 Coding Institute | Codeware IT",
    description:
      "Join Codeware IT Pvt Ltd for Java, Python, MERN Stack, React JS, Node.js & full stack courses in Dehradun.",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Preload hero video for faster LCP */}
        <link
          rel="preload"
          href="/144590-785095798.mp4"
          as="video"
          type="video/mp4"
        />
        {/* Resource hints for third-party scripts */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* ✅ Local Business JSON-LD Schema */}
        <LocalBusinessSchema />


        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KK2N8M9G');
  `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM — Body noscript (immediately after <body>) */}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK2N8M9G"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

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
            gtag('config', 'AW-16549958925', {
              allow_enhanced_conversions: true,
            });
          `}
        </Script>

        {/* ✅ GTM — Remarketing tag (all pages via GTM container above)
            Inside GTM console also add:
            1) Google Ads Remarketing tag → Trigger: All Pages
            2) Google Ads Conversion Tracking tags → Triggers: form_submit, whatsapp_click, phone_click, thank_you_page_view
            3) GA4 tag linked to AW-16549958925
            GTM dataLayer events fired by this app:
            - course_page_view, form_start, demo_form_submit,
              whatsapp_click, phone_click, thank_you_page_view
        */}

        {/* ✅ Global gtag helper for call tracking */}
        <Script id="gtag-helpers" strategy="afterInteractive">
          {`
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === 'string') window.location = url;
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-16549958925',
                'event_callback': callback,
                'event_timeout': 2000,
              });
              return false;
            }
            window.gtagSendEvent = gtagSendEvent;

            // Enhanced Conversions — auto-collect hashed user data from forms
            gtag('set', 'user_data', {});
          `}
        </Script>
      </body>
    </html>
  );
}
