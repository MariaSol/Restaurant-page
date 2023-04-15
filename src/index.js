import { tab } from "./tab";
import { homeTab } from "./home";
import { menuTab } from "./menu";
import { contactTab } from "./contact";
import { locationTab } from "./location";

const content = document.querySelector("#content")
//add event listeners to navigation bar items
function addEvents() {
    //child elements in #content of the page
    const page = content.children;
    //look for each element on the page to find navbar
    for(let el of page){
        //if navbar is found
        if(el.id == "navbar"){
            const nav = el.children;
            //add event listener to each nav item
            for (let item of nav){
                item.addEventListener('click', function(){
                    //each item will do a different thing depending on the id
                    if (item.id == "home"){
                        newPage(homeTab);
                    }
                    else if (item.id == "menu"){
                        newPage(menuTab);
                    }
                    else if (item.id == "contact"){
                        newPage(contactTab);
                    }
                    else if (item.id == "location"){
                        newPage(locationTab);
                    }
                    else {
                        newPage(tab)
                    }
                })
            }
            break;
        }
    }
}
addEvents();

//recreate the DOM: (remove old elements and add new ones depending on page)
function newPage(page) {
    resetPage();
    page();
    //add event listeners after elements exist on the page
    addEvents()
}

//remove all DOM nodes
function resetPage() {
    //loop over content and add class delete to every unwanted child element
    for(let i = 0; i < content.childElementCount; i++){
        //add conditions for deletion to keep some elements in the DOM [optional]

        //add class 'delete' to elements
        content.children[i].classList.add("delete");
    }
    //remove all elements of class delete from the DOM
    const remove = document.querySelectorAll(".delete");
    remove.forEach(element => {
        element.remove()
    });
}

