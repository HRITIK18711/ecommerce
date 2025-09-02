import React from 'react';
import { Link } from 'react-router-dom';
const Iphonephone = [
  {
    id: 4,
    name: 'realme 15T 5G (Suit Titanium, 256 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/e/w/-original-imahfkfyaytehgy7.jpeg?q=70',
    rating: '4.4',
    ratingsCount: '2,143 Ratings & 46 Reviews',
    specs: [
      '8 GB RAM | 256 GB ROM ',
      '16.69 cm (6.57 inch) Full HD Display',
      '50MP + 02MP | 50MP Front Camera',
      '7000 mAh Battery',
      'Mediatek Dimensity 6400 MAX Processor',
    ],
    price: '₹22,999',
  },
  {
    id: 5,
    name: 'realme 15 5G (Velvet Green, 256 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/z/h/h/-original-imahekyxuzz6eaqx.jpeg?q=70',
    rating: '4.4',
    ratingsCount: '2,143 Ratings & 46 Reviews',
    specs: [
      '8 GB RAM | 256 GB ROM ',
      '17.27 cm (6.8 inch) Display',
      '50MP + 08MP | 50MP Front Camera',
      '7000 mAh Battery',
      'Mediatek Dimensity 7300+ 5G Processor',
    ],
    price: '₹27,999',
  },
  {
    id: 3,
    name: 'realme P4 5G (Steel Grey, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/m/d/-original-imahf47f6fgxwh9a.jpeg?q=70',
    rating: '4.4',
    ratingsCount: '2,143 Ratings & 46 Reviews',
    specs: [
      '6 GB RAM | 128 GB ROM ',
      '17.2 cm (6.77 inch) Display',
      '50MP + 08MP | 16MP Front Camera',
      '7000 mAh Battery',
      'Mediatek Dimensity 7400 Processor',
    ],
    price: '₹18,499',
  },
  {
    id: 1,
    name: 'realme GT 7 Pro (Mars Orange, 512 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/w/h/gt-7-pro-gt-7-pro-realme-original-imah6yfa7pytgfzp.jpeg?q=70',
    rating: '4.4',
    ratingsCount: '57 Ratings & 5 Reviews',
    specs: [
      '16 GB RAM | 512 GB ROM ',
      '17.22 cm (6.78 inch) Display',
      '50MP + 50MP + 08MP | 16MP Front Camera',
      '5800 mAh Battery',
      'Snapdragon 8 Elite Processor',
    ],
    price: '₹53,999',
  },
  
];

const Realme = () => {
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

export default Realme;