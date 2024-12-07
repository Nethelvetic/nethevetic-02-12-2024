import React from 'react';

const CardVImgTxtSm = ({ imageSrc, title, content }) => {
  return (
    <div className="w-1/3">
      <img src={imageSrc} alt={title} className="w-full h-1/3" />
      <div className="p-4">
        <h2 className="font-bebas text-title-3 bg-title-6-gradient text-transparent bg-clip-text">{title}</h2>
        <p className="font-openSansRegular text-title-5">{content}</p>
      </div>
    </div>
  );
};

export default CardVImgTxtSm;
