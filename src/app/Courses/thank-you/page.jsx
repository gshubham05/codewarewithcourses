"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONFETTI_COLORS = [
  "#2563eb", "#7c3aed", "#ec4899", "#16a34a", "#f59e0b", "#60a5fa",
];

// Simple CSS confetti pieces
function Confetti() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 2.5 + Math.random() * 2,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: 6 + Math.random() * 8,
      rotate: Math.random() * 360,
    }));
    setPieces(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-sm opacity-80"
          style={{
            left: `${p.left}%`,
            top: "-10px",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            transform: `rotate(${p.rotate}deg)`,
            animation: `fall ${p.duration}s ${p.delay}s ease-in forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0%   { top: -10px; opacity: 1; transform: rotate(0deg) translateX(0); }
          100% { top: 100vh; opacity: 0; transform: rotate(720deg) translateX(30px); }
        }
      `}</style>
    </div>
  );
}

export default function ThankYouPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#040A26] via-[#0d1f5c] to-[#040A26] flex flex-col items-center justify-center px-6 py-20 pt-[5rem] relative overflow-hidden">
      <Confetti />

      {/* Background glow blobs */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative z-10 max-w-xl w-full text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight">
          You're All Set! 🎉
        </h1>
        <p className="text-blue-200 text-lg mb-2 font-medium">
          Your free demo class is booked.
        </p>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed">
          Our team has received your details on WhatsApp and will confirm your
          demo session shortly. Check your WhatsApp for a message from us.
        </p>

        {/* Quote card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-7 py-8 mb-10 backdrop-blur-sm">
          <div className="text-5xl text-blue-400 font-serif leading-none mb-4">❝</div>
          <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed mb-4">
            Every expert was once a beginner. The fact that you took this step
            today puts you ahead of everyone who is still waiting.
          </p>
          <p className="text-blue-300 text-sm font-medium">
            — Codeware IT Team, Dehradun
          </p>
        </div>

        {/* What happens next */}
        <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-6 mb-10 text-left backdrop-blur-sm">
          <h2 className="text-white font-bold mb-4 text-center text-sm uppercase tracking-widest text-blue-300">
            What Happens Next?
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                icon: "💬",
                title: "WhatsApp Confirmation",
                desc: "Our team will WhatsApp you within a few hours to confirm your demo class time.",
              },
              {
                step: "2",
                icon: "📅",
                title: "Attend Your Free Demo",
                desc: "Come to our Dehradun centre or join online — no books, no prep needed. Just show up.",
              },
              {
                step: "3",
                icon: "🚀",
                title: "Start Your Java Journey",
                desc: "If you love what you see, enroll and begin your full ICSE Class 9 Java course.",
              },
            ].map(({ step, icon, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 text-sm font-bold">
                  {step}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {icon} {title}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed mt-0.5">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 hover:scale-105 hover:shadow-lg text-sm"
          >
            ← Back to Home
          </Link>
          <a
            href="https://wa.me/919837218345"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg text-sm flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.854L.057 23.5l5.785-1.517A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.636-.49-5.157-1.346l-.37-.215-3.835 1.006 1.024-3.735-.236-.385A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Message Us on WhatsApp
          </a>
        </div>

        {/* Footer note */}
        <p className="text-gray-600 text-xs mt-10">
          Codeware IT Pvt Ltd · Dehradun, Uttarakhand ·{" "}
          <Link href="/PrivacyPolicy" className="hover:text-gray-400 transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
