"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import students from "../../data";

export default function CertificatePage({ params }) {
  const [imgExists, setImgExists] = useState(true);

  const { id } = use(params);

  const student = students.find((s) => s.id === id);
  if (!student) return notFound();

  const certificateUrl = `/certificates/${student.id}.jpg`;

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
            alt={`${student.name}'s Certificate`}
            className="w-full object-contain"
          />
        ) : (
          <div className="text-center py-20 animate-pulse w-full">
            <p className="text-4xl font-bold text-gray-700 mb-2">
              📜 Coming Soon
            </p>
            <p className="text-gray-500 text-lg">
              {student.name}'s certificate is not yet available.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
