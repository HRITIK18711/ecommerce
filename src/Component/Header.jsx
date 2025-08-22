import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  FaPhone,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const links = [
    { icon: <IoHomeOutline />, name: "Home", path: "/" },
    { icon: <FaPhone />, name: "Contact", path: "/" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false); // Close mobile menu when link clicked
  };

  return (
    <header className="bg-cyan-100 md:ml-40 shadow-md sticky top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center p-4 md:px-8">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img
            src="/Image/cartify_logo.png"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
            alt="Logo"
          />
          <h1 className="text-xl md:text-3xl font-bold text-black">Cartify</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-48 max-w-xs border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

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

          <div className="flex items-center space-x-4">
            <FaShoppingCart className="text-xl cursor-pointer" />
            <Link to="/">
              <FaUser className="text-xl cursor-pointer" />
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              onClick={handleLinkClick}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}

          <div className="flex items-center space-x-6 pt-2">
            <FaShoppingCart className="text-xl cursor-pointer" />
            <Link to="/">
              <FaUser className="text-xl cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}