import React from "react";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Restaurant POS & Billing",
      description: "Fast and efficient POS billing with KOT, dine-in, takeaway, and delivery support.",
      img: "/IRImages/chart.jpeg",
    },
    {
      title: "Inventory & Stock Management",
      description: "Track stock, wastage, consumption and automate purchase orders in real time.",
      img: "/IRImages/tablview.jpeg",
    },
    {
      title: "Online Order Integrations",
      description: "Auto-manage orders from Zomato, Swiggy, and your own website in one place.",
      img: "/IRImages/orders.jpeg",
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-12 text-gray-800">
        Complete Restaurant Management <br className="hidden md:block" />
        Software for Every Format
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {solutions.map((item, index) => (
          <div key={index} className="flex flex-col items-center">

            {/* ROUND IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-40 h-40 rounded-full object-cover mb-6 shadow-md"
            />

            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {item.title} <span className="text-green-600">→</span>
            </h3>
            
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded text-sm font-medium">
              LEARN MORE
            </button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
