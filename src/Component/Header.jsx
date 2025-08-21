import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaInfoCircle, FaPhone, FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: <IoHomeOutline />, name: "Home", path: "/" },
    
  ];

  return (
    <header className="bg-cyan-100 shadow-md sticky top-0 left-0 w-full z-50">
      <div className="w-full flex justify-between items-center p-4 md:px-8 relative">
        {/* Logo (always left) */}
        <div className="flex items-center space-x-2">
          <img
            src="/Image/cartify_logo.png"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
            alt="Logo"
          />
        </div>

        {/* Brand name (center only on desktop) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-black">Cartifiy</h1>
        </div>

        {/* Desktop Menu (right aligned) */}
        <nav className="hidden md:flex items-center space-x-6 ml-auto">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center space-x-1 text-black hover:text-blue-600"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-xl cursor-pointer" />
            <Link to="/login">
              <FaUser className="text-xl cursor-pointer" />
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          {/* Cart + User icons */}
          <div className="flex items-center space-x-6 pt-2">
            <FaShoppingCart className="text-xl cursor-pointer" />
            <Link to="/login">
              <FaUser className="text-xl cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}