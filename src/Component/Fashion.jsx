import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const fashions = [
  { img: "https://rukminim2.flixcart.com/image/420/420/xif0q/shirt/e/k/c/l-combo-st-black-white-combraided-original-imahauh2xbyycxvg.jpeg?q=60", name: "Men's Casual Shirt", price: "From ₹299*" },
  { img: "https://rukminim2.flixcart.com/image/240/240/xif0q/shoe/s/c/x/-original-imagn9na9ysruzgs.jpeg?q=60", name: "Sneakers", price: "From ₹1499*" },
  { img: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/f/i/i/xxl-floral-print-3-set-subhan-textiles-original-imahefmjv6ufw7v6.jpeg?q=70", name: "Women's Kurti", price: "From ₹499*" },
  { img: "https://rukminim2.flixcart.com/image/240/240/j2w6jrk0/hand-messenger-bag/d/2/u/hpbv468022k3-hpbv468022k3-satchel-lavie-original-imaeu56n9vmgwhnk.jpeg?q=60", name: "Handbags", price: "Grab Now" },
  { img: "https://rukminim2.flixcart.com/image/420/420/xif0q/watch/o/m/d/1-watch-with-arabic-numerals-matte-black-minimalist-analog-watch-original-imahe35u7nzgdgqb.jpeg?q=60", name: "Watches", price: "From ₹999*" },
  { img: "https://rukminim2.flixcart.com/image/612/612/xif0q/sunglass/v/5/l/small-44-47-medium-48-52-large-53-58-free-size-55-mm-sgl-tg-original-imahacwztj7qrbek.jpeg?q=70", name: "Sunglasses", price: "From ₹199*" },
];

export default function Fashion() {
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
    if (currentIndex < fashions.length - itemsPerView) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-[360px] md:w-full mt-5 border-black border-1 bg-pink-200">
      <h2 className="text-xl text-black md:text-2xl font-bold px-6 md:px-16 mb-4">
        Best of Fashion
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
            {fashions.map((fashion, index) => (
              <div
                key={index}
                style={{ minWidth: `${100 / itemsPerView}%` }}
                className="bg-white flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={fashion.img}
                  alt={fashion.name}
                  className="w-full h-[220px] object-contain"
                />
                <p className="mt-2 text-sm md:text-base font-medium text-gray-900 text-center">
                  {fashion.name}
                </p>
                <p className="text-sm md:text-base text-gray-700 font-semibold text-center">
                  {fashion.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          disabled={currentIndex >= fashions.length - itemsPerView}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-md disabled:opacity-40"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
