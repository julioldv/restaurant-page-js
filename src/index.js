import "./styles.css";

import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderAbout from "./about.js";
import renderVisit from "./visit.js";

const contentContainer = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");
const visitBtn = document.querySelector("#visit-btn");

const renderPage = (renderFunction) => {
  contentContainer.innerHTML = "";
  renderFunction(contentContainer);
};

const setActiveButton = (button) => {
  document.querySelectorAll("nav button").forEach((btn) => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
};

homeBtn.addEventListener("click", () => {
  setActiveButton(homeBtn);
  renderPage(renderHome);
});

menuBtn.addEventListener("click", () => {
  setActiveButton(menuBtn);
  renderPage(renderMenu);
});

aboutBtn.addEventListener("click", () => {
  setActiveButton(aboutBtn);
  renderPage(renderAbout);
});

visitBtn.addEventListener("click", () => {
  setActiveButton(visitBtn);
  renderPage(renderVisit);
});


renderHome(contentContainer);
setActiveButton(homeBtn);