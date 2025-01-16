"use client";

import React, { useState } from "react";

export default function CandidaterPage() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, tu peux ajouter ta logique d’envoi (API, service externe, etc.)
    console.log("Formulaire soumis avec succès !");
    console.log({ nom, email, message });
    // Remettre le formulaire à zéro si souhaité
    setNom("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Formulaire de Candidature</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nom" className="block mb-1 font-semibold">
            Nom :
          </label>
          <input
            id="nom"
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Votre nom"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email :
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Votre email"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 font-semibold">
            Message :
          </label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Votre message ou motivations"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}