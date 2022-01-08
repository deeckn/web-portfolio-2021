
// Responsive Navigation Menu
const navLinks = document.querySelector(".navLinks");
const menuButton = document.querySelector("header nav img");

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle("navActive");
});

// Project Showcase Functionality

// Project Content Containers
const imageContainer = document.querySelector("#projectImageContainer");
const projectName = document.querySelector(".projectName");
const projectDescription = document.querySelector("#projectDescription");
const repoButton = document.querySelector(".projectsSection a");

// Project Selector Dots
const projectOne = document.querySelector("#projectOne");
const projectTwo = document.querySelector("#projectTwo");
const projectThree = document.querySelector("#projectThree");
const projectFour = document.querySelector("#projectFour");
const projectFive = document.querySelector("#projectFive");
const projectSix = document.querySelector("#projectSix");
const dotButtons = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix];

let currentChoice = 0;

projectDots = {
    1: projectOne,
    2: projectTwo,
    3: projectThree,
    4: projectFour,
    5: projectFive,
    6: projectSix
};

function changeProjectTo(projectNumber) {
    if (projectNumber === currentChoice) return;

    switch (projectNumber) {
        case 1:
            changeProjectContents(
                "GIN ARAI DEE : Android Application",
                "/assets/images/gad-demo.png",
                "GIN ARAI DEE is an Android application written in Java. \
                Provides food recommendations, food randomizer, bill splitting, and dietary planning.",
                "https://github.com/deeckn/GIN-ARAI-DEE"
            );
            updateSelectedDot(1);
            currentChoice = 1;
            break;
        case 2:
            changeProjectContents(
                "TODOLIST : Android Application",
                "/assets/images/todo-demo.png",
                "A simple TODO list android application using Java and SQLite.",
                "https://github.com/deeckn/TODOLIST"
            );
            updateSelectedDot(2);
            currentChoice = 2;
            break;
        case 3:
            changeProjectContents(
                "Shunting Yard Calculator : Web Application",
                "/assets/images/calc-demo.png",
                "A simple web calculator that utilizes the Shunting Yard algorithm to compute mathematical expressions.\
                 Using a combination of the Stack and Queue data structures.",
                "https://github.com/deeckn/ShuntingYard-Calculator"
            );
            updateSelectedDot(3);
            currentChoice = 3;
            break;
        case 4:
            changeProjectContents(
                "Dad Jokes Generator : Web Application",
                "/assets/images/jokes-demo.png",
                "A fun web application to fetch dad jokes from an API.",
                "https://github.com/deeckn/Dad-Jokes"
            );
            updateSelectedDot(4);
            currentChoice = 4;
            break;
        case 5:
            changeProjectContents(
                "GPA DEE MHAI : Web Application",
                "/assets/images/gpa-demo.png",
                "It's hard to find an online GPA calculator with the same grading system as my country.\
                 So, why not build my own GPA calculator?",
                "https://github.com/deeckn/GPA-DEE-MHAI"
            );
            updateSelectedDot(5);
            currentChoice = 5;
            break;
        case 6:
            changeProjectContents(
                "Self-storage Management System : Desktop Application",
                "/assets/images/ssms-demo.png",
                "Self Storage Managment System using the Qt Framework.",
                "https://github.com/deeckn/qt-gui-term-project"
            );
            updateSelectedDot(6);
            currentChoice = 6;
            break;
        default:
            console.log("No choice avaliable");
            break;
    }
}

function changeProjectContents(projectTitle, imageFile, description, url) {
    projectName.textContent = projectTitle;
    imageContainer.src = imageFile;
    projectDescription.textContent = description;
    repoButton.href = url;
}

function updateSelectedDot(projectNumber) {
    projectDots[projectNumber].classList.toggle("dark-bg");

    if (currentChoice === 0) return;
    projectDots[currentChoice].classList.toggle("dark-bg");
}

// Event Listeners For Dots
for (let i = 0; i < 6; i++) {
    dotButtons[i].addEventListener('click', () => {
        if (i + 1 === currentChoice) return;
        changeProjectTo(i + 1);
    });
}

changeProjectTo(1);