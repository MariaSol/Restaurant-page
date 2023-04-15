import { tab } from "./tab";
export {locationTab};
/**
 * license of the map:
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

const content = document.querySelector("#content");

function locationTab(){
    tab()

    //include map api
    const script = document.createElement('script');
    script.setAttribute('src', 
    "https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY&callback=initMap&v=weekly");
    script.setAttribute("defer", true);
    script.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('body')[0].appendChild(script);

    //create elements
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const map = document.createElement('div');
    
    // add classes, attributes and style
    container.classList.add("main-container", "main");
    map.className = "map";
    map.setAttribute('id', 'map');
    h1.style.textShadow = "none"
    container.style.minHeight = "86vh"
    
    //add content
    h1.textContent = "Welcome to Carpincho Restaurant";
    h2.textContent = "Here is our establishment:";
    h3.textContent = "Fictional Direction 1994";
    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.031 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        });
    }
    window.initMap = initMap;

    //append all
    content.appendChild(container);
    container.appendChild(h1);
    container.appendChild(h2);
    container.appendChild(map);
    container.appendChild(h3);
}
