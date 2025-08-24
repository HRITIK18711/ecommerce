import React from 'react';

const Mobile = () => {
  const brands = [
    { image: 'Image/samsung.png', name: 'Samsung' },
    { image: 'Image/iphonel.png', name: 'iPhone' },
    { image: 'Image/Moto.png', name: 'Motorola' },
    { image: 'Image/realme.jpg', name: 'Realme' },
    { image: 'Image/Redmi.png', name: 'Redmi' },
    { image: 'Image/vivol.png', name: 'Vivo' },
    { image: 'Image/oppo.png', name: 'Oppo' },
    { image: 'Image/google.jpg', name: 'Google' },
    { image: 'Image/infix.png', name: 'Infinix' },
    { image: 'Image/iqoo.png', name: 'IQOO' },
  ];

  const latestPhones = [1, 2, 3, 4, 5];

  return (
    <div className="p-4 mt-30 md:mt-50 border-2 border-black bg-amber-200  w-[360px] md:w-[1520px]">
      {/* Brand Grid */}
      <div className="md:ml-10 ml-2  grid grid-cols-1 sm:grid-cols-2 bg-cyan-100 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-5">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center p-6"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-24 w-auto object-contain mb-4"
            />
            <p className="text-lg font-medium text-gray-800">{brand.name}</p>
          </div>
        ))}
      </div>

      {/* Latest Launched Phones */}
      <div className="border border-blue-300 p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Latest Launched Phone</h2>
        <div className="flex flex-wrap gap-4">
          {latestPhones.map((phone, index) => (
            <div
              key={index}
              className="w-20 h-24 border border-blue-300 rounded-md flex items-center justify-center text-lg bg-white hover:bg-blue-50 transition"
            >
              {phone}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobile;