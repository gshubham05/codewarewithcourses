"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { trackThankYou } from "../lib/gtag";

const quotes = [
  { text: "The secret of getting ahead is getting started. You've already done the hardest part.", author: "Mark Twain" },
  { text: "An investment in knowledge pays the best interest. You just made the smartest investment of your life.", author: "Benjamin Franklin" },
  { text: "The expert in anything was once a beginner. Today, you chose to begin.", author: "Helen Hayes" },
  { text: "Success is not the key to happiness. Happiness is the key to success — and today's decision will make you both.", author: "Albert Schweitzer" },
];

function ThankYouContent() {
  const searchParams = useSearchParams();
  const course = searchParams.get("course") || "";
  const source = searchParams.get("source") || "direct";

  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(12);

  useEffect(() => {
    setMounted(true);

    // ✅ Fire Google Ads Thank You conversion (URL destination tracking)
    trackThankYou({ course, source });

    // Push to GTM dataLayer too
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "thank_you_page_view",
        course_name: course,
        form_source: source,
        page_url: window.location.href,
      });
    }

    // Countdown then redirect home
    const t = setInterval(() => setCount((c) => {
      if (c <= 1) { clearInterval(t); window.location.href = "/"; return 0; }
      return c - 1;
    }), 1000);
    return () => clearInterval(t);
  }, [course, source]);

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
          max-width: 620px; width: 100%;
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
        .ty-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.75rem, 5vw, 2.4rem);
          font-weight: 800; color: white;
          line-height: 1.2; margin-bottom: 0.75rem;
        }
        .ty-sub { color: rgba(156,163,175,1); font-size: 1rem; line-height: 1.6; margin-bottom: 1.5rem; }
        .ty-course-badge {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(124,58,237,0.15); border: 1px solid rgba(124,58,237,0.3);
          color: #c4b5fd; font-size: 0.875rem; font-weight: 600;
          padding: 0.4rem 1rem; border-radius: 999px; margin-bottom: 1.5rem;
        }
        .ty-quote-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-left: 3px solid #a855f7;
          border-radius: 0.875rem;
          padding: 1.25rem 1.5rem;
          text-align: left; margin-bottom: 1.75rem;
        }
        .ty-quote-text { color: rgba(255,255,255,0.85); font-style: italic; font-size: 0.95rem; line-height: 1.7; margin-bottom: 0.5rem; }
        .ty-quote-author { color: rgba(168,85,247,0.8); font-size: 0.8rem; font-weight: 600; letter-spacing: 0.05em; }
        .ty-steps {
          display: grid; grid-template-columns: 1fr; gap: 0.75rem;
          margin-bottom: 1.75rem; text-align: left;
        }
        .ty-step {
          display: flex; align-items: flex-start; gap: 0.75rem;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);
          border-radius: 0.75rem; padding: 0.875rem 1rem;
        }
        .ty-step-num {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg, #7c3aed, #2563eb);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem; font-weight: 700; color: white;
        }
        .ty-step-text { font-size: 0.875rem; color: rgba(209,213,219,1); line-height: 1.5; }
        .ty-btn-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white; font-weight: 700; font-size: 1rem;
          padding: 0.875rem 2rem; border-radius: 0.875rem; border: none;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(37,211,102,0.25);
          cursor: pointer; margin-bottom: 0.75rem; width: 100%;
        }
        .ty-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(37,211,102,0.35); }
        .ty-btn-secondary {
          display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15);
          color: rgba(209,213,219,1); font-weight: 600; font-size: 0.9rem;
          padding: 0.75rem 2rem; border-radius: 0.875rem;
          text-decoration: none; transition: all 0.2s; width: 100%;
        }
        .ty-btn-secondary:hover { background: rgba(255,255,255,0.12); color: white; }
        .ty-redirect { color: rgba(107,114,128,1); font-size: 0.8rem; margin-top: 1.25rem; }
        .ty-redirect span { color: #a855f7; font-weight: 600; }
      `}</style>

      <div className="ty-page">
        <div className="ty-bg" />
        <div className="ty-grid" />

        <div className="ty-card">
          {/* Animated checkmark */}
          <div className="ty-checkmark">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path
                className="ty-check-svg"
                d="M8 18l7 7 13-14"
                stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                strokeDasharray="50" strokeDashoffset="0"
              />
            </svg>
          </div>

          <h1 className="ty-title">You&apos;re All Set! 🎉</h1>

          {course && (
            <div className="ty-course-badge">
              📚 {decodeURIComponent(course)}
            </div>
          )}

          <p className="ty-sub">
            Your free demo class request has been received. Our team will reach out on WhatsApp within <strong style={{ color: "white" }}>15 minutes</strong> to confirm your slot.
          </p>

          {/* Quote */}
          {mounted && (
            <div className="ty-quote-box">
              <p className="ty-quote-text">&ldquo;{quote.text}&rdquo;</p>
              <p className="ty-quote-author">— {quote.author}</p>
            </div>
          )}

          {/* What happens next */}
          <div className="ty-steps">
            {[
              { n: "1", text: "Our team will WhatsApp you within 15 minutes to confirm your demo class slot." },
              { n: "2", text: "Attend the FREE demo class — no payment needed, no pressure to enroll." },
              { n: "3", text: "If you love it, enroll and start your journey to becoming a developer!" },
            ].map((s) => (
              <div className="ty-step" key={s.n}>
                <div className="ty-step-num">{s.n}</div>
                <p className="ty-step-text">{s.text}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <a
            href={`https://wa.me/919837218345?text=${encodeURIComponent("Hi! I just booked a free demo class" + (course ? ` for ${decodeURIComponent(course)}` : "") + ". Please confirm my slot!")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ty-btn-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>

          <Link href="/" className="ty-btn-secondary">
            ← Back to Homepage
          </Link>

          <p className="ty-redirect">
            Redirecting to home in <span>{mounted ? count : "…"}s</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", background: "#040A26", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "white", fontFamily: "sans-serif" }}>Loading…</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
