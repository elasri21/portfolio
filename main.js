// select elements needed
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const nav = document.querySelector("nav");
// add eventListener

menu.addEventListener("click", function(){
    this.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
});
closeMenu.addEventListener("click", function(){
    this.style.display = "none";
    menu.style.display = "block";
    nav.style.display = "none";
});