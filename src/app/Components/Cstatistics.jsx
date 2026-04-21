"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import CountUp from "react-countup";

const statsData = [
  { value: 100, label: "Trained Students", bgColor: "bg-green-100" },
  { value: 50, label: "Live Projects", bgColor: "bg-blue-100" },
  { value: 10, label: "Expert Mentors", bgColor: "bg-red-100" },
  { value: 30, label: "Workshops Conducted", bgColor: "bg-yellow-100" },
  { value: 20, label: "Industry Collaborations", bgColor: "bg-purple-100" },
  { value: 50, label: "Successful Projects", bgColor: "bg-indigo-100" },
];

const Statistics = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 8000 + Math.random() * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Our Achievements - CodewareIT | Top IT Training & Coding Institute in Dehradun</title>
        <meta
          name="description"
          content="Discover CodewareIT’s achievements: trained over 100 students, completed 50 live projects, expert mentorships, workshops, and industry collaborations in Dehradun."
        />
        <meta
          name="keywords"
          content="CodewareIT achievements, trained students Dehradun, IT training Dehradun, coding institute success, workshops in Uttarakhand"
        />
      </Head>

      <section aria-labelledby="stats-heading" className="text-center py-14">
        <h2 id="stats-heading" className="text-4xl font-bold text-[#040A26]">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Empowering learners with cutting-edge IT training, hands-on projects, and industry collaborations in Dehradun, Uttarakhand.
        </p>

        <div className="flex flex-wrap justify-center gap-10 py-14">
          {statsData.map((stat, index) => (
            <div
              key={`${key}-${index}`}
              className={`p-10 w-80 h-40 rounded-2xl shadow-lg ${stat.bgColor} flex flex-col justify-center items-center transition-transform transform hover:scale-105 hover:shadow-xl`}
            >
              <h3 className="text-5xl font-bold text-gray-800">
                <CountUp key={key} start={0} end={stat.value} duration={2.5} separator="," />
                +
              </h3>
              <p className="text-lg text-gray-700 font-semibold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Statistics;
