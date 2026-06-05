import "./styles.css";

import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";

const contentContainer = document.querySelector("#content");

renderHome(contentContainer);

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");


const renderPage = (renderFunction) => {
  contentContainer.innerHTML = "";
  renderFunction(contentContainer);
};

homeBtn.addEventListener("click", () => renderPage(renderHome));

menuBtn.addEventListener("click", () => renderPage(renderMenu));

aboutBtn.addEventListener("click", () => renderPage(renderAbout));