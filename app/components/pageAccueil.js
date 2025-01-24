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
//------------------------2 Début affichage   -------------------------
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
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">  
  
            {/*-----4.2.1 DEBUT COMPONENT  Carde verticale image texte  */}
            <div>
              <CardVImgTxt imageSrc="teamAbstrait.webp" title="Et si tu pouvais cloner ton équipe ? Je l’ai fait… sans exploser mon budget.">
                <p>Moi aussi, j’ai connu le stress de tout faire toute seule : gérer les plannings, facturer, produire du contenu, répondre aux emails… Et puis, j’ai découvert des solutions qui change la donne.
                <br></br>
                <br></br>
                Pendant longtemps, je croyais que c’était réservé aux grandes entreprises avec des budgets énormes. Mais aujourd’hui, grâce aux bons outils et à la bonne méthodologie, c’est à la portée de tous.
                <br></br>
                <br></br>
                <strong>Le meilleur dans tout ça ?</strong>
                <br></br>
                Je n’ai plus besoin de tout faire moi-même. Je peux enfin me concentrer sur ce qui apporte vraiment de la valeur à mon business (et profiter de ma famille le soir)..</p>
              </CardVImgTxt>
            </div>
            {/*-----4.2.1 FIN COMPONENT  Carde verticale image texte  */}
        </div>
        {/*-----------------------------4 FIN CONTENEUR A */}
  
  
  
  
        {/*-----------------------------5 DEBUT CONTENEUR A */}
        <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
  
          {/*----------------5.1 DEBUT COMPONENT  Carde verticale titre et 3 x images  */}
          <CardVTitre3Img
            imagesSrc={[
              "jeroNum361.jpg",
              "jeroNum371.jpg",
              "jeroNum381.jpg",
              "jeroNum391.jpg",
            ]}
            txtBouton={[
              { label: "Jérome 1", url: "/somePage" },
              { label: "Jérome 2", url: "/contact" },
              { label: "Jérome 3", url: "/contact" },
              { label: "Jérome 4", url: "/contact" }
            ]}
            txt={[
              "<p><strong>Création d’entreprise rapide.</strong></p><p>Créer ton entreprise en Suisse, en simplifiant toutes les démarches.</p>",
              "<p><strong>Automatiser les tâches répétitives</strong></p><p>Libère jusqu'à 20 heures par semaine.</p>",
              "<p><strong>Votre équipe d'IA personnalisée </strong></p><p>Pendant que tu dors, ils travaillent pour toi.</p>",
              "<p><strong>Facture - Offre - Comptabilité.</strong></p><p>Des applications prêts à l’emploi pour organiser ton entreprise.<p>",
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
        <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
  
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