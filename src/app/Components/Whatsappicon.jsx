"use client";

import React from "react";
import { trackWhatsApp } from "../lib/gtag";
import Image from "next/image";

const Whatsappicon = ({ course = "", source = "float_button" }) => {
  const handleClick = () => {
    // Push to GTM dataLayer
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        label: source,
        course_name: course || "general",
      });
    }
    // GA4 + Google Ads conversion
    trackWhatsApp({ label: source, course });
  };

  const phoneNumber = "919837218345";
  const message = course
    ? `Hello Codeware IT 👋, I'm interested in the ${course} course in Dehradun. Please share details.`
    : "Hello Codeware IT 👋, I'm interested in your coding courses in Dehradun. Please share details.";

  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      onClick={handleClick}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed sm:bottom-6 bottom-[70px]  right-5 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      title="Chat with Codeware IT on WhatsApp — coding courses in Dehradun"
      aria-label="Chat with Codeware IT on WhatsApp for coding courses in Dehradun"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping" />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Codewareit  "
        className="w-8 h-8 relative z-10"
        width={32}
        height={32}
        loading="lazy"
      />
    </a>
  );
};

export default Whatsappicon;
