import React, { useState } from 'react';
import logo from "../assets/images/ken16f.jpg";
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white px-4 fixed w-full top-0 z-50 ">
      <div className="h-24 w-24 py-2  ">
        <img src={logo} alt="Logo" className="h-full w-full cursor-pointer"onClick={() => navigate("/")} />
      </div>
      <div className="flex md:hidden mx-8">
        <button id="hamburger" onClick={toggleMenu}>
          <img
            className={!isMenuOpen ? 'block' : 'hidden'}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
            alt="Menu"
          />
          <img
            className={isMenuOpen ? 'block' : 'hidden'}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
            alt="Close"
          />
        </button>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right text-bold  mx-8 md:mt-0 md:border-none text-black`}>
        <Link to="/">
          <div className="block md:inline-block hover:text-red-500 px-3 py-3 md:border-none lg:text-2xl">Home</div>
        </Link>
        
        <Link to="/about-us">
          <div className="block md:inline-block hover:text-red-500 px-3 py-3 md:border-none lg:text-2xl">About Us</div>
        </Link>
        <Link to="/programs">
          <div className="block md:inline-block hover:text-red-500 px-3 py-3 md:border-none lg:text-2xl">Programs</div>
        </Link>
        <Link to="/contact-us">
          <div className="block md:inline-block hover:text-red-500 px-3 py-3 md:border-none lg:text-2xl">Contact Us</div>
        </Link>
      </div>
      <div className="hidden md:flex md:w-auto px-2 py-2 md:rounded">
        <a href="tel:+233535196841">
          <div className="flex justify-end">
            <div className="flex items-center h-10 w-30 rounded-md bg-red-600 text-white font-medium p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call now
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
