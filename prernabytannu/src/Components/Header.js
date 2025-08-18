import React from "react";
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiMenu } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full">
      {/* Top Strip */}
      <div className="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white text-sm py-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(10).fill("").map((_, idx) => (
            <div key={idx} className="flex items-center mx-4">
              <FaStar className="mr-1" /> LIMITED TIME OFFER
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-pink-500 rounded-full p-2">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-semibold">
            <span className="text-black">PrernaBy</span>
            <span className="text-pink-500">Tannu</span>
          </span>
        </div>

        {/* Menu Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-pink-500">HOME</a>
          <a href="/" className="hover:text-pink-500">SHOP</a>
          <a href="/" className="hover:text-pink-500">ReadyMades</a>
          <a href="/" className="hover:text-pink-500">UnStitch</a>
          <a href="/" className="hover:text-pink-500">Designer</a>
          <a href="/" className="hover:text-pink-500">BLOG</a>

        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-lg">
          <FiSearch className="cursor-pointer hover:text-pink-500" />
          <FiUser className="cursor-pointer hover:text-pink-500" />
          <FiHeart className="cursor-pointer hover:text-pink-500" />
          <FiShoppingBag className="cursor-pointer hover:text-pink-500" />
          <FiMenu className="cursor-pointer hover:text-pink-500 md:hidden" />
        </div>
      </div>
    </header>
  );
}

export default Header;




