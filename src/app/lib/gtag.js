// ============================================================
// CODEWAREIT — Google Analytics 4 + Google Ads Tracking
//   GA4 ID:  G-CHHEXD2NKX
//   Ads ID:  AW-16549958925
// ============================================================
// HOW TO ADD CONVERSION LABELS:
//   1. Google Ads → Goals → Conversions → + New Conversion Action → Website
//   2. Create each action below, choose "Page load" or "Click" as type
//   3. Copy the label (part after the slash) from the tag snippet
//   4. Paste into .env.local:  NEXT_PUBLIC_CONV_LEAD=AbCd1234_xxxx
//   5. Rebuild / redeploy
// ============================================================

export const GA_ID             = "G-CHHEXD2NKX";
export const GA_MEASUREMENT_ID = "G-CHHEXD2NKX";   // alias kept for CourseLandingPage
export const AW_ID             = "AW-16549958925";
export const GOOGLE_ADS_ID     = "AW-16549958925";  // alias kept for CourseLandingPage

// ── Conversion send_to values (AW-ID/label) ──────────────
// Legacy aliases used by CourseLandingPage — kept working
export const CONVERSION_FORM_START  = process.env.NEXT_PUBLIC_CONV_FORM_START  || AW_ID;
export const CONVERSION_WHATSAPP    = process.env.NEXT_PUBLIC_CONV_WA          || AW_ID;
export const CONVERSION_DEMO_SUBMIT = process.env.NEXT_PUBLIC_CONV_DEMO        || AW_ID;

// New granular labels for each conversion action
export const CONV = {
  LEAD_FORM_SUBMIT: process.env.NEXT_PUBLIC_CONV_LEAD    || "",
  WHATSAPP_CLICK:   process.env.NEXT_PUBLIC_CONV_WA      || "",
  COURSE_ENQUIRY:   process.env.NEXT_PUBLIC_CONV_ENQUIRY || "",
  INTERNSHIP_APPLY: process.env.NEXT_PUBLIC_CONV_INTERN  || "",
  PHONE_CLICK:      process.env.NEXT_PUBLIC_CONV_PHONE   || "",
  THANK_YOU_PAGE:   process.env.NEXT_PUBLIC_CONV_THANKS  || "",
};

// ─── Helpers ─────────────────────────────────────────────

const gtag = (...args) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag(...args);
};

const fbq = (event, params = {}) => {
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", event, params);
};

// ─── Page View (GA4) ─────────────────────────────────────
export const pageview = (url) => {
  gtag("config", GA_ID, { page_path: url });
};

// ─── Generic GA4 Event ───────────────────────────────────
export const gtagEvent = ({ action, category, label, value }) => {
  gtag("event", action, { event_category: category, event_label: label, value });
};
export const event1 = gtagEvent; // backward compat alias

// ─── Google Ads Conversion ───────────────────────────────
export const adsConversion = (sendTo, value = 0, currency = "INR") => {
  if (!sendTo) return;
  gtag("event", "conversion", {
    send_to: sendTo.includes("/") ? sendTo : `${AW_ID}/${sendTo}`,
    value, currency,
    transaction_id: Date.now().toString(),
  });
};

// ─── Remarketing pixel ───────────────────────────────────
export const adsRemark = (params = {}) => {
  gtag("event", "page_view", { send_to: AW_ID, ...params });
};

// ════════════════════════════════════════════════════════
// NAMED HELPERS — use these in your components
// ════════════════════════════════════════════════════════

/** Form focus / first interaction — "Click" conversion in Google Ads */
export const trackFormStart = ({ course = "", source = "" } = {}) => {
  gtag("event", "form_start", { event_category: "leads", event_label: source || "demo_form", course_name: course });
  gtag("event", "conversion", { send_to: CONVERSION_FORM_START, event_label: course });
};

/** WhatsApp button clicked */
export const trackWhatsApp = ({ label = "whatsapp_float", course = "" } = {}) => {
  gtag("event", "whatsapp_click", { event_category: "engagement", event_label: label, course_name: course });
  gtag("event", "conversion", { send_to: CONVERSION_WHATSAPP, event_label: label });
  fbq("Contact", { method: "WhatsApp", content_name: course });
};
export const trackWhatsAppClick = trackWhatsApp; // alias

/** Demo registration form submitted */
export const trackDemoRegister = ({ course = "", source = "" } = {}) => {
  gtag("event", "generate_lead", { event_category: "leads", event_label: "demo_submitted", course_name: course, form_source: source });
  gtag("event", "conversion", { send_to: CONVERSION_DEMO_SUBMIT, event_label: course });
  fbq("Lead", { content_name: course });
};

/** Course page viewed (builds remarketing audience) */
export const trackCourseView = ({ course = "", category = "" } = {}) => {
  gtag("event", "view_item", { event_category: "courses", event_label: course, item_category: category, course_name: course });
};

/** Phone number clicked */
export const trackPhoneCall = ({ label = "phone_click" } = {}) => {
  gtag("event", "phone_call_click", { event_category: "engagement", event_label: label });
  adsConversion(CONV.PHONE_CLICK);
};
export const trackPhoneClick = trackPhoneCall; // alias

/** Contact / enquiry form submitted */
export const trackLeadFormSubmit = (courseName = "") => {
  gtag("event", "generate_lead", { event_category: "leads", event_label: courseName });
  adsConversion(CONV.LEAD_FORM_SUBMIT);
  fbq("Lead", { content_name: courseName });
};

/** "Enquire Now" clicked on course card */
export const trackCourseEnquiry = (courseName = "") => {
  gtag("event", "course_enquiry", { event_category: "leads", event_label: courseName });
  adsConversion(CONV.COURSE_ENQUIRY);
  fbq("InitiateCheckout", { content_name: courseName });
};

/** Internship application submitted */
export const trackInternshipApply = () => {
  gtag("event", "internship_apply", { event_category: "leads", event_label: "Internship" });
  adsConversion(CONV.INTERNSHIP_APPLY);
  fbq("CompleteRegistration");
};

/** Thank You page load = confirmed lead */
export const trackThankYou = () => {
  gtag("event", "thank_you_view", { event_category: "leads", event_label: "confirmed" });
  adsConversion(CONV.THANK_YOU_PAGE, 1);
  fbq("Purchase", { value: 1, currency: "INR" });
};
