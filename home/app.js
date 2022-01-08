
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

// Project Section Image Carousel Functionality
class ProjectCarousel {
    constructor() {
        // Container UI Elements
        this.imageContainer = document.querySelector("#projectImageContainer");
        this.projectName = document.querySelector(".projectName");
        this.projectDescription = document.querySelector("#projectDescription");
        this.repoButton = document.querySelector(".projectsSection a");

        // Project Selector Dots
        this.projectOne = document.querySelector("#projectOne");
        this.projectTwo = document.querySelector("#projectTwo");
        this.projectThree = document.querySelector("#projectThree");
        this.projectFour = document.querySelector("#projectFour");
        this.projectFive = document.querySelector("#projectFive");
        this.projectSix = document.querySelector("#projectSix");
        this.dotButtons = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix];

        this.projectDots = {
            1: projectOne,
            2: projectTwo,
            3: projectThree,
            4: projectFour,
            5: projectFive,
            6: projectSix
        };

        // Project Dots Click Listeners
        for (let i = 0; i < 6; i++) {
            this.dotButtons[i].addEventListener('click', () => {
                if (i + 1 === this.currentChoice) return;
                this.changeProjectTo(i + 1);
            });
        }

        // Image Container Event Listener
        this.imageContainer.addEventListener('click', () => {
            if (this.currentChoice === 6) {
                this.changeProjectTo(1);
            } else {
                this.changeProjectTo(this.currentChoice + 1);
            }
        });

        // Default Choice
        this.currentChoice = 0;
        this.changeProjectTo(1);
    }

    // Changes the UI depending on project number
    changeProjectTo(projectNumber) {
        if (projectNumber === this.currentChoice) return;

        switch (projectNumber) {
            case 1:
                this.changeProjectContents(
                    "GIN ARAI DEE : Android Application",
                    "/assets/images/gad-demo.png",
                    "GIN ARAI DEE is an Android application written in Java. \
                    Provides food recommendations, food randomizer, bill splitting, and dietary planning.",
                    "https://github.com/deeckn/GIN-ARAI-DEE"
                );
                this.updateSelectedDot(1);
                this.currentChoice = 1;
                break;
            case 2:
                this.changeProjectContents(
                    "TODOLIST : Android Application",
                    "/assets/images/todo-demo.png",
                    "A simple TODO list android application using Java and SQLite.",
                    "https://github.com/deeckn/TODOLIST"
                );
                this.updateSelectedDot(2);
                this.currentChoice = 2;
                break;
            case 3:
                this.changeProjectContents(
                    "Shunting Yard Calculator : Web Application",
                    "/assets/images/calc-demo.png",
                    "A simple web calculator that utilizes the Shunting Yard algorithm to compute mathematical expressions.\
                     Using a combination of the Stack and Queue data structures.",
                    "https://github.com/deeckn/ShuntingYard-Calculator"
                );
                this.updateSelectedDot(3);
                this.currentChoice = 3;
                break;
            case 4:
                this.changeProjectContents(
                    "Dad Jokes Generator : Web Application",
                    "/assets/images/jokes-demo.png",
                    "A fun web application to fetch dad jokes from an API.",
                    "https://github.com/deeckn/Dad-Jokes"
                );
                this.updateSelectedDot(4);
                this.currentChoice = 4;
                break;
            case 5:
                this.changeProjectContents(
                    "GPA DEE MHAI : Web Application",
                    "/assets/images/gpa-demo.png",
                    "It's hard to find an online GPA calculator with the same grading system as my country.\
                     So, why not build my own GPA calculator?",
                    "https://github.com/deeckn/GPA-DEE-MHAI"
                );
                this.updateSelectedDot(5);
                this.currentChoice = 5;
                break;
            case 6:
                this.changeProjectContents(
                    "Self-storage Management System : Desktop Application",
                    "/assets/images/ssms-demo.png",
                    "Self Storage Managment System using the Qt Framework.",
                    "https://github.com/deeckn/qt-gui-term-project"
                );
                this.updateSelectedDot(6);
                this.currentChoice = 6;
                break;
            default:
                console.log("No choice avaliable");
                break;
        }
    }

    // Update the project section elements based on info passed
    changeProjectContents(projectTitle, imageFile, description, url) {
        this.projectName.textContent = projectTitle;
        this.imageContainer.src = imageFile;
        this.projectDescription.textContent = description;
        this.repoButton.href = url;
    }

    // Changes color of the project dot selected
    updateSelectedDot(projectNumber) {
        this.projectDots[projectNumber].classList.toggle("dark-bg");

        if (this.currentChoice === 0) return;
        this.projectDots[this.currentChoice].classList.toggle("dark-bg");
    }
}

// Driver Function
function main() {
    new NavigationBar();
    new ProjectCarousel();
}

main();