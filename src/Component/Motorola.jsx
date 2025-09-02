import React from 'react';
import { Link } from 'react-router-dom';
const Iphonephone = [
  {
    id: 4,
    name: 'MOTOROLA Razr 60 (PANTONE Gibraltar Sea, 256 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/n/z/-original-imahcququgrqnjxq.jpeg?q=70',
    rating: '4.6',
    ratingsCount: '442 Ratings & 46 Reviews',
    specs: [
      '8 GB RAM | 256 GB ROM ',
      '17.53 cm (6.9 inch) Full HD+ Display',
      '50MP + 13MP | 32MP Front Camera',
      '4500 mAh Battery',
      'Dimensity 7400X Processor',
    ],
    price: '₹49,999',
  },
  {
    id: 5,
    name: 'MOTOROLA Edge 60 5G (PANTONE Shamrock, 256 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/h/i/-original-imahcygb4g5x9m5n.jpeg?q=70',
    rating: '4.5',
    ratingsCount: '3,506 Ratings & 100 Reviews',
   specs: [
      '12 GB RAM | 256 GB ROM ',
      '16.94 cm (6.67 inch) Display',
      '50MP + 50MP + 10MP | 50MP Front Camera',
      '5500 mAh Battery',
      'Dimensity 7400 Processor',
    ],
    price: '₹25,999',
  },
  {
    id: 3,
    name: 'MOTOROLA Edge 50 (Peach Fuzz, 256 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/m/y/edge-50-pb2w0002in-motorola-original-imah3ancahezgjzh.jpeg?q=70',
    rating: '4.5',
    ratingsCount: '38,609 Ratings & 2000 Reviews',
    specs: [
      '8 GB RAM | 256 GB ROM ',
      '16.94 cm (6.67 inch) Display',
      '50MP + 13MP + 10MP | 32MP Front Camera',
      '5500 mAh Battery',
      'Snapdragon 7 Gen 1 Accelerated Edition Processor',
    ],
    price: '₹20,999',
  },
  {
    id: 1,
    name: 'Motorola G85 5G (Olive Green, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70',
    rating: '4.5',
    ratingsCount: '2,29,037 Ratings & 11,150 Reviews',
    specs: [
      '8 GB RAM | 128 GB ROM ',
      '16.94 cm (6.67 inch) Full HD+ Display',
      '50MP + 08MP | 32MP Front Camera',
      '5000 mAh Battery',
      '6s Gen 3 Processor',
    ],
    price: '₹15,999',
  },
  {
    id: 2,
    name: 'Motorola G45 5G (Brilliant Green, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/y/x/-original-imah3xk8crpgrg9y.jpeg?q=70',
    rating: '4.5',
    ratingsCount: '2,29,037 Ratings & 11,150 Reviews',
    specs: [
      '8 GB RAM | 128 GB ROM ',
      '16.51 cm (6.5 inch) Full HD+ Display',
      '50MP + 02MP | 16MP Front Camera',
      '5000 mAh Battery',
      'Snapdragon 6s Gen 3 Processor',
    ],
    price: '₹11,999',
  },
];

const Motorola = () => {
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

export default Motorola;