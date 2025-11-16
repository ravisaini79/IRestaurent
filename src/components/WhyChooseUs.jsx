import React from "react";
import { FaCheckCircle, FaShieldAlt, FaBolt, FaCloud, FaUsers, FaMobileAlt } from "react-icons/fa";
import DemoForm from "./DemoForm";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaBolt className="text-green-600 text-4xl" />,
      title: "Fast & Efficient POS",
      text: "Lightning fast billing with KOT, dine-in, takeaway & delivery support.",
    },
    {
      icon: <FaCloud className="text-green-600 text-4xl" />,
      title: "Cloud + Offline Support",
      text: "Access from anywhere with complete offline billing in case of no internet.",
    },
    {
      icon: <FaUsers className="text-green-600 text-4xl" />,
      title: "Multi-Outlet Dashboard",
      text: "Compare outlets in real time—sales, stock, orders, staff & more.",
    },
    {
      icon: <FaMobileAlt className="text-green-600 text-4xl" />,
      title: "Mobile Ordering App",
      text: "Captain ordering app works without internet for uninterrupted service.",
    },
    {
      icon: <FaShieldAlt className="text-green-600 text-4xl" />,
      title: "Secure & Reliable",
      text: "Auto backups, encrypted data & role-based access keep your data safe.",
    },
    {
      icon: <FaCheckCircle className="text-green-600 text-4xl" />,
      title: "Trusted by 200+ Restaurants",
      text: "Used by top restaurants, cafés, cloud kitchens & bars across India.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
  

          <section className="backg text-white py-20 px-6 md:px-16">
              <div className="max-w-6xl mx-auto grid  items-center">

                  <div className="text-center md:text-left text-center" style={{ textAlign: 'center' }}>
                      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                          Why Choose <span className="text-green-900">iRestaurant?</span>
                      </h1>

                      <p className="text-white/90 mt-4 text-lg bg-gray-600/50 p-3 rounded">
                          The most complete and powerful restaurant management system—built
            to simplify operations, reduce workload, increase profits and enhance customer experience.
                      </p>

                  </div>

              </div>
          </section>

      {/* FEATURES GRID */}
      <section className="py-16 px-6 md:px-16">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Makes iRestaurant Stand Out?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE SECTION */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              More Than Just a POS – A Complete Restaurant System
            </h2>

            <p className="text-gray-600 text-lg leading-7">
              iRestaurant Software is designed to handle everything—from billing
              to inventory, online orders to reports, CRM to food costing.
              Whether you run a café, bar, cloud kitchen, or multi-outlet brand,
              iRestaurant adapts to all formats.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Easy to use & super fast interface",
                "Works offline + online",
                "Live reporting & mobile dashboard",
                "Easy integration with Swiggy & Zomato",
                "24x7 support & dedicated account manager",
              ].map((point, i) => (
                <li key={i} className="flex items-center text-gray-700">
                  <FaCheckCircle className="text-green-600 mr-3" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/IRImages/dashboard.jpeg"
              alt="iRestaurant Dashboard"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </div>

        </div>
      </section>
<DemoForm/>
    </div>
  );
}
