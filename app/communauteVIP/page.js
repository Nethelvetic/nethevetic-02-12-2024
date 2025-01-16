"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardImgTitle from '../components/card-Img-Title';
import CardVTitreTxt from '../components/card-V-Titre-text';
import BoutonCandidate from '../components/boutonCandidate';


const CommunauteVIP = () => {


//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------

//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------

//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//--------------------------------------------------------------------- 
  return (
    <div>

      {/*-----------------------------2 DEBUT espace entre les sections */}
      <div className="h-10"></div>





      {/*-----------------------------1 DEBUT CONTENEUR A */}
      <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <CardImgTitle
          imageSrc="communaute3.webp"
          title={<span className="text-white">la Communauté des “Francs-Parleurs”</span>}/>
      </div>

      


      {/*-----------------------------3 DEBUT CONTENEUR A */}
      <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-0">
          <CardVTitreTxt title="Bienvenue dans la Zone de Turbulences">
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Objectif :</strong> L’entrepreneuriat, ce n’est pas que des belles photos sur Instagram
                et des “stories success” mielleuses, mais aussi (et surtout) des remises en question, des moments de doute,
                des galères financières, des conflits d’équipe…
              </li>
              <li>
                <strong>Philosophie :</strong> Sans tabou, sans complaisance. On aborde la réalité pour transformer chaque difficulté en force.
              </li>
            </ul>
          </CardVTitreTxt>

          <div className="bg-transparent flex justify-center items-center mb-20">
            <BoutonCandidate title="Candidater" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunauteVIP;