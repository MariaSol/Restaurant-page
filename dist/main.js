/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactTab\": () => (/* binding */ contactTab)\n/* harmony export */ });\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ \"./src/tab.js\");\n\r\n;\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\nfunction contactTab(){\r\n    (0,_tab__WEBPACK_IMPORTED_MODULE_0__.tab)()\r\n    \r\n    //create elements\r\n    const container = document.createElement('div');\r\n    const h1 = document.createElement('h1');\r\n    const phoneHeading = document.createElement('h2');\r\n    const phoneNum = document.createElement('h3');\r\n    const directionHeading = document.createElement('h2');\r\n    const direction = document.createElement('h3');\r\n    const img = document.createElement('img');\r\n    //content\r\n    h1.textContent = \"Contact us\";\r\n    phoneHeading.textContent = \"Telephone\";\r\n    phoneNum.textContent = \"1111-1111\";\r\n    directionHeading.textContent = \"Direction\";\r\n    direction.textContent = \"Fictional Direction 1994\";\r\n    //attributes && style\r\n    img.setAttribute('src', \"../src/img/local.jpg\");\r\n    img.setAttribute(\"alt\", \"street view of the restaurant\");\r\n    img.style.maxWidth = \"600px\"\r\n    img.style.margin = \"20px\"\r\n    h1.style.textShadow = \"none\"\r\n    //add classes\r\n    container.classList.add(\"main-container\", \"main\");\r\n    //append all\r\n    content.appendChild(container);\r\n    container.appendChild(h1);\r\n    container.appendChild(phoneHeading);\r\n    container.appendChild(phoneNum);\r\n    container.appendChild(directionHeading);\r\n    container.appendChild(direction);\r\n    container.appendChild(img);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeTab\": () => (/* binding */ homeTab)\n/* harmony export */ });\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ \"./src/tab.js\");\n\r\n;\r\n\r\nfunction homeTab(){\r\n    header();\r\n    (0,_tab__WEBPACK_IMPORTED_MODULE_0__.tab)();\r\n    imageCarrousel();\r\n    about();\r\n    footer();\r\n}\r\nconst content = document.querySelector(\"#content\");\r\n\r\nfunction header(){\r\n    //containers\r\n    const header = document.createElement('div');\r\n    const card = document.createElement('div');\r\n    //icon element and wrapper\r\n    const iconWrapper = document.createElement('div');\r\n    const icon = document.createElement('img');\r\n    //text elements\r\n    const info = document.createElement('div');\r\n    const h1 = document.createElement('h1');\r\n    const h2 = document.createElement('h2');\r\n    const p = document.createElement('p');\r\n\r\n    //set element content and attributes\r\n\r\n    //icon contents\r\n    icon.src = \"../src/img/capybara.png\"\r\n    icon.setAttribute(\"alt\", \"capybara icon\")\r\n    //text contents\r\n    h1.textContent = \"Carpincho Restaurant\";\r\n    h2.textContent = \"Welcome to Carpincho Restaurant, what would you like to order?\";\r\n    p.textContent = `We have a large selection of varied foods to taste in the comfort of our restaurant, your home \r\n                    or any other place, since we have our own delivery service.`;\r\n\r\n    //add classes\r\n    \r\n    header.classList.add(\"header\");\r\n    card.classList.add(\"header-card\");\r\n    iconWrapper.classList.add(\"header-icon-wrapper\");\r\n    icon.classList.add(\"header-icon\");\r\n    info.classList.add(\"header-info\");\r\n\r\n    //append all\r\n    iconWrapper.appendChild(icon);\r\n    info.appendChild(h1);\r\n    info.appendChild(h2);\r\n    info.appendChild(p);\r\n    card.appendChild(iconWrapper);\r\n    card.appendChild(info);\r\n    header.appendChild(card);\r\n    content.appendChild(header);\r\n}\r\n\r\nfunction imageCarrousel(){\r\n    //array of arrays, each array contains the src and alt of each image\r\n    const imageSrcAlt = [[\"../src/img/local.jpg\", \"street view of the restaurant\"], \r\n    [\"../src/img/restaurant.jpg\", \"inside the restaurant\"], \r\n    [\"../src/img/carneyensalada.jpg\", \"meat and salad\"], \r\n    [\"../src/img/pancakes.jpg\", \"pancakes\"], \r\n    [\"../src/img/pizza.jpg\", \"pizza\"], \r\n    [\"../src/img/pasta.jpg\", \"pasta\"],\r\n    [\"../src/img/salad.jpg\", \"salad\"],\r\n    [\"../src/img/sandwich.jpg\", \"sandwiches\"],\r\n    [\"../src/img/hamburguer.jpg\", \"hamburguer\"],\r\n    [\"../src/img/empanadas.jpg\", \"empanadas\"],\r\n    [\"../src/img/salmon-ga43be1c24_1280.jpg\", \"salmon\"],\r\n    [\"../src/img/croissant.jpg\", \"croissants\"]]\r\n    //create divs\r\n    const container = document.createElement('div');\r\n    const slider = document.createElement('div');\r\n    //add classes to divs\r\n    container.classList.add(\"main-container\");\r\n    slider.classList.add(\"carousel-slider\");\r\n    //append divs to #content\r\n    content.appendChild(container);\r\n    container.appendChild(slider);\r\n    //add images\r\n    for(let arr of imageSrcAlt){\r\n        const img = document.createElement('img');\r\n        img.setAttribute('src', arr[0]);\r\n        img.setAttribute('alt', arr[1]);\r\n        slider.appendChild(img);\r\n    }\r\n}\r\n\r\nfunction about(){\r\n    //create elements\r\n    const container = document.createElement('div');\r\n    const h2 = document.createElement('h2');\r\n    const p = document.createElement('p');\r\n    //add classes\r\n    container.classList.add(\"about\");\r\n    //content of elements\r\n    h2.textContent = \"About us\"\r\n    p.textContent =`Imagine this parragraph is filled with information about the restaurant,\r\n    of course it doesn't really exist as i made it up just to\r\n    build this webpage hehe.\r\n    Ignore this, i'll just autocomplete this ugly <p> with a\r\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta \r\n    praesentium deserunt odio non debitis pariatur neque incidunt quos \r\n    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.\r\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta \r\n    praesentium deserunt odio non debitis pariatur neque incidunt quos \r\n    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.\r\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta \r\n    praesentium deserunt odio non debitis pariatur neque incidunt quos \r\n    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.\r\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta \r\n    praesentium deserunt odio non debitis pariatur neque incidunt quos \r\n    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.\r\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta \r\n    praesentium deserunt odio non debitis pariatur neque incidunt quos \r\n    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.\r\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta \r\n    praesentium deserunt odio non debitis pariatur neque incidunt quos \r\n    distinctio minima, ratione dolores, iure veniam omnis? In enim hic quae deleniti.`\r\n    //append\r\n    content.appendChild(container);\r\n    container.appendChild(h2);\r\n    container.appendChild(p);\r\n}\r\n\r\nfunction footer(){\r\n     //create elements\r\n     const container = document.createElement('div');\r\n     const a = document.createElement('a');\r\n     const icon = document.createElement('i');\r\n     //add classes/attributes\r\n     container.classList.add(\"footer\");\r\n     icon.classList.add(\"fa-brands\", \"fa-github\");\r\n     a.setAttribute('href', \"https://github.com/MariaSol\");\r\n     //content\r\n     a.textContent = \"Copyright © 2023 mariasol\"\r\n     //append all\r\n     content.appendChild(container);\r\n     container.appendChild(a);\r\n     a.appendChild(icon);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ \"./src/tab.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location */ \"./src/location.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\")\r\n//add event listeners to navigation bar items\r\nfunction addEvents() {\r\n    //child elements in #content of the page\r\n    const page = content.children;\r\n    //look for each element on the page to find navbar\r\n    for(let el of page){\r\n        //if navbar is found\r\n        if(el.id == \"navbar\"){\r\n            const nav = el.children;\r\n            //add event listener to each nav item\r\n            for (let item of nav){\r\n                item.addEventListener('click', function(){\r\n                    //each item will do a different thing depending on the id\r\n                    if (item.id == \"home\"){\r\n                        newPage(_home__WEBPACK_IMPORTED_MODULE_1__.homeTab);\r\n                    }\r\n                    else if (item.id == \"menu\"){\r\n                        newPage(_menu__WEBPACK_IMPORTED_MODULE_2__.menuTab);\r\n                    }\r\n                    else if (item.id == \"contact\"){\r\n                        newPage(_contact__WEBPACK_IMPORTED_MODULE_3__.contactTab);\r\n                    }\r\n                    else if (item.id == \"location\"){\r\n                        newPage(_location__WEBPACK_IMPORTED_MODULE_4__.locationTab);\r\n                    }\r\n                    else {\r\n                        newPage(_tab__WEBPACK_IMPORTED_MODULE_0__.tab)\r\n                    }\r\n                })\r\n            }\r\n            break;\r\n        }\r\n    }\r\n}\r\naddEvents();\r\n\r\n//recreate the DOM: (remove old elements and add new ones depending on page)\r\nfunction newPage(page) {\r\n    resetPage();\r\n    page();\r\n    //add event listeners after elements exist on the page\r\n    addEvents()\r\n}\r\n\r\n//remove all DOM nodes\r\nfunction resetPage() {\r\n    //loop over content and add class delete to every unwanted child element\r\n    for(let i = 0; i < content.childElementCount; i++){\r\n        //add conditions for deletion to keep some elements in the DOM [optional]\r\n\r\n        //add class 'delete' to elements\r\n        content.children[i].classList.add(\"delete\");\r\n    }\r\n    //remove all elements of class delete from the DOM\r\n    const remove = document.querySelectorAll(\".delete\");\r\n    remove.forEach(element => {\r\n        element.remove()\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"locationTab\": () => (/* binding */ locationTab)\n/* harmony export */ });\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ \"./src/tab.js\");\n\r\n\r\n/**\r\n * license of the map:\r\n * @license\r\n * Copyright 2019 Google LLC. All Rights Reserved.\r\n * SPDX-License-Identifier: Apache-2.0\r\n */\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\nfunction locationTab(){\r\n    (0,_tab__WEBPACK_IMPORTED_MODULE_0__.tab)()\r\n\r\n    //include map api\r\n    const script = document.createElement('script');\r\n    script.setAttribute('src', \r\n    \"https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY&callback=initMap&v=weekly\");\r\n    script.setAttribute(\"defer\", true);\r\n    script.setAttribute('type', 'text/javascript');\r\n    document.getElementsByTagName('body')[0].appendChild(script);\r\n\r\n    //create elements\r\n    const container = document.createElement('div');\r\n    const h1 = document.createElement('h1');\r\n    const h2 = document.createElement('h2');\r\n    const h3 = document.createElement('h3');\r\n    const map = document.createElement('div');\r\n    \r\n    // add classes, attributes and style\r\n    container.classList.add(\"main-container\", \"main\");\r\n    map.className = \"map\";\r\n    map.setAttribute('id', 'map');\r\n    h1.style.textShadow = \"none\"\r\n    container.style.minHeight = \"86vh\"\r\n    \r\n    //add content\r\n    h1.textContent = \"Welcome to Carpincho Restaurant\";\r\n    h2.textContent = \"Here is our establishment:\";\r\n    h3.textContent = \"Fictional Direction 1994\";\r\n    // Initialize and add the map\r\n    function initMap() {\r\n        // The location of Uluru\r\n        const uluru = { lat: -25.344, lng: 131.031 };\r\n        // The map, centered at Uluru\r\n        const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n        zoom: 4,\r\n        center: uluru,\r\n        });\r\n        // The marker, positioned at Uluru\r\n        const marker = new google.maps.Marker({\r\n        position: uluru,\r\n        map: map,\r\n        });\r\n    }\r\n    window.initMap = initMap;\r\n\r\n    //append all\r\n    content.appendChild(container);\r\n    container.appendChild(h1);\r\n    container.appendChild(h2);\r\n    container.appendChild(map);\r\n    container.appendChild(h3);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/location.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuTab\": () => (/* binding */ menuTab)\n/* harmony export */ });\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ \"./src/tab.js\");\n\r\n;\r\n\r\nfunction menuTab(){\r\n    (0,_tab__WEBPACK_IMPORTED_MODULE_0__.tab)()\r\n\r\n    //array of arrays, each array contains the src and alt of each image\r\n    const imageSrcAlt = [[\"../src/img/carneyensalada.jpg\", \"meat and salad\"], \r\n    [\"../src/img/pancakes.jpg\", \"pancakes\"], \r\n    [\"../src/img/pizza.jpg\", \"pizza\"], \r\n    [\"../src/img/pasta.jpg\", \"pasta\"],\r\n    [\"../src/img/salad.jpg\", \"salad\"],\r\n    [\"../src/img/sandwich.jpg\", \"sandwiches\"],\r\n    [\"../src/img/hamburguer.jpg\", \"hamburguer\"],\r\n    [\"../src/img/empanadas.jpg\", \"empanadas\"],\r\n    [\"../src/img/salmon-ga43be1c24_1280.jpg\", \"salmon\"],\r\n    [\"../src/img/croissant.jpg\", \"croissants\"]]\r\n\r\n    //create container\r\n    const container = document.createElement('div');\r\n\r\n    //add list of foods with images\r\n    for(let arr of imageSrcAlt){\r\n        //create elements\r\n        const card = document.createElement('div');\r\n        const h2 = document.createElement('h2');\r\n        const img = document.createElement('img');\r\n        //content\r\n        h2.textContent = `${(arr[1]).charAt(0).toUpperCase() + arr[1].slice(1)}`\r\n        //classes and attributes\r\n        img.setAttribute('src', arr[0]);\r\n        img.setAttribute('alt', arr[1]);\r\n        card.className = \"card\"\r\n        img.style.maxWidth = '300px'\r\n        //append all\r\n        card.appendChild(h2);\r\n        card.appendChild(img);\r\n        container.appendChild(card);\r\n    }\r\n    //add classes\r\n    container.classList.add(\"main-container\", \"main\");\r\n    //append\r\n    content.appendChild(container);\r\n      \r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/tab.js":
/*!********************!*\
  !*** ./src/tab.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tab\": () => (/* binding */ tab)\n/* harmony export */ });\n\r\n\r\nfunction tab(){\r\n    const content = document.querySelector(\"#content\");\r\n    const navbar = document.createElement('div');\r\n\r\n    //append navigation bar and add class & id \"navbar\"\r\n    navbar.classList.add(\"navbar\");\r\n    navbar.setAttribute('id', \"navbar\");\r\n    content.appendChild(navbar);\r\n\r\n    //iterate through the contents each element of the navbar has. [text content, icon class]\r\n    const itemContent = [[\"Home\", \"fa-house\"], [\"Menu\", \"fa-utensils\"], [\"Contact\", \"fa-phone\"], [\"Location\", \"fa-location-dot\"]];\r\n    itemContent.forEach(function(el) {\r\n        //create item, heading and icon\r\n        const navItem = document.createElement('div');\r\n        const heading = document.createElement('h3');\r\n        const icon = document.createElement('i');\r\n        //add classes\r\n        navItem.className = \"nav-item\";\r\n        navItem.setAttribute('id', `${(el[0]).toLowerCase()}`);\r\n        icon.className = el[1];\r\n        icon.classList.add(\"fa-solid\");\r\n        //text content\r\n        heading.textContent = el[0];\r\n        //append icon and text wrapped in a nav item to nav bar\r\n        navItem.appendChild(icon);\r\n        navItem.appendChild(heading);\r\n        navbar.appendChild(navItem);        \r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/tab.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;