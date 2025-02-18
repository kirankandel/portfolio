"use client"
import { BookOpenIcon, BeakerIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;
  const [scrollDirection, setScrollDirection] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      const scrollThreshold = 50;
      const currentScrollY = window.scrollY;
      const direction = e.deltaY > 0 ? 1 : -1;

      if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
        if (currentPage + direction >= 0 && currentPage + direction < totalPages) {
          setCurrentPage(prev => prev + direction);
          setScrollDirection(direction);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentPage, lastScrollY]);

  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      rotateY: 0,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      rotateY: direction < 0 ? 90 : -90,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const pageTransition = {
    type: "spring",
    damping: 25,
    stiffness: 120
  };

  const pages = [
    // Cover Page
    <motion.div key="cover" className="w-full h-screen bg-[#f8f5e9] p-20 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-serif mb-6">
          The Journey of
          <span className="block mt-4 text-amber-900">Kiran Kandel</span>
        </h1>
        <p className="text-xl font-serif italic text-gray-700 max-w-2xl mx-auto mb-8">
          &ldquo;Every line of code is a step forward, every project a new destination.&rdquo;
        </p>
        <div className="flex justify-center gap-6">
          <BookOpenIcon className="w-8 h-8 text-amber-900" />
          <BeakerIcon className="w-8 h-8 text-amber-900" />
          <CodeBracketIcon className="w-8 h-8 text-amber-900" />
        </div>
      </div>
    </motion.div>,

    // Chapter I: The Beginning
    <motion.div key="chapter1" className="w-full h-screen bg-white/50 p-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-8">Chapter I: The Beginning</h2>
        <p className="text-lg font-serif leading-relaxed mb-6">
          A software engineer embarking on a quest through the digital realm,
          crafting solutions and exploring the vast landscapes of technology.
        </p>
        <p className="text-lg font-serif leading-relaxed">
          From the halls of Tribhuvan Vishwavidalaya to the frontiers of software development,
          each day brings new challenges and opportunities for growth.
        </p>
      </div>
    </motion.div>,

    // Chapter II: The Adventures (Timeline)
    <motion.div key="chapter2" className="w-full h-screen bg-[#f8f5e9] p-20 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-16">Chapter II: The Adventures</h2>
        {/* ... Timeline content ... */}
      </div>
    </motion.div>,

    // Chapter III: The Expeditions (Projects)
    <motion.div key="chapter3" className="w-full h-screen bg-white/50 p-20 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-16">Chapter III: The Expeditions</h2>
        {/* ... Projects content ... */}
      </div>
    </motion.div>
  ];

  return (
    <div className="relative h-screen overflow-hidden perspective-1000">
      <AnimatePresence initial={false} custom={scrollDirection}>
        <motion.div
          key={currentPage}
          custom={scrollDirection}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
          className="absolute inset-0"
          style={{ perspective: "1000px" }}
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>

      {/* Page indicator */}
      <div className="absolute bottom-10 right-10 text-amber-900 font-serif">
        Page {currentPage + 1} of {totalPages}
      </div>
    </div>
  );
}
