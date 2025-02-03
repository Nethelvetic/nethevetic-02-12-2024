"use client";
import React, { useEffect, useRef } from "react";
import CardHTxtImg from './card-H-txt-Img';
import CardTitleText from './card-Title-Text'
import BtnTestEntrepreneur from './btnTestEntrepreneur';
import CardVTitreTxt from './card-V-Titre-text';
import CardTitre3Img3Txt from './card-Titre-3Img-3Txt';


const ResultatQuestionGood = ({ imageSrc, title, children }) => {

//---------------------------------------------------------------------
//------------------------1 Début data dynamique ----------------------
//---------------------------------------------------------------------


//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------
 

//---------------------------------------------------------------------
//------------------------2 Début affichage ---------------------------
//---------------------------------------------------------------------
  return ( 

    <div>

      {/*-----------------------------1 DEBUT espace entre les sections */}
      <div className="h-10"></div>




      {/*-----------------------------2 DEBUT CONTENEUR A */}
      <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">

        {/*----------------2.1 DEBUT COMPONENT  Carde horizontale texte image  */}
        <CardHTxtImg imageSrc="/positifDoigt.webp
        " title="Vous êtes prêt(e) à accélérer !">
        <br></br>
        <p>
            <strong>Phase 2 </strong>
                    <ul className="list-disc ml-6">
                        <li>
                            Rassemblez vos infos (identité, adresse, activité, revenus, assurances…) pour le questionnaire officiel.
                        </li>
                    </ul>
        </p>
        </CardHTxtImg>
        </div>
        {/*-----------------------------2 FIN CONTENEUR A */}




        {/*-----------------------------3 DEBUT CONTENEUR A */}
        <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
            
            {/*----------------6.1 DEBUT  grid col 2x Carde verticale image texte  */}
            <div className="grid  grid-cols-1 gap-0 ">

                {/*-----6.2.1 DEBUT COMPONENT  Carde verticale titre texte  */}
                <CardTitleText title="Remplissez le dossier officiel en ligne.
">
                </CardTitleText>


                {/*-----6.2.3 DEBUT CONTENEUR A */}
                <div className="bg-transparent flex justify-center items-center mb-20">
                    <BtnTestEntrepreneur title="Faire le test" />
                </div>
            </div>
        </div>  
        {/*-----------------------------6 FIN CONTENEUR A */}


    
    </div>
    );

};

export default ResultatQuestionGood;
