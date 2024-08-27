import './menu.css'
import CaesarSalad from './menu-assets/images/caesar-salad.webp';
import TomatoPasta from './menu-assets/images/spaghetti-al-pomodoro.webp';
import MarinatedChicken from './menu-assets/images/chicken-inasal.webp';
import BakedPotatoes from './menu-assets/images/kumpir.webp';
import SaladeNicoise from './menu-assets/images/salade-nicoise.webp';
import Bouillabaisse from './menu-assets/images/bouillabaisse.webp';

export function createMenuModule () {
    const container = document.querySelector("#content")

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");


    const menuH3 = document.createElement("h3");
    menuH3.classList.add("menu-h3");
    menuH3.textContent = "Explore our array of delicacies."

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.classList.add("menu-items-container");

    const caesarSalad = document.createElement("div");
    const caesarSaladImage = new Image();
    caesarSaladImage.src = CaesarSalad;

    const caesarSaladOverlay = document.createElement("div");
    caesarSaladOverlay.textContent = `Grilled Chicken Caesar Salad with exquisite class`;

    const tomatoPasta = document.createElement("div");
    const tomatoPastaImage = new Image();
    tomatoPastaImage.src = TomatoPasta;

    const tomatoPastaOverlay = document.createElement("div");
    tomatoPastaOverlay.textContent = `Creamy Tomato Pasta, straight out of Napoli`;

    const marinatedChicken = document.createElement("div");
    const marinatedChickenImage = new Image();
    marinatedChickenImage.src = MarinatedChicken;

    const marinatedChickenOverlay = document.createElement("div");
    marinatedChickenOverlay.textContent = `Grilled Marinated Chicken dish of Ilonggo`;
    

    const bakedPotatoes = document.createElement("div");
    const bakedPotatoesImage = new Image();
    bakedPotatoesImage.src = BakedPotatoes;

    const bakedPotatoesOverlay = document.createElement("div");
    bakedPotatoesOverlay.textContent = `Turkish baked Potatoes with Butter and Cheese`;

    const saladeNicoise = document.createElement("div");
    const saladeNicoiseImage = new Image();
    saladeNicoiseImage.src = SaladeNicoise;

    const saladeNicoiseOverlay = document.createElement("div");
    saladeNicoiseOverlay.textContent = `Salade niçoise from french city of Nice`;


    const bouillabaisse = document.createElement("div");
    const bouillabaisseImage = new Image();
    bouillabaisseImage.src = Bouillabaisse;

    const bouillabaisseOverlay = document.createElement("div");
    bouillabaisseOverlay.textContent = `Taste Marsielle with the Provençal fish soup Bouillabaisse`;


    
    let itemsArray = [caesarSalad, tomatoPasta, marinatedChicken, 
        bakedPotatoes, saladeNicoise, bouillabaisse]

    itemsArray.forEach(item => {
        item.classList.add("menu-item");
    });

    container.appendChild(menuContainer);

    menuContainer.append(menuH3, menuItemsContainer);

    menuItemsContainer.append(caesarSalad, tomatoPasta, marinatedChicken, 
        bakedPotatoes, saladeNicoise, bouillabaisse);

    caesarSalad.append(caesarSaladImage, caesarSaladOverlay);
    tomatoPasta.append(tomatoPastaImage, tomatoPastaOverlay);
    marinatedChicken.append(marinatedChickenImage, marinatedChickenOverlay);
    bakedPotatoes.append(bakedPotatoesImage, bakedPotatoesOverlay);
    saladeNicoise.append(saladeNicoiseImage, saladeNicoiseOverlay);
    bouillabaisse.append(bouillabaisseImage, bouillabaisseOverlay);
}

