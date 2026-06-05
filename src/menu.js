import drinks from "./menuData.js";

const renderMenu = (contentContainer) => {
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Our coffee drinks";

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  menuSection.append(menuTitle, cardsContainer);

  contentContainer.appendChild(menuSection);
  drinks.forEach((drink) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const image = document.createElement("img");
    image.src = drink.image;
    image.alt = drink.name;
    image.classList.add("menu-image");

    const title = document.createElement("h2");
    title.textContent = drink.name;

    const description = document.createElement("p");
    description.textContent = drink.description;

    const price = document.createElement("span");
    price.textContent = drink.price;
    price.classList.add("price");

    card.append(image, title, description, price);

    cardsContainer.appendChild(card);
  });

  contentContainer.appendChild(menuTitle);
  contentContainer.appendChild(cardsContainer);
};

export default renderMenu;