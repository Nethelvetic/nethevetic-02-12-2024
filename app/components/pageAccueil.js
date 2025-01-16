import CardImgTitle from './card-Img-Title';
import CardHTxtImg from './card-H-txt-Img';
import CardVImgTxt from './card-V-Img-txt';
import CardVTitreTxt from './card-V-Titre-text';
import CardVTitre3Img from './card-V-Titre-3Img';
import BoutonChatBot from './boutonChatBot';
import BoutonCommunaute from './boutonCommunaute';



export default function PageAccueil({showCommunaute}) {


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
  
          {/*----------------5.1 DEBUT COMPONENT image et titre  */}
          <CardImgTitle imageSrc="jeroNum21Bg.png" title="Simplifie ton entreprise"/>
        </div>
  
  
  
  
         {/*-----------------------------2 DEBUT CONTENEUR A */}
         <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
  
            {/*----------------2.1 DEBUT  grid col 2x Carde verticale image texte  */}
            <div className="grid  grid-cols-1 gap-0 ">
  
              {/*-----2.1.1 DEBUT COMPONENT  Carde V titre texte  */}
              <CardVTitreTxt title="Rejoignez notre programme et accédez à une communauté d’entrepreneurs.">
                <p>
                  Partagez vos expériences, apprenez des autres et collaborez pour propulser votre activité au niveau supérieur. 
                </p>
              </CardVTitreTxt>
  
              {/*-----2.1.2 DEBUT CONTENEUR A */}
              <div className="bg-transparent flex justify-center items-center mb-20">
                {/*2.1.2.1 DEBUT COMPONENT  bouton via page communauter  */}
                <BoutonCommunaute  title="rejoindre la communauté"/>
              </div>
            </div>
        </div>
        {/*-----------------------------2 FIN CONTENEUR A */}
  
  
  
  
        {/*-----------------------------4 DEBUT CONTENEUR A */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">  
  
          {/*----------------4.1 DEBUT  grid col 2x Carde verticale image texte  */}
          <div className="grid  grid-cols-1 gap-0 ">
           
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
  
  
            {/*-----4.2.2  DEBUT CONTENEUR A */}
            <div className="bg-transparent  flex justify-center items-center mt-3">
              {/*4.2.2.1 DEBUT COMPONENT  bouton via page communauter  */}
              <BoutonChatBot title="test mon chatbot"/>
            </div>
  
          </div>
           {/*----------------4.1 FIN  grid col 2x Carde verticale image texte  */}
        </div>
        {/*-----------------------------4 FIN CONTENEUR A */}
  
  
  
  
        {/*-----------------------------5 DEBUT CONTENEUR A */}
        <div className="bg-transparent flex justify-center items-center mt-5">
  
          {/*----------------5.1 DEBUT COMPONENT  Carde verticale titre et 3 x images  */}
          <CardVTitre3Img
            imagesSrc={[
              "jeroNum361.jpg",
              "jeroNum371.jpg",
              "jeroNum381.jpg",
              "jeroNum391.jpg",
            ]}
            txtBouton={[
              "<p><strong>Création d’entreprise rapide.</strong></p><br><p>Créer ton entreprise en Suisse, en simplifiant toutes les démarches.</p>",
              "<p><strong>Automatiser les tâches répétitives</strong></p><br><p>Libère jusqu'à 20 heures par semaine.</p>",
              "<p><strong>Des assistants IA dédiés</strong></p><br><p>Pendant que tu dors, ils travaillent pour toi.</p>",
              "<p><strong>Facture - Offre - Comptabilité.</strong></p><br><p>Des applications prêts à l’emploi pour organiser ton entreprise.<p>",
            ]}
            title="Le collaborateur unique pour toutes les tâches"
          />
        </div>
  
  
  
  
  
  
        {/*-----------------------------6 DEBUT CONTENEUR A */}
        <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">
  
          {/*----------------6.1 DEBUT COMPONENT  Carde horizontale texte image  */}
          <CardHTxtImg imageSrc="jeroNum181bg.png" title="Démocratiser l'entreprenariat">
            <p>
            Je crois que l’entrepreneuriat doit être accessible à tous, sans barrières inutiles. Mon objectif est de simplifier chaque étape de la création et de la gestion d’entreprise.
            </p>
            <br></br>
            <p>
            Laisse-moi te montrer comment automatiser, optimiser, et retrouver le contrôle.
            </p>
          </CardHTxtImg>
        </div>
  
  
  
  
        
        {/*-----------------------------7 DEBUT CONTENEUR A */}
        <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 mt-20">
  
          {/*----------------7.1 DEBUT  grid col 2x Carde verticale image texte  */}
          <div className="grid  grid-cols-1 gap-0 ">
  
            {/*-----7.2.1 DEBUT COMPONENT  Carde verticale titre texte  */}
            <CardVTitreTxt title="Découvrez par vous-même comment vous simplifier la vie">
              <p>
              Posez une question ou donnez une tâche, et voyez comment un assistant IA peut travailler à votre place. 
              </p>
            </CardVTitreTxt>
  
  
            {/*-----7.2.3 DEBUT CONTENEUR A */}
            <div className="bg-transparent  flex justify-center items-center ">
              {/*DEBUT COMPONENT  bouton via page communauter  */}
              <BoutonChatBot title="test mon chatbot"/>
            </div>
          </div>
        </div>
  
  
  
  
        {/*-----------------------------9 DEBUT CONTENEUR A */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 mt-20 ">  
  
          {/*----------------9.1 DEBUT  grid col 2x Carde verticale image texte  */}
          <div className="grid  grid-cols-1  gap-4  md:grid-cols-2  w-full max-w-5xl">
  
             {/*---9.2 DEBUT COMPONENT carte verticale image texte */}
             <div>
                <CardVImgTxt imageSrc="numberOne.webp" title="Planifier">
                  <p>
                  Je veux m'informer sur l'indépendance.
                  </p>
                </CardVImgTxt>
  
                {/*---9.3 DEBUT CONTENEUR C */}
                <div className="bg-transparent  flex justify-center items-center mb-20 mt-3"> 
                  {/* DEBUT COMPONENT  bouton via page communauter  */}
                  <BoutonChatBot title="test mon chatbot"/>
                </div>
             </div>
             
  
  
             {/*---9.3 DEBUT COMPONENT carte verticale image texte */}
             <div>
                <CardVImgTxt imageSrc="numberTwo.webp" title="Croître">
                  <p>
                  Aide pour développer mon entreprise.
                  </p>
                </CardVImgTxt>
  
                {/*---9.4 DEBUT CONTENEUR A */}
                <div className="bg-transparent  flex justify-center items-center mb-20 mt-3">
                  {/*DEBUT COMPONENT  bouton via page communauter  */}
                  <BoutonChatBot title="test mon chatbot"/>
                </div>
             </div>
  
          </div>
          {/*----------------9.1 FIN  grid col 2x Carde verticale image texte  */}
  
        </div>
        {/*-----------------------------9 FIN CONTENEUR A */}
  
      </div>
  
    );
  }