"use client"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Cover from '@/components/Cover';
import Introduction from '@/components/Introduction';
import '../styles/page-transitions.css';

const CareerMap = dynamic(() => import('@/components/CareerMap'), {
  ssr: false
});

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const pages = [
    <Cover key="cover" />,
    <Introduction key="chapter1" />,
    <div key="journey" className="w-full h-screen">
      <CareerMap />
    </div>
  ];

  const totalPages = pages.length;

  const changePage = (direction: number) => {
    if (isTransitioning) return;
    
    const nextPage = currentPage + direction;
    if (nextPage >= 0 && nextPage < totalPages) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(nextPage);
        setIsTransitioning(false);
      }, 400);
    }
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1;
        changePage(direction);
      }, 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        changePage(-1);
      } else if (e.key === 'ArrowDown') {
        changePage(1);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [currentPage, totalPages, isTransitioning]);

  return (
    <div className="relative h-screen overflow-hidden page-container">
      <div className={`absolute inset-0 page-turn ${isTransitioning ? 'page-turn-exit' : 'page-turn-enter'}`}>
        {pages[currentPage]}
      </div>

      {currentPage > 0 && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
          <ChevronUpIcon className="w-8 h-8 text-primary-dark" />
        </div>
      )}
      
      {currentPage < totalPages - 1 && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
          <ChevronDownIcon className="w-8 h-8 text-primary-dark" />
        </div>
      )}
    </div>
  );
}
