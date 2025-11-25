import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">Contact us</h2>
          <p className="text-gray-700">
            Send for us your request and we will get in touch with you as soon as possible
          </p>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white rounded-lg shadow">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5v14h18V5H3zm18-2a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h18z"/>
              </svg>
            </div>
            <span className="text-gray-700 font-medium">+380 98 782 82 23</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-white rounded-lg shadow">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1 3l-7 5-7-5V6l7 5 7-5v1z"/>
              </svg>
            </div>
            <span className="text-gray-700 font-medium">mailmail@gmail.com</span>
          </div>
        </div>

        {/* Right side */}
        <div data-aos="fade-left" className="bg-white p-8 rounded-2xl shadow-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">E-mail</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Send request
            </button>
            <p className="text-gray-400 text-sm mt-2">
              By sending request you agree to our Privacy & Policy
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

