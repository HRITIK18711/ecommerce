import React from 'react';

const samsungPhones = [
  {
    id: 4,
    name: 'Samsung Galaxy Z Fold 7 (Silver Shadow, 512 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/c/r/-original-imahekthy5tjfygh.jpeg?q=70',
    rating: '4.6',
    ratingsCount: '59 Ratings & 0 Reviews',
    specs: [
      '12 GB RAM | 512 GB ROM ',
      '20.32 cm (8 inch) QXGA+ Display',
      '200MP + 12MP + 10MP | 10MP Front Camera',
      '4400 mAh Battery',
      'Snapdragon 8 Elite for Galaxy Processor',
    ],
    price: '₹1,86,999',
  },
  {
    id: 5,
    name: 'Samsung Galaxy Z Flip 7 (JetBlack, 512 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/s/s/h/-original-imahekth9du9ynzx.jpeg?q=70',
    rating: '4.4',
    ratingsCount: '20 Ratings & 0 Reviews',
    specs: [
      '12 GB RAM | 512 GB ROM',
      '17.53 cm (6.9 inch) Full HD+ Display',
      '50MP + 12MP  | 10MP Front Camera',
      '4300 mAh Battery',
      'Exynos 2500 Processor',
    ],
    price: '₹1,21,999',
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 5G (Marble Gray, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/g/f/-original-imahf42ubadfbyde.jpeg?q=70',
    rating: '4.6',
    ratingsCount: '7603 Ratings & 415 Reviews',
    specs: [
      '8 GB RAM | 128 GB ROM ',
      '15.75 cm (6.2 inch) Full HD+ Display',
      '50MP + 10MP + 12MP | 12MP Front Camera',
      '4000 mAh Battery',
      'Samsung Exynos 2400 Processor',
    ],
    price: '₹46,999',
    originalPrice: '₹74,999',
    discount: '37% off',
  },
  {
    id: 1,
    name: 'Samsung Galaxy F06 5G (Lit Violet, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/u/t/-original-imahbk7pnjgxudgz.jpeg?q=70',
    rating: '4.1',
    ratingsCount: '19,312 Ratings & 1,266 Reviews',
    specs: [
      '4 GB RAM | 128 GB ROM | Expandable Upto 1500 GB',
      '17.02 cm (6.7 inch) HD+ Display',
      '50MP + 2MP | 8MP Front Camera',
      '5000 mAh Battery',
      'Dimensity 6300 Processor',
    ],
    price: '₹9,499',
    originalPrice: '₹13,999',
    discount: '32% off',
  },
  {
    id: 2,
    name: 'Samsung Galaxy A35 5G (Awesome Navy, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/g/h/-original-imahbzknzpd3zwrv.jpeg?q=70',
    rating: '4.3',
    ratingsCount: '25,124 Ratings & 1,621 Reviews',
    specs: [
      '8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
      '16.76 cm (6.6 inch) Full HD+ Display',
      '50MP + 8MP + 5MP | 13MP Front Camera',
      '5000 mAh Battery',
      'Samsung Exynos 1380 Processor',
    ],
    price: '₹21,999',
    originalPrice: '₹33,999',
    discount: '35% off',
  },
];

const Samsung = () => {
  return (
    <div className="p-6 mt-30 bg-cyan-100 md:mt-50 w-[360px] md:w-[1520px] space-y-6">
      {samsungPhones.map((phone) => (
        <div
          key={phone.id}
          className="flex flex-col md:flex-row border rounded-lg shadow-md hover:shadow-lg transition p-4 gap-4 bg-white"
        >
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-40 flex justify-center items-center">
            <img
              src={phone.image}
              alt={phone.name}
              className="h-40 object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-grow space-y-2">
            <h2 className="text-lg font-semibold text-blue-700 hover:underline cursor-pointer">
              {phone.name}
            </h2>
            <div className="flex items-center gap-2">
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                {phone.rating} ★
              </span>
              <span className="text-sm text-gray-600">{phone.ratingsCount}</span>
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {phone.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
            <p className="text-xs text-gray-500">
              * 1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories
            </p>
          </div>

          {/* Pricing + Buttons */}
          <div className="flex flex-col justify-between items-end gap-3 text-right">
            <div>
              <p className="text-xl font-bold text-black">{phone.price}</p>
              {phone.originalPrice && (
                <p className="text-sm text-gray-500 line-through">{phone.originalPrice}</p>
              )}
              {phone.discount && (
                <p className="text-sm text-green-600 font-semibold">{phone.discount}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-red-600 font-semibold rounded-md">
                Add to Cart
              </button>
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-red-600 font-semibold rounded-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Samsung;