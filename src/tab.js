export {tab};

function tab(){
    const content = document.querySelector("#content");
    const navbar = document.createElement('div');

    //append navigation bar and add class & id "navbar"
    navbar.classList.add("navbar");
    navbar.setAttribute('id', "navbar");
    content.appendChild(navbar);

    //iterate through the contents each element of the navbar has. [text content, icon class]
    const itemContent = [["Home", "fa-house"], ["Menu", "fa-utensils"], ["Contact", "fa-phone"], ["Location", "fa-location-dot"]];
    itemContent.forEach(function(el) {
        //create item, heading and icon
        const navItem = document.createElement('div');
        const heading = document.createElement('h3');
        const icon = document.createElement('i');
        //add classes
        navItem.className = "nav-item";
        navItem.setAttribute('id', `${(el[0]).toLowerCase()}`);
        icon.className = el[1];
        icon.classList.add("fa-solid");
        //text content
        heading.textContent = el[0];
        //append icon and text wrapped in a nav item to nav bar
        navItem.appendChild(icon);
        navItem.appendChild(heading);
        navbar.appendChild(navItem);        
    });
}
