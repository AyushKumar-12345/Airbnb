

import React from "react";
import { Link } from "react-router-dom";

const Terms = () => (
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
    <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
    <p className="mb-2">Welcome to Airbnb Clone! By using our platform, you agree to the following terms and conditions. Please read them carefully.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. User Responsibilities</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>You must provide accurate and complete information when creating an account.</li>
      <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
      <li>All activities that occur under your account are your responsibility.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. Booking and Listings</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>All bookings are subject to approval by the host.</li>
      <li>Guests and hosts must communicate clearly and respectfully.</li>
      <li>Any disputes should be reported to our support team.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. Prohibited Activities</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Do not use the platform for illegal or unauthorized purposes.</li>
      <li>Do not post false, misleading, or inappropriate content.</li>
      <li>Respect the rights and privacy of other users.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">4. Termination</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
      <li>Users may delete their accounts at any time.</li>
    </ul>
    <p className="mt-6">If you have any questions about these terms, please contact our support team.</p>
  </div>
);

export default Terms;
