import React from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  const brands = [
    { image: "Image/samsung.png", name: "Samsung", path: "/sam" },
    { image: "Image/iphonel.png", name: "iPhone", path: "/sam" },
    { image: "Image/Moto.png", name: "Motorola", path: "/sam" },
    { image: "Image/realme.jpg", name: "Realme", path: "/sam" },
    // { image: "Image/Redmi.png", name: "Redmi", path: "/sam" },
    // { image: "Image/vivol.png", name: "Vivo", path: "/sam" },
    // { image: "Image/oppo.png", name: "Oppo", path: "/sam" },
    // { image: "Image/google.jpg", name: "Google", path: "/sam" },
    // { image: "Image/infix.png", name: "Infinix", path: "/sam" },
    // { image: "Image/iqoo.png", name: "IQOO", path: "/sam" },
  ];

  const latestPhones = [
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/c/r/-original-imahekthy5tjfygh.jpeg?q=70",
      name: "Samsung Galaxy Z Fold 7 (Silver Shadow, 512 GB)",
      
      specs: [
        "12 GB RAM | 512 GB ROM",
        "20.32 cm (8 inch) QXGA+ Display",
        "200MP + 12MP + 10MP | 10MP Front Camera",
        "4400 mAh Battery",
        "Snapdragon 8 Elite for Galaxy Processor",
      ],
      warranty:
        "1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories",
      price: "₹1,86,999",
    },

    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/s/h/-original-imahekth9du9ynzx.jpeg?q=70",
      name: "Samsung Galaxy Z Flip 7 (Zet Black , 512 GB)",
      
      specs: [
        "12 GB RAM | 512 GB ROM",
        "17.53 cm (6.9 inch) Full HD+ Display",
        "50MP + 12MP  | 10MP Front Camera",
        "4300 mAh Battery",
        "Exynos 2500 Processor",
      ],
      warranty:
        "1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories",
      price: "₹1,21,999",
    }, 

    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70",
      name: "IPhone 16 (Teal, 512 GB)",
      
      specs: [
        "8 GB RAM | 128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "48MP + 12MP  | 12MP Front Camera",
        "A18 Chip, 6 Core Processor Processor",
      ],
      warranty:
        "1 Year Manufacturer Warranty for Device and 1 Year Warranty for In-Box Accessories",
      price: "₹74,999",
    },

    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/l/1/-original-imahbfd4cgh53kmh.jpeg?q=70",
      name: "Oppo K13 5G (Prism Black, 128 GB)",
     
      specs: [
        "8 GB RAM | 128 GB ROM",
        "16.94 cm (6.67 inch) Display",
        "50MP + 2MP  | 16MP Front Camera",
        "7000 mAh Battery",
        "Snapdragon 6 Gen 4 Processor",
      ],
      warranty:
        "1 Year Manufacturer Warranty for Device and 6 Month Warranty for In-Box Accessories",
      price: "₹17,999",
    },
    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/y/h/-original-imahezk2wsz5mddr.jpeg?q=70",
      name: "Vivo Y400 5G (Glam White, 128 GB)",
      
      specs: [
        "8 GB RAM | 128 GB ROM",
        "17.12 cm (6.74 inch) Display",
        "50MP + 2MP  | 32MP Front Camera",
        "6000 mAh Battery",
        "4 Gen 2 Processor",
      ],
      warranty:
        "1 Year Manufacturer Warranty for Device and 6 Month Warranty for In-Box Accessories",
      price: "₹21,999",
    },

    {
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/n/f/z10-lite-5g-d2025a-iqoo-original-imahdgdjaxfgxnm3.jpeg?q=70",
      name: "IQOO Z10 Lite 5G (Cyber Green, 128 GB)",
      
      specs: [
        "4 GB RAM | 128 GB ROM",
        "17.12 cm (6.74 inch) Display",
        "50MP + 2MP  | 5MP Front Camera",
        "6000 mAh Battery",
        "Dimensity 6300 5G Processor",
      ],
      warranty:
        "1 Year Manufacturer Warranty for Device and 6 Month Warranty for In-Box Accessories",
      price: "₹10,290",
    },
  ];

  return (
    <div className="p-6 mt-25 md:mt-50 border-2 border-black bg-amber-100 w-[360px] md:w-[1520px]">
      {/* Brand Grid */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shop by Brand</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        {brands.map((brand, index) => (
          <Link to={brand.path} key={index}>
            <div className="bg-white border border-blue-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center justify-center p-6">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-20 w-auto object-contain mb-3"
              />
              <p className="text-md font-medium text-gray-800">{brand.name}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Latest Launched Phones */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Latest Launched Phone
      </h2>
      <div className="flex flex-wrap gap-6">
        {latestPhones.map((phone, i) => (
          <LatestPhoneCard key={i} phone={phone} />
        ))}
      </div>
    </div>
  );
};

// Reusable Card Component
const LatestPhoneCard = ({ phone }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 w-full md:w-[380px]">
      <img
        src={phone.img}
        alt={phone.name}
        className="h-48 w-auto mx-auto object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {phone.name}
      </h3>
      <ul className="list-disc list-inside text-gray-600 mb-3 text-sm">
        {phone.specs.map((spec, idx) => (
          <li key={idx}>{spec}</li>
        ))}
      </ul>
      <p className="text-sm text-gray-500 mb-3">{phone.warranty}</p>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-green-600">{phone.price}</span>
        <button className="px-4 py-2 bg-blue-600 text-black rounded-lg shadow hover:bg-blue-700 transition">
          Buy Now
        </button>
        
      </div>
    </div>
  );
};

export default Mobile;