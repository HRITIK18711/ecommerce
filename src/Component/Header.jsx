import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import {
  FaInfoCircle,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const links = [
    { icon: <IoHomeOutline />, name: "Home", path: "/" },
    { icon: <FaUser />, name: "Sign In", path: "/login" },
    { icon: <FaInfoCircle />, name: "Sign Up", path: "/signup" },
    { icon: <FaShoppingCart />, name: "Cart", path: "/cart" },
  ];

  return (
    <header className="bg-cyan-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto px-3 py-2 gap-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/Image/cartify_logo.png"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
            alt="Logo"
          />
        </div>

        {/* Search Bar (always visible) */}
        <div className="flex flex-1 max-w-lg">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="w-full px-3 py-2 rounded-l-full border border-gray-300 
                       bg-gray-50 text-gray-700 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-[#fc8019] focus:border-[#fc8019]
                       text-sm md:text-base"
          />
          <button className="px-4 bg-[#fc8019] text-white rounded-r-full flex items-center justify-center">
            <FaSearch />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-sm md:text-base items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center gap-1 hover:text-[#fc8019] transition duration-200"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-shrink-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden bg-white text-gray-800 shadow-md absolute top-full left-0 w-full transition-all duration-300 ease-in-out 
        ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col gap-4 p-4 text-base font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 hover:text-[#fc8019] transition"
              >
                {link.icon}
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}