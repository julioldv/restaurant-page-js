const renderAbout = (contentContainer) => {
  const section = document.createElement("section");
  section.classList.add("about-section");

  const title = document.createElement("h1");
  title.textContent = "About Us";

  const text1 = document.createElement("p");
  text1.textContent =
    "At Café Santa Prisca, we believe coffee is more than a beverage. It is an experience that brings people together.";

  const text2 = document.createElement("p");
  text2.textContent =
    "Every cup is prepared with attention to detail, using carefully selected beans and traditional brewing techniques.";

  const text3 = document.createElement("p");
  text3.textContent =
    "Whether you are looking for a quick espresso or a place to relax with friends, we are happy to welcome you.";

  section.append(title, text1, text2, text3);

  contentContainer.appendChild(section);
};

export default renderAbout;