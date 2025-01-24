import CardImgTitle from './card-Img-Title';
import CardHTxtImg from './card-H-txt-Img';
import CardTitleText from './card-Title-Text'
import CardVTitreTxt from './card-V-Titre-text';
import CardVTitre3Img from './card-V-Titre-3Img';
import BoutonCandidate from './boutonCandidate';
import CardVImgTxt from './card-V-Img-txt'



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
          imageSrc="communaute3.webp"
          title={<span className="text-white">Bienvenue dans la Communauté “NO BULLSH*T"</span>}/>
      </div>

      


      {/*-----------------------------3 DEBUT CONTENEUR A */}
      <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-0">
          <CardVTitreTxt title="On ne veut pas entendre “tout va bien”. On veut la réalité.">
            <p>
            Tu en as assez de ces réseaux d’entrepreneurs <i>où tout le monde est beau, tout le monde est gentil</i>, et où personne n’ose parler des vrais problèmes ? Nous aussi.
            
            <br></br>
            <br></br>
            
            Ici, on aborde <strong> les vrais chiffres, les vrais échecs</strong>, et les vrais doutes sans fard. Parce que c’est en analysant ce qui ne va pas qu’on apprend à avancer <strong> pour de vrai.</strong>
            </p>
          </CardVTitreTxt>

          <div className="bg-transparent flex justify-center items-center mb-20">
            <BoutonCandidate title="Candidater" />
          </div>
        </div>
      </div>
      {/*-----------------------------3 FIN CONTENEUR A */}

      

      {/*-----------------------------6 DEBUT CONTENEUR A */}
      <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">

        <CardTitleText imageSrc="" title="Notre ADN : la confrontation pour construire">
        <p>
            <strong>Assez de la complaisance</strong> où tout le monde hoche la tête en mode “super idée, j’adore”.
            Dans la Communauté NO BULLSH*T, on organise des <strong>débats</strong> (voire des fights bienveillants) :
          </p>
          <br></br>
          <ul className="list-disc ml-6">
            <li>
              <strong>Le “Dinosaure” du business vs. le Jeune Loup</strong> : L’expérience contre la fougue.
            </li>
            <li>
            <strong>Le “Fortuné” vs. le “Parti de Rien”</strong> : Deux visions de l’entrepreneuriat qui s’affrontent.
            </li>
            <li>
            <strong>Le Marathonien vs. le Sprinteur</strong> : Business construit sur le long terme vs. besoin de résultats immédiats.
            </li>
          </ul>
           <br></br> 
          <p>
            On se dit les choses, on se confronte aux visions différentes. Et c’est dans ce choc d’idées que naît l’innovation.
          </p>

        </CardTitleText>
      </div>

    




      {/*-----------------------------5 DEBUT CONTENEUR A */}
      <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">

        {/*----------------5.1 DEBUT COMPONENT  Carde verticale titre et 3 x images  */}
        <CardVTitre3Img
          imagesSrc={[
            "communauteOeil1.webp",
            "communauteOeil2.webp",
            "communauteOeil3.webp",
            "communauteOeil4.webp",
          ]}
          txt={[
            "<p><strong>Des Discussions Sans Tabou</strong></p><p>Coaching collectif où chacun peut être “récadré” (mais avec bienveillance) pour avancer plus vite.</p>",
            "<p><strong>Des Débats Style “Fight Club”</strong></p><p>Opposer deux profils radicalement différents pour faire émerger la meilleure approche.</p>",
            "<p><strong>Un espace collaboratif anti-polissé</strong></p><p>Tu veux booster ton business ? On te dira si ton idée est brillante… ou si elle ne tiendra pas la route.</p>",
            "<p><strong>Outils pratiques pour les entrepreneurs.</strong></p><p>Des ressources prêtes à l’emploi qui simplifient la gestion de leur activité.<p>",
          ]}
          title="Ce que tu vas trouver chez NO BULLSH*T"
        />
      </div>   




      {/* -----------------------------6 DEBUT CONTENEUR A */}
      <div className="bg-transparent flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        {/* ----------------6.1 DEBUT COMPONENT Card horizontal texte image */}
        <CardVImgTxt imageSrc="jeroNum401.jpg" title="Comment rejoindre le Mouvement ?">
          <ol className="list-decimal ml-4">
            <li>
              <strong>Candidature: </strong>
                <ul className="list-disc ml-6">
                  <li>
                  Tu remplis un formulaire, où tu expliques tes challenges.
                  </li>
                </ul>

            </li>
            <br></br>
            <li>
              <strong>Essai gratuit de 2 mois</strong>
                <ul className="list-disc ml-6">
                  <li>
                  Tu entres gratuitement.
                  </li>
                  <li>
                  Découvres les débats, nos ressources et notre énergie.
                  </li>
                </ul>
            </li>
            <br></br>
            <li>
              <strong>Essai gratuit de 2 mois</strong>
                  <ul className="list-disc ml-6">
                    <li>
                    Après 2 mois, si tu kiffes, deviens membre moyennant une cotisation.
                    </li>
                    <li>
                    Sinon, aucun souci : tu peux nous quitter sans frais, ni rancune.
                    </li>
                  </ul>
            </li>
          </ol>
        </CardVImgTxt>
      </div>





      {/*-----------------------------7 DEBUT CONTENEUR A */}
      <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        
        {/*----------------7.1 DEBUT  grid col 2x Carde verticale image texte  */}
        <div className="grid  grid-cols-1 gap-0 ">

          {/*-----7.2.1 DEBUT COMPONENT  Carde verticale titre texte  */}
          <CardVTitreTxt title="Prêt(e) à quitter le monde “tout est rose” et rejoindre un espace où la sincérité prime ?">
            <p>
            Candidater maintenant. Nous t’attendons du côté “vrai” de l’entrepreneuriat. 
            </p>
          </CardVTitreTxt>


          {/*-----7.2.3 DEBUT CONTENEUR A */}
          <div className="bg-transparent flex justify-center items-center mb-20">
            <BoutonCandidate title="Candidater" />
          </div>
        </div>
      </div>  




      {/*-----------------------------8 DEBUT CONTENEUR A */}
      <div className="bg-transparent  flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10">
        
        {/*----------------8.1 DEBUT  grid col 2x Carde verticale image texte  */}
        <div className="grid  grid-cols-1 gap-0 ">

          {/*-----8.2.1 DEBUT COMPONENT  Carde verticale titre texte  */}
          <CardHTxtImg imageSrc="" title="Prêt(e) à quitter le monde “tout est rose” et rejoindre un espace où la sincérité prime ?">
            <p>
            Candidater maintenant. Nous t’attendons du côté “vrai” de l’entrepreneuriat. 
            </p>
          </CardHTxtImg>


          {/*-----8.2.3 DEBUT CONTENEUR A */}
          <div className="bg-transparent flex justify-center items-center mb-20">
            <BoutonCandidate title="Candidater" />
          </div>
        </div>
      </div>  




   
    </div>
    );
  }