// Card_Header.jsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { icon: "/Image/p1.jpg", label: "Mobiles", path: "/mobile" },
  { icon: "/Image/p2.png", label: "TVs & Appliances", path: "/" },
  { icon: "/Image/p3.png", label: "Electronics", path: "/" },
  { icon: "/Image/p4.png", label: "Fashion", path: "/" },
  { icon: "/Image/p6.png", label: "Furniture", path: "/" },
  { icon: "/Image/p7.png", label: "Grocery", path: "/" },
];

export default function Card_Header() {
  return (
    <div className="relative w-full mt-23 md:mt-50 bg-cyan-200 border-1 border-black">
      <div
        className="
          grid grid-cols-3 
          sm:grid-cols-4 
          md:grid-cols-5 
          lg:grid-cols-7
          gap-4 sm:gap-6 md:gap-8 
          px-4 md:px-10 lg:px-20 py-6
        "
      >
        {categories.map((cat, index) => (
          <Link
            to={cat.path}
            key={index}
            className="flex flex-col items-center justify-center cursor-pointer group"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <img
                src={cat.icon}
                alt={cat.label}
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors">
              {cat.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
