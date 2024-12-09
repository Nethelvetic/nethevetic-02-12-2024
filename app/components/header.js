import React from 'react';
import NavBarH from './navBar-H';

const Header = () => {
  return (
    <header className="w-full p-4">
      <NavBarH items={[
        { title: 'Accueil', link: '/' },
        { title: 'Blog', link: '/blog' },
        { title: 'Contact', link: '/contact' }
      ]} />
    </header>
  );
};

export default Header;
