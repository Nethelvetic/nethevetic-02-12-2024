"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const BtnFormIndeSansPerson = ({ title }) => {
  //---------------------------------------------------------------------
  //------------------------1 Début data dynamique ----------------------
  //---------------------------------------------------------------------
  const router = useRouter();




  //---------------------------------------------------------------------
  //------------------------2 Début comportement  -----------------------
  //---------------------------------------------------------------------
  const handleClick = () => {
    router.push('/creation-entreprise/questionnaire');
  };




  //---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    <button
      onClick={handleClick}
      className="mt-4 px-4 py-2 bg-bg-gradient hover:bg-bg-gradient2 text-white font-bold rounded-lg"
    >
      {title}
    </button>
  );
};

export default BtnFormIndeSansPerson;
