"use client";

import React from "react";

const CardVTitreTxt = ({ title, children }) => {




  //---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    //-----------------------------1 DEBUT PRIMAIRE
    <div className="flex flex-col  w-full max-w-5xl relative  overflow-hidden  p-4 sm:p-6 md:p-8 lg:p-10">

      {/* Titre */}
      <div>
        <h1 className="flex justify-center font-bebas text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-0 mb-4 bg-bg-gradient text-transparent bg-clip-text">
          {title}
        </h1>
      </div>

      {/* Children */}
      <div className="flex justify-center  text-gray-400 font-openSansRegular text-base sm:text-lg md:text-xl p-4 sm:p-6 md:p-8 lg:p-10">
        {children}
      </div>
    </div>
     //-----------------------------1 FIN PRIMAIRE
  );
};

export default CardVTitreTxt;