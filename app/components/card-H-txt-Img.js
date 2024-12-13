import React from 'react';

const CardHImgTxtLg = ({ imageSrc, title, children }) => {
  return (
    <div className="flex flex-row-reverse w-full bg-gray-800">
      {/* Image à droite avec un arrondi personnalisé */}
      <div className="w-1/3 h-auto flex items-center justify-center">
        <img
          src={imageSrc}
          alt={title}
          className="w-[12rem] h-[12rem] sm:w-[14rem] sm:h-[14rem] md:w-[16rem] md:h-[16rem] lg:w-[18rem] lg:h-[18rem] xl:w-[20rem] xl:h-[20rem] object-contain mx-auto brightness-125 rounded-[50px]"
        />
      </div>

      {/* Contenu à gauche */}
      <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12 w-2/3 text-white">
        <h1 className="font-bebas text-title-5 md:text-title-4 lg:text-title-3 mb-4 text-transparent bg-clip-text bg-bg-gradient">
          {title}
        </h1>
        <div className="text-title-7 sm:text-title-6 md:text-title-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardHImgTxtLg;
