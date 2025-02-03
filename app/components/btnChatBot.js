"use client";

import React, { useState } from 'react';

const BoutonChatBot = ({ title }) => {



//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
  const [isChatOpen, setIsChatOpen] = useState(false);




//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------
  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };



//---------------------------------------------------------------------
//------------------------3 Début affichage ---------------------------
//---------------------------------------------------------------------
  return (



    //-----------------------------1 DEBUT CONTENEUR B
    <div>
      {/* Button */}
      <button
        onClick={handleChatToggle}
        className="px-3 py-3 bg-bg-gradient hover:bg-bg-gradient2 text-white font-bold rounded-lg">
        {title}
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
     //-----------------------------1 Fin CONTENEUR B
  );
};

export default BoutonChatBot;
