"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation"; // Si tu es en Next.js 13 (App Router)

const CardVTitre3Img = ({ imagesSrc, txt, txtBouton, title }) => {

//---------------------------------------------------------------------
//------------------------1 Début data dynamique  ---------------------
//---------------------------------------------------------------------
  const imageRefs = useRef([]);
  const rotationAngles = useRef([]);

  const router = useRouter(); 
  // (Note : si tu es en Next.js < 13, tu peux utiliser `useRouter` depuis "next/router" 
  // ou `next/link` pour lier le bouton.)




//---------------------------------------------------------------------
//------------------------2 Début comportement  -----------------------
//---------------------------------------------------------------------

  const handleMouseEnter = (index) => {
    if (!rotationAngles.current[index]) {
      rotationAngles.current[index] = 0;
    }
    rotationAngles.current[index] += 360;

    gsap.to(imageRefs.current[index], {
      rotation: rotationAngles.current[index],
      duration: 1,
      ease: "power3.out",
    });
  };

  // Fonction pour gérer le clic du bouton
  const handleButtonClick = (url) => {
    if (url) {
      router.push(url); // Redirige vers la page
    } else {
      // Si pas d'URL, ne rien faire ou afficher un console.log par exemple
      console.log("Aucune URL pour ce bouton !");
    }
  };




//---------------------------------------------------------------------
//------------------------1 Début affichage  --------------------------
//---------------------------------------------------------------------
  return (
    <div className="flex flex-col w-full max-w-5xl relative overflow-hidden text-gray-400">
      {/* Titre */}
      <div>
        <h1 className="flex justify-center font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 bg-bg-gradient text-transparent bg-clip-text">
          {title}
        </h1>
      </div>

      {/* Grille d'images + bouton + texte */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {imagesSrc.map((src, index) => {
          // Récupère le texte HTML sous le bouton
          const textForThisIndex =
            Array.isArray(txt) && txt[index] ? txt[index] : "";

          // Récupère l'objet du bouton si txtBouton est un tableau
          // ex: txtBouton[index] = { label: "...", url: "..." }
          const buttonObj =
            Array.isArray(txtBouton) && txtBouton[index]
              ? txtBouton[index]
              : null;

          // Label du bouton
          const buttonLabel = buttonObj?.label || "";
          // Lien du bouton
          const buttonUrl = buttonObj?.url;

          return (
            <div key={index} className="flex flex-col items-center">
              {/* Image */}
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={src}
                alt={`Image ${index + 1}`}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg"
              />

              {/* Bouton : seulement si on a un label (non vide) */}
              {buttonLabel && (
                <button
                  className="mt-2 px-3 py-1 bg-bg-gradient hover:bg-bg-gradient2 text-white font-bold rounded-lg"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onClick={() => handleButtonClick(buttonUrl)}
                >
                  {buttonLabel}
                </button>
              )}

              {/* Texte sous le bouton */}
              <div
                className="
                  font-openSansRegular
                  mt-2
                  text-center
                  break-words
                  text-sm sm:text-base md:text-lg
                  max-w-[15rem]
                "
                style={{ wordWrap: "break-word" }}
                dangerouslySetInnerHTML={{ __html: textForThisIndex }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardVTitre3Img;
