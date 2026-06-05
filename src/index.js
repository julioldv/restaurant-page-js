import "./styles.css";

import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";

const contentContainer = document.querySelector("#content");

renderHome(contentContainer);

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");





homeBtn.addEventListener("click", ()=>{
    contentContainer.innerHTML = "";
    renderHome(contentContainer);
});

menuBtn.addEventListener("click", ()=>{
    contentContainer.innerHTML = "";
    renderMenu(contentContainer);
});

aboutBtn.addEventListener("click", ()=>{
    contentContainer.innerHTML = "";
    renderAbout(contentContainer);
});


