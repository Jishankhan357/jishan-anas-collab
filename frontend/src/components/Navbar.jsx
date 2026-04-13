// components/Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <i className="fas fa-car text-2xl text-indigo-600"></i>
          <span className="text-2xl font-bold text-gray-900">SpeedRent</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li><a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Home</a></li>
          <li><a href="#cars" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Cars</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Contact</a></li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-6 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-full transition-all">
            Login
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all">
            Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas text-xl ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-6 py-4 space-y-4">
          <a href="#home" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">Home</a>
          <a href="#cars" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">Cars</a>
          <a href="#about" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">About</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
          <div className="pt-4 space-y-2">
            <button className="w-full text-left py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg">
              Login
            </button>
            <button className="w-full py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;