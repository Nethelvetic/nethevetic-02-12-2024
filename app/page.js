import CardHImgTxt from './components/card-H-Img-txt';
import CardImgTitle from './components/card-Img-Title';
import CardHTxtImg from './components/card-H-txt-Img';


export default function HomePage() {
  return (
    <div>
      <br></br>
      <br></br>

      
      <CardImgTitle imageSrc="jeroNum311.jpg" title="Construisez un business qui fonctionne pour vous, pas l’inverse 7"/>


      <CardHImgTxt imageSrc="jeroNum11Bg.png" title="">
        <p>
        Je m’appelle Jérome Golliard, entrepreneur autodidacte passionné d’IA et d’automatisation. Solo entrepreneur, mon ambition ? Créer des assistants IA, nourris de votre intelligence, pour réaliser vos tâches pendant que vous dormez.
        </p>
       </CardHImgTxt>

       <CardHTxtImg imageSrc="jeroNum11Bg.png" title="Là où la formation prend quelques minutes">
        <p>
        Je m’appelle Jérome Golliard, entrepreneur autodidacte passionné d’IA et d’automatisation. Solo entrepreneur, mon ambition ? Créer des assistants IA, nourris de votre intelligence, pour réaliser vos tâches pendant que vous dormez. Plus de temps pour l’essentiel
        </p>
       </CardHTxtImg>
    </div>
  );
}