
import ResultatQuestionLow from './resultatQuestionLow';
import ResultatQuestionGood from './resultatQuestionGood';
import { useSearchParams } from "next/navigation";




export default function PageResultatQuestion() {


//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
const searchParams = useSearchParams();
const score = searchParams.get("score"); // string ou null
const scoreNum = Number(score) || 0;

//---------------------------------------------------------------------
//------------------------2 Début comportement ------------------------
//---------------------------------------------------------------------
let content;
if (scoreNum < 31) {
  content = <ResultatQuestionLow />;
} else {
  content = <ResultatQuestionGood />;
}



//---------------------------------------------------------------------
//------------------------2 Début affichage   -------------------------
//--------------------------------------------------------------------- 
    return ( 
            <div>
                {content}
            </div>
    );
  }
  