
// The data structure is the following:

const projectsArray = [{   
    name: "To-Do List v1",
    description: "My first javascript project: a to-do-list web app with descriptions, history and funky sound effects.",
    link: "/todo-list"
},
{
    name: "Weather App",
    description: "A nice weather app that displays a city's temperature, wind and shows a widget.",
    link: "#coming soon"
},
{
    name: "World Cup Game Info",
    description: "I programmed a nice react app that fetches it's data incluiding: match info, score and more from a football api, and displays it in a nice format.",
    link: "https://mrmirror5.github.io/world-cup-stats/"
},
{
    name: "To-Do List v2",
    description: "A simple to-do-list app that is made with React and utilizes the Mantine UI library for styling.",
    link: "https://mrmirror5.github.io/react-todo-app/"
}
]



// Code for displaying the projects

const projectsContainer = document.getElementById("projects-container")
const projectsArrayFlipped = projectsArray.reverse()

let projectsHTML = ``

projectsArrayFlipped.forEach(project => (
    projectsHTML +=  `

    <div class="project">
        <div class="project-title">${project.name}</div>
        <div class="project-description">${project.description}</div>
        <a href="${project.link}" target="_blank"><button class="project-demo-button">Live Demo</button></a>
    </div>
    `
))

projectsContainer.innerHTML = projectsHTML