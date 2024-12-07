import React from 'react';

const NavBarV = ({ items }) => {
  return (
    <nav className="flex flex-col items-start p-4 bg-blue-500 h-full">
      <div className="logo mb-4">Logo</div>
      <div className="menu">
        {items.map((item, index) => (
          <a key={index} href={item.link} className="block mb-2">
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBarV;
