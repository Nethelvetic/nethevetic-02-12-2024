"use client"; // si tu es en Next.js 13 App Router

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormCreerEntreprise() {
  //---------------------------------------------------------------------
  //------------------------1 Début data dynamique ----------------------
  //---------------------------------------------------------------------
  const questions = [
    {
      question: "Quel est ton niveau de connaissance des risques et obligations d’un indépendant ?",
      choices: [
        { text: "Quasiment inexistant", points: 0 },
        { text: "Basique : charges sociales, déclarations…", points: 10 },
        { text: "Solide : je comprends les risques.", points: 20 },
      ],
      type: "radio",
    },
    {
      question: "As-tu défini l’activité que tu vas exercer ?",
      choices: [
        { text: "Non : j’ai juste une vague idée.", points: 0 },
        { text: "La direction, mais pas les détails.", points: 10 },
        { text: "Oui : j’ai une offre précise.", points: 20 },
      ],
      type: "radio",
    },
    {
      question: "Branding & Outils (nom, logo, site)",
      choices: [
        { text: "Rien du tout : je pars de zéro.", points: 0 },
        { text: "Partiel: un nom et peut-être un logo…", points: 10 },
        { text: "Tout est prêt et déjà bien avancé.", points: 20 },
      ],
      type: "radio",
    },
    {
      question: "Plein temps ou partiel ?",
      choices: [
        { text: "Juste un complément", points: 0 },
        { text: "Peut-être plus tard", points: 10 },
        { text: "À 100%", points: 20 },
      ],
      type: "radio",
    },
    {
      question: "Prêt(e) à être indépendant(e) maintenant ?",
      choices: [
        { text: "Hésitant(e)", points: 0 },
        { text: "Motivé(e) mais prudent(e)", points: 10 },
        { text: "Déterminé(e) : j’y vais, c’est décidé !", points: 20 },
      ],
      type: "radio",
    },
    {
      question: "Gagnes-tu déjà de l’argent ?",
      choices: [
        { text: "Pas encore de revenus liés à mon projet.", points: 0 },
        { text: "Un peu : j’ai déjà facturé des clients.", points: 10 },
        { text: "Oui : j’ai un flux régulier de revenus.", points: 20 },
      ],
      type: "radio",
    },
  ];

  // On stocke l’étape courante et les réponses
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  // On utilise le router pour la redirection
  const router = useRouter();

  //---------------------------------------------------------------------
  //------------------------3 Début comportement -----------------------
  //---------------------------------------------------------------------
  const handleNext = () => {
    // On vérifie que l'utilisateur a choisi au moins 1 réponse
    const selectedAnswers = answers[currentStep] || [];
    if (selectedAnswers.length === 0) {
      setErrorMsg("Veuillez sélectionner au moins une réponse pour continuer.");
      return;
    }

    setErrorMsg("");

    // Si pas dernière question, on passe à la suivante
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // FIN -> On calcule le score
      let totalScore = 0;
      for (let qIndex in answers) {
        const selectedIdxArray = answers[qIndex]; // ex. [1] ou [0,2]
        selectedIdxArray.forEach((choiceIdx) => {
          const pts = questions[qIndex].choices[choiceIdx].points;
          totalScore += pts;
        });
      }

      // On redirige vers la page résultat
      router.push(`/creation-entreprise/resultat?score=${totalScore}`);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleChange = (choiceIndex) => {
    const questionType = questions[currentStep].type;

    setAnswers((prevAnswers) => {
      const newAnswers = { ...prevAnswers };
      if (questionType === "radio") {
        // On remplace par un seul index
        newAnswers[currentStep] = [choiceIndex];
      } else {
        // Si c'était checkbox
        const currentArr = newAnswers[currentStep] || [];
        if (currentArr.includes(choiceIndex)) {
          newAnswers[currentStep] = currentArr.filter((c) => c !== choiceIndex);
        } else {
          newAnswers[currentStep] = [...currentArr, choiceIndex];
        }
      }
      return newAnswers;
    });

    setErrorMsg("");
  };

  // Question et réponses courantes
  const currentQuestion = questions[currentStep];
  const selectedAnswers = answers[currentStep] || [];

  //---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    //-----------------------------1 DEBUT CONTENEUR PRIMAIRE
    <div className="flex flex-col w-full max-w-5xl relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="bg-gray-800 text-gray-400 font-openSansRegular text-base sm:text-lg md:text-xl p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="font-bebas text-2xl sm:text-3xl md:text-4xl mb-4 bg-bg-gradient text-transparent bg-clip-text">
          Question {currentStep + 1} sur {questions.length}
        </h1>

        <p className="mb-4 text-base font-openSansRegular sm:text-lg md:text-xl">
          {currentQuestion.question}
        </p>

        <div className="space-y-2 mb-4">
          {currentQuestion.choices.map((choiceObj, idx) => {
            // Vérifie si idx est dans selectedAnswers
            const isChecked = selectedAnswers.includes(idx);
            return (
              <label key={idx} className="flex items-center space-x-2">
                <input
                  type={currentQuestion.type === "radio" ? "radio" : "checkbox"}
                  name={`question-${currentStep}`}
                  value={idx}
                  checked={isChecked}
                  onChange={() => handleChange(idx)}
                  className="text-bg-gradient"
                />
                <span>{choiceObj.text}</span>
              </label>
            );
          })}
        </div>

        {errorMsg && (
          <div className="text-red-400 mb-4 font-semibold">
            {errorMsg}
          </div>
        )}

        <div className="flex justify-end space-x-2">
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
            >
              Précédent
            </button>
          )}
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-bg-gradient hover:bg-bg-gradient2 text-white rounded"
          >
            {currentStep < questions.length - 1 ? "Suivant" : "Terminer"}
          </button>
        </div>
      </div>
    </div>
    //-----------------------------1 FIN CONTENEUR PRIMAIRE
  );
}
