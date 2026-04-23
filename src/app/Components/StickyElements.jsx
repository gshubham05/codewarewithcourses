"use client";

import { useEffect, useState } from "react";

function fireGA4(eventName, params = {}) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

const WA_URL ="https://wa.me/919837218345?text=Hi%2C%20I%20want%20to%20know%20about%20courses%20at%20CodewareIT";

export default function StickyElements({ onOpenForm }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleWhatsApp = () => {
    alert("hello");
    fireGA4("whatsapp_click", { location: "floating_button" });
    window.open(WA_URL, "_blank");
  };

  return (
    <>
      {/* ── Sticky Header on scroll ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#2C2C2A]/10 shadow-sm transition-all duration-300 ${
          scrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
        aria-hidden={!scrolled}
      >
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <span className="font-black text-[#2C2C2A] text-base tracking-tight">
            CodewareIT
          </span>
          <div className="flex items-center gap-2">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                fireGA4("whatsapp_click", { location: "sticky_header" })
              }
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] border border-[#25D366]/30 px-3 py-1.5 rounded-full hover:bg-[#25D366]/10 transition-colors"
            >
              💬 WhatsApp
            </a>
            <button
              onClick={() => {
                fireGA4("cta_click", { section: "sticky_header" });
                if (onOpenForm) onOpenForm();
                else {
                  const el = document.getElementById("apply-form");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-white text-xs font-bold px-4 py-2 rounded-[8px] transition-all hover:opacity-90"
              style={{ background: "#E8593C" }}
            >
              Free Counselling →
            </button>
          </div>
        </div>
      </div>
      {/* ── WhatsApp Floating Button ── */}
      /* The commented out code block you provided is a button component for a
      WhatsApp floating button. It includes an SVG icon for the WhatsApp logo
      inside the button. This button is designed to be fixed at the bottom right
      corner of the screen and allows users to click on it to initiate a chat on
      WhatsApp. */
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-24 sm:bottom-8 right-4 sm:right-6 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
        style={{
          background: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.107 1.522 5.83L.057 23.942l6.27-1.447A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.679-.491-5.22-1.351l-.374-.222-3.88.894.92-3.768-.243-.387A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </button>
      {/* ── Mobile Sticky Bottom Bar ── */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#2C2C2A]/10 shadow-lg px-4 py-3 flex gap-3">
        <a
          href="tel:+919837218345"
          onClick={() =>
            fireGA4("call_click", { location: "mobile_bottom_bar" })
          }
          className="flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-[10px] border-2 border-[#2C2C2A]/15 text-[#2C2C2A]"
        >
          📞 Call
        </a>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            fireGA4("whatsapp_click", { location: "mobile_bottom_bar" })
          }
          className="flex-1 flex items-center justify-center gap-2 font-bold text-sm py-3 rounded-[10px] text-white"
          style={{ background: "#25D366" }}
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}
