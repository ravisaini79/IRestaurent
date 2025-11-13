import React from "react";
import "./style.css";

function About() {
  const features = [
    "Table & floor management",
    "Swiggy / Zomato integration",
    "Stock management",
    "Recipe management",
    "Inventory management",
    "Live inside panel",
    "Live dashboard for outlet comparison",
    "Dynamic software (reduced dependency on IT support team)",
    "Complete centralized hotel management system",
    "Dynamic report system",
    "Club card management system",
    "WhatsApp integration",
    "CRM module",
    "Dine-in / Takeaway / Delivery (works with 3 formats)",
    "Captain ordering app (works without Internet)",
  ];

  return (
    <section id="about" className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold">
            Welcome To{" "}
            <span className="bg-green-500 text-white rounded px-2 py-1">
              iRestaurant Software
            </span>
          </h3>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            A software to manage all the tasks performed from purchases to sales
            or K.O.T.'s to Bill — everything you need to run your restaurant
            smoothly. The software is user-friendly so it won’t cost you extra!
            One of the finest features is the ability to generate multiple
            reports instantly. Isn’t it amazing!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 mt-10">
          
          {/* Left Content */}
          <div className="lg:w-2/3">
            <h4 className="text-2xl font-bold">
              <span className="bg-green-500 text-white rounded px-2 py-1">
                Green Wheels
              </span>{" "}
              offers Software Development Services:
            </h4>

            <ul className="text-gray-700 mt-5">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center mb-3 text-lg"
                >
                  <i className="fa fa-check text-green-600 mr-3"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/3 flex justify-center">
            <img
              src="https://dekho.co/wp-content/uploads/2020/08/irestaurant.png"
              alt="iRestaurant Software"
              className="w-full max-w-xs object-contain drop-shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
