
"use client";

import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { usePathname } from "next/navigation";

// 1. On enregistre le plugin après l'import
gsap.registerPlugin(ScrollTrigger);

// 2. On déclare la police au niveau du module (en dehors du composant)
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});



export default function Layout({ children }) {


//---------------------------------------------------------------------
//------------------------3 Début dynamique ---------------------------
//---------------------------------------------------------------------
  const pathname = usePathname();




//---------------------------------------------------------------------
//------------------------3 Début affichage ---------------------------
//---------------------------------------------------------------------
  return (
    <html lang="fr" className={bebas.className}>
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