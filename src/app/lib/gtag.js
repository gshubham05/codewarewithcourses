// ─── Google Analytics 4 ──────────────────────────
export const GA_MEASUREMENT_ID = "G-CHHEXD2NKX";
export const GA_ID = "G-CHHEXD2NKX";

// ─── Google Ads ──────────────────────────────────
export const GOOGLE_ADS_ID = "AW-16549958925";

// Conversion labels — from Google Ads → Goals → Conversions
// To get the /label suffix: Google Ads → Goals → Conversions → click a conversion → Tag setup → "Use Google Tag Manager" → copy the send_to value (e.g. "AW-16549958925/AbCdEfGhIj")
// ⚠️  Replace the placeholder values below with real /label suffixes from your Google Ads account
export const CONVERSION_FORM_START   = "AW-16549958925";   // ⚠️  update: "AW-16549958925/XXXXXXXX"
export const CONVERSION_WHATSAPP     = "AW-16549958925";   // ⚠️  update: "AW-16549958925/XXXXXXXX"
export const CONVERSION_DEMO_SUBMIT  = "AW-16549958925";   // ⚠️  update: "AW-16549958925/XXXXXXXX"
export const CONVERSION_THANK_YOU    = "AW-16549958925";   // ⚠️  update: "AW-16549958925/XXXXXXXX"

// ─── Page View (GA4) ─────────────────────────────
export const pageview = (url) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// ─── Generic GA4 Event ───────────────────────────
export const event1 = ({ action, category, label, value }) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// ─── form_start conversion (fires on form click / open) ──
// This matches the "Click" type conversion you set up in Google Ads
export const trackFormStart = ({ course = "", source = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  // GA4 event
  window.gtag("event", "form_start", {
    event_category: "leads",
    event_label: source || "demo_form",
    course_name: course,
  });

  // Google Ads conversion (send_to = your Ads ID)
  window.gtag("event", "conversion", {
    send_to: CONVERSION_FORM_START,
    event_category: "leads",
    event_label: course,
  });
};

// ─── WhatsApp Click (GA4 + Google Ads) ───────────
export const trackWhatsApp = ({ label = "whatsapp_float", course = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  // GA4
  window.gtag("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: label,
    course_name: course,
  });

  // Google Ads conversion
  window.gtag("event", "conversion", {
    send_to: CONVERSION_WHATSAPP,
    event_category: "engagement",
    event_label: label,
  });
};

// ─── Demo Form Submitted (GA4 + Google Ads) ───────
export const trackDemoRegister = ({ course = "", source = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  // GA4
  window.gtag("event", "generate_lead", {
    event_category: "leads",
    event_label: "demo_submitted",
    course_name: course,
    form_source: source,
  });

  // Google Ads
  window.gtag("event", "conversion", {
    send_to: CONVERSION_DEMO_SUBMIT,
    event_category: "leads",
    event_label: course,
  });
};

// ─── Course Page View (remarketing audience) ──────
export const trackCourseView = ({ course = "", category = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "view_item", {
    event_category: "courses",
    event_label: course,
    item_category: category,
    course_name: course,
  });
};

// ─── Phone Call Click ─────────────────────────────
export const trackPhoneCall = ({ label = "phone_click" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "phone_call_click", {
    event_category: "engagement",
    event_label: label,
  });
};

// ─── Thank You Page View (GA4 + Google Ads) ───────
// Fires when a user lands on the /thank-you page after submitting enquiry
export const trackThankYou = ({ course = "", source = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  // GA4 — standard "purchase" equivalent for lead-gen funnels
  window.gtag("event", "thank_you_page_view", {
    event_category: "leads",
    event_label: "enquiry_complete",
    course_name: course,
    form_source: source,
  });

  // Google Ads — counts as a completed conversion
  window.gtag("event", "conversion", {
    send_to: CONVERSION_THANK_YOU,
    event_category: "leads",
    event_label: "thank_you",
  });
};
