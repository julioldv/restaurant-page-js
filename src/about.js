const renderAbout = (contentContainer) => {
  const aboutTitle = document.createElement("h1");
  const imgContainer = document.createElement("div");
  const aboutInfoText = document.createElement("p");

  aboutTitle.textContent = "Sobre nuestro café";
  imgContainer.classList.add("img-container");
  aboutInfoText.textContent =
    "Ofreciendo café de la mejor calidad, extraído al momento.";

  contentContainer.appendChild(aboutTitle);
  contentContainer.appendChild(imgContainer);
  contentContainer.appendChild(aboutInfoText);
};

export default renderAbout;