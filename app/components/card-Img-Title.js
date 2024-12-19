"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const CardImgTitle = ({ imageSrc, title }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Animation GSAP avec ScrollTrigger
    gsap.fromTo(
      titleRef.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger : {
            trigger: titleRef.current, 
            start: "top 20%", 
            end: "bottom 110%",
            markers : true,
            scrub: 3,
            pin: true
        } 
      }
    );
  }, []);

  return (
    <div className="relative w-full bg-gray-800 flex items-center justify-center pt-16 pb-6 px-12">
      <div className="relative">
        {/* Image ronde, agrandie et responsive */}
        <img
          src={imageSrc}
          alt={title}
          className="w-[18rem] h-[22rem] sm:w-[22rem] sm:h-[28rem] md:w-[22rem] md:h-[28rem] lg:w-[26rem] lg:h-[34rem] xl:w-[34rem] xl:h-[46rem] object-cover mx-auto brightness-125 rounded-full"
          ref={titleRef}
        />
        {/* Titre avec animation */}
        <div
          className="absolute top-10 w-full flex items-center justify-center pt-20 px-4"
        >
          <h1 className="font-bebas text-center text-transparent bg-clip-text bg-bg-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl line-clamp-2">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardImgTitle;
