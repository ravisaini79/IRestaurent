import React from "react";

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Online Food Ordering System",
      description: "Your restaurant’s own online ordering website & app",
      img: "/img/online-1.png", // Update to your actual path
    },
    {
      title: "Restaurant POS System",
      description: "Cloud-based POS solution with integrated online & third-party orders",
      img: "/img/POS-2.png", // Update to your actual path
    },
    {
      title: "CRM Solution",
      description: "Automate marketing campaigns with a fully-integrated CRM system",
      img: "/img/CRM-1.png", // Update to your actual path
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">
      <h2 className="text-2xl lg:text-3xl font-semibold mb-12 text-gray-800">
        End-to-end marketing & technology <br className="hidden md:block" />
        solutions for restaurants
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {solutions.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={item.img} alt={item.title} className="h-48 object-contain mb-6" />
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
