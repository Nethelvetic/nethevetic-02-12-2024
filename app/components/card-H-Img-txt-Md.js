import React from 'react';

const CardHImgTxtMd = ({ imageSrc, title, content }) => {
  return (
    <div className="flex flex-col lg:flex-row w-1/2">
      <img src={imageSrc} alt={title} className="lg:w-1/3" />
      <div className="lg:w-2/3 p-4">
        <h2 className="font-bebas text-title-3 bg-title-6-gradient text-transparent bg-clip-text">{title}</h2>
        <p className="font-openSansRegular text-title-5">{content}</p>
      </div>
    </div>
  );
};

export default CardHImgTxtMd;
