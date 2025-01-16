"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CardImgTitle = ({ imageSrc, title }) => {
  //---------------------------------------------------------------------
  //-------------------------1 Début data dynamique ---------------------
  //---------------------------------------------------------------------
  const imageContainerRef = useRef(null);

  useEffect(() => {
    if (!imageContainerRef.current) return;

    // Animation de l'image (opacité uniquement)
    gsap.fromTo(
      imageContainerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 14,
        ease: "power3.out",
      }
    );
  }, []);

  //---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    // ------------------------1 DEBUT  conteneur primaire
    <div className="relative w-full bg-transparent flex flex-col items-center justify-center py-6 sm:py-8 md:py-10">
      {/* Conteneur animé (photo avec cadre rouge) */}
      <div
        ref={imageContainerRef}
        className="relative z-10 w-full flex justify-center pb-2 sm:pb-4 md:pb-8">
        <div
          className="p-2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
          <img
            src={imageSrc}
            alt={title}
            className="
              w-full max-h-[50vh] sm:max-h-[60vh] md:max-h-[80vh]
              object-contain
              brightness-125
              rounded-md
            "
          />
        </div>
      </div>

      {/* Titre avec texte en blanc */}
      <h1
        className="
          absolute z-20 left-0 w-full
          top-[15%] sm:top-[15%] md:top-[15%]
          font-bebas
          text-center
          text-white
          text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          line-clamp-2
        "
      >
        {title}
      </h1>
    </div>
    // ------------------------1 FIN conteneur primaire
  );
};

export default CardImgTitle;