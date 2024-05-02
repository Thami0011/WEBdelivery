import React from "react";
import { useState, useEffect, ReactElement } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

interface CarouselmoeProps {
  children: ReactElement[]; // Specify that children should be ReactElement instances
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carouselmoe({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}: CarouselmoeProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr(curr => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr(curr => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [next, autoSlideInterval]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="flex w-full h-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {React.cloneElement(slide, { className: "w-full h-full object-cover" })}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {slides.map((_, index) => (
          <div key={index} className={`mx-1 w-3 h-3 rounded-full ${curr === index ? 'bg-white' : 'bg-gray-500 bg-opacity-50'}`} />
        ))}
      </div>
    </div>
  );
}
