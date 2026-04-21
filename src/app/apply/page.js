"use client";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    college: "",
    stream: "",
    duration: "",
    interest: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/apply", formData);
      if (res.status === 200) {
        toast.success("✅ Application submitted!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          college: "",
          stream: "",
          duration: "",
          interest: "",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-950 py-24 px-6 text-white">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-white">
          Apply for Internship
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Fill the form below to register for our internship program.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            name="name"
            label="Full Name"
            placeholder="e.g. Deepak Singh"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            label="Email"
            placeholder="e.g. deepak@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="phone"
            label="Phone Number"
            placeholder="e.g. 9876543210"
            value={formData.phone}
            onChange={handleChange}
          />
          <Textarea
            name="address"
            label="Address"
            placeholder="e.g. 123 MG Road, New Delhi"
            value={formData.address}
            onChange={handleChange}
          />
          <Input
            name="college"
            label="College / University"
            placeholder="e.g. Delhi Technological University"
            value={formData.college}
            onChange={handleChange}
          />
          <Input
            name="stream"
            label="Stream / Branch"
            placeholder="e.g. Computer Science"
            value={formData.stream}
            onChange={handleChange}
          />
          <Input
            name="duration"
            label="Internship Duration"
            placeholder="e.g. 2 Months"
            value={formData.duration}
            onChange={handleChange}
          />
          <Textarea
            name="interest"
            label="Which field are you interested in?"
            placeholder="e.g. Web Development, Data Science, UI/UX Design"
            value={formData.interest}
            onChange={handleChange}
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>

      {/* Toastify container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </main>
  );
}

// Reusable Input Component
function Input({ name, label, type = "text", placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg text-black"
      />
    </div>
  );
}

// Reusable Textarea Component
function Textarea({ name, label, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <textarea
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg text-black"
        rows={3}
      />
    </div>
  );
}
