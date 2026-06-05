
const menuTitle = document.createElement("h1");
const cardsContainer = document.createElement("div");
const card = document.createElement("div");


const cardTitle = document.createElement("h2");
cardTitle.textContent = "Capucchino";
const cardImg = document.createElement("div");
const cardDescription = document.createElement("p");
cardDescription.textContent = "A base de espresso, preparada con leche texturizada y espuma de leche";

menuTitle.textContent = "Nuestros cafecitos";





const renderMenu = (contentContainer)  =>{
    contentContainer.appendChild(menuTitle);
}

export default renderMenu;
