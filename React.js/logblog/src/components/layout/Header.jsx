import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import logo from "../../assets/small_logo_invert.png";

const Header = ({marqueeContext}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const randomMarquee = (marqueeContext) => {
    const randomIndex = Math.floor(Math.random() * marqueeContext.length);
    return marqueeContext[randomIndex];
  }

  return (
    <header className="bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4 h-10">
        {/* Logo and Title */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-4" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 pl-4">
          <a href="#" className="hover:text-gray-300 font-Chubby text-xl">
            SIGNIN
          </a>
          <a href="#" className="hover:text-gray-300 font-Chubby text-xl">
            SIGNUP
          </a>
          <a href="#" className="hover:text-gray-300 font-Chubby text-xl">
            SETTINGS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div className="text-center text-white bg-red-900 hover:bg-red-800">
        <Marquee className="text-xl font-Cursive tracking-wide" speed={25}>
            {randomMarquee(marqueeContext)}
        </Marquee>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <a href="#" className="block hover:text-gray-300 font-Chubby text-xl">
            SIGNIN
          </a>
          <a href="#" className="block hover:text-gray-300 font-Chubby text-xl">
            SIGNUP
          </a>
          <a href="#" className="block hover:text-gray-300 font-Chubby text-xl">
            SETTING
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
