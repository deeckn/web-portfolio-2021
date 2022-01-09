// Responsive Navigation Menu
class NavigationBar {
    constructor() {
        this.navLinks = document.querySelector(".navLinks");
        this.menuButton = document.querySelector("header nav img");

        this.menuButton.addEventListener('click', () => {
            this.navLinks.classList.toggle("navActive");
        });
    }
}

function main() {
    new NavigationBar();
}

main();