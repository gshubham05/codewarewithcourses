// ─── Google Analytics 4 ──────────────────────────
export const GA_MEASUREMENT_ID = "G-CHHEXD2NKX";
export const GA_ID = "G-CHHEXD2NKX";

// ─── Google Ads ──────────────────────────────────
export const GOOGLE_ADS_ID = "AW-16549958925";

// ─── Conversion Labels ───────────────────────────
// HOW TO GET YOUR LABELS:
// 1. Google Ads → Goals → Conversions → click a conversion
// 2. Tag setup → "Use Google Tag Manager" OR "Use Google Tag"
// 3. Copy the send_to value: "AW-16549958925/AbCdEfGhIjK"
// 4. Replace the XXXXXXXX below with the label portion only
//
// ⚠️  Each conversion action MUST have its own unique label
export const CONVERSION_FORM_START   = "AW-16549958925/REPLACE_FORM_START_LABEL";
export const CONVERSION_WHATSAPP     = "AW-16549958925/REPLACE_WHATSAPP_LABEL";
export const CONVERSION_DEMO_SUBMIT  = "AW-16549958925/REPLACE_DEMO_SUBMIT_LABEL";
export const CONVERSION_THANK_YOU    = "AW-16549958925/REPLACE_THANK_YOU_LABEL";
export const CONVERSION_PHONE_CALL   = "AW-16549958925/REPLACE_PHONE_CALL_LABEL";

// ─── Page View (GA4) ─────────────────────────────
export const pageview = (url) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url });
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

// ─── GTM dataLayer helper ────────────────────────
const pushGTM = (eventName, params = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
};

// ─── form_start (fires on first form interaction) ─
export const trackFormStart = ({ course = "", source = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  pushGTM("form_start", { course_name: course, form_source: source });

  window.gtag("event", "form_start", {
    event_category: "leads",
    event_label: source || "demo_form",
    course_name: course,
  });

  window.gtag("event", "conversion", {
    send_to: CONVERSION_FORM_START,
    event_category: "leads",
    event_label: course,
  });
};

// ─── WhatsApp Click ───────────────────────────────
export const trackWhatsApp = ({ label = "whatsapp_float", course = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  pushGTM("whatsapp_click", { label, course_name: course });

  window.gtag("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: label,
    course_name: course,
  });

  window.gtag("event", "conversion", {
    send_to: CONVERSION_WHATSAPP,
    event_category: "engagement",
    event_label: label,
  });
};

// ─── Demo Form Submitted ──────────────────────────
export const trackDemoRegister = ({ course = "", source = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  pushGTM("demo_form_submit", { course_name: course, form_source: source });

  window.gtag("event", "generate_lead", {
    event_category: "leads",
    event_label: "demo_submitted",
    course_name: course,
    form_source: source,
  });

  window.gtag("event", "conversion", {
    send_to: CONVERSION_DEMO_SUBMIT,
    event_category: "leads",
    event_label: course,
  });
};

// ─── Course Page View (for remarketing audience) ──
export const trackCourseView = ({ course = "", category = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  pushGTM("course_page_view", { course_name: course, course_category: category });

  window.gtag("event", "view_item", {
    event_category: "courses",
    event_label: course,
    item_category: category,
    course_name: course,
  });
};

// ─── Phone Call Click ─────────────────────────────
export const trackPhoneCall = ({ label = "phone_click", course = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  pushGTM("phone_click", { label, course_name: course });

  window.gtag("event", "phone_call_click", {
    event_category: "engagement",
    event_label: label,
    course_name: course,
  });

  window.gtag("event", "conversion", {
    send_to: CONVERSION_PHONE_CALL,
    event_category: "engagement",
    event_label: label,
  });
};

// ─── Thank You Page View ──────────────────────────
// Fires when user lands on /thank-you — this is the URL destination conversion
// that Google Ads tracks for Quality Score
export const trackThankYou = ({ course = "", source = "" } = {}) => {
  if (typeof window === "undefined" || !window.gtag) return;

  pushGTM("thank_you_page_view", { course_name: course, form_source: source });

  window.gtag("event", "thank_you_page_view", {
    event_category: "leads",
    event_label: "enquiry_complete",
    course_name: course,
    form_source: source,
  });

  // ✅ This is your main conversion — set Google Ads Goal to track /thank-you URL
  window.gtag("event", "conversion", {
    send_to: CONVERSION_THANK_YOU,
    event_category: "leads",
    event_label: "thank_you",
  });
};
