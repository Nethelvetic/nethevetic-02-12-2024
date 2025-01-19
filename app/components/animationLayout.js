"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationLayout({ children }) {


//---------------------------------------------------------------------
//-------------------------1 Début data dynamique ---------------------
//---------------------------------------------------------------------
  const pathname = usePathname();

  useEffect(() => {
    // Fonction pour configurer les animations
    const setupAnimations = () => {
      if (typeof window === "undefined") return;

      // Nettoyer les anciens triggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Recalculer la hauteur dynamique et configurer l'animation
      const docHeight = document.documentElement.scrollHeight;

      const getHalfPageStart = () => {
        return docHeight / 2 + " top";
      };

      gsap.to("html, body", {
        backgroundColor: "#ffffff",
        duration: 2,
        scrollTrigger: {
          trigger: "html",
          start: getHalfPageStart(),
          end: "bottom bottom",
          scrub: 3,
          markers: true,
        },
      });

      // Rafraîchir les triggers pour prendre en compte la nouvelle hauteur
      ScrollTrigger.refresh();
    };

    // Initialiser les animations au premier rendu
    setupAnimations();

    // Réinitialiser les animations sur changement de page
    const handlePageShow = (event) => {
      if (event.persisted) {
        ScrollTrigger.refresh();
        setupAnimations();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]); // Recalculer à chaque changement de page




//---------------------------------------------------------------------
//-------------------------3 Début affichage --------------------------
//---------------------------------------------------------------------
  return (
    <>
      {children}
    </>
  );
}
