const renderHome = (contentContainer) => {
  const hero = document.createElement("section");
  hero.classList.add("hero");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "☕";
  
  const title = document.createElement("h1");
  title.textContent = "Café Santa Prisca";

  const subtitle = document.createElement("p");
  subtitle.textContent =
  "Weekend Espresso Bar inside Hotel Santa Prisca";

  const description = document.createElement("p");
  description.textContent =
  "Craft coffee prepared to order in the heart of Taxco, Guerrero.";

  const button = document.createElement("button");
  button.textContent = "View Menu";
  button.classList.add("hero-btn");

  button.addEventListener("click", () => {
    document.querySelector("#menu-btn").click();
  });

  hero.append(logo, title, subtitle, description, button);

  contentContainer.appendChild(hero);
};

export default renderHome;