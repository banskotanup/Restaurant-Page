import "./styles.css";
import "./responsive.css";
import { clsSlogan, clsFeature, clsExplore } from "./homepage.js";
import { cards } from "./menu.js";
import { aboutPage } from "./about.js";

console.log("Hello, Odinite");
const content = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", () => {
    content.appendChild(clsSlogan);
    content.appendChild(clsFeature);
    content.appendChild(clsExplore);

    document.querySelector(".homeBtn").classList.add("active");

    document.querySelector(".view-menu").addEventListener("click", () => {
        content.innerHTML = "";
        content.appendChild(cards);
    
        document.querySelector(".menuBtn").classList.add("active");
        document.querySelector(".homeBtn").classList.remove("active");
        document.querySelector(".aboutBtn").classList.remove("active");
    });
});

document.querySelector(".homeBtn").addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(clsSlogan);
    content.appendChild(clsFeature);
    content.appendChild(clsExplore);

    document.querySelector(".homeBtn").classList.add("active");
    document.querySelector(".menuBtn").classList.remove("active");
    document.querySelector(".aboutBtn").classList.remove("active");
});

document.querySelector(".menuBtn").addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(cards);

    document.querySelector(".menuBtn").classList.add("active");
    document.querySelector(".homeBtn").classList.remove("active");
    document.querySelector(".aboutBtn").classList.remove("active");
});

document.querySelector(".aboutBtn").addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(aboutPage);

    document.querySelector(".aboutBtn").classList.add("active");
    document.querySelector(".homeBtn").classList.remove("active");
    document.querySelector(".menuBtn").classList.remove("active");
});

