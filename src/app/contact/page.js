"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeField, setActiveField] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `Hello Codeware IT 👋\nI am interested in the ${formData.course} course.\nName: ${formData.name}\nQualification: ${formData.qualification}\nPhone: ${formData.phone}`;
    const whatsappURL = `https://wa.me/919837218345?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
        window.fbq("track", "Contact", { method: "WhatsApp" });
      }
      axios.post("/api/students", formData);
      setSuccessMsg("✅ Redirecting to WhatsApp...");
      setFormData({ name: "", email: "", phone: "", course: "", qualification: "" });
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { value: "100+", label: "Students Trained" },
    { value: "95%", label: "Placement Rate" },
    { value: "10+", label: "Courses Offered" },
    { value: "5★", label: "Google Rating" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .cw-page {
          font-family: 'DM Sans', sans-serif;
          background: #050B18;
          min-height: 100vh;
          color: #fff;
          overflow-x: hidden;
          padding-top: 40px;
        }

        /* HERO SECTION */
        .cw-hero {
          position: relative;
          padding: 64px 24px 0;
          text-align: center;
          overflow: hidden;
        }
        .cw-hero::before {
          content: '';
          position: absolute;
          top: -120px; left: 50%;
          transform: translateX(-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(0,180,255,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .cw-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0,180,255,0.1);
          border: 1px solid rgba(0,180,255,0.25);
          border-radius: 100px;
          padding: 6px 18px;
          font-size: 13px;
          font-weight: 500;
          color: #00C6FF;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
          animation: fadeUp 0.6s ease both;
        }
        .cw-badge span { width: 7px; height: 7px; background: #00C6FF; border-radius: 50%; display: inline-block; animation: pulse 1.8s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

        .cw-hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(34px, 6vw, 68px);
          font-weight: 800;
          line-height: 1.07;
          letter-spacing: -0.02em;
          animation: fadeUp 0.7s 0.1s ease both;
        }
        .cw-hero h1 .accent {
          background: linear-gradient(90deg, #00C6FF, #0072FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cw-hero p {
          font-size: 17px;
          color: #8BA0BA;
          max-width: 520px;
          margin: 18px auto 0;
          line-height: 1.7;
          animation: fadeUp 0.7s 0.2s ease both;
        }

        /* STATS BAR */
        .cw-stats {
          display: flex;
          justify-content: center;
          gap: 0;
          margin: 52px auto 0;
          max-width: 680px;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          overflow: hidden;
          animation: fadeUp 0.7s 0.3s ease both;
        }
        .cw-stat {
          flex: 1;
          padding: 20px 12px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.07);
        }
        .cw-stat:last-child { border-right: none; }
        .cw-stat-val {
          font-family: 'Syne', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: #fff;
        }
        .cw-stat-lbl { font-size: 11px; color: #5A7494; font-weight: 500; margin-top: 3px; letter-spacing: 0.04em; text-transform: uppercase; }

        /* MAIN GRID */
        .cw-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          max-width: 1100px;
          margin: 56px auto 0;
          padding: 0 24px 80px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .cw-main { grid-template-columns: 1fr; }
          .cw-left { order: 2; }
          .cw-right { order: 1; }
        }

        /* LEFT PANEL */
        .cw-left {}
        .cw-section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0099CC;
          margin-bottom: 14px;
        }
        .cw-left h2 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 14px;
        }
        .cw-left > p {
          color: #6A8399;
          font-size: 15px;
          line-height: 1.75;
          margin-bottom: 32px;
        }

        /* CONTACT CARDS */
        .cw-contact-cards { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
        .cw-contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 16px 20px;
          transition: border-color 0.2s, background 0.2s;
        }
        .cw-contact-card:hover { background: rgba(0,180,255,0.05); border-color: rgba(0,180,255,0.2); }
        .cw-contact-icon {
          width: 42px; height: 42px;
          background: linear-gradient(135deg, #001A30, #003050);
          border: 1px solid rgba(0,180,255,0.15);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; flex-shrink: 0;
        }
        .cw-contact-info {}
        .cw-contact-info small { font-size: 11px; color: #4A6A84; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
        .cw-contact-info p { font-size: 14px; color: #C0D5E8; font-weight: 500; margin-top: 2px; line-height: 1.4; }

        /* COURSES PILLS */
        .cw-courses-wrap { margin-bottom: 28px; }
        .cw-courses-wrap p { font-size: 13px; color: #4A6A84; margin-bottom: 12px; font-weight: 500; }
        .cw-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .cw-pill {
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid rgba(0,180,255,0.2);
          color: #00AADD;
          background: rgba(0,180,255,0.06);
        }

        /* MAP */
        .cw-map {
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          height: 200px;
        }
        .cw-map iframe { width: 100%; height: 100%; border: none; display: block; filter: grayscale(30%) brightness(0.9); }

        /* FORM PANEL */
        .cw-right {}
        .cw-form-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
        }
        .cw-form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #00C6FF, #0072FF, #00C6FF);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        .cw-form-head { margin-bottom: 28px; }
        .cw-form-head h3 {
          font-family: 'Syne', sans-serif;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .cw-form-head p { font-size: 14px; color: #5A7A94; }

        /* FORM FIELDS */
        .cw-form { display: flex; flex-direction: column; gap: 14px; }
        .cw-field {
          position: relative;
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          transition: border-color 0.2s, background 0.2s;
          overflow: hidden;
        }
        .cw-field.focused { border-color: rgba(0,180,255,0.4); background: rgba(0,180,255,0.04); }
        .cw-field-inner { display: flex; align-items: center; gap: 12px; padding: 14px 18px; }
        .cw-field-icon { font-size: 15px; flex-shrink: 0; opacity: 0.5; transition: opacity 0.2s; }
        .cw-field.focused .cw-field-icon { opacity: 1; }
        .cw-field input,
        .cw-field select {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: #fff;
          width: 100%;
        }
        .cw-field input::placeholder { color: #3D5A70; }
        .cw-field select { color: #fff; cursor: pointer; }
        .cw-field select option { background: #0A1929; color: #fff; }
        .cw-field select.empty { color: #3D5A70; }

        /* SUBMIT BTN */
        .cw-submit-row { margin-top: 8px; }
        .cw-submit {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #00C6FF 0%, #0072FF 100%);
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 0.01em;
          transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
          box-shadow: 0 4px 24px rgba(0,114,255,0.3);
          position: relative;
          overflow: hidden;
        }
        .cw-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0,114,255,0.45); }
        .cw-submit:active:not(:disabled) { transform: translateY(0); }
        .cw-submit:disabled { opacity: 0.7; cursor: not-allowed; }
        .cw-submit-inner { display: flex; align-items: center; justify-content: center; gap: 10px; }

        .cw-whatsapp-note {
          display: flex;
          align-items: center;
          gap: 8px;
          justify-content: center;
          margin-top: 14px;
          font-size: 13px;
          color: #3D6A4A;
          font-weight: 500;
        }
        .cw-whatsapp-note svg { flex-shrink: 0; }

        .cw-msg-success {
          display: flex; align-items: center; gap: 8px;
          background: rgba(22,163,74,0.1);
          border: 1px solid rgba(22,163,74,0.25);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 14px;
          color: #4ADE80;
          font-weight: 500;
          margin-top: 8px;
        }
        .cw-msg-error {
          display: flex; align-items: center; gap: 8px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 14px;
          color: #F87171;
          font-weight: 500;
          margin-top: 8px;
        }

        /* TRUST ROW */
        .cw-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .cw-trust-item {
          display: flex; align-items: center; gap: 7px;
          font-size: 12px; color: #3D5A70; font-weight: 500;
        }
        .cw-trust-item span { color: #25A244; font-size: 14px; }

        @media (max-width: 480px) {
          .cw-stats { border-radius: 12px; }
          .cw-stat-val { font-size: 20px; }
          .cw-form-card { padding: 24px 18px; }
          .cw-hero { padding: 40px 18px 0; }
        }
      `}</style>

      <div className="cw-page">

        {/* HERO */}
        <section className="cw-hero">
          <div className="cw-badge">
            <span></span>
            Admissions Open · Dehradun's #1 Coding Institute
          </div>
          <h1>
            Start Your <span className="accent">Tech Career</span><br />
            the Right Way
          </h1>
          <p>
            Get free expert counselling, choose your course, and take the first step towards a high-paying career in tech — in just 60 seconds.
          </p>

          {/* STATS */}
          <div className="cw-stats">
            {stats.map((s, i) => (
              <div className="cw-stat" key={i}>
                <div className="cw-stat-val">{s.value}</div>
                <div className="cw-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MAIN CONTENT */}
        <main className="cw-main">

          {/* LEFT */}
          <div className="cw-left">
            <div className="cw-section-label">Get in touch</div>
            <h2>We're Here to Guide Your Journey</h2>
            <p>
              Our expert counsellors are ready to help you pick the right course, understand the curriculum, and plan your career path. Reach out — it's completely free.
            </p>

            <div className="cw-contact-cards">
              <div className="cw-contact-card">
                <div className="cw-contact-icon">📍</div>
                <div className="cw-contact-info">
                  <small>Address</small>
                  <p>House No. 2, Shakti Vihar, Suman Nagar,<br />Adhoiwala, Dehradun, UK 248001</p>
                </div>
              </div>
              <div className="cw-contact-card">
                <div className="cw-contact-icon">📞</div>
                <div className="cw-contact-info">
                  <small>Call / WhatsApp</small>
                  <p>+91 98372 18345</p>
                </div>
              </div>
              <div className="cw-contact-card">
                <div className="cw-contact-icon">✉️</div>
                <div className="cw-contact-info">
                  <small>Email</small>
                  <p>gshubham.05@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="cw-courses-wrap">
              <p>Popular Courses</p>
              <div className="cw-pills">
                {["MERN Stack","Next.js","Python","Java","Digital Marketing","GSAP","Three.js","PHP"].map(c => (
                  <span className="cw-pill" key={c}>{c}</span>
                ))}
              </div>
            </div>

            {/* MAP */}
            <div className="cw-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d13774.303321430503!2d78.0537807!3d30.334580799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3909298618cc0ad3%3A0xf57f033590318d10!2sCodewareIT.%20The%20Best%20Computer%20Coding%20Institute%20in%20Dehradun%2C%20House%20No.%202%2C%20Shakti%20Vihar%2C%20Suman%20Nagar%2C%20Adhoiwala%2C%20Dehradun%2C%20Uttarakhand%20248001!3m2!1d30.3259682!2d78.06286349999999!5e0!3m2!1sen!2sin!4v1776956833285!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Codeware IT Location"
              />
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="cw-right">
            <div className="cw-form-card">
              <div className="cw-form-head">
                <h3>Get Free Counselling 🎯</h3>
                <p>Fill in your details — we'll connect on WhatsApp instantly.</p>
              </div>

              <form className="cw-form" onSubmit={handleSubmit}>

                {/* Name */}
                <div className={`cw-field ${activeField === 'name' ? 'focused' : ''}`}>
                  <div className="cw-field-inner">
                    <span className="cw-field-icon">👤</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className={`cw-field ${activeField === 'email' ? 'focused' : ''}`}>
                  <div className="cw-field-inner">
                    <span className="cw-field-icon">✉️</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className={`cw-field ${activeField === 'phone' ? 'focused' : ''}`}>
                  <div className="cw-field-inner">
                    <span className="cw-field-icon">📱</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="10-digit Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setActiveField('phone')}
                      onBlur={() => setActiveField(null)}
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                </div>

                {/* Course */}
                <div className={`cw-field ${activeField === 'course' ? 'focused' : ''}`}>
                  <div className="cw-field-inner">
                    <span className="cw-field-icon">📘</span>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      onFocus={() => setActiveField('course')}
                      onBlur={() => setActiveField(null)}
                      className={!formData.course ? 'empty' : ''}
                      required
                    >
                      <option value="">Select Your Course</option>
                      <optgroup label="Web Development">
                        <option value="MERN Stack">MERN Stack</option>
                        <option value="Next.js">Next.js</option>
                      </optgroup>
                      <optgroup label="Programming Languages">
                        <option value="Python">Python</option>
                        <option value="Java">Java</option>
                        <option value="PHP">PHP</option>
                        <option value="C++">C++</option>
                        <option value="C#">C#</option>
                      </optgroup>
                      <optgroup label="Animation & Motion">
                        <option value="GSAP">GSAP</option>
                        <option value="Three.js">Three.js</option>
                        <option value="Framer Motion">Framer Motion</option>
                      </optgroup>
                      <optgroup label="Internship">
                        <option value="MERN Internship">MERN Internship</option>
                        <option value="Next.js Internship">Next.js Internship</option>
                      </optgroup>
                      <optgroup label="Other Courses">
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Video Editing">Video Editing</option>
                        <option value="Photoshop">Photoshop</option>
                        <option value="Canva">Canva</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                {/* Qualification */}
                <div className={`cw-field ${activeField === 'qualification' ? 'focused' : ''}`}>
                  <div className="cw-field-inner">
                    <span className="cw-field-icon">🎓</span>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      onFocus={() => setActiveField('qualification')}
                      onBlur={() => setActiveField(null)}
                      className={!formData.qualification ? 'empty' : ''}
                      required
                    >
                      <option value="">Your Qualification</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th">12th Pass</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="cw-submit-row">
                  <button type="submit" className="cw-submit" disabled={loading}>
                    <span className="cw-submit-inner">
                      {loading ? (
                        <>⏳ Connecting...</>
                      ) : (
                        <>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          Get Free Counselling on WhatsApp
                        </>
                      )}
                    </span>
                  </button>

                  <div className="cw-whatsapp-note">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#22C55E"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.177 14.178l-3.535-3.535 1.414-1.414 2.121 2.121 4.243-4.243 1.414 1.414-5.657 5.657z"/></svg>
                    You'll be connected directly on WhatsApp — no spam, ever.
                  </div>

                  {successMsg && <div className="cw-msg-success">{successMsg}</div>}
                  {errorMsg && <div className="cw-msg-error">⚠️ {errorMsg}</div>}
                </div>

              </form>

              {/* TRUST SIGNALS */}
              <div className="cw-trust">
                <div className="cw-trust-item"><span>✓</span> Free Counselling</div>
                <div className="cw-trust-item"><span>✓</span> No Spam Calls</div>
                <div className="cw-trust-item"><span>✓</span> Industry Certified</div>
                <div className="cw-trust-item"><span>✓</span> Job Assistance</div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}
