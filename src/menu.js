const renderMenu = (contentContainer) => {
  const menuTitle = document.createElement("h1");
  menuTitle.textContent = "Our coffee drinks";

  const cardsContainer = document.createElement("div");
  cardsContainer.classList.add("cards-container");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  menuSection.append(menuTitle, cardsContainer);

  contentContainer.appendChild(menuSection);

    const drinks = [
    {
        name: "Espresso",
        description: "Rich and concentrated coffee shot.",
        price: "$40",
    },
    {
        name: "Americano",
        description: "Espresso diluted with hot water.",
        price: "$45",
    },
    {
        name: "Cappuccino",
        description: "Espresso, steamed milk, and milk foam.",
        price: "$60",
    },
    {
        name: "Latte",
        description: "Smooth espresso with steamed milk.",
        price: "$65",
    },
    {
        name: "Mocha",
        description: "Espresso, chocolate, and steamed milk.",
        price: "$70",
    },
    {
        name: "Cold Brew",
        description: "Slow-steeped coffee served cold.",
        price: "$65",
    },
    ];
  drinks.forEach((drink) => {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const title = document.createElement("h2");
    title.textContent = drink.name;

    const description = document.createElement("p");
    description.textContent = drink.description;

    const price = document.createElement("span");
    price.textContent = drink.price;
    price.classList.add("price");

    card.append(title, description, price);

    cardsContainer.appendChild(card);
  });

  contentContainer.appendChild(menuTitle);
  contentContainer.appendChild(cardsContainer);
};

export default renderMenu;