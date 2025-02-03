"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const BoutonNewsLetter = ({ title }) => {


  //---------------------------------------------------------------------
  //------------------------1 Début data dynamique ---------------------------
  //---------------------------------------------------------------------
  const [email, setEmail] = useState("");
  const router = useRouter();




  //---------------------------------------------------------------------
  //------------------------2 Début comportement  -----------------------
  //---------------------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique quand on valide l'email
    // Par exemple : redirection vers la page de candidature
    router.push('/communauteVIP/candidater');
    // Ou envoyer l'email vers un endpoint, etc.
    console.log("Email saisi :", email);
  };



  //---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
    <form 
      onSubmit={handleSubmit} 
      className="
        mt-4
        flex
        flex-col
        md:flex-row
        items-center
        space-y-2
        md:space-y-0
        md:space-x-2
      "
    >
      <input
        type="email"
        placeholder="Entrez votre email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
          px-3
          py-2
          border
          border-gray-300
          rounded-md
          focus:outline-none
          focus:ring-2
          focus:ring-bg-gradient
        "
      />
      <button
        type="submit"
        className="
          px-4
          py-2
          bg-bg-gradient
          hover:bg-bg-gradient2
          text-white
          font-bold
          rounded-lg
          transition
          duration-200
        "
      >
        {title}
      </button>
    </form>
  );
};

export default BoutonNewsLetter;
