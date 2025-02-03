import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 p-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start text-center">
        {/* Logo de l'entreprise */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/logoNeth.png"
            alt="Logo de l'entreprise"
            className="h-12 mb-2"
          />
          <p className="text-sm text-gray-400 max-w-xs">
            Platforme pour les entrepreneurs dans la création et la gestion de leur entreprise. 
            L'objectif est de simplifier les démarches, optimiser le temps et automatiser 
            les tâches pour ce concentrer sur l’essentiel.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-center">
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <p className="text-sm text-gray-400">Nethelvetic</p>
          <p className="text-sm text-gray-400">1872 Troistorrents</p>
          <a
            href="/contact-form"
            className="text-sm text-blue-400 hover:underline"
          >
            Formulaire de contact
          </a>
        </div>

        {/* Suivez-moi */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-lg font-bold mb-2">Suivez-moi</h2>
          <a
            href="https://twitter.com"
            className="text-sm text-gray-400 hover:text-gray-300 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            className="text-sm text-gray-400 hover:text-gray-300 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            className="text-sm text-gray-400 hover:text-gray-300 hover:underline"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
