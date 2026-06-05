const renderMenu = (contentContainer) => {
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Nuestros Cafecitos";

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  const drinks = [
    {
      name: "Espresso",
      description: "Shot intenso de café preparado al momento.",
    },
    {
      name: "Cappuccino",
      description: "Espresso con leche texturizada y espuma.",
    },
    {
      name: "Latte",
      description: "Espresso suave con abundante leche vaporizada.",
    },
    {
      name: "Mocha",
      description: "Espresso, chocolate y leche texturizada.",
    },
  ];

  drinks.forEach((drink) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const title = document.createElement("h2");
    title.textContent = drink.name;

    const description = document.createElement("p");
    description.textContent = drink.description;

    card.appendChild(title);
    card.appendChild(description);

    cardsContainer.appendChild(card);
  });

  contentContainer.appendChild(menuTitle);
  contentContainer.appendChild(cardsContainer);
};

export default renderMenu;