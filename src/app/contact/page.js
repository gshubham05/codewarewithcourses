"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding, FaBookOpen, FaGraduationCap } from "react-icons/fa";
import { trackLeadFormSubmit, trackWhatsAppClick } from "@/app/lib/gtag";

export default function ContactUs() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", course: "", qualification: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Build WhatsApp message
    const message = `Hello Codeware IT 👋\nI am interested in the ${formData.course} course.\nName: ${formData.name}\nQualification: ${formData.qualification}\nPhone: ${formData.phone}`;
    const whatsappURL = `https://wa.me/919837218345?text=${encodeURIComponent(message)}`;

    // 2. Open WhatsApp FIRST (before any async — avoids popup blockers)
    window.open(whatsappURL, "_blank");

    // 3. Fire tracking events
    trackLeadFormSubmit(formData.course);
    trackWhatsAppClick("contact_form");
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
      window.fbq("track", "Contact", { method: "WhatsApp" });
    }

    setLoading(true);
    setErrorMsg("");

    try {
      // 4. Save to DB (non-blocking)
      axios.post("/api/students", formData);

      // 5. Reset form
      setFormData({ name: "", email: "", phone: "", course: "", qualification: "" });

      // 6. Redirect to thank-you page
      router.push("/thank-you");
    } catch {
      setErrorMsg("Failed to send. Please try WhatsApp directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .contact-page { font-family: 'DM Sans', sans-serif; }
        .input-field {
          width:100%; background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.875rem; padding: 0.875rem 1rem;
          color: white; font-size: 0.9375rem;
          transition: border-color 0.2s, background 0.2s;
          outline: none;
        }
        .input-field:focus { border-color: #7c3aed; background: rgba(124,58,237,0.05); }
        .input-field option { background: #060D30; }
      `}</style>

      <div className="contact-page relative top-[4.25rem] min-h-screen bg-[#040A26] text-white pt-12 pb-20 px-4 sm:px-6">
        {/* Ambient glows */}
        <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-4">📞 Free Counselling</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white" style={{fontFamily:"'Syne',sans-serif"}}>
              Start Your<br/><span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Tech Journey Today</span>
            </h1>
            <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-md mx-auto">Fill the form — our counselor responds on WhatsApp within 30 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Info side */}
            <div className="space-y-6">
              <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-6">
                <h2 className="font-bold text-lg text-white mb-4" style={{fontFamily:"'Syne',sans-serif"}}>Codeware IT Pvt Ltd</h2>
                <ul className="space-y-4">
                  {[
                    { Icon: FaBuilding, text: "Codeware IT Pvt Ltd", color: "text-purple-400" },
                    { Icon: FaMapMarkerAlt, text: "Adhohi wala & Prem Nagar, Dehradun 248001", color: "text-blue-400" },
                    { Icon: FaEnvelope, text: "gshubham.05@gmail.com", color: "text-pink-400", href: "mailto:gshubham.05@gmail.com" },
                    { Icon: FaPhone, text: "+91 9837218345", color: "text-green-400", href: "tel:+919837218345", onClick: () => import("@/app/lib/gtag").then(m => m.trackPhoneClick()) },
                  ].map(({ Icon, text, color, href, onClick }, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon className={`${color} mt-0.5 flex-shrink-0`} />
                      {href ? <a href={href} onClick={onClick} className="text-gray-300 hover:text-white text-sm transition-colors">{text}</a>
                              : <span className="text-gray-300 text-sm">{text}</span>}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Trust */}
              <div className="grid grid-cols-2 gap-3">
                {[["🎓","500+ Students","Trained & Placed"],["💼","95%","Placement Rate"],["⭐","4.9/5","Student Rating"],["🚀","3 months","Avg to Job"]].map(([icon,val,lab])=>(
                  <div key={lab} className="bg-white/[0.04] border border-white/8 rounded-xl p-4 text-center">
                    <div className="text-xl mb-1">{icon}</div>
                    <div className="text-white font-extrabold text-lg">{val}</div>
                    <div className="text-gray-500 text-xs">{lab}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form side */}
            <div className="bg-gradient-to-br from-[#0a1240] to-[#0d1650] border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full mb-6 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8" />
              <h3 className="font-bold text-xl text-white mb-6" style={{fontFamily:"'Syne',sans-serif"}}>Get Free Counselling</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-gray-400 font-medium block mb-1.5">Your Name *</label>
                  <input type="text" name="name" placeholder="Enter your full name"
                    value={formData.name} onChange={handleChange} required className="input-field" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-medium block mb-1.5">Email Address</label>
                  <input type="email" name="email" placeholder="your@email.com"
                    value={formData.email} onChange={handleChange} className="input-field" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-medium block mb-1.5">WhatsApp Number *</label>
                  <input type="tel" name="phone" placeholder="10-digit mobile number"
                    value={formData.phone} onChange={handleChange} required pattern="[0-9]{10}" className="input-field" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-medium block mb-1.5">Interested Course *</label>
                  <select name="course" value={formData.course} onChange={handleChange} required className="input-field">
                    <option value="">Select Course</option>
                    <optgroup label="School">
                      <option>ICSE Class 9 — Java</option>
                      <option>ICSE Class 10 — Java</option>
                      <option>CBSE Class 11 — Python</option>
                      <option>CBSE Class 12 — Python</option>
                    </optgroup>
                    <optgroup label="Web Development">
                      <option value="MERN Stack">MERN Stack</option>
                      <option value="Next.js">Next.js</option>
                      <option value="Full Stack">Full Stack Development</option>
                      <option value="Frontend">Frontend Development</option>
                      <option value="Backend">Backend Development</option>
                      <option value="React JS">React JS</option>
                    </optgroup>
                    <optgroup label="Programming Languages">
                      <option value="Python">Python</option>
                      <option value="Java">Java</option>
                      <option value="PHP">PHP</option>
                      <option value="C++">C++</option>
                      <option value="C#">C#</option>
                    </optgroup>
                    <optgroup label="Internship">
                      <option value="MERN Internship">MERN Internship</option>
                      <option value="Next.js Internship">Next.js Internship</option>
                    </optgroup>
                    <optgroup label="Other">
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="Photoshop">Photoshop</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-medium block mb-1.5">Qualification *</label>
                  <select name="qualification" value={formData.qualification} onChange={handleChange} required className="input-field">
                    <option value="">Select Qualification</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>
                </div>

                <button type="submit" disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-base transition-all hover:shadow-xl hover:shadow-purple-500/25 disabled:opacity-60">
                  {loading ? "Submitting..." : "🚀 Submit Enquiry"}
                </button>

                {errorMsg && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}
                <p className="text-gray-600 text-xs text-center">Your info goes directly to our counselor on WhatsApp 🎓</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
