import React, { useState } from 'react';
import logo from '../assets/images/ken16f.jpg';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white px-4 py-2 fixed w-full top-0 z-50 shadow-md">
      {/* Logo Section */}
      <div className="h-16 w-16 cursor-pointer" onClick={() => navigate('/')}>
        <img src={logo} alt="Logo" className="h-full w-full object-cover" />
      </div>

      {/* Donate Button for Mobile */}
      <div className="block md:hidden mx-2">
        <button
          onClick={() => navigate('/donate')}
          className="bg-red-600 text-white font-medium px-3 py-1 rounded-md"
        >
          Donate
        </button>
      </div>

      {/* Hamburger Menu */}
      <div className="block md:hidden mx-2">
        <button onClick={toggleMenu}>
          <img
            src={
              isMenuOpen
                ? 'https://img.icons8.com/fluent-systems-regular/2x/close-window.png'
                : 'https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png'
            }
            width="40"
            height="40"
            alt="Menu Toggle"
          />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:space-x-6 text-black w-full md:w-auto mt-4 md:mt-0`}
      >
        <Link to="/" className="block md:inline-block hover:text-red-500 px-3 py-2">
          Home
        </Link>
        <Link to="/about-us" className="block md:inline-block hover:text-red-500 px-3 py-2">
          About Us
        </Link>
        <Link to="/programs" className="block md:inline-block hover:text-red-500 px-3 py-2">
          Programs
        </Link>
        <Link to="/contact-us" className="block md:inline-block hover:text-red-500 px-3 py-2">
          Contact Us
        </Link>
        <Link
          to="/donate"
          className="block md:inline-block bg-red-600 text-white rounded-md px-4 py-2"
        >
          Donate
        </Link>
      </div>

      {/* Call Now Button for Desktop */}
      <div className="hidden md:flex items-center">
        <a href="tel:+233543158680" className="flex items-center bg-red-600 text-white px-4 py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          Call Now
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
