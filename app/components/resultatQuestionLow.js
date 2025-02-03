"use client";
import React, { useEffect, useRef } from "react";
import CardHTxtImg from './card-H-txt-Img';
import CardTitleText from './card-Title-Text'
import CardVTitreTxt from './card-V-Titre-text';
import CardTitre3Img3Txt from './card-Titre-3Img-3Txt';


const ResultatQuestionLow = ({ imageSrc, title, children }) => {

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
          <CardHTxtImg imageSrc="/jeroNum591.jpg" title="Oups, il vous manque des pièces pour décoller !">
            <br></br>
            <p>
                <strong>Pourquoi ? </strong>
                    <ul className="list-disc ml-6">
                        <li>
                        Activité pas encore définie
                        </li>
                        <li>
                        Aspects légaux/fiscaux flous
                        </li>
                        <li>
                        Doutes sur le lancement
                        </li>
                    </ul>
            </p>
          </CardHTxtImg>
        </div>
        {/*-----------------------------2 FIN CONTENEUR A */}




        {/*-----------------------------2 DEBUT espace entre les sections */}
        <div className="h-28"></div>




        {/*-----------------------------3 DEBUT CONTENEUR A */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        
        {/*----------------3.1 DEBUT COMPONENT  Carde verticale titre et 3 x images  */}
        <CardTitre3Img3Txt 
            imagesSrc={[
            "/jeroNum541.jpg",
            "/jeroNum551.jpg",
            "/jeroNum581.jpg",
            "/jeroNum561.jpg"
            ]}
            txtBouton={[
            { label: "Réserver mon entretien", url: "/somePage" },
            { label: "Rejoindre la Formation", url: "/contact" },
            { label: "Accéder aux Ressources", url: "/contact" },
            { label: "Réserver mon entretien", url: "/contact" }
            ]}
            txt={[
            "<p><strong>Entretien Perso (350 CHF)</strong></p><p>60 min pour clarifier votre projet, obligations, priorités.</p>",
            "<p><strong>Formation Collective</strong></p><p>Sessions en groupe : maîtrisez les bases et échangez.</p>",
            "<p><strong>Ressources Gratuites</strong></p><p>Guides PDF, vidéos et articles pour avancer à votre rythme.</p>",
            "<p><strong>1/2 Journée (590 CHF)</strong></p><p>Accompagnement personnalisé, pour booster votre lancement.</p>",
            ]}
            title="clarifier certains points avant de devenir indépendant(e)"
        />
        </div>
        {/*-----------------------------3 FIN CONTENEUR A */}



        {/*-----------------------------4 DEBUT CONTENEUR A */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
   
            <CardTitleText title="Foire aux Questions (FAQ)">
                <p>
                Pas encore prêt(e) à devenir indépendant(e) ? Pas de panique !
                </p>
            </CardTitleText>
        </div>
        {/*-----------------------------4 FIN CONTENEUR A */}



        {/*-----------------------------5 DEBUT CONTENEUR A */}
        {/*-----------------------------  Question 1 */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">

        <CardVTitreTxt imageSrc="" title="Est-ce grave de ne pas être prêt maintenant ?">
        <p>
         Non, c’est simplement un signal qu’il reste des éléments à clarifier ou approfondir. Il vaut mieux être bien préparé avant de se lancer pour éviter les mauvaises surprises.
        </p>
        </CardVTitreTxt>
        </div>
        {/*-----------------------------5 FIN CONTENEUR A */}



        {/*-----------------------------6 DEBUT CONTENEUR A */}
         {/*-----------------------------  Question 2 */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">

        <CardVTitreTxt imageSrc="" title=" Faible score : me déclarer indépendant ?">
        <p>
            Oui, c’est possible, mais cela peut entraîner des difficultés (administratives, offre floue…). Mieux vaut clarifier votre projet pour éviter les pièges.
        </p>
        </CardVTitreTxt>
        </div>
        {/*-----------------------------6 FIN CONTENEUR A */}



        {/*-----------------------------7 DEBUT CONTENEUR A */}
         {/*-----------------------------  Question 3 */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">

        <CardVTitreTxt imageSrc="" title="Déjà un job à 100% : un problème ?">
        <p>
            Pas forcément. Certains commencent en parallèle. Mais prudence : 80% en plus peut être suspect. Vérifiez avec votre employeur (concurrence, surcharge...).
        </p>
        </CardVTitreTxt>
        </div>
        {/*-----------------------------7 FIN CONTENEUR A */}



        {/*-----------------------------8 DEBUT CONTENEUR A */}
         {/*-----------------------------  Question 4 */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">

        <CardVTitreTxt imageSrc="" title="Quel délai après l’envoi du dossier ?">
        <p>
            Ça varie de 2 semaines à 2 mois, selon les formalités et la réactivité de l’administration.
        </p>
        </CardVTitreTxt>
        </div>
        {/*-----------------------------8 FIN CONTENEUR A */}
     
    </div>
    );

};

export default ResultatQuestionLow;
