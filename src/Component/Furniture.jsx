import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const appliances = [
  { img: "/Image/f1.webp", name: "Mattresses", price: "From ₹2,990" },
  { img: "/Image/f2.webp", name: "Sofa & Sectional", price: "From ₹7,999" },
  { img: "/Image/f3.webp", name: "Office Study Chair", price: "From ₹1,890" },
  { img: "/Image/f4.webp", name: "Beds", price: "From ₹1,790" },
  { img: "/Image/f5.webp", name: "TV Units", price: "₹1,249" },
  { img: "/Image/f6.webp", name: "Sofa Set", price: "From ₹21,999*" },
];

export default function Furniture() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Responsive itemsPerView
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // tablet
      } else {
        setItemsPerView(4); // desktop
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const nextSlide = () => {
    if (currentIndex < appliances.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full bg-indigo-200 py-6 md:ml-[300px] mt-2 relative">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold px-6 md:px-16 mb-4 text-black">
       Furniture Deals
      </h2>

      {/* Slider Container */}
      <div className="relative px-6 md:px-16">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
                     bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md 
                     disabled:opacity-40"
        >
          <FaChevronLeft />
        </button>

        {/* Cards Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {appliances.map((appliance, index) => (
              <div
                key={index}
                className="bg-white flex flex-col items-center cursor-pointer 
                           hover:scale-105 transition-transform duration-300"
                style={{ minWidth: `${100 / itemsPerView}%` }}
              >
                <img
                  src={appliance.img}
                  alt={appliance.name}
                  className="w-full h-[200px] md:h-[220px] object-contain"
                />
                <p className="mt-2 text-sm md:text-base font-medium text-gray-900 text-center">
                  {appliance.name}
                </p>
                <p className="text-sm md:text-base text-gray-700 font-semibold text-center">
                  {appliance.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= appliances.length - itemsPerView}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
                     bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md 
                     disabled:opacity-40"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}