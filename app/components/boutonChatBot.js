"use client";

import React, { useState } from 'react';

const BoutonChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      {/* Button */}
      <button
        onClick={handleChatToggle}
        className="mt-6 px-6 py-3 bg-bg-gradient hover:bg-bg-gradient2 text-white font-bold rounded-lg"
      >
        Test mon chatbot maintenant
      </button>

      {/* Surimpression */}
      {isChatOpen && (
        <div className="fixed top-8 left-8 right-8 bottom-8 bg-white flex flex-col items-center justify-center z-50 border-2 border-gray-300 rounded-lg shadow-lg">
          {/* Bouton de fermeture */}
          <button
            onClick={handleChatToggle}
            className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 text-2xl font-bold"
          >
            ✖
          </button>
          <h1 className="text-2xl font-bold text-black">Salutation</h1>
        </div>
      )}
    </div>
  );
};

export default BoutonChatBot;
