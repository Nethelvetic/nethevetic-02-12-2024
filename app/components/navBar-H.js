"use client";

import React, { useState } from 'react';

const NavBarH = ({ items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 w-full bg-gray-800/70 backdrop-blur-sm py-4 px-8 z-50">
      <div className="logo">
        <img 
          src="LogoNeth.png" 
          alt="Logo" 
          className="h-10 sm:h-14 md:h-16 lg:h-20"
        />
      </div>

      {/* Menu visible sur grand écran */}
      <div className="hidden md:flex space-x-4">
        {items.map((item, index) => (
          <a key={index} href={item.link} className="text-white hover:text-gray-200 font-openSansRegular">
            {item.title}
          </a>
        ))}
      </div>

      {/* Bouton hamburger visible sur petit écran */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Menu déroulant pour petit écran */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 w-full bg-white/80 backdrop-blur-md flex flex-col space-y-2 md:hidden py-4 px-8">
          {items.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              className="font-bebas text-center text-3xl text-transparent bg-clip-text bg-bg-gradient hover:opacity-80"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBarH;