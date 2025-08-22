import React from "react";

export default function New_product() {
  // Common card and image styling
  const cardClass =
    "rounded-xl p-3 shadow hover:shadow-md transition transform hover:scale-105 flex flex-col items-center text-center min-h-[180px] bg-white";
  const imgClass = "w-full h-28 sm:h-32 object-contain";

  return (
    <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto bg-indigo-200">
      {/* ---------------------------
          Home Decor & Furnishings
      --------------------------- */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">
          Home Decor & Furnishings
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Wall Clock */}
          <div className={cardClass}>
            <img
              src="/Image/wallclock.webp"
              alt="Wall Clock"
              className={imgClass}
            />
            <p className="mt-2 font-medium text-sm sm:text-base">Wall Clocks</p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 50% Off</p>
          </div>

          {/* Torches */}
          <div className={cardClass}>
            <img
              src="/Image/torch.webp"
              alt="Torches"
              className={imgClass}
            />
            <p className="mt-2 font-medium text-sm sm:text-base">Torches</p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 50% Off</p>
          </div>

          {/* Choppers */}
          <div className={cardClass}>
            <img
              src="/Image/chopper.webp"
              alt="Choppers & Slicers"
              className={imgClass}
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Choppers & Slicers
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 50% Off</p>
          </div>

          {/* Mosquito Nets */}
          <div className={cardClass}>
            <img
              src="/Image/mosquito.webp"
              alt="Mosquito Nets"
              className={imgClass}
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Mosquito Nets
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 50% Off</p>
          </div>
        </div>
      </div>

      {/* ---------------------------
          Monsoon Ready Styles
      --------------------------- */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">
          Monsoon Ready Styles
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Slippers */}
          <div className={cardClass}>
            <img
              src="/Image/slippers.webp"
              alt="Men’s Slippers & Flip Flops"
              className={imgClass}
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Men’s Slippers & Flip Flops
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 70% Off</p>
          </div>

          {/* Saree */}
          <div className={cardClass}>
            <img
              src="/Image/watch.webp"
              alt="Women Saree"
              className={imgClass}
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Women Saree
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 90% Off</p>
          </div>

          {/* Shoes */}
          <div className={cardClass}>
            <img
              src="/Image/shoes.webp"
              alt="Men’s Casual Shoes"
              className={imgClass}
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Men’s Casual Shoes
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 70% Off</p>
          </div>

          {/* T-shirts */}
          <div className={cardClass}>
            <img
              src="/Image/tshirt.webp"
              alt="Men's T-shirts"
              className={imgClass}
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Men's T-shirts
            </p>
            <p className="text-green-600 text-xs sm:text-sm">In Focus Now</p>
          </div>
        </div>
      </div>
    </div>
  );
}