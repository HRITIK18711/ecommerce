// Footer.jsx
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10 md:mt-30 md:mb-3">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[360px] md:w-full">
                {/* Shop */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Shop</h2>
                    <ul className="space-y-2">
                        <li><a href="/mobile" className="hover:text-white">Mobiles</a></li>
                        <li><a href="/" className="hover:text-white">Electronics </a></li>
                        <li><a href="/" className="hover:text-white">Tvs and Appliances</a></li>
                        <li><a href="/" className="hover:text-white">Fashion</a></li>
                        <li><a href="/" className="hover:text-white">Furniture</a></li>
                        <li><a href="/" className="hover:text-white">Grocery</a></li>
                    </ul>
                </div>


                {/* Help */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Help</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Shipping</a></li>
                        <li><a href="#" className="hover:text-white">Returns</a></li>
                        <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
                    <p className="mb-4 text-sm">
                        Subscribe to get special offers, free giveaways, and updates.
                    </p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-l-lg bg-white focus:outline-none text-black"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 ml-2 hover:bg-indigo-700 px-4 py-2 rounded-r-lg text-black"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t  border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6">
                {/* Copyright */}
                <p className="text-sm  text-gray-400">
                    © {new Date().getFullYear()} Cartifiy. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
