"use client";

import PageAccueil from './components/pageAccueil';
import AnimationLayout from './components/animationLayout';
import React, { useState } from "react";
import 'intersection-observer';




export default function HomePage() {


//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------

//---------------------------------------------------------------------
//------------------------2 Début fonctions ---------------------------
//---------------------------------------------------------------------

//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------
  return (
    <AnimationLayout>
      <div>
      <PageAccueil/>
      </div>
    </AnimationLayout>
  );
}
