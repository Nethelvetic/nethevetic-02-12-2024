"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);




export default function Layout({ children }) {




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
//------------------------3 Début affichage ---------------------------
//---------------------------------------------------------------------
  return (
    <html lang="fr">
      <body className="bg-gray-800">
        <div key={pathname} className="flex flex-col min-h-screen">
          {/* Header */}
          <div className="fixed top-0 left-0 w-full z-50">
            <Header />
          </div>

          {/* Main content */}
          <main className="flex-grow pt-24">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}