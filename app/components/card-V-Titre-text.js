"use client";

import React from "react";

const CardVTitreTxt = ({imageSrc, title, children }) => {


  //---------------------------------------------------------------------
  //------------------------1 Début data dynamique ----------------------
  //---------------------------------------------------------------------
  // 1. Générer un style inline si `imageSrc` existe
  const backgroundStyle = imageSrc
    ? {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  // 2. Générer des classes conditionnelles
  // - si pas d'image, on applique bg-bg-gradient
  // - sinon, on laisse juste text-white etc.
  const containerClasses = 
  `
    flex flex-col
    w-full
    max-w-5xl
    relative
    overflow-hidden
    p-4 sm:p-6 md:p-8 lg:p-10
    text-white
    ${imageSrc ? "imageSrc" : "bg-bg-gradient"}
  `;




  //---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    //-----------------------------1 DEBUT CONTENEUR PRIMAIRE
    <div className={containerClasses}>

      {/* Titre */}
      <div>
        <h1 className="flex justify-center font-bebas text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-0 mb-4 
           bg-bg-gradient
            text-transparent
            bg-clip-text
            filter brightness-50
        ">
          {title}
        </h1>
      </div>

      {/* Children */}
      <div className=" text-white font-openSansRegular text-base sm:text-lg md:text-xl">
        {children}
      </div>
    </div>
     //-----------------------------1 FIN CONTENEUR PRIMAIRE
  );
};

export default CardVTitreTxt;