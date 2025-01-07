"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);





const CardVTitreTxt = ({ title, children }) => {


//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------



//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------



//---------------------------------------------------------------------
//------------------------3 Début affichage ---------------------------
//---------------------------------------------------------------------
  return (

     //-----------------------------1 DEBUT CONTENEUR B
    <div
      className=" flex flex-col justify-center w-full items-center text-white  p-6 text-center max-w-5xl backdrop-blur-sm relative rounded-lg overflow-hidden ">


        {/* Titre */}
        <h1 className=" font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 bg-bg-gradient text-transparent bg-clip-text">
          {title}
        </h1>
        

        {/* Children */}
        <div className="text-base sm:text-lg md:text-xl text-white sm:px-4 md:px-16 lg:px-24 mb-6 md:mb-10 lg:mb-12">
          {children}
        </div>


        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-bg-gradient hover:bg-bg-gradient2 text-white font-bold rounded-lg">
          Test mon chatbot maintenant
        </button>

    </div>
    //-----------------------------1 FIN CONTENEUR B
    
  );
};

export default CardVTitreTxt;
