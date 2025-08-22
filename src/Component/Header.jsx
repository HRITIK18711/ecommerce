import React, { useState } from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaShoppingCart, FaUser,FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { icon: <IoHomeOutline />, name: "Home", path: "/" },
    { icon: <FaPhone />, name: "Contact", path: "/" },
    { icon: <FaShoppingCart />, name: "Cart", path: "/" },
    { icon: <FaUser />, name: "Login", path: "/" },
  ];

  return (
    <header className="p-4 shadow-xl bg-black md:ml-[250px] ">
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="w-[100px] md:w-[130px]">
          <img src="/Image/cartify_logo.png" className="rounded-full" alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-white font-semibold text-sm lg:text-base">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center gap-2 hover:text-[#fc8019] transition duration-200"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
     {/* Mobile Nav Menu */}
{menuOpen && (
  <div className="md:hidden bg-black text-white p-4 absolute top-[80px] left-0 w-full shadow-md z-50">
    <ul className="flex flex-col gap-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.path}
            className="flex items-center gap-2 hover:text-[#fc8019]"
            onClick={() => setMenuOpen(false)} // close menu on click
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