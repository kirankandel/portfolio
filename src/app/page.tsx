"use client"
import { BookOpenIcon, BeakerIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const CareerMap = dynamic(() => import('@/components/CareerMap'), {
  ssr: false
});

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  let totalPages = 0;

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;

      if (currentPage + direction >= 0 && currentPage + direction < totalPages) {
        setCurrentPage(prev => prev + direction);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' && currentPage > 0) {
        setCurrentPage(prev => prev - 1);
      } else if (e.key === 'ArrowDown' && currentPage < totalPages - 1) {
        setCurrentPage(prev => prev + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, totalPages]);

  const pages = [
    // Cover Page (keeping existing cover page)
    <div key="cover" className="w-full h-screen bg-[#f8f5e9] p-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl mb-6">
          <span className="block text-[#8B4513]">Kiran Kandel</span>
        </h1>
        <p className="text-xl italic text-gray-700 max-w-2xl mx-auto mb-8">
          &ldquo;Cogito Ergo Sum&rdquo;
        </p>
        <div className="flex justify-center gap-6">
          <BookOpenIcon className="w-8 h-8 text-[#8B4513]" />
          <BeakerIcon className="w-8 h-8 text-[#8B4513]" />
          <CodeBracketIcon className="w-8 h-8 text-[#8B4513]" />
        </div>
      </div>
    </div>,

    // Chapter I: The Beginning
    <div key="chapter1" className="w-full h-screen bg-white/50 p-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">Chapter I: The Beginning</h2>
        <p className="text-lg leading-relaxed mb-6">
          A software engineer embarking on a quest through the digital realm,
          crafting solutions and exploring the vast landscapes of technology.
        </p>
        <p className="text-lg leading-relaxed">
          From the halls of Tribhuvan Vishwavidalaya to the frontiers of software development,
          each day brings new challenges and opportunities for growth.
        </p>
      </div>
    </div>,
    // Chapter II: The Journey
    <div key="journey" className="w-full h-screen">
      <CareerMap />
    </div>
  ];

  // Update totalPages constant at the top to match the new number of pages
  totalPages = pages.length;

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        {pages[currentPage]}
      </div>

      {/* Navigation Indicators */}
      {currentPage > 0 && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronUpIcon className="w-8 h-8 text-[#8B4513]" />
        </div>
      )}
      
      {currentPage < totalPages - 1 && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-[#8B4513]" />
        </div>
      )}
    </div>
  );
}
