"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import 'intersection-observer'; // <-- Polyfill si nécessaire

const CardHTxtImg = ({ imageSrc, title, children }) => {



//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
  const titleRef = useRef(null);

  useEffect(() => {
    const element = titleRef.current;

    // État initial de l'élément
    gsap.set(element, { x: -300, opacity: 0 });

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quand l’élément entre dans la vue
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
          // Quand l’élément sort de la vue, on le réinitialise
          gsap.set(element, { x: -300, opacity: 0 });
        }
      });
    };

    // Déclenche l'animation dès que l'élément commence à entrer dans la vue
    const options = {
      threshold: 0.0,
      // rootMargin: "0px"
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);

    // Nettoyage si le composant est démonté
    return () => observer.disconnect();
  }, []);




//---------------------------------------------------------------------
//------------------------2 Début affichage  --------------------------
//--------------------------------------------------------------------- 
  return (
    <div
      className="flex flex-row-reverse w-full max-w-5xl bg-bg-gradient relative rounded-lg shadow-lg overflow-hidden"
      ref={titleRef}
    >
      {/* Contenu à gauche */}
      <div className="flex flex-col justify-center w-full sm:w-2/3 text-white relative p-6">
        <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 text-transparent bg-clip-text bg-bg-gradient filter brightness-50">
          {title}
        </h1>
        <div className="text-base sm:text-lg md:text-xl text-white">
          {children}
        </div>
      </div>

      {/* Image à droite */}
      <div className="w-full sm:w-1/3 h-auto flex items-center justify-center relative">
        <img
          src={imageSrc}
          alt={title}
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain brightness-125 rounded-full"
        />
      </div>
    </div>
  );
};

export default CardHTxtImg;
