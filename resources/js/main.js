const primaryHeader = document.querySelector(".header");
const navToggle = document.querySelector(".navigation__mobile-toggle");
const primaryNav = document.querySelector(".navigation");
const hamburgerIcon = document.getElementById("burgerIcon");
const closeIcon = document.getElementById("burgerClose");
const listNavigation = document.querySelector(".navigation__dropdown-title");
const arrowUpIcon = document.querySelector(".arrow-up");
const arrowDownIcon = document.querySelector(".arrow-down");
const dropdownList = document.querySelector(".navigation__dropdown-list");

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
    arrowUpIcon.classList.toggle('hidden');
    arrowDownIcon.classList.toggle('hidden');
    /*dropdownList.style.animation = "slide-bottom ";*/
});
