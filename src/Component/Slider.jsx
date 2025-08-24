import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  
  { src: "/Image/iphone16.jpg", name: "iPhone 16" },
  { src: "/Image/vivov60.jpg", name: "Vivo V60" },
  
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
    <div className="relative w-full overflow-hidden mt-5 border-black border-1">
      {/* Slide Image */}
      <div className="relative w-full h-[220px] sm:h-[200px] md:h-[200px] lg:h-[650px] xl:h-[750px]">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].name}
          className="w-full h-full object-cover bg-black transition-all duration-500 ease-in-out"
        />

        {/* Overlay Name */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent p-3 sm:p-6 text-center">
          <h2 className="text-white text-base sm:text-xl md:text-3xl lg:text-5xl font-bold drop-shadow-lg">
            {images[currentIndex].name}
          </h2>
        </div>
      </div>

    </div>
  );
}