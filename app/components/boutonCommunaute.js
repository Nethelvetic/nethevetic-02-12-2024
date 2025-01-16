"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const BoutonCommunaute = ({ title }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/communauteVIP');
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 px-4 py-2 bg-bg-gradient hover:bg-bg-gradient2 text-white font-bold rounded-lg">
      {title}
    </button>
  );
};

export default BoutonCommunaute;
