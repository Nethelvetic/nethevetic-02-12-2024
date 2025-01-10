"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);





const CardVImgTxt = ({ imageSrc, title, children }) => {


//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
const titleRef = useRef(null);




//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------
useEffect(() => {
  // Animation GSAP avec ScrollTrigger
  gsap.fromTo(
    titleRef.current,
    { x: -300, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.out",
      scrollTrigger : {
          trigger: titleRef.current, 
          start: "top 60%", 
          end: "bottom 110%",
          markers : true,
          scrub: 6,
          pin: true
      } 
    }
  );
}, []);




//---------------------------------------------------------------------
//------------------------3 Début affichage ---------------------------
//---------------------------------------------------------------------
  return (
    //----------------------1 DEBUT CONTENEUR B
    <div
      className=" flex flex-col-reverse items-center w-full max-w-5xl bg-bg-gradient bg-opacity-90 backdrop-blur-sm relative rounded-lg shadow-lg overflow-hidden">

      {/* Titre */}
      <div className="flex flex-col justify-center w-full sm:w-2/3 text-white p-6 text-center sm:text-left z-10">
        <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 bg-bg-gradient text-transparent bg-clip-text filter brightness-50">
          {title}
        </h1>
        <div className="text-base sm:text-lg md:text-xl text-white ">
          {children}
        </div>
      </div>

      {/* Image avec animation */}
      <div className="w-full sm:w-1/3 h-auto flex items-center justify-center relative p-6 z-10">
        <img
          src={imageSrc}
          alt={title}
          className="relative w-56 h-56 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain brightness-125 rounded-full"ref={titleRef}
        />
      </div>
    </div>
    //----------------------1 FIN CONTENEUR B
  );
};

export default CardVImgTxt;
