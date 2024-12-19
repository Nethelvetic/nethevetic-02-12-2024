"use client";

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const AnimationTest = () => {
    useEffect(() => {
        // Animation initiale : bouger le carré de gauche à droite
        gsap.to("#box", { x: 300, duration: 2 });
    }, []);

    // Fonction pour animer au clic
    const handleClick = () => {
        gsap.to("#box", { y: 200, duration: 1, backgroundColor: "red" });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div
                id="box"
                className="w-20 h-20 bg-blue-500 cursor-pointer"
                onClick={handleClick}
            ></div>
        </div>
    );
};

export default AnimationTest;