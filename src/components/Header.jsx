import { useState } from "react";
import { Link } from "react-router";
import { useScroll } from '../context/ScrollContext';
import Tooltip from "./Tooltip";
import RestaurantTypeTooltip from "./RestaurantTypeTooltip";
import { FaBars, FaTimes } from "react-icons/fa";
// import {logo} from "../assets/Weblogo.png"

const Header = () => {
  const { scrollToForm } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-[120px] py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          
          <Link to="/"><img className="bg-transparent" style={{width:'200px'}} src="/Weblogo.png" alt="logo" /></Link>
          <Link to="/">
            {/* <span className="text-lg tracking-widest font-medium cursor-pointer">greenwheels</span> */}
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
          <div className="relative group">
            <button className="hover:text-green-600 flex items-center">
              Products
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:block z-50">
              <Tooltip />
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-green-600 flex items-center">
              Restaurant Type
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:block z-50">
              <RestaurantTypeTooltip />
            </div>
          </div>
          <a href="#" className="hover:text-green-600">Resources</a>
          {/* <a href="#" className="hover:text-green-600">Blog</a> */}
        </nav>

        {/* Call to Action (Desktop) */}
        <button
          onClick={() => scrollToForm?.()}
          className="hidden md:inline-block border border-black px-4 py-2 text-sm font-semibold hover:bg-green-600 hover:text-white transition"
        >
          Get in Touch
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-base font-medium">
          <div>
            <span className="block">Products</span>
          </div>
          <div>
            <span className="block">Restaurant Type</span>
          </div>
          <a href="#" className="block">Resources</a>
          {/* <a href="#" className="block">Blog</a> */}
          <button
            onClick={() => {
              scrollToForm?.();
              setMenuOpen(false);
            }}
            className="w-full border border-black px-4 py-2 text-sm font-semibold hover:bg-green-600 hover:text-white transition"
          >
            FREE DEMO
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
