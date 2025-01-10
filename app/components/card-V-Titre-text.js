"use client";

import React from "react";

const CardVTitreTxt = ({ title, children }) => {
  //---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    //-----------------------------1 DEBUT CONTENEUR B
    <div className="flex flex-col justify-center w-full items-center p-1 text-center max-w-5xl backdrop-blur-sm relative rounded-lg overflow-hidden">
      {/* Titre */}
      <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 bg-bg-gradient text-transparent bg-clip-text">
        {title}
      </h1>

      {/* Children */}
      <div className="text-gray-400 sm:px-4 md:px-16 lg:px-24 mb-6 md:mb-10 lg:mb-12">
        {children}
      </div>
    </div>
    //-----------------------------1 FIN CONTENEUR B
  );
};

export default CardVTitreTxt;
