import React from 'react';

const CardImgTitle = ({ imageSrc, title }) => {
  return (
    <div className="relative w-full bg-black flex items-center justify-center p-10">
      {/* Image ronde, plus petite et responsive */}
      <img
        src={imageSrc}
        alt={title}
        className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[18rem] md:w-[20rem] md:h-[20rem] lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] object-cover mx-auto brightness-125 rounded-full"
      />
      {/* Titre superposé en haut avec dégradé */}
      <div className="absolute top-0 w-full flex items-center justify-center pt-4">
        <h1 className="font-bebas text-center text-transparent bg-clip-text bg-bg-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CardImgTitle;
