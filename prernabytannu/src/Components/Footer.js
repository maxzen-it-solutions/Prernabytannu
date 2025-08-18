import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Top Footer Links */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 border-b border-gray-800 pb-8">
        {/* Brands */}
        <div>
          <h3 className="font-semibold mb-3">Brands</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Zara</li>
            <li>Guess</li>
            <li>Mango</li>
            <li>LCWaikiki</li>
            <li>Monda</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Watches</li>
            <li>Watch Accessories</li>
            <li>Clocks</li>
            <li>Jewellery</li>
            <li>Women’s Collection</li>
          </ul>
        </div>

        {/* Accessories */}
        <div>
          <h3 className="font-semibold mb-3">Accessories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Order Tracking</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Tutorials</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Sale</li>
            <li>Quick Ship</li>
            <li>New Designs</li>
            <li>Protection Plan</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-3">Policies</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Policy</li>
            <li>Dressy Inside</li>
            <li>About Us</li>
            <li>Company</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Contact us</li>
            <li>About us</li>
            <li>Reviews</li>
            <li>Terms of Service</li>
            <li>Refund policy</li>
          </ul>
        </div>
      </div>

      {/* Middle Row */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-b border-gray-800">
        {/* Download Apps */}
        <div>
          <h4 className="font-semibold mb-2">Download Our Apps</h4>
          <div className="flex gap-4">
            <FaGooglePlay className="text-3xl" />
            <FaApple className="text-3xl" />
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-2">Follow us</h4>
          <div className="flex gap-4 text-lg">
            <FaFacebookF />
            <FaXTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Need help? Call now!</h4>
          <p className="text-lg font-bold">(500) 8001 8588, (500) 544 6550</p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
