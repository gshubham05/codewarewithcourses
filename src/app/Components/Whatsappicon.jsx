"use client";

import React from "react";
import { trackWhatsApp } from "../lib/gtag";

const Whatsappicon = ({ course = "", source = "float_button" }) => {
  const handleClick = () => {
    // Tracks in GA4 as 'whatsapp_click' AND fires Google Ads conversion
    trackWhatsApp({
      label: source,
      course: course,
    });
  };

  const phoneNumber = "919837218345";
  const message = course
    ? `Hello Codeware IT, I'm interested in the ${course} course. Please share details.`
    : "Hello Codeware IT, I'm interested in your courses. Please share details.";

  const whatsappHref = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      onClick={handleClick}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
      title="Chat with CodewareIT on WhatsApp for coding and programming courses in Dehradun, Uttarakhand"
      aria-label="Chat with CodewareIT on WhatsApp for coding and programming courses in Dehradun, Uttarakhand"
    >
      {/* Pulse animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Icon"
        className="w-8 h-8 relative z-10"
        width={32}
        height={32}
        loading="lazy"
      />
    </a>
  );
};

export default Whatsappicon;
