import React from 'react';

const CardImgTitle = ({ imageSrc, title }) => {
  return (
    <div className="relative w-full bg-gray-800 flex items-center justify-center pt-16 pb-6 px-12">
      <div className="relative">
        {/* Image ronde, agrandie et responsive */}
        <img
          src={imageSrc}
          alt={title}
          className="w-[18rem] h-[22rem] sm:w-[22rem] sm:h-[28rem] md:w-[22rem] md:h-[28rem] lg:w-[26rem] lg:h-[34rem] xl:w-[34rem] xl:h-[46rem] object-cover mx-auto brightness-125 rounded-full"
        />
        {/* Titre positionné en haut, limité à 2 lignes */}
        <div className="absolute top-0 w-full flex items-center justify-center pt-4 px-4">
          <h1 className="font-bebas text-center text-transparent bg-clip-text bg-bg-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl line-clamp-2">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CardImgTitle;
