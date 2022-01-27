
/* Project Card UI DOM */
class ProjectCard {
    constructor(infoButton, fullInfo) {
        this.infoButton = infoButton;
        this.fullInfo = fullInfo;

        this.clicked = false;

        this.infoButton.addEventListener('click', () => {
            this.fullInfo.classList.toggle("fullInfoShow");

            if (this.clicked === false) this.infoButton.textContent = "Minimize";
            else this.infoButton.textContent = "Info";
            this.clicked = !this.clicked;
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

/* Driver Code */
function main() {
    fetchProjectCards();
}

main();