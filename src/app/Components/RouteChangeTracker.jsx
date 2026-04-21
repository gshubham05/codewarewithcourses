"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import * as fbq from "../lib/fpixel";

export default function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    fbq.pageview();
  }, [pathname]);

  return null;
}
