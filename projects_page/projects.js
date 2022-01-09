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

/* Project Card UI DOM */
class ProjectCard {
    constructor(infoButton, fullInfo) {
        this.infoButton = infoButton;
        this.fullInfo = fullInfo;

        this.infoButton.addEventListener('click', () => {
            this.fullInfo.classList.toggle("fullInfoShow");
        });
    }
}

function fetchProjectCards() {
    const infoButtons = document.querySelectorAll(".infoButton");
    const fullInfoContainers = document.querySelectorAll(".fullInfo");

    for (let i = 0; i < infoButtons.length; i++) {
        new ProjectCard(infoButtons[i], fullInfoContainers[i]);
    }
}

function main() {
    new NavigationBar();
    fetchProjectCards();
}

main();