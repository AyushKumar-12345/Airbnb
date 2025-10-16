

import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => (
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
    <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
    <p className="mb-2">Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use Airbnb Clone.</p>
    <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>Personal information you provide when registering (name, email, etc.).</li>
      <li>Booking and listing details you submit on the platform.</li>
      <li>Usage data such as IP address, browser type, and device information.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>To provide and improve our services.</li>
      <li>To communicate with you about your account or bookings.</li>
      <li>To ensure the security and integrity of our platform.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing and Security</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>We do not sell or share your personal data with third parties except as required by law.</li>
      <li>Your data is stored securely using industry-standard measures.</li>
    </ul>
    <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
    <ul className="list-disc ml-6 mb-4">
      <li>You may access, update, or delete your personal information at any time.</li>
      <li>Contact us for any privacy-related questions or concerns.</li>
    </ul>
    <p className="mt-6">By using Airbnb Clone, you consent to this privacy policy. We may update this policy from time to time and will notify you of any significant changes.</p>
  </div>
);

export default Privacy;
