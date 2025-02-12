import React, { useState } from 'react';

const NavBarHumburger = ({ items }) => {
  //---------------------------------------------------------------------
  //------------------------1 Début data dynamique ----------------------
  //---------------------------------------------------------------------
  const [isOpen, setIsOpen] = useState(false);




  //---------------------------------------------------------------------
  //------------------------2 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500">
      <div className="logo">Logo</div>
      <button onClick={() => setIsOpen(!isOpen)} className="hamburger-btn">
        ☰
      </button>
      {isOpen && (
        <div className="menu">
          {items.map((item, index) => (
            <a key={index} href={item.link} className="block mt-2">
              {item.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBarHumburger;
