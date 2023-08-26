const primaryHeader = document.querySelector(".header");
const navToggle = document.querySelector(".navigation__mobile-toggle");
const primaryNav = document.querySelector(".navigation");
const hamburgerIcon = document.getElementById("burgerIcon");
const closeIcon = document.getElementById("burgerClose");
const dropdown = document.querySelectorAll(".navigation__dropdown-item");

navToggle.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);

    //permet de changer l'attribut
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute("data-overlay");
})


dropdown.forEach(dropdownItem => {
    const dropdownTitle = dropdownItem.querySelector(".navigation__dropdown-title");
    const dropdownList = dropdownItem.querySelector(".navigation__dropdown-list");
    const navIcons = dropdownItem.querySelectorAll(".navigation__dropdown-icon");

    dropdownTitle.addEventListener('click', () => {
        dropdownList.classList.toggle("hidden");
        navIcons.forEach(icon => {
            const arrowUpIcon = icon.querySelector(".arrow-up");
            const arrowDownIcon = icon.querySelector(".arrow-down");
            arrowUpIcon.classList.toggle('hidden');
            arrowDownIcon.classList.toggle('hidden');
        })
    });
});
