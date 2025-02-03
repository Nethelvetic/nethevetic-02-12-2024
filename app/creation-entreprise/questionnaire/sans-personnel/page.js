"use client"; // si tu es en Next.js 13 App Router

import React, { useState } from "react";
import FormCreerEntreprise from '../../../components/formCreerEntreprise';

export default function SansPersonnel() {
  //---------------------------------------------------------------------
  //------------------------1 Début data dynamique ----------------------
  //---------------------------------------------------------------------

  //---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    <div>
    {/*-----------------------------2 DEBUT espace entre les sections */}
    <div className="h-10"></div>




    {/*-----------------------------1 DEBUT CONTENEUR A */}
    <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">

      {/*----------------5.1 DEBUT COMPONENT image et titre  */}
      <FormCreerEntreprise/>
    </div>
</div>
  );
}
