import React from 'react';

const CardVTitreTxt = ({ title, children }) => {
  return (

     //-----------------------------1 DEBUT CONTENEUR A
    <div
      className="
        flex flex-col 
        items-center
        w-full max-w-5xl
        backdrop-blur-sm
        relative
        rounded-lg
        overflow-hidden ">


      {/* Titre */}
      <div className="flex flex-col justify-center w-full  text-white p-6 text-center">
        <h1 className="
                        font-bebas   
                        text-2xl 
                        sm:text-3xl 
                        md:text-4xl 
                        mb-4 
                        bg-bg-gradient 
                        text-transparent 
                        bg-clip-text
                        "
                        >
          {title}
        </h1>
        <div className="text-base sm:text-lg md:text-xl text-white">
          {children}
        </div>
      </div>
    
    </div>
  );
};

export default CardVTitreTxt;
