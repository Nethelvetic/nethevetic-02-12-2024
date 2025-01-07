import CardHImgTxt from './components/card-H-Img-txt';
import CardImgTitle from './components/card-Img-Title';
import CardHTxtImg from './components/card-H-txt-Img';
import CardVImgTxt from './components/card-V-Img-txt';
import CardVTitreTxt from './components/card-V-Titre-text';
import CardVTitre3Img from './components/card-V-Titre-3Img';
import BoutonChatBot from './components/boutonChatBot';


export default function HomePage() {
  return (
    
    <div>
      {/*-----------------------------1 DEBUT COMPONENT Titre */}
      <CardImgTitle imageSrc="jeroNum311.jpg" title="Simplifie ton entreprise"/>


      
      {/*-----------------------------2 DEBUT CONTENEUR A */}
      <div className="bg-gray-800  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <CardVTitreTxt title="Découvrez par vous-même comment vous simplifier la vie">
          <p>
          Posez une question ou donnez une tâche, et voyez comment un assistant IA peut travailler à votre place. 
          </p>
        </CardVTitreTxt>
      </div>





      {/*-----------------------------3 DEBUT CONTENEUR A */}
      <div className="bg-gray-800 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">  
         
        {/*----------------3.1 DEBUT COMPONENT  Carde verticale image texte  */}
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




      {/*-----------------------------4 DEBUT CONTENEUR A */}
      <div className="bg-gray-800 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <CardVTitre3Img
          imagesSrc={[
            "jeroNum361.jpg",
            "jeroNum371.jpg",
            "jeroNum381.jpg",
            "jeroNum391.jpg",
          ]}
          txtBouton={[
            "<p><strong>Création d’entreprise rapide et complète.</strong></p><br><p>Créer ton entreprise en Suisse, en simplifiant toutes les démarches administratives.</p>",
            "<p><strong>Automatiser les tâches répétitives</strong></p><br><p>Libère jusqu'à 20 heures par semaine.</p>",
            "<p><strong>Des assistants IA dédiés</strong></p><br><p>Pendant que tu dors, ils travaillent pour toi.</p>",
            "<p><strong>Facture - Offre - Comptabilité.</strong></p><br><p>Des applications prêts à l’emploi pour organiser ton entreprise.<p>",
          ]}
          title="Un collaborateur pour chaque tâche"
        />
      </div>






      {/*-----------------------------5 DEBUT CONTENEUR A */}
      <div className="bg-gray-800  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">

        {/*----------------5.1 DEBUT COMPONENT  Carde horizontale texte image  */}
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




      {/*-----------------------------6 DEBUT CONTENEUR A */}
      <div className="bg-gray-800  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <CardVTitreTxt title="Rejoignez notre programme et accédez à une communauté d’entrepreneurs.">
          <p>
          Rejoignez une communauté dynamique d’entrepreneurs motivés comme vous. Partagez vos expériences, apprenez des autres et collaborez pour propulser votre activité au niveau supérieur. 
          </p>
        </CardVTitreTxt>
      </div>





      {/*-----------------------------7 DEBUT CONTENEUR A */}
      <div className="bg-gray-800 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">

         {/*----------------7.1 DEBUT COMPONENTE  Carde horizontale reverse image texte  */}
        <CardHImgTxt imageSrc="jeroNum111Bg.png" title="Titre de la Carte">
          <p>
          Je m’appelle Jérome Golliard, entrepreneur autodidacte passionné d’IA et d’automatisation. Solo entrepreneur, mon ambition ? Créer des assistants IA, nourris de votre intelligence, pour réaliser vos tâches pendant que vous dormez.
          </p>
        </CardHImgTxt>
      </div>





      {/*-----------------------------8 DEBUT CONTENEUR A */}
      <div className="bg-gray-800 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">  
         
         {/*----------------8.1 DEBUT COMPONENT  Carde verticale image texte  */}
          <CardVImgTxt imageSrc="jeroNum11Bg.png" title="Titre de la Carte">
            <p>
            Je m’appelle Jérome Golliard, entrepreneur autodidacte passionné d’IA et d’automatisation. Solo entrepreneur, mon ambition ? Créer des assistants IA, nourris de votre intelligence, pour réaliser vos tâches pendant que vous dormez.
            </p>
          </CardVImgTxt>
      </div>





      {/*-----------------------------9 DEBUT CONTENEUR A */}
      <div className="bg-gray-800 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 ">  

        {/*----------------9.1 DEBUT  grid col 2x Carde verticale image texte  */}
        <div className="
                     grid 
                     grid-cols-1 
                     gap-4 
                     md:grid-cols-2  
                     w-full max-w-5xl">

           {/*---9.2 DEBUT COMPONENT carte verticale image texte */}
           <div>
             <CardVImgTxt imageSrc="jeroNum311.jpg" title="Titre de la Carte">
               <p>
               Je m’appelle Jérome Golliard, entrepreneur autodidacte passionné d’IA et d’automatisation. Solo entrepreneur, mon ambition ? Créer des assistants IA, nourris de votre intelligence, pour réaliser vos tâches pendant que vous dormez.
               </p>
             </CardVImgTxt>
           </div>


           {/*---9.3 DEBUT COMPONENT carte verticale image texte */}
           <div>
            <CardVImgTxt imageSrc="jeroNum221Bg.png" title="Titre de la Carte">
              <p>
              Je m’appelle Jérome Golliard, entrepreneur autodidacte passionné d’IA et d’automatisation. Solo entrepreneur, mon ambition ? Créer des assistants IA, nourris de votre intelligence, pour réaliser vos tâches pendant que vous dormez.
              </p>
            </CardVImgTxt>
           </div>

        </div>
        {/*----------------9.1 FIN  grid col 2x Carde verticale image texte  */}

      </div>
      {/*-----------------------------9 FIN CONTENEUR A */}

    </div>

  );
}