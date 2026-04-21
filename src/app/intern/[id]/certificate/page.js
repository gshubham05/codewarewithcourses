"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import students from "../../data";

export default function CertificatePage({ params }) {
  const [imgExists, setImgExists] = useState(true); // true until proven false

  const { id } = use(params); // unwrap async params in Next.js 14+

  const intern = students.find((s) => s.id === id);
  if (!intern) return notFound();

  const certificateUrl = `/certificates/${intern.id}.jpg`;

  // ✅ Manually check if image exists (bypasses onError bugs)
  useEffect(() => {
    const testImg = new Image();
    testImg.src = certificateUrl;

    testImg.onload = () => setImgExists(true);
    testImg.onerror = () => setImgExists(false);
  }, [certificateUrl]);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-5xl shadow-xl rounded-xl overflow-hidden flex justify-center items-center bg-white p-6">
        {imgExists ? (
          <img
            src={certificateUrl}
            alt={`${intern.name}'s Certificate`}
            className="w-full object-contain"
          />
        ) : (
          <div className="text-center py-20 animate-pulse w-full">
            <p className="text-4xl font-bold text-gray-700 mb-2">
              📜 Coming Soon
            </p>
            <p className="text-gray-500 text-lg">
              {intern.name}'s certificate is not yet available.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
