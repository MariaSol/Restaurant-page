export {menuTab}
import { tab } from "./tab"

function menuTab(){
    tab()

    //array of arrays, each array contains the src and alt of each image
    const imageSrcAlt = [["../src/img/carneyensalada.jpg", "meat and salad"], 
    ["../src/img/pancakes.jpg", "pancakes"], 
    ["../src/img/pizza.jpg", "pizza"], 
    ["../src/img/pasta.jpg", "pasta"],
    ["../src/img/salad.jpg", "salad"],
    ["../src/img/sandwich.jpg", "sandwiches"],
    ["../src/img/hamburguer.jpg", "hamburguer"],
    ["../src/img/empanadas.jpg", "empanadas"],
    ["../src/img/salmon-ga43be1c24_1280.jpg", "salmon"],
    ["../src/img/croissant.jpg", "croissants"]]

    //create container
    const container = document.createElement('div');

    //add list of foods with images
    for(let arr of imageSrcAlt){
        //create elements
        const card = document.createElement('div');
        const h2 = document.createElement('h2');
        const img = document.createElement('img');
        //content
        h2.textContent = `${(arr[1]).charAt(0).toUpperCase() + arr[1].slice(1)}`
        //classes and attributes
        img.setAttribute('src', arr[0]);
        img.setAttribute('alt', arr[1]);
        card.className = "card"
        img.style.maxWidth = '300px'
        //append all
        card.appendChild(h2);
        card.appendChild(img);
        container.appendChild(card);
    }
    //add classes
    container.classList.add("main-container", "main");
    //append
    content.appendChild(container);
      
}