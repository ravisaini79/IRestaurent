import React from 'react';

export default function Tooltip() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-[900px] mx-auto grid grid-cols-3 gap-6 text-gray-800 relative">
      
      {/* Green Triangle Top */}
      <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-md"></div>

      {/* Discovery Section */}
      <div className="pr-4 border-r">
        <h3 className="text-green-600 font-bold text-sm mb-2">DISCOVERY</h3>
        <h2 className="font-bold mb-1 cursor-pointer hover:text-green-600 flex items-center">
          Online Food Ordering System <span className="ml-1">→</span>
        </h2>
        {/* <p className="text-gray-500 text-sm mb-3">
          Your restaurant’s own online ordering website & mobile app
        </p> */}
        {/* <ul className="space-y-1 text-sm text-gray-700">
          <li className="hover:text-green-600 cursor-pointer">Mobile App</li>
          <li className="hover:text-green-600 cursor-pointer">Table Reservation</li>
          <li className="hover:text-green-600 cursor-pointer">Website Builder</li>
        </ul> */}
      </div>

      {/* Operations Section */}
      <div className="px-4 border-r">
        <h3 className="text-green-600 font-bold text-sm mb-2">OPERATIONS</h3>
        <h2 className="font-bold mb-1 cursor-pointer hover:text-green-600 flex items-center">
          Restaurant POS System <span className="ml-1">→</span>
        </h2>
        {/* <p className="text-gray-500 text-sm mb-3">
          Cloud-based POS solution with integrated online & third-party orders
        </p>
        <ul className="space-y-1 text-sm text-gray-700">
          <li className="hover:text-green-600 cursor-pointer">Inventory</li>
          <li className="hover:text-green-600 cursor-pointer">Third-Party Order Management</li>
          <li className="hover:text-green-600 cursor-pointer">Kitchen Display System</li>
        </ul> */}
      </div>

      {/* Engagement Section */}
      <div className="pl-4">
        <h3 className="text-green-600 font-bold text-sm mb-2">ENGAGEMENT</h3>
        <h2 className="font-bold mb-1 cursor-pointer hover:text-green-600 flex items-center">
          CRM Solution <span className="ml-1">→</span>
        </h2>
        {/* <p className="text-gray-500 text-sm mb-3">
          Automate marketing campaigns with a fully-integrated CRM system
        </p>
        <ul className="space-y-1 text-sm text-gray-700">
          <li className="hover:text-green-600 cursor-pointer">Loyalty Program</li>
          <li className="hover:text-green-600 cursor-pointer">Feedback System</li>
          <li className="hover:text-green-600 cursor-pointer">IVR Service</li>
        </ul> */}
      </div>

    </div>
  );
}
