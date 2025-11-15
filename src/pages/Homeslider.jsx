import React from 'react'
import { useState } from "react";
import { Link } from "react-router";
import { useScroll } from '../context/ScrollContext';
import './sliderstyle.css'

function Homeslider(setScrollHandler) {
  const { scrollToForm } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="w-full " style={{ borderBottom: '1px solid grey !important;' }}>
      <div className="max-w-7xl mx-auto  lg:px-16 py-25 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT SECTION */}
        <div className='px-2'>
          <p className="text-orange-500 mb-3 font-semibold tracking-wide">
            {`IRestaurent`}
          </p>

          <h1 className="text-4xl lg:text-3xl font-bold text-gray-800 leading-tight">
            A single platform for all <br /> your restaurant’s needs
          </h1>


          <p className="text-gray-600 mt-4 text-lg">
            Grow your online business, manage your restaurant operations & market your brand better
            with greenwheels’s restaurant software suite.
          </p>
          <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold shadow" onClick={() => scrollToForm?.()}>
            FREE DEMO
          </button>
        </div>

        {/* RIGHT IMAGE/ILLUSTRATION */}
        <div className="flex justify-center">
          <img
            src="/IRImages/dashboard.jpeg"
            alt="Illustration"
            className="w-[700px]"
          />

        </div>
      </div>
    </section>
  );
}

export default Homeslider