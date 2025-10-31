import React, { forwardRef } from "react";

const DemoForm = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-22 bg-white text-center px-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">
        Get On-<span className="text-green-500">Lime!</span>
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Request a free demonstration to see how our products can help you boost your business
      </p>

      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-gray-100 px-4 py-3 rounded-md focus:outline-none"
        />

        <div className="flex gap-4">
          <select className="w-1/2 bg-gray-100 px-4 py-3 rounded-md focus:outline-none">
            <option>India (+91)</option>
            <option>USA (+1)</option>
            <option>UK (+44)</option>
          </select>
          <input
            type="text"
            placeholder="Your City"
            className="w-1/2 bg-gray-100 px-4 py-3 rounded-md focus:outline-none"
          />
        </div>

        <input
          type="text"
          placeholder="Mobile or Landline with (STD)"
          className="w-full bg-gray-100 px-4 py-3 rounded-md focus:outline-none"
        />

        <input
          type="text"
          placeholder="Restaurant Name"
          className="w-full bg-gray-100 px-4 py-3 rounded-md focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email Id"
          className="w-full bg-gray-100 px-4 py-3 rounded-md focus:outline-none"
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-md transition"
        >
          FREE DEMO
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4">
        For any queries, contact our support team. <br />
        <a href="mailto:contactus@greenwheels.com" className="text-green-600 hover:underline">
          contactus@greenwheels.com
        </a>
      </p>
    </section>
  )
});

export default DemoForm;
