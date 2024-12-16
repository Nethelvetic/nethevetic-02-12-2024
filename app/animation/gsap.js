import { gsap } from "gsap";

const conteneurA = document.querySelector(".conteneurA")

gsap.from(".conteneurA", {
    opacity: 0, 
    y: 100, 
    duration: 1
  });