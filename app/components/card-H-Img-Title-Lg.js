import React from 'react';

const CardHImgTitleLg = ({ imageSrc, title }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full m-0 bg-black p-24">
      <img src={imageSrc} alt={title} className="lg:w-1/3 w-full h-auto rounded-full object-cover bg-bg-gradient flex items-center justify-center mx-auto my-auto" />
      <div className="lg:w-2/3 p-4 flex items-center justify-center">
        <h1 className="font-bebas text-title-6 text-transparent bg-clip-text bg-bg-gradient text-center">{title}</h1>
      </div>
    </div>
  );
};

export default CardHImgTitleLg;

