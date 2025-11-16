import React from 'react';
import { Link } from 'react-router';

export default function RestaurantTypeTooltip() {
  return (
    <div className="bg-white shadow-lg rounded p-6 w-40">
      {/* flex space-x-8 */}

      {/* Left Side */}
      {/* <div>
        <h2 className="text-lg font-semibold mb-2">Restaurant Types</h2>
        <p className="text-gray-600 text-sm mb-4">
          Complete software suite customized to your restaurant needs
        </p>
        <a href="#" className="text-green-600 font-semibold flex items-center">
          Learn More
          <span className="ml-1">➔</span>
        </a>
      </div> */}

      {/* Divider */}
      {/* <div className="border-l"></div> */}

      {/* Right Side */}
      <div className="space-y-2 justify-content-center align-items-center ">
        <div className="hover:text-green-600 cursor-pointer"><Link to="/restaurant-type/bar">Bar</Link></div>
        <div className="hover:text-green-600 cursor-pointer"><Link to="/restaurant-type/cafe">Cafe</Link></div>
        <div className="hover:text-green-600 cursor-pointer"><Link to="/restaurant-type/cloud-kitchen">Cloud Kitchen</Link></div>
        {/* <div className="hover:text-green-600 cursor-pointer"><Link to="/restaurant-type/enterprise">Enterprise</Link></div> */}
        <div className="hover:text-green-600 cursor-pointer"><Link to="/restaurant-type/dine-in">Dine-In</Link></div>
        {/* <div className="hover:text-green-600 cursor-pointer"><Link to="/restaurant-type/qsr">QSR</Link></div> */}


      </div>

    </div>
  );
}
