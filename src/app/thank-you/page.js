"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { trackThankYou } from "../lib/gtag";


const quotes = [
  {
    text: "The secret of getting ahead is getting started. You've already done the hardest part.",
    author: "Mark Twain",
  },
  {
    text: "An investment in knowledge pays the best interest. You just made the smartest investment of your life.",
    author: "Benjamin Franklin",
  },
  {
    text: "The expert in anything was once a beginner. Today, you chose to begin.",
    author: "Helen Hayes",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success — and today's decision will make you both.",
    author: "Albert Schweitzer",
  },
];

export default function ThankYouPage() {
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(10);

  useEffect(() => {
    setMounted(true);
    trackThankYou();
    const t = setInterval(() => setCount((c) => {
      if (c <= 1) { clearInterval(t); window.location.href = "/"; return 0; }
      return c - 1;
    }), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .ty-page {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #040A26;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 1.5rem;
        }
        .ty-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.15), transparent),
                      radial-gradient(ellipse 60% 50% at 80% 80%, rgba(37,99,235,0.1), transparent);
        }
        .ty-grid {
          position: absolute; inset: 0; opacity: 0.025;
          background-image: linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .ty-card {
          position: relative; z-index: 10;
          background: rgba(10,18,64,0.7);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2rem;
          padding: 3rem 2.5rem;
          max-width: 600px; width: 100%;
          text-align: center;
          animation: cardIn 0.7s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.1);
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .ty-checkmark {
          width: 80px; height: 80px; border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 0 0 12px rgba(124,58,237,0.1), 0 0 0 24px rgba(124,58,237,0.05);
          animation: pulse-ring 2s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 12px rgba(124,58,237,0.1), 0 0 0 24px rgba(124,58,237,0.05); }
          50%       { box-shadow: 0 0 0 18px rgba(124,58,237,0.15), 0 0 0 36px rgba(124,58,237,0.03); }
        }
        .ty-check-svg { animation: checkDraw 0.5s 0.3s ease both; }
        @keyframes checkDraw {
          from { stroke-dashoffset: 50; opacity: 0; }
          to   { stroke-dashoffset: 0;  opacity: 1; }
        }
        .ty-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 800; color: white;
          line-height: 1.2; margin-bottom: 0.75rem;
        }
        .ty-sub { color: rgba(156,163,175,1); font-size: 1rem; line-height: 1.6; margin-bottom: 2rem; }
        .ty-quote-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-left: 3px solid #a855f7;
          border-radius: 0.875rem;
          padding: 1.25rem 1.5rem;
          text-align: left; margin-bottom: 2rem;
        }
        .ty-quote-text {
          color: rgba(255,255,255,0.85);
          font-style: italic; font-size: 0.95rem;
          line-height: 1.7; margin-bottom: 0.5rem;
        }
        .ty-quote-author { color: #a855f7; font-size: 0.8rem; font-weight: 600; }
        .ty-steps {
          display: flex; flex-direction: column; gap: 0.625rem;
          text-align: left; margin-bottom: 2rem;
        }
        .ty-step {
          display: flex; align-items: center; gap: 0.75rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 0.75rem; padding: 0.875rem 1rem;
          color: rgba(209,213,219,1); font-size: 0.85rem;
          animation: stepIn 0.5s ease both;
        }
        .ty-step:nth-child(1) { animation-delay: 0.4s; }
        .ty-step:nth-child(2) { animation-delay: 0.55s; }
        .ty-step:nth-child(3) { animation-delay: 0.7s; }
        @keyframes stepIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .ty-step-icon {
          width: 30px; height: 30px; border-radius: 8px;
          background: rgba(124,58,237,0.2); border: 1px solid rgba(124,58,237,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.875rem; flex-shrink: 0;
        }
        .ty-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: white; font-weight: 700; font-size: 0.9375rem;
          padding: 0.9375rem 2rem; border-radius: 999px;
          width: 100%; margin-bottom: 0.75rem;
          transition: all 0.25s;
          box-shadow: 0 4px 20px rgba(22,163,74,0.3);
          text-decoration: none;
        }
        .ty-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(22,163,74,0.4); }
        .ty-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(209,213,219,1); font-weight: 500; font-size: 0.875rem;
          padding: 0.75rem 1.5rem; border-radius: 999px;
          width: 100%; transition: all 0.25s; text-decoration: none;
        }
        .ty-btn-secondary:hover { border-color: rgba(255,255,255,0.3); color: white; background: rgba(255,255,255,0.05); }
        .ty-timer { color: rgba(107,114,128,1); font-size: 0.78rem; margin-top: 1rem; }
        .ty-timer span { color: #a855f7; font-weight: 700; }
        .confetti-dot {
          position: absolute; border-radius: 50%;
          animation: confettiFloat linear infinite;
          opacity: 0.6;
        }
        @keyframes confettiFloat {
          from { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          to   { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>

      {/* Confetti particles */}
      {mounted && (
        <>
          {[...Array(12)].map((_, i) => (
            <div key={i} className="confetti-dot" style={{
              width: `${Math.random()*6+4}px`, height:`${Math.random()*6+4}px`,
              background: ["#a855f7","#3b82f6","#f472b6","#34d399","#fbbf24"][i%5],
              left:`${Math.random()*100}vw`, bottom:"-10px",
              animationDuration:`${Math.random()*4+4}s`,
              animationDelay:`${Math.random()*3}s`,
            }} />
          ))}
        </>
      )}

      <div className="ty-page">
        <div className="ty-bg" />
        <div className="ty-grid" />

        <div className="ty-card">
          {/* Checkmark */}
          <div className="ty-checkmark">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="ty-check-svg" style={{strokeDasharray:50}}>
              <path d="M8 20L16 28L32 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="ty-title">
            You're All Set!<br/>
            <span style={{background:"linear-gradient(135deg,#a855f7,#3b82f6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"}}>
              A Great Future Awaits.
            </span>
          </h1>

          <p className="ty-sub">
            Your enquiry has been received. Our counselor will reach out to you on WhatsApp within <strong style={{color:"white"}}>30 minutes</strong>.
          </p>

          {/* Quote */}
          <div className="ty-quote-box">
            <p className="ty-quote-text">"{quote.text}"</p>
            <p className="ty-quote-author">— {quote.author}</p>
          </div>

          {/* What's Next */}
          <div className="ty-steps">
            <p style={{color:"rgba(107,114,128,1)", fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.25rem"}}>What happens next</p>
            {[
              { icon: "💬", text: "Our counselor contacts you on WhatsApp within 30 mins" },
              { icon: "🎯", text: "We understand your goal and recommend the perfect course" },
              { icon: "🚀", text: "You enroll, start learning, and build your dream career" },
            ].map((s, i) => (
              <div key={i} className="ty-step">
                <div className="ty-step-icon">{s.icon}</div>
                {s.text}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <a href="https://wa.me/9837218345" target="_blank" rel="noopener noreferrer" className="ty-btn-primary">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.534 5.879L0 24l6.31-1.512A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.966 0-3.81-.519-5.4-1.426l-.387-.228-4.014.962.998-3.897-.253-.4A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            Chat with Us on WhatsApp
          </a>
          <Link href="/" className="ty-btn-secondary">
            ← Back to Homepage
          </Link>
          <p className="ty-timer">Auto-redirecting to home in <span>{count}</span> seconds...</p>
        </div>
      </div>
    </>
  );
}
