import "./styles.css";
import "./responsive.css";
import {clsSlogan, clsFeature, clsExplore} from "./homepage.js";

console.log("Hello, Odinite");

document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector("#content");
    content.appendChild(clsSlogan);
    content.appendChild(clsFeature);
    content.appendChild(clsExplore);
});