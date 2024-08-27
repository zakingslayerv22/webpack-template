import "./index.css";
import HeroImage from './home-assets/images/jed-owen-O4wSmNb6w18-unsplash.webp';
import { createMenuModule } from './menu/menu.module';
import { createAboutModule } from "./about/about.module";




const container = document.querySelector("#content");

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const aboutButton = document.querySelector("#about-button");


function createHomeModule() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");


    const heroLeft = document.createElement("div");
    heroLeft.classList.add("hero-left-container");

    const heroText = document.createElement("div");
    heroText.classList.add("hero-text-container");

    const heroH2 = document.createElement("h2");
    heroH2.classList.add("hero-h2");
    heroH2.textContent = "The Gourmet's Choice";

    const heroParagraph = document.createElement("p");
    heroParagraph.classList.add("hero-paragraph");  
    heroParagraph.textContent = `Since 1970, Feednotize Me has
    been concerned with conjuring meals that has always left
    even the finest of connoisseurs salivating with wonder.`

    const heroButton = document.createElement("button");
    heroButton.classList.add("hero-button");
    heroButton.textContent = "Browse Menu >>"

    const heroRight = document.createElement("div");
    heroRight.classList.add("hero-image-container");


    const heroImage = new Image();
    heroImage.classList.add('hero-image')
    heroImage.src = HeroImage;



    container.appendChild(homeContainer);
    homeContainer.append(heroLeft, heroRight);
    heroLeft.append(heroText, heroButton);
    heroRight.appendChild(heroImage);
    heroText.append(heroH2, heroParagraph);
}

createHomeModule()

homeButton.addEventListener ("click", () => {
    container.textContent = "";
    createHomeModule();
});

menuButton.addEventListener("click", () => {
    container.textContent = "";
    createMenuModule();
});

aboutButton.addEventListener("click", () => {
    container.textContent = "";
    createAboutModule();
});