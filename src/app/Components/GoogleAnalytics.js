"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { GA_ID, pageview } from "@/app/lib/gtag";

// NOTE: The actual <Script> tags are in layout.js (server component).
// This client component handles SPA route-change page view firing only.
export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && typeof window !== "undefined" && window.gtag) {
      pageview(pathname);
    }
  }, [pathname]);

  // No scripts here — they live in layout.js to avoid duplicate loading
  return null;
}
