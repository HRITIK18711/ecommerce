// Login.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className=" w-[360px] md:w-[1510px] mt-25 md:mt-50 flex items-center justify-center  bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 px-4">
            <div className="bg-white rounded-2xl shadow-2xl mt-2 mb-2 w-full max-w-md p-8">
                {/* Heading */}
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
                    Welcome Back 👋
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    Log in to continue shopping
                </p>

                {/* Form */}
                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                            required
                        />
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input
                                type="checkbox"
                                className="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            Remember me
                        </label>
                        <Link
                            to="/forgot-password"
                            className="text-sm font-medium text-indigo-600 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-cyan-300 hover:bg-indigo-700 text-black rounded-lg font-semibold  transition duration-300"
                    >
                        Log In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-2 text-gray-500 text-sm">or</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Bottom link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}