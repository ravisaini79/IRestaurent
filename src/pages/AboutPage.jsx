import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import DemoForm from "../components/DemoForm";

export default function AboutPage() {
  const services = [
    "Feasibility and requirement analysis",
    "Offshore custom software development",
    "Application design, architecture development and implementation",
    "User interface design, web development",
    "Software Maintenance and Support",
    "Systems integration and consolidation",
    "Re-engineering, migration, modernization, performance tuning and porting services",
    "Implementation of off-the-shelf systems and software packages such as SharePoint",
  ];

  const portfolioImages = [
    "/IRImages/r1.jpg",
    "/IRImages/r2.jpg",
    "/IRImages/r3.jpg",
    "/IRImages/r4.jpg",
    // "/IRImages/r5.jpg",
    // "/IRImages/r6.jpg",
  ]
  return (
<d6v className="bg-gray-50">
      {/* HERO SECTION */}
   <section className="backg text-white py-20 px-6 md:px-16">
  <div className="max-w-6xl mx-auto grid  items-center">

    <div className="text-center md:text-left text-center" style={{textAlign:'center'}}>
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        About <span className="text-green-900">iRestaurant Software</span>
      </h1>

   <p className="text-white/90 mt-4 text-lg bg-gray-600/50 p-3 rounded">
  A complete restaurant management solution designed to simplify 
  operations—from purchases to sales, KOT to billing, reports to 
  inventory, and everything in between.
</p>

    </div>

  </div>
</section>


      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-16">
        
        {/* Description */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Who We Are
        </h2>
        <p className="text-gray-600 leading-7 mb-10 text-lg">
          iRestaurant Software is a fast-growing and trusted restaurant management solution designed to simplify operations and boost business performance. With 200+ satisfied clients across restaurants, cafés, cloud kitchens, bars, and food courts, we have become one of the most reliable and feature-rich POS systems in the industry.
          <br /><br />
       Our mission is to help restaurants run smarter, faster, and more efficiently through technology. We provide a fully integrated software that manages everything—billing, KOT, inventory, table management, online orders, staff control, customer loyalty, and a real-time live dashboard.
        </p>

        {/* Services */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Our Software Development Services
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {services.map((service, index) => (
            <li key={index} className="flex items-start space-x-3">
              <FaCheckCircle className="text-green-600 mt-1" />
              <span className="text-gray-700 text-lg">{service}</span>
            </li>
          ))}
        </ul>

        {/* Application Feature Section */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Application Development Features
          </h3>
          <p className="text-gray-600 leading-7 text-lg">
         Over the years, we have worked closely with restaurant owners to understand their challenges. This experience allows us to continuously enhance iRestaurant Software with powerful features, better performance, and modern technology. Our goal is simple: to give you complete control over your restaurant from one easy-to-use platform.
          </p>
        </div>

        {/* Portfolio Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Portfolio</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-md">
                <img src={img} alt="Portfolio" className="w-full h-40 object-cover hover:scale-105 transition duration-300" />
              </div>
            ))}
          </div>
        </div>

      </section>
<DemoForm/>
    </d6v>
  );
}
