import React from "react";

export default function New_product() {
  return (
    <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Home Decor & Furnishings */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">
          Home Decor & Furnishings
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          <div className="rounded-xl p-3 shadow hover:shadow-md transition">
            <img
              src="/Image/wallclock.webp"
              alt="Wall Clock"
              className="w-full h-28 sm:h-32 object-contain"
            />
            <p className="mt-2 font-medium text-sm sm:text-base">Wall Clocks</p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 50% Off</p>
          </div>
          <div className="rounded-xl p-3 shadow hover:shadow-md transition">
            <img
              src="/Image/torch.webp"
              alt="Torches"
              className="w-full h-28 sm:h-32 object-contain"
            />
            <p className="mt-2 font-medium text-sm sm:text-base">Torches</p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 50% Off</p>
          </div>
          <div className="rounded-xl p-3 shadow hover:shadow-md transition">
            <img
              src="/Image/chopper.webp"
              alt="Choppers"
              className="w-full h-28 sm:h-32 object-contain"
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Choppers & Slicers
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 50% Off</p>
          </div>
          <div className="rounded-xl p-3 shadow hover:shadow-md transition">
            <img
              src="/Image/mosquito.webp"
              alt="Mosquito Nets"
              className="w-full h-28 sm:h-32 object-contain"
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Mosquito Nets
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 50% Off</p>
          </div>
        </div>
      </div>

      {/* Monsoon Ready Styles */}
      <div className="space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold">
          Monsoon Ready Styles
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          <div className="rounded-xl p-3 shadow hover:shadow-md transition">
            <img
              src="/Image/slippers.webp"
              alt="Slippers"
              className="w-full h-28 sm:h-32 object-contain"
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Men’s Slippers & Flip Flops
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 70% Off</p>
          </div>
          <div className="rounded-xl p-3 shadow hover:shadow-md transition">
            <img
              src="/Image/watch.webp"
              alt="Watch"
              className="w-full h-28 sm:h-32 object-contain"
            />
            <p className="mt-2 font-medium text-sm sm:text-base">Women Saree</p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 90% Off</p>
          </div>
          <div className="rounded-xl p-3 shadow hover:shadow-md transition">
            <img
              src="/Image/shoes.webp"
              alt="Shoes"
              className="w-full h-28 sm:h-32 object-contain"
            />
            <p className="mt-2 font-medium text-sm sm:text-base">
              Men’s Casual Shoes
            </p>
            <p className="text-green-600 text-xs sm:text-sm">Min. 70% Off</p>
          </div>
          <div className="rounded-xl p-3 shadow hover:shadow-md transition">
            <img
              src="/Image/tshirt.webp"
              alt="T-shirt"
              className="w-full h-28 sm:h-32 object-contain"
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