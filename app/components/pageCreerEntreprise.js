import CardImgTitle from './card-Img-Title';
import CardHTxtImg from './card-H-txt-Img';
import CardTitleText from './card-Title-Text'
import CardVTitreTxt from './card-V-Titre-text';
import CardVTitre3Img from './card-Titre-3Img-3Txt';
import BtnTestEntrepreneur from './btnTestEntrepreneur';
import CardVImgTxt from './card-V-Img-txt'
import BoutonEvent from './btnEvent';
import BoutonNewsLetter from './btnNewsLetter';



export default function PageCommunaute({showCommunaute}) {


//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------

//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------

//---------------------------------------------------------------------
//------------------------2 Début affichage   -------------------------
//--------------------------------------------------------------------- 
    return (

    <div>

      {/*-----------------------------1 DEBUT espace entre les sections */}
      <div className="h-10"></div>




      {/*-----------------------------2 DEBUT CONTENEUR A */}
      <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <CardImgTitle
          imageSrc="jeroNum511.jpg"
          title="Devenez Indépendant en Suisse, Sans Stress"/>
      </div>

    


       {/*-----------------------------3 DEBUT CONTENEUR A */}
       <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
               
               {/*----------------3.1 DEBUT  grid col 2x Carde verticale image texte  */}
               <div className="grid  grid-cols-1 gap-0 ">
                   {/*-----3.2.1 DEBUT COMPONENT  Carde verticale titre texte  */}
                   <CardTitleText title="Êtes-vous prêt(e) à devenir Indépendant(e) en Suisse ?">
                       <p>
                       Évaluer la maturité du votre projet. 
                       </p>
                   </CardTitleText>
                   {/*-----3.2.3 DEBUT CONTENEUR A */}
                   <div className="bg-transparent flex justify-center items-center mb-20">
                       <BtnTestEntrepreneur title="Faire le test" />
                   </div>
               </div>
       </div>  
       {/*-----------------------------3 FIN CONTENEUR A */}




      {/*-----------------------------4 DEBUT CONTENEUR A */}
      <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
  
            {/*-----4.1.1 DEBUT COMPONENT  Carde V titre texte  */}
            <CardTitleText title="Embrassez l’indépendance en Suisse… Faites le grand saut !">
            <p>
            Vous hésitez entre tout faire vous-même ou être accompagné(e) ?
            Choisissez la formule qui vous correspond.
            </p>
            <br></br>
            <ul className="list-disc ml-6">
                <li>
                <strong>Formule gratuite: </strong>Parfait si vous gérez tout vous-même.
                </li>
                <li>
                <strong>Formule Premium: </strong>Idéal pour un soutien complet et éviter les pièges.
                </li>
             </ul>
            </CardTitleText>
        </div>
        {/*-----------------------------4 FIN CONTENEUR A */}




        {/*-----------------------------5 DEBUT CONTENEUR A */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
     
            {/*----------------5.1 DEBUT  grid col 2x Carde verticale image texte  */}
            <div className="grid  grid-cols-1  gap-4  md:grid-cols-2  w-full max-w-5xl">

                {/*-5.1.1 DEBUT  premier composant  */}      
                <div>
                    <CardVTitreTxt imageSrc="" title="Formule 1 : Gratuite & Automatisée">
                        <ol className="list-decimal ml-4">
                        <li>
                        <strong>Questionnaire (Phase 1) </strong>
                            <ul className="list-disc ml-6">
                            <li>
                            Vérifiez si vous êtes prêt(e).
                            </li>
                            <li>
                            Si OK ? Vous accédez à la Phase 2.
                            </li>
                            <li>
                            No OK ? Optez pour le <strong>Premium.</strong>
                            </li>
                            </ul>
                        </li>
                        <br></br>
                        <li>
                        <strong>Formalités 100% en Ligne (Phase 2)</strong>
                            <ul className="list-disc ml-6">
                            <li>
                            Remplissez les infos nécessaires.
                            </li>
                            <li>
                            0 CHF, 0 stress.
                            </li>
                            </ul>
                        </li>
                        <br></br>
                        <li>
                        <strong>Statut validé</strong>
                            <ul className="list-disc ml-6">
                                <li>
                                On vous confirme l'inscription.
                                </li>
                                <li>
                                Vous devenez indépendant(e)
                                </li>
                            </ul>
                        </li>
                        </ol>
                    </CardVTitreTxt>
                </div>
                {/*-5.1.1 FIN  premier composant  */}  


                {/*-5.1.2 DEBUT  deuxième composant  */}  
                <div>
                    <CardVTitreTxt imageSrc="" title="Formule 2 : Premium">
                        <ol className="list-decimal ml-4">
                        <li>
                             <strong>Questionnaire (Phase 1) </strong>
                            <ul className="list-disc ml-6">
                                <li>
                                Évaluez votre niveau.
                                </li>
                                <li>
                                Si Ok ? Passez en Formule gratuit.
                                </li>
                                <li>
                                No OK ? Optez pour le <strong>Premium.</strong>
                                </li>
                            </ul>
                        </li>
                        <br></br>
                        <li>
                            <strong>Création + Branding</strong>
                            <ul className="list-disc ml-6">
                                <li>
                                Formation branding (nom, logo, site...)
                                </li>
                                <li>
                                <strong>2 options:</strong> 
                                    <ul>
                                        <li>
                                        Individuelle à CHF 590.-
                                        </li>
                                        <li>
                                        Collectif à CHF 190.-
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <br></br>
                        <li>
                            <strong>Lancement Sans Peine</strong>
                        </li>
                        </ol>
                    </CardVTitreTxt>
                </div>
                {/*-5.1.2 FIN  deuxième composant  */} 
            </div>
        </div>
        {/*-----------------------------5 FIN CONTENEUR A */}



        {/*-----------------------------6 DEBUT CONTENEUR A */}
        <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        
            {/*----------------6.1 DEBUT  grid col 2x Carde verticale image texte  */}
            <div className="grid  grid-cols-1 gap-0 ">

                {/*-----6.2.1 DEBUT COMPONENT  Carde verticale titre texte  */}
                <CardTitleText title="Vérifiez en 2 minutes si vous êtes prêt(e).">
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
  }
  