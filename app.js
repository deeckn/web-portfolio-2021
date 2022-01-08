const navLinks = document.querySelector(".navLinks");
const menuButton = document.querySelector("header nav img");

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle("navActive");
});

const repoButton = document.querySelector(".projectsSection a");
// repoButton.href = "/#contact";