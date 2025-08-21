import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mobiles = [
  { img: "/Image/m1.jpg", name: "Vivo T4x 5G", price: "From ₹13,499*" },
  { img: "/Image/m2.jpg", name: "Motorola Edge 60 Fusion", price: "From ₹20,999*" },
  { img: "/Image/m3.jpg", name: "Vivo T4 5G", price: "From ₹20,499*" },
  { img: "/Image/m4.jpg", name: "Samsung Galaxy S25 Ultra", price: "From ₹1,17,999*" },
  { img: "/Image/m5.jpg", name: "Iphone 16", price: "From ₹69,999*" },
  { img: "/Image/m6.jpg", name: "Galaxy S24 FE 5G", price: "From ₹39,999*" },
];

export default function Mobile_Component() {
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
      <h2 className="text-xl md:text-2xl font-bold px-6 md:px-16 mb-4">
        Best Deals on Smartphones
      </h2>

      {/* Slider Container */}
      <div className="relative px-6 md:px-16">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md disabled:opacity-40"
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
            {mobiles.map((mobile, index) => (
              <div
                key={index}
                className={`min-w-[${100 / itemsPerView}%] bg-white flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300`}
                style={{ minWidth: `${100 / itemsPerView}%` }}
              >
                <img
                  src={mobile.img}
                  alt={mobile.name}
                  className="w-full h-[220px] object-contain"
                />
                <p className="mt-2 text-sm md:text-base font-medium text-gray-900 text-center">
                  {mobile.name}
                </p>
                <p className="text-sm md:text-base text-gray-700 font-semibold text-center">
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
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md disabled:opacity-40"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}