"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CardImgTitle = ({ imageSrc, title }) => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const element = imageContainerRef.current;
    gsap.set(element, { opacity: 0 });

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            element,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 14,
              ease: "power3.out",
            }
          );
        } else {
          gsap.set(element, { opacity: 0 });
        }
      });
    };

    const options = {
      threshold: 0.0,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-5xl relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Conteneur animé (photo) */}
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

      {/* Titre avec effet “blanc + contour noir” */}
      <h1
        className="
          absolute z-20 left-0 w-full
          top-[15%] sm:top-[15%] md:top-[15%]
          font-bebas
          text-center
          text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          line-clamp-2
        "
        style={{
          color: 'white',
          textShadow: `
            -1px 0 0 #000,
            0 1px 0 #000,
            1px 0 0 #000,
            0 -1px 0 #000
          `,
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default CardImgTitle;
