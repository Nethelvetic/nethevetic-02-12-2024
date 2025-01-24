"use client";

import React, { useEffect } from "react";
import CardVImgTxt from '../components/card-V-Img-txt';



const QuiSuisJe = () => {


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

            {/*-----------------------------4 DEBUT CONTENEUR A */}
            <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">  
        


                {/*-----4.2.1 DEBUT COMPONENT  Carde verticale image texte  */}
                <div>
                  <CardVImgTxt imageSrc="jeroNum11Bg.png" title="À propos de Jérôme Golliard">
                    <p>J'accompagne les entrepreneurs et solopreneurs dans la création et le développement de leur entreprise.
                    <br></br>
                    <br></br>
                     Mon rôle est de simplifier les démarches administratives et juridiques, en proposant une approche accessible et personnalisée pour transformer vos idées en projets concrets.
                    <br></br>
                    <br></br>
                    Mon objectif est de rendre chaque étape de l’entrepreneuriat plus simple et efficace, tout en respectant votre rythme et vos besoins.
                    <br></br>
                    <br></br>
                    <strong>Je suis là pour vous aider à démarrer sereinement et à vous concentrer sur ce qui compte vraiment.</strong></p>
                  </CardVImgTxt>
                </div>
                {/*-----4.2.1 FIN COMPONENT  Carde verticale image texte  */}
    
            </div>
            {/*-----------------------------4 FIN CONTENEUR A */}

        </div>
       
    );
};

export default QuiSuisJe ;