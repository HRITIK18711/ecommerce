import React from "react";

const categories = [
  { icon: "/Image/p1.jpg", label: "Mobiles & Tablets" },
  { icon: "/Image/p2.png", label: "TVs & Appliances" },
  { icon: "/Image/p3.png", label: "Electronics" },
  { icon: "/Image/p4.png", label: "Fashion" },
  { icon: "/Image/p5.png", label: "Home & Kitchen" },
  { icon: "/Image/p6.png", label: "Furniture" },
  { icon: "/Image/p7.png", label: "Grocery" },
];

export default function Card_Header() {
  return (
    <div className="w-full bg-white shadow-sm z-30 mt-16">
      <div
        className="
          grid 
          grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 
          gap-4 sm:gap-6 px-4 md:px-10 py-6
        "
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer group"
          >
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
              <img
                src={cat.icon}
                alt={cat.label}
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Label */}
            <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
              {cat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}