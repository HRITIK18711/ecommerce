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
      {/* Wrapper */}
      <div
        className="
          flex md:grid md:grid-cols-4 lg:grid-cols-7 
          gap-6 px-4 md:px-10 py-6 
          overflow-x-auto md:overflow-x-hidden 
          scrollbar-hide
        "
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer group min-w-[90px] md:min-w-0"
          >
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <img
                src={cat.icon}
                alt={cat.label}
                className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Label */}
            <p className="mt-2 md:mt-3 text-xs md:text-sm lg:text-base font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
              {cat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}