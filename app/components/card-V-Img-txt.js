"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CardVImgTxt = ({ imageSrc, title, children }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;
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

  return (
    <div className="flex flex-col w-full max-w-5xl bg-bg-gradient relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Bloc Image */}
      <div className="w-full flex items-center justify-center pb-6">
        <img
          ref={imageRef}
          src={imageSrc}
          alt={title}
          className="
            w-full
            h-auto
            object-contain
            brightness-125
            max-h-[400px]
          "
        />
      </div>

      {/* Bloc texte */}
      <div className="w-full text-white text-left">
        <h1
          className="
            font-bebas
            text-2xl
            sm:text-3xl
            md:text-4xl
            mb-4
            bg-bg-gradient
            text-transparent
            bg-clip-text
            filter brightness-50
          "
        >
          {title}
        </h1>
        <div
          className="
            text-base
            font-openSansRegular
            sm:text-lg
            md:text-xl
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardVImgTxt;
