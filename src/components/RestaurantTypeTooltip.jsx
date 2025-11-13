import React from 'react';

export default function RestaurantTypeTooltip() {
  return (
    <div className="bg-white shadow-lg rounded p-6 w-80 flex space-x-8">
      
      {/* Left Side */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Restaurant Types</h2>
        <p className="text-gray-600 text-sm mb-4">
          Complete software suite customized to your restaurant needs
        </p>
        <a href="#" className="text-green-600 font-semibold flex items-center">
          Learn More
          <span className="ml-1">➔</span>
        </a>
      </div>

      {/* Divider */}
      <div className="border-l"></div>

      {/* Right Side */}
      <div className="space-y-2">
        <p className="hover:text-green-600 cursor-pointer">Bar</p>
        <p className="hover:text-green-600 cursor-pointer">Cafe</p>
        <p className="hover:text-green-600 cursor-pointer">Cloud Kitchen</p>
        <p className="hover:text-green-600 cursor-pointer">Enterprise</p>
        <p className="hover:text-green-600 cursor-pointer">Dine-in</p>
        <p className="hover:text-green-600 cursor-pointer">QSR</p>
      </div>

    </div>
  );
}
