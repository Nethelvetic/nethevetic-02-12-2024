"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CardHImgTxt = ({ imageSrc, title, children }) => {



//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
  const titleRef = useRef(null);




//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------

  useEffect(() => {
    const el = titleRef.current;
    gsap.set(el, { x: -300, opacity: 0 });

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            el,
            { x: -300, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 3,
              ease: "power1.out",
            }
          );
        } else {
          gsap.set(el, { x: -300, opacity: 0 });
        }
      });
    };

    const options = { threshold: 0.0 };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);




//---------------------------------------------------------------------
//------------------------2 Début affichage  --------------------------
//---------------------------------------------------------------------
  return (
    //-----------------------------1 DEBUT CONTENEUR PRIMAIRE
    <div
      ref={titleRef}
      className="
        flex flex-row-reverse
        w-full
        max-w-5xl
        bg-bg-gradient
        relative
        overflow-hidden
        p-4 sm:p-6 md:p-8 lg:p-10
        
        items-stretch /* Pour que la colonne texte et la colonne image aient la même hauteur */
      ">
      {/* Colonne texte (à gauche, car flex-row-reverse inverse l'ordre) */}
      <div className="flex flex-col justify-center w-full sm:w-2/3 text-white relative p-6">
        <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 text-transparent bg-clip-text bg-bg-gradient filter brightness-50">
          {title}
        </h1>
        <div className="text-base font-openSansRegular sm:text-lg md:text-xl text-white">
          {children}
        </div>
      </div>

      {/* Colonne image (à droite visuellement, car flex-row-reverse) */}
      <div
        className="
          w-full sm:w-1/3
          flex
          justify-center
          relative
        "
      >
        <img
          src={imageSrc}
          alt={title}
          className="
            h-full
            w-auto
            object-contain
            brightness-125
            /* Aucune arrondie => pas de rounded-* */
          "
        />
      </div>
    </div>
    //-----------------------------1 FIN CONTENEUR PRIMAIRE
  );
};

export default CardHImgTxt;
