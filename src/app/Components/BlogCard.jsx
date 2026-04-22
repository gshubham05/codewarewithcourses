"use client";

import { useState } from "react";
import Link from "next/link";

export default function BlogCard({ blog, index }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group relative block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-white"
      aria-label={blog.title}
    >
      {/* Image container */}
      <div className="relative w-full h-52 sm:h-56 md:h-60 bg-gray-100 overflow-hidden">

        {/* Loading skeleton */}
        {imgLoading && !imgError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse z-10">
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <svg className="w-10 h-10 animate-spin text-gray-300" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="text-xs font-medium">Loading Picture...</span>
            </div>
          </div>
        )}

        {/* Error fallback */}
        {imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 z-10">
            <div className="text-4xl mb-2">🖼️</div>
            <span className="text-xs text-gray-500 font-medium">Loading Picture...</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className={`w-full h-full object-cover group-hover:scale-110 transition duration-500 ${imgLoading ? "opacity-0" : "opacity-100"}`}
            onLoad={() => setImgLoading(false)}
            onError={() => { setImgLoading(false); setImgError(true); }}
          />
        )}
      </div>

      {/* Trending badge */}
      {index < 3 && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full shadow z-20">
          🔥 Trending
        </span>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4 z-20">
        <h3 className="text-white text-sm sm:text-base font-semibold text-center leading-snug">
          {blog.title}
        </h3>
      </div>

      {/* Title below image (visible without hover on mobile) */}
      <div className="p-4 sm:hidden">
        <h3 className="text-gray-800 text-sm font-semibold leading-snug line-clamp-2">{blog.title}</h3>
      </div>
    </Link>
  );
}
