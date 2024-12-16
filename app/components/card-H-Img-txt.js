import React from 'react';

const CardHImgTxt = ({ imageSrc, title, children }) => {
  return (
    <div
      className="
        flex flex-row-reverse
        w-full max-w-5xl
        bg-bg-gradient
        relative
        rounded-lg
        shadow-lg
        overflow-hidden
      "
    >
      {/* Contenu à gauche */}
      <div className="flex flex-col justify-center w-full sm:w-2/3 text-white relative p-6">
        <h1
          className="
            font-bebas 
            text-2xl sm:text-3xl md:text-4xl 
            mb-4 
            text-transparent 
            bg-clip-text 
            bg-bg-gradient
             filter brightness-50
          "
        >
          {title}
        </h1>
        <div className="text-title-7 sm:text-title-6 md:text-title-5 text-white">
          {children}
        </div>
      </div>

      {/* Image à droite */}
      <div className="w-full sm:w-1/3 h-auto flex items-center justify-center relative">
        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className="
            relative
            w-48 h-48 sm:w-56 sm:h-56
            md:w-64 md:h-64
            lg:w-72 lg:h-72
            xl:w-80 xl:h-80
            object-contain
            brightness-125
            rounded-full
          "
        />
      </div>
    </div>
  );
};

export default CardHImgTxt;
