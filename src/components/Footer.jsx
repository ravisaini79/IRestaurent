import React from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
    {/* Products */}
    <div>
      <h3 className="font-bold mb-3">PRODUCTS</h3>
      <div className="mb-2">
        <h4 className="font-semibold">OPERATIONS</h4>
        <ul className="space-y-1 mt-1 text-gray-300">
          <li>Restaurant POS</li>
          <li>Order Management</li>
          <li>Inventory Management</li>
          <li>Kitchen Display System</li>
        </ul>
      </div>
      <div className="mb-2">
        <h4 className="font-semibold">DISCOVERY</h4>
        <ul className="space-y-1 mt-1 text-gray-300">
          <li>Online Food Ordering System</li>
          <li>Mobile App</li>
          <li>Table Reservation</li>
          <li>Website-Builder</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold">ENGAGEMENT</h4>
        <ul className="space-y-1 mt-1 text-gray-300">
          <li>CRM Solution</li>
          <li>Loyalty Program</li>
          <li>Feedback System</li>
        </ul>
      </div>
    </div>
    {/* Features */}
    <div>
      <h3 className="font-bold mb-3">FEATURES</h3>
      <ul className="space-y-1 text-gray-300">
        <li>Billing</li>
        <li>Inventory</li>
        <li>Integrations</li>
        <li>Reporting and Analytics</li>
      </ul>
      <h4 className="font-semibold mt-4">FEATURED RESOURCES</h4>
      <ul className="space-y-1 mt-1 text-gray-300">
        <li>Restaurant Marketing</li>
        <li>Budget Template</li>
        <li>Food Delivery Report 2019</li>
        <li>Technology Report 2019</li>
      </ul>
    </div>
    {/* Restaurant Type */}
    <div>
      <h3 className="font-bold mb-3">RESTAURANT TYPE</h3>
      <ul className="space-y-1 text-gray-300">
        <li>Enterprise</li>
        <li>Cloud Kitchen</li>
        <li>Bar</li>
        <li>Cafe</li>
        <li>Dine-in</li>
        <li>QSR</li>
      </ul>
    </div>
    {/* Quick Links */}
    <div>
      <h3 className="font-bold mb-3">QUICK LINKS</h3>
      <ul className="space-y-1 text-gray-300">
        <li>About Us</li>
        <li>Careers</li>
        <li>News and Events</li>
        <li>Blog</li>
        <li>Contact Us</li>
        <li>Support</li>
        <li>Terms</li>
        <li>Contribute An Article</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    {/* Keep In Touch */}
    <div>
      <h3 className="font-bold mb-3">KEEP IN TOUCH</h3>
      <p className="text-gray-300">
        Alchemy Web Pvt. Ltd.
        <br />
        1st floor, 445,
        <br />
        Udyog Vihar Phase V,
        <br />
        Gurugram, Haryana 122008,
        <br />
        India
      </p>
      <p className="mt-2 text-green-500">contactus@greenwheels.com</p>
      <div className="flex space-x-4 mt-4 text-xl cursor-pointer">
        <FaFacebookF />
        <FaTwitter/>
        <FaSquareInstagram />
        <FaLinkedin />
        
      </div>
      <div className="mt-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
          alt="Visa"
          className="w-10 inline-block mr-2"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
          alt="Mastercard"
          className="w-10 inline-block"
        />
      </div>
    </div>
  </div>
</footer>

  )
}
