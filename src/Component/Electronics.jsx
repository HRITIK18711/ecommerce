import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mobiles = [
  { img: "/Image/el1.webp", name: "Best Truewirelss H...", price: "Grab Now" },
  { img: "/Image/el7.webp", name: "Mouse", price: "From ₹299*" },
  { img: "/Image/el2.webp", name: "Monitors", price: "From ₹7949" },
  { img: "/Image/el3.webp", name: "Best Selling Mobile S...", price: "From ₹499*" },
  { img: "/Image/el8.webp", name: "Asus Monitors", price: "From ₹14999" },
  { img: "/Image/el6.webp", name: "Projector", price: "From ₹6990" },
];

export default function Electronics() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // ✅ Responsive logic
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // tablet
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3); // small desktop
      } else {
        setItemsPerView(4); // large desktop
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
    <div className="w-[360px] md:w-full mt-5 border-black border-1 bg-blue-300 ">
      <h2 className="text-xl text-black md:text-2xl font-bold px-6 md:px-16 mb-4">
        Best of Electronics
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
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {mobiles.map((mobile, index) => (
              <div
                key={index}
                style={{ minWidth: `${100 / itemsPerView}%` }} // ✅ fixed responsive card width
                className="bg-white flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
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