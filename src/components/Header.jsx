import { useState } from "react";
import { Link } from "react-router";
import { useScroll } from "../context/ScrollContext";
import Tooltip from "./Tooltip";
import RestaurantTypeTooltip from "./RestaurantTypeTooltip";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { scrollToForm } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-[120px] py-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img
              className="bg-transparent"
              style={{ width: "200px" }}
              src="/IRImages/IrestLogo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-base font-medium">
          <Link to="/">Home</Link>

          {/* Restaurant Type - Desktop Hover */}
          <div className="relative group">
            <button className="hover:text-green-600 flex items-center">
              Restaurant Type
              <svg
                className="ml-1 w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:block z-50">
              <RestaurantTypeTooltip />
            </div>
          </div>

          <Link to="/aboutus">About Us</Link>
          <Link to="/whychoose">Why Choose Us</Link>
        </nav>

        {/* Call to Action (Desktop) */}
        <button
          onClick={() => scrollToForm?.()}
          style={{ cursor: "pointer" }}
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

          {/* Home */}
          <div>
            <Link onClick={() => setMenuOpen(false)} to="/">
              Home
            </Link>
          </div>

          {/* Restaurant Type - Mobile Click Dropdown */}
          <div>
            <button
              onClick={() => setMobileDropdown(!mobileDropdown)}
              className="flex items-center justify-between w-full py-2"
            >
              <span>Restaurant Type</span>

              <svg
                className="ml-2 w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Mobile Dropdown Items */}
            {mobileDropdown && (
              <div className="pl-4 mt-1 space-y-2">
         

    <div>
      <Link onClick={() => setMenuOpen(false)} to="/restaurant-type/bar">
        Bar
      </Link>
    </div>

    <div>
      <Link onClick={() => setMenuOpen(false)} to="/restaurant-type/cafe">
        Cafe
      </Link>
    </div>

    <div>
      <Link onClick={() => setMenuOpen(false)} to="/restaurant-type/cloud-kitchen">
        Cloud Kitchen
      </Link>
    </div>

    <div>
      <Link onClick={() => setMenuOpen(false)} to="/restaurant-type/enterprise">
        Enterprise
      </Link>
    </div>

    <div>
      <Link onClick={() => setMenuOpen(false)} to="/restaurant-type/dine-in">
        Dine-In
      </Link>
    </div>

    <div>
      <Link onClick={() => setMenuOpen(false)} to="/restaurant-type/qsr">
        QSR
      </Link>
    </div>

  </div>

            )}
          </div>

          {/* About Us */}
          <div>
            <Link onClick={() => setMenuOpen(false)} to="/aboutus">About Us</Link>
          </div>

          {/* Why Choose Us */}
          <div>
            <Link onClick={() => setMenuOpen(false)} to="/whychoose">Why Choose Us</Link>
          </div>

          {/* Button */}
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
