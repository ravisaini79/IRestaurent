import React, { forwardRef, useState } from "react";
import emailjs from "emailjs-com";

const DemoForm = forwardRef((props, ref) => {

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
    restaurant: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_td2favh",
      "template_egpaqol",
      formData,
      "rxVYeMUKghPU6nGUr"
    )
    .then(() => {
      alert("Demo request sent successfully!");
      setFormData({
        name: "",
        city: "",
        phone: "",
        restaurant: "",
        email: ""
      });
    })
    .catch(() => alert("Failed to send. Try again!"));
  };

  return (

    <div ref={ref} className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">

        {/* Left side stays the same */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">

          <p className="text-sm uppercase text-green-600 font-semibold tracking-wide mb-2">
            Book a Free Demo
          </p>

          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience the Power of <span className="text-green-600">iRestaurant Software</span>
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            Manage billing, KOT, online orders, inventory, recipes, CRM, 
            reporting and much more — all in one centralized system.
          </p>

          {/* Contact info */}
          <div className="space-y-3 text-gray-700 dark:text-gray-300">

            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>+91-9783853373 , 9314541333</span>
            </div>

            <div className="flex items-center space-x-2">
              <span>✉️</span>
              <a
                href="mailto:Bhawanishankar706@gmail.com"
                className="underline text-green-600 hover:text-green-700"
              >
                Bhawanishankar706@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <span>🌐</span>
              <a
                href="https://www.greenwheelsjaipur.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-600 hover:text-green-700"
              >
                www.greenwheelsjaipur.com
              </a>
            </div>

            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>Address- 51 Narendra Nagar, New Sanganer Road, Jaipur</span>
            </div>

          </div>

        </div>

        {/* Right side: FORM (Same UI, only logic added) */}
        <div className="w-full lg:w-1/2 bg-gray-50 dark:bg-gray-800 p-10">

          <form className="space-y-6" onSubmit={sendEmail}>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium">Your Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium">Your City</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                type="text"
                placeholder="e.g., Jaipur"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium">Mobile or Landline (with STD)</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="text"
                placeholder="9876543210"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            {/* Restaurant */}
            <div>
              <label className="block text-sm font-medium">Restaurant Name</label>
              <input
                name="restaurant"
                value={formData.restaurant}
                onChange={handleChange}
                type="text"
                placeholder="Restaurant Name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email ID</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="example@gmail.com"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              Request Free Demo
            </button>

          </form>

        </div>
      </div>
    </div>
  );
});

export default DemoForm;
