"use client"; // 👈 Needed in Next.js (App Router)

import React from "react";
import Head from "next/head";
import Link from "next/link";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottiePlayer = () => {
  return (
    <>
      <Head>
        <title>
          Coding Classes in Dehradun | Java, Python, PHP, React JS, Backend & Internship Training - CodewareIT
        </title>
        <meta
          name="description"
          content="Join CodewareIT in Dehradun for expert coding classes: Java, Python, PHP, React JS, Backend Development, and IT internship training with job assistance."
        />
        <meta
          name="keywords"
          content="coding classes Dehradun, java classes Dehradun, python classes Dehradun, php classes, react js classes, backend development classes, IT internship training Dehradun, coding internship, CodewareIT"
        />
        <meta property="og:title" content="Coding Classes & IT Internship Training in Dehradun - CodewareIT" />
        <meta
          property="og:description"
          content="Best coding classes and internship training for Java, Python, PHP, React JS, and Backend in Dehradun by CodewareIT."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codewareit.in/lotties" />
        <meta property="og:image" content="https://www.codewareit.in/og-image.jpg" />
      </Head>

      <div className="items-center justify-center mt-8">
        <DotLottieReact
          src="https://lottie.host/e41b9b00-935b-4d4e-a5a0-4ecbc6d40d10/xcrZFet3b5.lottie"
          loop
          autoplay
        />
      </div>
      <div className="text-center mt-[-8rem] mb-5">
        <Link
          href="/"
          className="mt-6 inline-block text-lg text-blue-500 hover:text-blue-700"
        >
          Go back to the Homepage
        </Link>
      </div>
    </>
  );
};

export default LottiePlayer;
