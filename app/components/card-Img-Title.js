"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import 'intersection-observer'; // <-- Optionnel si besoin pour iOS < 12.2

const CardImgTitle = ({ imageSrc, title }) => {



//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
  const imageContainerRef = useRef(null);




  //---------------------------------------------------------------------
  //------------------------2 Début comportement ------------------------
  //---------------------------------------------------------------------
  useEffect(() => {
    const element = imageContainerRef.current;

    // On place l'élément à opacité 0 avant l'observation
    gsap.set(element, { opacity: 0 });

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quand l'élément entre dans la vue, on lance l'animation
          gsap.fromTo(
            element,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 14,  // Garde la durée de 14s, adaptée à tes besoins
              ease: "power3.out",
            }
          );
        } else {
          // Quand l’élément sort de la vue, on le réinitialise
          gsap.set(element, { opacity: 0 });
        }
      });
    };

    // On déclenche l'intersection dès que l'élément commence à entrer dans la vue
    const options = {
      threshold: 0.0,
      // rootMargin: "0px",
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);

    // Nettoyage si le composant se démonte
    return () => observer.disconnect();
  }, []);




//---------------------------------------------------------------------
//------------------------2 Début affichage ---------------------------
//---------------------------------------------------------------------
  return (
    // ------------------------1 DEBUT  conteneur primaire
    <div className="flex flex-col w-full max-w-5xl relative  overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Conteneur animé (photo avec cadre rouge) */}
      <div
        ref={imageContainerRef}
        className="relative z-10 w-full flex justify-center pb-2 sm:pb-4 md:pb-8"
      >
        <div className="p-2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
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
