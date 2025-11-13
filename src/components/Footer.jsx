import React from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* About iRestaurant */}
        <div>
          <h3 className="font-bold mb-3 text-green-500">iRestaurant Software</h3>
          <p className="text-gray-300 leading-6">
            iRestaurant is a powerful restaurant management solution designed to handle
            billing, KOT, inventory, CRM, reporting, online orders, and much more.
            Streamline your restaurant operations with a fully centralized system.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-3">QUICK LINKS</h3>
          <ul className="space-y-1 text-gray-300">
            <li>About Us</li>
            <li>Pricing</li>
            <li>Book a Free Demo</li>
            <li>Features</li>
            <li>Contact Support</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-3">CONTACT US</h3>

          <p className="text-gray-300 leading-6">
            <strong>Green Wheels Software</strong>
            <br />
            51 Narendra Nagar, New Sanganer Road,
            <br />
            Jaipur, Rajasthan, India
          </p>

          <p className="mt-3 text-green-400">
            <a 
              href="mailto:Bhawanishankar706@gmail.com" 
              className="underline hover:text-green-300"
            >
              Bhawanishankar706@gmail.com
            </a>
          </p>

          <p className="text-gray-300">📞 +91-9783853373, 9314541333</p>

          <p className="mt-2 text-green-400">
            <a 
              href="https://www.greenwheelsjaipur.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-green-300"
            >
              www.greenwheelsjaipur.com
            </a>
          </p>

          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-green-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-400"><FaTwitter /></a>
            <a href="#" className="hover:text-green-400"><FaSquareInstagram /></a>
            <a href="#" className="hover:text-green-400"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="text-center mt-8 text-gray-500 text-xs">
        © {new Date().getFullYear()} iRestaurant Software. All Rights Reserved.
      </div>
    </footer>
  );
}
