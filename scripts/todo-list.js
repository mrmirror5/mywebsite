
// The data structure is the following:

const projectsArray = [{   
    name: "Rock-Paper-Scissors game",
    description: "My first javascript project: a simple game of Rock-Paper-Scissors against the random() method.",
    link: "/JS-projects/rock-paper-scissors.html",
    img: "images/project-snapshots/RPS-game.png"
},
{   
    name: "To-Do List v1",
    description: "My first bigger javascript project: a to-do-list web app with descriptions, history and funky sound effects.",
    link: "/todo-list",
    img: "images/project-snapshots/TodoV1.png"
},
{
    name: "Country Info App",
    description: "Country Info App incluides capital, area, languages, temperature and wind plus a widget.",
    link: "https://mrmirror5.github.io/country-info-app/",
    img: "images/project-snapshots/CountriesInfoApp.png"

},
{
    name: "World Cup Game Info",
    description: "I programmed a nice react app that fetches it's data incluiding: match info, score and more from a football api, and displays it in a nice format.",
    link: "https://mrmirror5.github.io/world-cup-stats/",
    img: "images/project-snapshots/WC-Stats.png"
},
{
    name: "To-Do List v2",
    description: "A simple to-do-list app that is made with React and utilizes the Mantine UI library for styling.",
    link: "https://mrmirror5.github.io/react-todo-app/",
    img: "images/project-snapshots/TodoV2.png"
}
]



// Code for displaying the projects

const projectsContainer = document.getElementById("projects-container")
const projectsArrayFlipped = projectsArray.reverse()

let projectsHTML = ``

projectsArrayFlipped.forEach(project => (
    projectsHTML +=  `
    <div class="tilt-zone">
        <div class="project-container">
            <a href="${project.link}" style="display:contents"><img src="${project.img}" class="project-image" alt="${project.name}"></a>

            <div class="project-bottom">
                <div class="project-title">${project.name}</div>
                <div class="project-description">${project.description}</div>
                <a href="${project.link}" target="_blank"><button class="project-demo-button">Live Demo</button></a>
            </div>
        </div>
    </div>
    `
))

projectsContainer.innerHTML = projectsHTML