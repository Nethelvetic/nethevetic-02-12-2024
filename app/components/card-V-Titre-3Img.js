"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";

const CardVTitre3Img = ({ imagesSrc, txtBouton, title }) => {
  const imageRefs = useRef([]);
  const rotationAngles = useRef([]);

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

  return (
    //-----------------------------1 DEBUT CONTENEUR B
    <div className="flex flex-col justify-center w-full items-center text-gray-400 p-6 text-center max-w-5xl backdrop-blur-sm relative rounded-lg overflow-hidden">
      {/* Titre colonne 1 */}
      <div>
        <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 bg-bg-gradient text-transparent bg-clip-text">
          {title}
        </h1>
      </div>

      {/* Images, boutons et textes sous les boutons */}
      <div className="grid grid-cols-2 lg:flex lg:flex-row flex-wrap justify-center gap-8">
        {imagesSrc.map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image */}
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={src}
              alt={`Image ${index + 1}`}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full shadow-lg"
            />
            {/* Bouton sous l'image */}
            <button
              className="mt-4 px-4 py-2 bg-bg-gradient hover:bg-bg-gradient2 text-white font-bold rounded-lg"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              Jérôme {index + 1}
            </button>
            {/* Texte sous le bouton */}
            <div
              className="mt-2 text-sm text-center break-words"
              style={{ maxWidth: "10rem", wordWrap: "break-word" }}
              dangerouslySetInnerHTML={{ __html: txtBouton[index] }}
            ></div>
          </div>
        ))}
      </div>
    </div>
    //-----------------------------1 FIN CONTENEUR B
  );
};

export default CardVTitre3Img;
