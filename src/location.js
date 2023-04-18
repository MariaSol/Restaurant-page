import { tab } from "./tab";
export {locationTab};

const content = document.querySelector("#content");

function locationTab(){
    tab()

    //create elements
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const map = document.createElement('iframe');

    // add classes, attributes and style
    container.classList.add("main-container", "main");
    h1.style.textShadow = "none"
    container.style.minHeight = "86vh"
    map.className = "map";
    //map iframe attributes
    map.setAttribute("src", `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6568.005110084107!2d-58.3837353!3d-34.6040969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1681854815161!5m2!1ses!2sar`);
    map.setAttribute('width', '600px');
    map.setAttribute('height', '450px');
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('loading', 'lazy');
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');

    //add content
    h1.textContent = "Welcome to Carpincho Restaurant";
    h2.textContent = "Here is our establishment:";
    h3.textContent = "Fictional Direction 1994";

    //append all
    content.appendChild(container);
    container.appendChild(h1);
    container.appendChild(h2);
    container.appendChild(map);
    container.appendChild(h3);
}
