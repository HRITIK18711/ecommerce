import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const appliances = [
  { img: "/Image/t1.jpg", name: "Samsung TVs", price: "From ₹10,599*" },
  { img: "/Image/t2.jpg", name: "Washing Machine", price: "From ₹9999*" },
  { img: "/Image/t3.jpg", name: "Refrigerators", price: "From ₹9,999*" },
  { img: "/Image/t4.jpg", name: "Kitchen Essentials", price: "From ₹1249" },
  { img: "/Image/t5.jpg", name: "Home Essentials", price: "Shop Now!" },
  { img: "/Image/t6.jpg", name: "AC", price: "From ₹39,999*" },
];

export default function Tv_Appliance() {
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
    <div className="w-100 md:w-full bg-cyan-200 py-6 md:ml-[300px] mt-2 relative">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold px-6 md:px-16 mb-4 text-black">
        TV and Appliances
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