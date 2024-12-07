"use client";

import React, { useState } from 'react';

const NavBarH = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white fixed top-0 left-0 w-full border-b-0 border-b-white p-4">
      <div className="logo mx-auto">
        <img src="LogoNeth.png" alt="Logo" className="h-20" />
      </div>

      {/* Menu visible sur grand écran */}
      <div className="hidden md:flex space-x-4">
        {items.map((item, index) => (
          <a key={index} href={item.link} className="text-black hover:text-gray-600 font-openSansBold text-xl">
            {item.title}
          </a>
        ))}
      </div>

      {/* Bouton hamburger visible sur petit écran */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Menu déroulant pour petit écran */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white text-title-6-gradient flex flex-col space-y-2 md:hidden p-8">
          {items.map((item, index) => (
            <a key={index} href={item.link} className="hover:text-gray-300 font-bebas text-title-2 text-transparent bg-clip-text bg-gradient text-center">
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBarH;
