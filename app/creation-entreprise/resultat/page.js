"use client"; 

import React, { useEffect } from "react";
import AnimationLayout from '../../components/animationLayout';
import PageResultatQuestion from '../../components/pageResultatQuestion';
import { useSearchParams } from "next/navigation";




const CreationEntreprise = () => {


//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
const searchParams = useSearchParams();
const score = searchParams.get("score"); // string ou null
const scoreNum = Number(score) || 0;



//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------



//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//--------------------------------------------------------------------- 
  return (
    <AnimationLayout>
      <div>
      <PageResultatQuestion  scoreNum = {scoreNum} />
      </div>
    </AnimationLayout>
  
  );
};

export default CreationEntreprise;