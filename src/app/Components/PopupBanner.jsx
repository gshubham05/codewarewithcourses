"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function PopupBanner() {
  const [popup, setPopup] = useState(null);
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef();

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("cw-popup-seen")) return;

    fetch("/api/popup")
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (data?.enabled && data?.imageUrl) {
          setPopup(data);
          setTimeout(() => setVisible(true), 1500);
        }
      })
      .catch(() => {});
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("cw-popup-seen", "1");
    setTimeout(() => setPopup(null), 350);
  };

  useEffect(() => {
    if (!visible) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!popup) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && close()}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      style={{
        backgroundColor: visible ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(4px)" : "none",
        transition: "background-color 0.35s, backdrop-filter 0.35s",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg"
        style={{
          transform: visible ? "scale(1) translateY(0)" : "scale(0.92) translateY(24px)",
          opacity: visible ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(.34,1.56,.64,1), opacity 0.35s",
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close popup"
          className="absolute -top-3 -right-3 z-20 w-9 h-9 bg-white text-gray-700 hover:bg-red-500 hover:text-white rounded-full shadow-2xl flex items-center justify-center text-lg font-bold border-2 border-gray-100 transition-all hover:scale-110 hover:rotate-90"
        >
          ✕
        </button>

        {/* Card */}
        <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
          {popup.linkUrl ? (
            <a href={popup.linkUrl} target="_blank" rel="noopener noreferrer" onClick={close}>
              <img
                src={popup.imageUrl}
                alt={popup.altText || "Special offer from Codeware IT"}
                className="w-full block"
                style={{ maxHeight: "75vh", objectFit: "contain" }}
              />
            </a>
          ) : (
            <img
              src={popup.imageUrl}
              alt={popup.altText || "Special offer from Codeware IT"}
              className="w-full block"
              style={{ maxHeight: "75vh", objectFit: "contain" }}
            />
          )}

          {/* Optional subtitle + CTA */}
          {(popup.subtitle || popup.linkUrl) && (
            <div className="px-5 py-4 bg-gradient-to-r from-purple-700 to-blue-700 text-white text-center">
              {popup.subtitle && (
                <p className="font-semibold text-sm sm:text-base">{popup.subtitle}</p>
              )}
              {popup.linkUrl && (
                <a
                  href={popup.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="inline-block mt-2 bg-white text-purple-700 font-bold px-5 py-2 rounded-full text-sm hover:bg-purple-50 transition-colors"
                >
                  Learn More →
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
