import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-gray-900 text-gray-300 py-8 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section */}
        <div className="mb-3 md:mb-0 text-center md:text-left">
          <span className="font-semibold text-lg text-white">Airbnb Clone</span>
          <span className="ml-2 text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Right Section */}
        <nav className="flex space-x-6 text-sm">
          <Link
            to="/privacy"
            className="hover:text-white transition duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-white transition duration-200"
          >
            Terms of Service
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition duration-200"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
