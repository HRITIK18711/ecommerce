import React from 'react';

const samsungPhones = [
  {
    id: 1,
    name: 'Samsung Galaxy F06 5G (Lit Violet, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/u/t/-original-imahbk7pnjgxudgz.jpeg?q=70', // Update with actual path
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
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/g/h/-original-imahbzknzpd3zwrv.jpeg?q=70', // Update with actual path
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
    exchangeOffer: 'Upto ₹17,200 Off on Exchange',
  },
  {
    id: 3,
    name: 'Samsung Galaxy A35 5G (Awesome Navy, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/g/h/-original-imahbzknzpd3zwrv.jpeg?q=70', // Update with actual path
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
    exchangeOffer: 'Upto ₹17,200 Off on Exchange',
  },
  {
    id: 4,
    name: 'Samsung Galaxy A35 5G (Awesome Navy, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/g/h/-original-imahbzknzpd3zwrv.jpeg?q=70', // Update with actual path
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
    exchangeOffer: 'Upto ₹17,200 Off on Exchange',
  },
  {
    id: 5,
    name: 'Samsung Galaxy A35 5G (Awesome Navy, 128 GB)',
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/g/h/-original-imahbzknzpd3zwrv.jpeg?q=70', // Update with actual path
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
    exchangeOffer: 'Upto ₹17,200 Off on Exchange',
  },
];

const Samsung = () => {
  return (
    <div className="p-6 mt-30 bg-cyan-100 md:mt-50 w-[360px] md:w-[1520px] ">
      {samsungPhones.map((phone) => (
        <div
          key={phone.id}
          className="flex flex-col md:flex-row border rounded-lg shadow-md hover:shadow-lg transition p-4 gap-4"
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
              <span className="bg-green-600 text-black px-2 py-1 rounded text-sm font-medium">
                {phone.rating} ★
              </span>
              <span className="text-sm text-black">{phone.ratingsCount}</span>
            </div>
            <ul className="list-disc pl-5 text-sm text-black">
              {phone.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
            <p className="text-xs text-black">
              * 1 Year Manufacturer Warranty for Device and 6 Months for In-Box Accessories
            </p>
          </div>

          {/* Pricing */}
          <div className="flex flex-col justify-start items-end gap-1 text-right">
            <p className="text-xl font-bold text-black">{phone.price}</p>
            <p className="text-sm text-black line-through">{phone.originalPrice}</p>
            <p className="text-sm text-green-600 font-semibold">{phone.discount}</p>
            <p className="text-sm text-green-700">{phone.exchangeOffer}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Samsung;
