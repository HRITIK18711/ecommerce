import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("⚠️ Please fill in all fields.");
      return;
    }
    if (formData.phone.length !== 10) {
      setError("⚠️ Phone Number should have 10 digit.");
      return;
    }
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("⚠️ Passwords do not match.");
      return;
    }

    setError("");
    alert("✅ Signup Successful!");
    // You can send formData to backend here
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 mt-5">
      {/* Outer wrapper */}
      <div className="flex w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Side - Logo */}
        <div className="w-1/2 bg-emerald-100 flex flex-col justify-center items-center text-black p-8">
          <h1 className="text-3xl font-bold">Looks like you're new here!</h1>
          <p className="mt-2 mb-2 text-lg text-center">
            Sign up with your details to get started
          </p>
          <img
            src="/Image/cartify_logo.png"
            alt="Cartify Logo"
            className="w-40 h-40 mt-6"
          />
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-semibold mb-6">Create Account</h2>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Buttons */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full text-black rounded-full py-2 font-medium hover:bg-blue-700 transition"
              >
                Sign Up
              </button>
              <p className="text-sm text-gray-500 text-center -mt-1">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}