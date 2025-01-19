"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import 'intersection-observer'; // <-- Optionnel : polyfill si besoin pour anciens navigateurs

const CardVImgTxt = ({ imageSrc, title, children }) => {




//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
  const titleRef = useRef(null);

  useEffect(() => {
    const element = titleRef.current;

    // On positionne l'élément à son état initial
    gsap.set(element, { x: -300, opacity: 0 });

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quand l'élément entre dans la zone visible
          gsap.fromTo(
            element,
            { x: -300, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 2,
              ease: "power1.out",
            }
          );
        } else {
          // Quand l'élément sort de la zone visible, on le remet à zéro
          gsap.set(element, { x: -300, opacity: 0 });
        }
      });
    };

    // Options Intersection Observer
    // threshold: 0.1 => 10% de l'élément doit être visible pour déclencher
    // rootMargin: "0px 0px -30% 0px" => déclenche l'intersection un peu plus tôt
    const options = {
      threshold: 0.0,
      // rootMargin: "0px" // pas de marge pour le test
    };
    

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);




//---------------------------------------------------------------------
//------------------------2 Début affichage ---------------------------
//--------------------------------------------------------------------- 
  return (
    <div className="flex flex-col-reverse items-center w-full max-w-5xl bg-bg-gradient bg-opacity-90 backdrop-blur-sm relative rounded-lg shadow-lg overflow-hidden">
      {/* Titre */}
      <div className="flex flex-col justify-center w-full sm:w-2/3 text-white p-6 text-center sm:text-left z-10">
        <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 bg-bg-gradient text-transparent bg-clip-text filter brightness-50">
          {title}
        </h1>
        <div className="text-base sm:text-lg md:text-xl text-white">
          {children}
        </div>
      </div>

      {/* Image */}
      <div className="w-full sm:w-1/3 h-auto flex items-center justify-center relative p-6 z-10">
        <img
          ref={titleRef}
          src={imageSrc}
          alt={title}
          className="relative w-56 h-56 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain brightness-125 rounded-full"
        />
      </div>
    </div>
  );
};

export default CardVImgTxt;
