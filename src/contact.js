export {contactTab}
import { tab } from "./tab"

const content = document.querySelector("#content");

function contactTab(){
    tab()
    
    //create elements
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const phoneHeading = document.createElement('h2');
    const phoneNum = document.createElement('h3');
    const directionHeading = document.createElement('h2');
    const direction = document.createElement('h3');
    const img = document.createElement('img');
    //content
    h1.textContent = "Contact us";
    phoneHeading.textContent = "Telephone";
    phoneNum.textContent = "1111-1111";
    directionHeading.textContent = "Direction";
    direction.textContent = "Fictional Direction 1994";
    //attributes && style
    img.setAttribute('src', "../src/img/local.jpg");
    img.setAttribute("alt", "street view of the restaurant");
    img.style.maxWidth = "600px"
    img.style.margin = "20px"
    h1.style.textShadow = "none"
    //add classes
    container.classList.add("main-container", "main");
    //append all
    content.appendChild(container);
    container.appendChild(h1);
    container.appendChild(phoneHeading);
    container.appendChild(phoneNum);
    container.appendChild(directionHeading);
    container.appendChild(direction);
    container.appendChild(img);
}