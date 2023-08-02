const primaryHeader = document.querySelector(".header");
const navToggle = document.querySelector(".navigation__mobile-toggle");
const primaryNav = document.querySelector(".navigation");

//ajout d'un écouteur au click pour navToggle

navToggle.addEventListener('click', () => {
    console.log("ici");
    //si primary=navigation à l'attribue false au Click le passer en True pour afficher le menu et inversement
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);
    //permet de changer l'attribut
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})


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
