import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaInfoCircle, FaPhone, FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";   // ✅ Import Link

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  // ✅ Add routes here for navigation
  const links = [
    { icon: <IoHomeOutline />, name: "Home", path: "/" },
    { icon: <FaUser />, name: "Sign In", path: "/login" },
    { icon: <FaInfoCircle />, name: "Sign Up", path: "/signup" },
    { icon: <FaShoppingCart />, name: "Cart", path: "/cart" },
  ];

  return (
    <header className="bg-cyan-100 shadow-md p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto gap-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/Image/cartify_logo.png"
            className="w-15 h-15 rounded-full object-cover"
            alt="Logo"
          />
          <h1 className="text-xl font-bold text-[#fc8019] hidden sm:block">Cartify</h1>
        </div>

        {/* Search Bar (desktop only) */}
        <div className="hidden md:flex flex-1 justify-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for products..."
            className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 
                       bg-gray-50 text-gray-700 placeholder-gray-500
                       focus:outline-none focus:ring-2 focus:ring-[#fc8019] focus:border-[#fc8019]
                       transition"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-semibold text-sm lg:text-base">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}   // ✅ Link to route
              className="flex items-center gap-2 cursor-pointer 
                         hover:text-[#fc8019] transition duration-200"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
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
      {menuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-md absolute top-full left-0 w-full transition-all duration-300 ease-in-out">
          {/* Mobile Search */}
          <div className="p-4 border-b">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 
                         bg-gray-50 text-gray-700 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-[#fc8019]"
            />
          </div>

          <ul className="flex flex-col gap-4 p-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}   // ✅ Link for mobile menu
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-[#fc8019] cursor-pointer transition"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}