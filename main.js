const primaryHeader = document.querySelector(".header");
const navToggle = document.querySelector(".navigation__mobile-toggle");
const primaryNav = document.querySelector(".navigation");
const hamburgerIcon = document.getElementById("burgerIcon");
const closeIcon = document.getElementById("burgerClose");
const listNavigation = document.querySelectorAll(".navigation__dropdown-title");
const dropdownList = document.querySelector(".navigation__dropdown-list");

/*listNavigation.addEventListener('click', () => {
    dropdownList.classList.toggle("hidden")
});*/
//ajout d'un écouteur au click pour navToggle

navToggle.addEventListener('click', () => {


    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);

    //permet de changer l'attribut
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})
listNavigation.addEventListener('click', () => {
    dropdownList.classList.toggle("hidden")
});







/*const primaryHeader = document.querySelector(".primary-header")
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation")*/

//ajout d'un écouteur au click pour navToggle

/*
navToggle.addEventListener('click', () => {
    //si primary=navigation à l'attribue false au Click le passer en True pour afficher le menu et inversement
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);
    //permet de changer l'attribut
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})
*/
