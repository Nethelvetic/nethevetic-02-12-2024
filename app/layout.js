"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

gsap.registerPlugin(ScrollTrigger);

const Layout = ({ children }) => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Configuration des animations en fonction des breakpoints
    mm.add(
      {
        // Pour les écrans larges (1024px et plus)
        isLarge: "(min-width: 1024px)",
        // Pour les petits écrans (moins de 1024px)
        isSmall: "(max-width: 1023px)",
      },
      (context) => {
        const { isLarge, isSmall } = context.conditions;

        if (isLarge) {
          // Animation pour grand écran
          gsap.to("html, body", {
            backgroundColor: "#ffffff",
            duration: 2,
            scrollTrigger: {
              trigger: "html",
              start: "440% 40%", // Start pour grand écran
              end: "bottom bottom",
              scrub: 3,
              markers: true,
            },
          });
        }

        if (isSmall) {
          // Animation pour petit écran
          gsap.to("html, body", {
            backgroundColor: "#ffffff",
            duration: 2,
            scrollTrigger: {
              trigger: "html",
              start: "280% 40%", // Start pour petit écran
              end: "bottom bottom",
              scrub: 3,
              markers: true,
            },
          });
        }
      }
    );

    return () => mm.revert(); // Nettoie les animations au démontage du composant
  }, []);

  return (
    <html lang="fr" className="h-full">
      <body className="min-h-screen h-full bg-gray-800">
        {/* Conteneur fixe pour le Header */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Ajout d'un padding-top pour laisser la place au header */}
        <main className="pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default Layout;
