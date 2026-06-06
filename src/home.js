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
    "Specialty coffee prepared with care in the heart of the city.";

  const button = document.createElement("button");
  button.textContent = "View Menu";
  button.classList.add("hero-btn");

  button.addEventListener("click", () => {
    document.querySelector("#menu-btn").click();
  });

  hero.append(logo, title, subtitle, button);

  contentContainer.appendChild(hero);
};

export default renderHome;