import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaInfoCircle, FaPhone, FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: <IoHomeOutline />, name: "Home", path: "/" },
    { icon: <FaInfoCircle />, name: "About", path: "/about" },
    { icon: <FaPhone />, name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-cyan-100 shadow-md sticky top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img
            src="/Image/cartify_logo.png"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
            alt="Logo"
          />
        <div className="text-2xl font-bold">Cartifiy</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
            <Link key={index} to={link.path} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-xl cursor-pointer" />
            <FaUser className="text-xl cursor-pointer" />
          </div>
          {/* Search Bar */}
          <div className="ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
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
          {/* Search bar inside menu */}
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {/* Cart + User icons */}
          <div className="flex items-center space-x-6 pt-2">
            <FaShoppingCart className="text-xl cursor-pointer" />
            <FaUser className="text-xl cursor-pointer" />
          </div>
        </div>
      )}
    </header>
  );
}
