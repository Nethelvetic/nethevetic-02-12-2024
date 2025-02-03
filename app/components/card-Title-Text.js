"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CardTitleText = ({ imageSrc, title, children }) => {

//---------------------------------------------------------------------
//------------------------1 Début data dynamique ----------------------
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

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.0,
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

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
  const containerClasses = `
    w-full
    max-w-5xl
    relative
    overflow-hidden
    p-4 sm:p-6 md:p-8 lg:p-10
    text-white
    ${imageSrc ? "imageSrc" : ""}
  `;




//---------------------------------------------------------------------
//------------------------2 Début affichage ---------------------------
//---------------------------------------------------------------------
  return (
    <div ref={titleRef} style={backgroundStyle} className={containerClasses}>

      {/* Titre */}
      <div className="flex flex-col justify-center w-full relative p-6">
        <h1 className="flex justify-center font-bebas  bg-bg-gradient text-transparent bg-clip-text
             text-2xl sm:text-3xl md:text-4xl mb-4">
          {title}
        </h1>
        <div className="text-base text-gray-400 font-openSansRegular sm:text-lg md:text-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardTitleText;
