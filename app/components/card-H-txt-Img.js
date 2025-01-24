"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CardHTxtImg = ({ imageSrc, title, children }) => {


//---------------------------------------------------------------------
//------------------------1 Début data dynamique ----------------------
//---------------------------------------------------------------------
  const titleRef = useRef(null);




//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------
  useEffect(() => {
    const element = titleRef.current;
    gsap.set(element, { x: -300, opacity: 0 });

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            element,
            { x: -300, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 3,
              ease: "power1.out",
            }
          );
        } else {
          gsap.set(element, { x: -300, opacity: 0 });
        }
      });
    };

    const options = { threshold: 0.0 };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);




//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------
  return (
    <div
      ref={titleRef}
      className="
        flex flex-row
        w-full
        max-w-5xl
        bg-bg-gradient
        relative
        overflow-hidden
        p-4 sm:p-6 md:p-8 lg:p-10

        items-stretch   /* Aligne la colonne texte et la colonne image sur la même hauteur */
      "
    >
      {/* Colonne texte (gauche) */}
      <div className="flex flex-col justify-center w-full sm:w-2/3 text-white relative p-6">
        <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 text-transparent bg-clip-text bg-bg-gradient filter brightness-50">
          {title}
        </h1>
        <div className="text-base font-openSansRegular sm:text-lg md:text-xl text-white">
          {children}
        </div>
      </div>

      {/* Colonne image (droite) */}
      <div className="w-full sm:w-1/3 flex items-center justify-center relative">
        <img
          src={imageSrc}
          alt={title}
          className="
            h-full      /* Remplit la hauteur du conteneur */
            w-auto      /* Conserve le ratio largeur/hauteur */
            object-contain
            brightness-125
            /* Aucune mention de rounded => bords carrés */
          "
        />
      </div>
    </div>
  );
};

export default CardHTxtImg;
