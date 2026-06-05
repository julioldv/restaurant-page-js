import espressoImg from "./assets/images/espresso.jpg";
import americanoImg from "./assets/images/americano.jpg";
import cappuccinoImg from "./assets/images/cappuccino.jpg";
import latteImg from "./assets/images/latte.jpg";
import mochaImg from "./assets/images/mocha.jpg";
import coldBrewImg from "./assets/images/cold-brew.jpg";

const drinks = [
  {
    name: "Espresso",
    description: "Rich and concentrated coffee shot.",
    price: "$40",
    image: espressoImg,
  },
  {
    name: "Americano",
    description: "Espresso diluted with hot water.",
    price: "$45",
    image: americanoImg,
  },
  {
    name: "Cappuccino",
    description: "Espresso, steamed milk, and milk foam.",
    price: "$60",
    image: cappuccinoImg,
  },
  {
    name: "Latte",
    description: "Smooth espresso with steamed milk.",
    price: "$65",
    image: latteImg,
  },
  {
    name: "Mocha",
    description: "Espresso, chocolate, and steamed milk.",
    price: "$70",
    image: mochaImg,
  },
  {
    name: "Cold Brew",
    description: "Slow-steeped coffee served cold.",
    price: "$65",
    image: coldBrewImg,
  },
];

export default drinks;