export {homeTab}
import { tab } from "./tab"

function homeTab(){
    header();
    tab();
    imageCarrousel();
    about();
    footer();
}
const content = document.querySelector("#content");

function header(){
    //containers
    const header = document.createElement('div');
    const card = document.createElement('div');
    //icon element and wrapper
    const iconWrapper = document.createElement('div');
    const icon = document.createElement('img');
    //text elements
    const info = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    //set element content and attributes

    //icon contents
    icon.src = "../src/img/capybara.png"
    icon.setAttribute("alt", "capybara icon")
    //text contents
    h1.textContent = "Carpincho Restaurant";
    h2.textContent = "Welcome to Carpincho Restaurant, what would you like to order?";
    p.textContent = `We have a large selection of varied foods to taste in the comfort of our restaurant, your home 
                    or any other place, since we have our own delivery service.`;

    //add classes
    
    header.classList.add("header");
    card.classList.add("header-card");
    iconWrapper.classList.add("header-icon-wrapper");
    icon.classList.add("header-icon");
    info.classList.add("header-info");

    //append all
    iconWrapper.appendChild(icon);
    info.appendChild(h1);
    info.appendChild(h2);
    info.appendChild(p);
    card.appendChild(iconWrapper);
    card.appendChild(info);
    header.appendChild(card);
    content.appendChild(header);
}

function imageCarrousel(){
    //array of arrays, each array contains the src and alt of each image
    const imageSrcAlt = [["../src/img/local.jpg", "street view of the restaurant"], 
    ["../src/img/restaurant.jpg", "inside the restaurant"], 
    ["../src/img/carneyensalada.jpg", "meat and salad"], 
    ["../src/img/pancakes.jpg", "pancakes"], 
    ["../src/img/pizza.jpg", "pizza"], 
    ["../src/img/pasta.jpg", "pasta"],
    ["../src/img/salad.jpg", "salad"],
    ["../src/img/sandwich.jpg", "sandwiches"],
    ["../src/img/hamburguer.jpg", "hamburguer"],
    ["../src/img/empanadas.jpg", "empanadas"],
    ["../src/img/salmon-ga43be1c24_1280.jpg", "salmon"],
    ["../src/img/croissant.jpg", "croissants"]]
    //create divs
    const container = document.createElement('div');
    const slider = document.createElement('div');
    //add classes to divs
    container.classList.add("main-container");
    slider.classList.add("carousel-slider");
    //append divs to #content
    content.appendChild(container);
    container.appendChild(slider);
    //add images
    for(let arr of imageSrcAlt){
        const img = document.createElement('img');
        img.setAttribute('src', arr[0]);
        img.setAttribute('alt', arr[1]);
        slider.appendChild(img);
    }
}

function about(){
    //create elements
    const container = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    //add classes
    container.classList.add("about");
    //content of elements
    h2.textContent = "About us"
    p.textContent =`Imagine this parragraph is filled with information about the restaurant,
    of course it doesn't really exist as i made it up just to
    build this webpage hehe.
    Ignore this, i'll just autocomplete this ugly <p> with a
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta 
    praesentium deserunt odio non debitis pariatur neque incidunt quos 
    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta 
    praesentium deserunt odio non debitis pariatur neque incidunt quos 
    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta 
    praesentium deserunt odio non debitis pariatur neque incidunt quos 
    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta 
    praesentium deserunt odio non debitis pariatur neque incidunt quos 
    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta 
    praesentium deserunt odio non debitis pariatur neque incidunt quos 
    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta 
    praesentium deserunt odio non debitis pariatur neque incidunt quos 
    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.`
    //append
    content.appendChild(container);
    container.appendChild(h2);
    container.appendChild(p);
}

function footer(){
     //create elements
     const container = document.createElement('div');
     const a = document.createElement('a');
     const icon = document.createElement('i');
     //add classes/attributes
     container.classList.add("footer");
     icon.classList.add("fa-brands", "fa-github");
     a.setAttribute('href', "https://github.com/MariaSol");
     //content
     a.textContent = "Copyright © 2023 mariasol"
     //append all
     content.appendChild(container);
     container.appendChild(a);
     a.appendChild(icon);
}