const homeTitle = document.createElement("h1");
const imgContainer = document.createElement("div");
const homeInfoText = document.createElement("p");


homeTitle.textContent = "Café Santa Prisca";
imgContainer.classList.add("img-container");
homeInfoText.textContent = "The best espresso bar in town!";


const renderHome = (contentContainer)  =>{
    contentContainer.appendChild(homeTitle);
    contentContainer.appendChild(imgContainer);
    contentContainer.appendChild(homeInfoText);
}



export default renderHome;