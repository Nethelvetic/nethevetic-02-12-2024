import React, { useState } from 'react';

function FormCommunaute() {

  //---------------------------------------------------------------------
  //------------------------1 Début data dynamique ----------------------
  //---------------------------------------------------------------------
  // États pour chaque champ du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [activity, setActivity] = useState('');
  const [acceptCharte, setAcceptCharte] = useState(false);
  const [newsletter, setNewsletter] = useState(false);



  //---------------------------------------------------------------------
  //------------------------2 Début comportement ------------------------
  //---------------------------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez traiter ou envoyer les données (API, etc.)
    console.log({
      name,
      email,
      location,
      activity,
      acceptCharte,
      newsletter
    });
    alert("Formulaire soumis avec succès !");
  }; 




//---------------------------------------------------------------------
  //------------------------3 Début affichage ---------------------------
  //---------------------------------------------------------------------
  return (
      //-----------------------------1 DEBUT CONTENEUR PRIMAIRE
      <div className="flex flex-col  w-full max-w-5xl relative  overflow-hidden  p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex justify-center bg-gray-800 text-gray-400 font-openSansRegular text-base sm:text-lg md:text-xl p-4 sm:p-6 md:p-8 lg:p-10">
     
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
                <h1 className="flex justify-center font-bebas bg-bg-gradient text-transparent bg-clip-text  text-2xl sm:text-3xl md:text-4xl mb-4">
                Rejoignez la Communauté No Bullsh*t
                </h1>
        
            
                {/* Nom & Prénom */}
                <label htmlFor="name">Nom & Prénom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Ex : Jean Dupont"
                    style={{ display: 'block', width: '100%', marginBottom: '1em' }}
                />

                {/* Email */}
                <label htmlFor="email">Adresse e-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="exemple@mail.com"
                    style={{ display: 'block', width: '100%', marginBottom: '1em' }}
                />

                {/* Localisation */}
                <label htmlFor="location">Ville / Pays</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex : Genève, Suisse"
                    style={{ display: 'block', width: '100%', marginBottom: '1em' }}
                />

                {/* Brève description de l’activité */}
                <label htmlFor="activity">Activité / Secteur</label>
                <input
                    type="text"
                    id="activity"
                    name="activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    placeholder="Ex : Freelance en marketing digital"
                    style={{ display: 'block', width: '100%', marginBottom: '1em' }}
                />

                {/* Acceptation de la charte */}
                <div style={{ marginBottom: '1em' }}>
                    <input
                    type="checkbox"
                    id="acceptCharte"
                    name="acceptCharte"
                    checked={acceptCharte}
                    onChange={(e) => setAcceptCharte(e.target.checked)}
                    required
                    />
                    <label htmlFor="acceptCharte" style={{ marginLeft: '0.5em' }}>
                    J’accepte la Charte No Bullsh*t (authenticité, franchise, entraide).
                    </label>
                </div>

                {/* Inscription newsletter */}
                <div style={{ marginBottom: '1.5em' }}>
                    <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                    />
                    <label htmlFor="newsletter" style={{ marginLeft: '0.5em' }}>
                    Je souhaite recevoir la newsletter (contenu exclusif, débats, etc.).
                    </label>
                </div>

                {/* Bouton de soumission */}
                <button className="px-3 py-3 bg-bg-gradient hover:bg-bg-gradient2 text-white font-bold rounded-lg" type="submit" style={{ padding: '0.5em 1em' }}>
                    Rejoindre maintenant
                </button>
            </form>
        </div>
      </div>
  );
}

export default FormCommunaute;
