import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mobiles = [
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

  // 🔁 Update itemsPerView on screen resize
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const nextSlide = () => {
    if (currentIndex < mobiles.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full bg-white py-6 relative">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold px-4 sm:px-6 md:px-16 mb-4">
        TV and Appliances
      </h2>

      <div className="relative px-4 sm:px-6 md:px-16">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 sm:p-3 rounded-full shadow-md disabled:opacity-40"
        >
          <FaChevronLeft />
        </button>

        {/* Cards Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              width: `${(mobiles.length * 100) / itemsPerView}%`,
            }}
          >
            {mobiles.map((mobile, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300 p-2"
              >
                <img
                  src={mobile.img}
                  alt={mobile.name}
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-contain"
                />
                <p className="mt-2 text-sm sm:text-base font-medium text-gray-900 text-center">
                  {mobile.name}
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 font-semibold text-center">
                  {mobile.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= mobiles.length - itemsPerView}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-2 sm:p-3 rounded-full shadow-md disabled:opacity-40"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}