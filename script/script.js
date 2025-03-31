
let hoverLink = document.querySelector(".nav__list-down");
let nav__linkactive = document.querySelector(".nav__link-active");
let burgerMenu = document.querySelector(".burger__menu")
let navLinkRes = document.querySelector(".nav__link-res");
let navList = document.querySelector(".nav__list")
burgerMenu.addEventListener("click", function() {

    navList.classList.toggle("active");
})
    burgerMenu.addEventListener("click", function () { 

        burgerMenu.classList.toggle("active");
})

nav__linkactive.addEventListener("mouseover", function() {
    hoverLink.classList.toggle("active")
})

hoverLink.addEventListener("mouseout", function() {
    hoverLink.classList.remove("active")
})

hoverLink.addEventListener("mouseover", function() {
    hoverLink.classList.add("active")
})

hoverLink.addEventListener("mouseout", function() {
    hoverLink.classList.remote("active") 
})

let calcScrollValue = () => {
let scrollUp = document.getElementById
("scrollUp");
let scrollUp_hide = document.getElementById
("scrollUp_hide");
let pos = document.documentElement.scrollTop;
let calcHeight = 
document.documentElement.scrollHeight -
document.documentElement.clientHeight;
let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
   scrollUp.style.display = "grid";
  } else {
   scrollUp.style.display= "none";
  }
  scrollUp.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
 });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;