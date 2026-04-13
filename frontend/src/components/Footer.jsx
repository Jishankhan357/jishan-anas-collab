// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <i className="fas fa-car text-3xl text-indigo-400"></i>
              <h3 className="text-2xl font-bold">SpeedRent</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted car rental partner. Rent with confidence anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Car Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Van Rental</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Luxury Cars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Airport Transfer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <p className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-phone text-indigo-400"></i>
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-indigo-400"></i>
                <span>hello@speedrent.com</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-map-marker-alt text-indigo-400"></i>
                <span>123 Rental St, City</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SpeedRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;