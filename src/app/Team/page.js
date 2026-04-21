"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// 🔗 Team Data with Social Links
const team = [
  {
    name: "Shubham Goyal",
    role: "Co-Founder",
    image: "/user.jpg",
    description:
      "Shubham sets the technological direction and vision of the company.",
    socials: {
      facebook: "https://facebook.com/shubhamgoyal",
      instagram: "https://instagram.com/shubhamgoyal",
      linkedin: "https://linkedin.com/in/shubhamgoyal",
    },
  },
  {
    name: "Akash Choudhary",
    role: "Co-Founder",
    image: "/user.jpg",
    description:
      "Akash oversees backend infrastructure and ensures scalability.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Deepak Chauhan",
    role: "Mern Stack Developer",
    image: "/user.jpg",
    description: "Mern stack developer ensuring seamless full-stack coding.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "https://linkedin.com/in/deepakchauhan",
    },
  },
  {
    name: "Riya Sainwal",
    role: "Frontend Developer",
    image: "/girl.jpg",
    description: "Designs responsive, engaging user interfaces.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mandeep Singh",
    role: "Backend Developer",
    image: "/user.jpg",
    description: "Builds and secures server-side architecture.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Vikas Kandari",
    role: "Graphic Designer",
    image: "/user.jpg",
    description: "Creates beautiful and functional visual designs.",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
];

// 👥 Split into Leadership & Technical Teams
const TeamSection = () => {
  const leadership = team.filter((m) => m.role === "Co-Founder");
  const technical = team.filter((m) => m.role !== "Co-Founder");

  // 🧱 Render Each Team Member Card
  const renderMember = (member, index) => (
    <div
      key={index}
      className="bg-white border rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.03] p-6 flex flex-col items-center text-center"
    >
      <Image
        src={member.image}
        alt={member.name}
        width={100}
        height={100}
        className="rounded-full object-cover w-[100px] h-[100px] mb-4 border-4 border-purple-600"
      />
      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
      <p className="text-sm text-blue-600 font-medium">{member.role}</p>
      <p className="text-gray-500 text-sm mt-2">{member.description}</p>

      <div className="flex gap-4 mt-4 text-gray-500 text-lg">
        {member.socials?.facebook && (
          <a
            href={member.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaFacebook />
          </a>
        )}
        {member.socials?.instagram && (
          <a
            href={member.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        )}
        {member.socials?.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="mt-[5rem]">
      {/* 🌟 Hero Header */}
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20 text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Meet the Codeware IT Team
        </h1>
        <p className="text-base md:text-lg opacity-90">
          Our expert team is here to guide you through your learning journey.
        </p>
      </section>

      {/* 🧑‍💼 Leadership Team */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {leadership.map(renderMember)}
        </div>
      </section>

      {/* 👨‍💻 Technical Team */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Technical Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {technical.map(renderMember)}
        </div>
      </section>
    </div>
  );
};

export default TeamSection;
