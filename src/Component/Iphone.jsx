import React from 'react';
import { Link } from 'react-router-dom';
const Iphonephone = [
  {
    id: 4,
    name: 'Apple iPhone 16 (Teal, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/k/a/-original-imah4jyfyrpxfhtk.jpeg?q=70',
    rating: '4.6',
    ratingsCount: '19,106 Ratings & 790 Reviews',
    specs: [
      '128 GB ROM ',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '48MP + 12MP | 12MP Front Camera',
      'A18 Chip, 6 Core Processor Processor',
    ],
    price: '₹74,900',
  },
  {
    id: 5,
    name: 'Apple iPhone 16e (Black, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/p/c/-original-imah9khhnfvstqka.jpeg?q=70',
    rating: '4.5',
    ratingsCount: '1,506 Ratings & 100 Reviews',
    specs: [
      '128 GB ROM ',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '48MP | 12MP Front Camera',
      'A18 Chip, 6 Core Processor Processor',
    ],
    price: '₹74,900',
  },
  {
    id: 3,
    name: 'Apple iPhone 16 Pro (Desert Titanium, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/1/p/c/-original-imah9khhnfvstqka.jpeg?q=70',
    rating: '4.5',
    ratingsCount: '1,906 Ratings & 150 Reviews',
    specs: [
      '128 GB ROM ',
      '16.0 cm (6.3 inch) Super Retina XDR Display',
      '48MP + 48MP + 12MP | 12MP Front Camera',
      'A18 Pro Chip, 6 Core Processor Processor',
    ],
    price: '₹1,12,900',
  },
  {
    id: 1,
    name: 'Apple iPhone 15   (Blue , 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70',
    rating: '4.5',
    ratingsCount: '1,906 Ratings & 150 Reviews',
    specs: [
      '128 GB ROM ',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '48MP + 12MP | 12MP Front Camera',
      'A16 Bionic Chip, 6 Core Processor Processor',
    ],
    price: '₹64,900',
  },
  {
    id: 2,
    name: 'Apple iPhone 15 Pro  (White Titanium, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/m/u/-original-imagtc4hv5qhegyb.jpeg?q=70',
    rating: '4.5',
    ratingsCount: '1,906 Ratings & 150 Reviews',
    specs: [
      '128 GB ROM ',
      '15.49 cm (6.1 inch) Super Retina XDR Display',
      '48MP + 48MP + 12MP | 12MP Front Camera',
      'A17 Pro Chip, 6 Core Processor Processor',
    ],
    price: '₹99,499',
  },
];

const Iphone = () => {
  return (
    <div className="p-6 mt-20 bg-cyan-100 md:mt-45 w-[360px] md:w-[1520px] space-y-6">
      <Link to="/mobile"><button className='mb-2  bg-white text-red-600'>Back to Mobile Section</button></Link>
      {Iphonephone.map((phone) => (
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

export default Iphone;