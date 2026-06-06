const renderAbout = (contentContainer) => {
  const section = document.createElement("section");
  section.classList.add("about-section");

  const title = document.createElement("h1");
  title.textContent = "About Us";

    const text1 = document.createElement("p");
    text1.textContent =
    "Café Santa Prisca began as a weekend coffee pop-up focused on serving freshly prepared espresso drinks.";

    const text2 = document.createElement("p");
    text2.textContent =
    "Every beverage is prepared to order using carefully selected beans and traditional espresso techniques.";

    const text3 = document.createElement("p");
    text3.textContent =
    "Our goal is simple: serve excellent coffee and create a welcoming space for guests and local visitors.";

  section.append(title, text1, text2, text3);

  contentContainer.appendChild(section);
};

export default renderAbout;