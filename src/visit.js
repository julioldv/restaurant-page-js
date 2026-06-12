import hotelImg from "./assets/images/hotel.jpg";

const renderVisit = (contentContainer) => {
  const section = document.createElement("section");
  section.classList.add("visit-section");

  const title = document.createElement("h1");
  title.textContent = "Visit Us";

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("visit-info");

  const locationCard = document.createElement("div");
  locationCard.classList.add("visit-card");

  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Location";

  const locationText = document.createElement("p");
  locationText.textContent = "Hotel Santa Prisca, Taxco, Guerrero";

  locationCard.append(locationTitle, locationText);

  const hoursCard = document.createElement("div");
  hoursCard.classList.add("visit-card");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";

  const hoursText = document.createElement("p");
  hoursText.textContent = "Friday & Saturday · 6:00 PM – 10:30 PM";

  hoursCard.append(hoursTitle, hoursText);

  const note = document.createElement("p");
  note.classList.add("visit-note");
  note.textContent = "Open to hotel guests and the public.";

  const heroImage = document.createElement("img");

  heroImage.src = hotelImg;
  heroImage.alt = "Hotel Santa Prisca";

  heroImage.classList.add("visit-hero-image");

  const mapFrame = document.createElement("iframe");

  mapFrame.src =
    "https://www.google.com/maps?q=Hotel+Santa+Prisca+Taxco&output=embed";

  mapFrame.loading = "lazy";
  mapFrame.referrerPolicy = "no-referrer-when-downgrade";

  mapFrame.classList.add("visit-map");

  infoContainer.append(locationCard, hoursCard);
  section.append(title, heroImage,infoContainer, mapFrame, note);

  contentContainer.appendChild(section);
};

export default renderVisit;