const menu = document.querySelector('.menu')
const navItems = document.querySelector('.nav-items')

const iconClose = '<i class="fa-solid fa-xmark"></i>';
const iconOpen = '<i class="fa-solid fa-bars"></i>';

menu.addEventListener("click", ()=> {
    if(menu.innerHTML.includes("bars")){
        menu.innerHTML = iconClose;
    } else {
        menu.innerHTML = iconOpen;
    }

    navItems.classList.toggle("-translate-x-full");
});