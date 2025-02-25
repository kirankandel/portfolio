"use client";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#f8f5e9]">
      <div className="text-center">
        <h1 className="text-6xl font-[var(--font-playfair)] mb-6 text-amber-900">404</h1>
        <p className="text-xl font-[var(--font-playfair)] text-gray-700">The page you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    </div>
  );
}