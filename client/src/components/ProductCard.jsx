import { Link } from 'react-router-dom';

function PhoneCard({ name, manufacturer, color, price, _id, imageFileName }) {
    return (
       
        <div className="flex flex-col items-center justify-between border-2 border-solid border-gray-200 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 m-5 bg-white shadow-md rounded-lg p-4">
            <div className="phone-image flex items-center justify-center h-40">
                <img src={imageFileName} alt={name} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="product-name text-sm font-semibold text-black mt-2 mb-2">{name}</div>

            <div className="phone-manufacturer text-sm font-semibold text-black mt-2 mb-2">{manufacturer}</div>

            <div className="phone-color text-sm font-semibold text-black mt-2 mb-2">{color}</div>

            <div className="flex justify-between w-full mt-auto">
                <div className="text-black font-semibold ">${price}</div>

                <div className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 sm:py-1 sm:px-2 md:py-1 md:px-2 border border-black rounded-lg">
                    <Link to={`/phones/${_id}`} className="text-white">
                        Details
                    </Link>
                </div>
            </div>
        </div>
     
    );
}

export default PhoneCard;


// "name": "Moto G6",
// "manufacturer": "Motorola",
// "description": "Great phone with an excellent interface. One of the best mid price range phones in the market.",
// "color": "black",
// "price": 199,
// "imageFileName": "Moto_G6.png",
// "screen": "5,7 inch Full-HD",
// "processor": "Snapdragon 450",
// "ram": 3
// }
