"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_ID, AW_ID, pageview, adsRemark } from "@/app/lib/gtag";

// ─────────────────────────────────────────────────────────
// Fires on every SPA route change:
//   • GA4 pageview
//   • Google Ads remarketing pixel (tags every visitor)
//   • Audience segmentation (course pages, blog readers)
//   • Thank-you confirmation
// ─────────────────────────────────────────────────────────

export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || typeof window === "undefined" || !window.gtag) return;

    // 1. GA4 pageview
    pageview(pathname);

    // 2. Remarketing — tag every visitor for retargeting lists
    adsRemark({ page_location: window.location.href });

    // 3. Course page visitors → "Course Interested" remarketing list
    if (pathname.startsWith("/Courses") || pathname.startsWith("/courses")) {
      window.gtag("event", "course_page_view", {
        send_to: AW_ID,
        page_path: pathname,
      });
    }

    // 4. Blog readers → "Warm Audience" remarketing list
    if (pathname.startsWith("/blog")) {
      window.gtag("event", "blog_reader", {
        send_to: AW_ID,
        page_path: pathname,
      });
    }

    // 5. Thank-you = confirmed conversion
    if (pathname === "/thank-you") {
      import("@/app/lib/gtag").then(({ trackThankYou }) => trackThankYou());
    }
  }, [pathname]);

  return null;
}
