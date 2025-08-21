import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { src: "/Image/zfold7.png", name: "Samsung Galaxy Z Fold 7" },
  { src: "/Image/iphone16.jpg", name: "iPhone 16" },
  { src: "/Image/vivov60.jpg", name: "Vivo V60" },
  { src: "/Image/opo.png", name: "Oppo Flagship" },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden mt-[5px]">
      {/* Slide Image */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] lg:h-[520px]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].name}
          className="w-full h-full object-cover sm:object-contain bg-black transition-all duration-500 ease-in-out"
        />

        {/* Overlay Name */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2 sm:p-4 text-center">
          <h2 className="text-white text-base sm:text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg">
            {images[currentIndex].name}
          </h2>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrev}
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-1 sm:p-2 rounded-full shadow"
      >
        <FaChevronLeft size={18} className="sm:w-5 sm:h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 p-1 sm:p-2 rounded-full shadow"
      >
        <FaChevronRight size={18} className="sm:w-5 sm:h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}