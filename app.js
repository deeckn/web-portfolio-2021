const navLinks = document.querySelector(".navLinks");
const menuButton = document.querySelector("header nav img");

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle("navActive");
});