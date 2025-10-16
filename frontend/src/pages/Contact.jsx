
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => (
  <div className="max-w-2xl mx-auto p-6">
    <div className="flex justify-start">
      <Link
        to="/"
        className="inline-block mb-4 px-7 py-2 bg-gradient-to-r from-[#FF5A5F] to-[#FF385C] text-white font-bold rounded-full shadow-lg hover:from-[#FF385C] hover:to-[#FF5A5F] hover:scale-105 transition-all duration-200 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] tracking-wide text-lg drop-shadow-md"
        style={{ fontFamily: 'circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif' }}
      >
  Home
      </Link>
    </div>
    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
    <p className="mb-2">For any inquiries, please contact us at:</p>
    <ul className="list-disc ml-6">
      <li>Email: support@airbnbclone.com</li>
      <li>Phone: +1 234 567 8900</li>
      <li>Address: 123 Main St, City, Country</li>
    </ul>
  </div>
);

export default Contact;
