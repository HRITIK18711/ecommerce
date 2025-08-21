import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 mt-5">
      {/* Outer wrapper that centers the login box */}
      <div className="flex w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Side - Logo */}
        <div className="w-1/2 bg-blue-600 flex flex-col justify-center items-center text-white p-8">
          <img
            src="/Image/cartify_logo.png" // Replace with actual path
            alt="Cartify Logo"
            className="w-32 h-32 mb-4"
          />
          <h1 className="text-3xl font-bold">CARTIFY</h1>
          <p className="mt-2 text-lg">Your Shopping, Simplified</p>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <p className="text-gray-500 mb-6 text-center">
            Get access to your Orders, Wishlist and Recommendations
          </p>

          {/* Email/Mobile Input */}
          <div className="w-full max-w-sm mb-4">
            <label className="block text-sm mb-1">Enter Email/Mobile number</label>
            <input
              type="text"
              placeholder="+91 7706852050"
              className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="w-full max-w-sm mb-4">
            <label className="block text-sm mb-1">Enter Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="********"
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <a
                href="#"
                className="absolute right-4 top-2 text-sm text-red-500"
              >
                Forgot?
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full max-w-sm mt-4">
            <button className="flex-1 bg-blue-600 text-blue-600 rounded-full py-2 font-medium hover:bg-blue-700">
              Login
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 rounded-full py-2 font-medium hover:bg-blue-50">
              <Link to="/signup">Sign up</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}