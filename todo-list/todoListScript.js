//Todo list structure, 
//let todoList = [{task:"clean", taskDescription:"Tidy up the garage", taskDate: new Date()}]
let todoList = [];
let doneTasks = [];
// Print tasks from local storage on refresh
readSavedList();
printTasks();
printDoneTasks();



//Make Add button addTask
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", function() {
        readSavedList();
        // Adds to list
        addTask();
        // save to local storage
        saveTaskList();
        // print
        printTasks();
});

//Make enter addTask
document.getElementById("input-box").addEventListener("keypress", function(e){
    if (e.key === "Enter") {

        readSavedList();
        // Adds to list
        addTask();
        
        // save to local storage
        saveTaskList();
        // print
        printTasks();
    }
})

// Make enter add task on description box also
document.getElementById("description-box").addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        e.preventDefault();      // stop newline
        readSavedList();
        // Adds to list
        addTask();
        // save to local storage
        saveTaskList();
        // print
        printTasks();
    }
})




function addTask(){
    const inputBox = document.getElementById("input-box");
    const descriptionBox = document.getElementById("description-box");
    //Create task object with the time.
    let taskObject = {task:"", taskDescription:"", taskDate: new Date()}

    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else if (descriptionBox === ""){
        taskObject.task = inputBox.value;
        todoList.push(taskObject);

        //Clear the box value
        inputBox.value = "";
    }
    else {
        taskObject.task = inputBox.value;
        taskObject.taskDescription = descriptionBox.value;
        todoList.push(taskObject);
        // Clear the boxes
        inputBox.value = "";
        descriptionBox.value = "";
    }
}



function saveTaskList(){
    localStorage.setItem("savedTaskList", JSON.stringify(todoList));
}

function readSavedList(){
    const storedTasks = localStorage.getItem("savedTaskList")
    
    if (storedTasks) {
        todoList = JSON.parse(storedTasks);

    } else {
        todoList = [];
    }
    console.log(todoList)
}

function printTasks(){
    // Print the todo-list
    const taskBucket = document.getElementById("task-bucket");
    taskBucket.innerHTML = ""
  
    for (let i=0; i< todoList.length; i++ ) {
        // Using the following mode instead of .innerHTML just to keep the event listeners.
        const taskBody = document.createElement("div");
        taskBody.classList.add("task-body");

        // Get the date and time
        const d = new Date(todoList[i].taskDate);
        hours = String(d.getHours()).padStart(2, "0"); // make it 15:02 instead of 15:2
        minutes = String(d.getMinutes()).padStart(2,"0");
        date = d.getDate();
        month = d.getMonth()+1;
        year = d.getFullYear();


        taskBody.innerHTML = `
            <div class="task">
                <p>${todoList[i].task}</p>      
            </div>
            <div class="task-date-section">
                <p class="task-time">${hours}:${minutes}</p>
                <p class="task-date">${date}.${month}.${year}</p>
            </div>

            <div class="basic-button rm-button">Remove</div>
            <div class="basic-button done-button">Done</div>
        `;

        //Event listener for removing task
        const removeButton = taskBody.querySelector(".rm-button");
        const doneButton = taskBody.querySelector(".done-button");

        removeButton.addEventListener("click", function(){
            document.getElementById("task-not-done-audio").play();
            
            // Remove from local storage, save and print
            todoList.splice(i,1)
            saveTaskList()
            printTasks()
        });
        doneButton.addEventListener("click", function(){
            document.getElementById("task-done-audio").play();

            // Remove from local storage, save and print
            const doneTasksSaved = localStorage.getItem("doneTasksSaved");
            if (doneTasksSaved) {
                doneTasks = JSON.parse(doneTasksSaved);
            } 
            doneTasks.push((todoList.splice(i,1))[0])
            localStorage.setItem("doneTasksSaved", JSON.stringify(doneTasks))
            printDoneTasks()

            saveTaskList()
            printTasks()
        });

        const task = taskBody;
    
        //Make the first task selected automatically.
        if (i==0) {
            task.classList.add("task-selected");
            printDescriptionPage(todoList[i].taskDescription)
        }

        // Just selecting the task-selected class for now.
        task.addEventListener("click", () => {
            const alreadySelected = document.querySelector(".task-selected");
            if (alreadySelected) {
                alreadySelected.classList.remove("task-selected");
            }
            // What to do when task selected
            task.classList.add("task-selected");

            // Print the desription
            printDescriptionPage(todoList[i].taskDescription)
        })

        taskBucket.appendChild(taskBody);
    }
}







// The side bar section


function onTabClick(event) {

    // Deactive existing active tab and panel
    let activeTabs = document.querySelectorAll(".active");

    activeTabs.forEach(function(tab) {
        tab.className = tab.className.replace("active", "");
    })

    // Activate new tab and panel
    event.target.className += " active";    

    document.getElementById(event.target.firstChild.href.split("#")[1]).className += " active";

}


const element = document.getElementById('nav-tab');

element.addEventListener("click", onTabClick, false);





// Tasks done printing

function printDoneTasks(){
    // Load done tasks from memory
    const doneTasksSaved = localStorage.getItem("doneTasksSaved");
    let doneTasksPrint = [];
    if (doneTasksSaved) {
        doneTasksPrint = JSON.parse(doneTasksSaved);
    } 

    
    const ul = document.getElementById("done-list");
    ul.innerHTML = ""

    doneTasksPrint.forEach((taskDetails) => {
        const li = document.createElement("li");
        li.innerHTML = taskDetails.task;
        
        //Check for description and display it, here in the Done Tasks section
        if (taskDetails.taskDescription !== "") {
            const ul2 = document.createElement("ul");
            const li2 = document.createElement("li");
            li2.innerHTML = taskDetails.taskDescription;
            ul2.appendChild(li2)
            li.appendChild(ul2)
        }
        ul.appendChild(li);
    });
};
    

function clearDoneTasks(){
    localStorage.removeItem("doneTasksSaved");
    printDoneTasks();
}



// Description page

function printDescriptionPage(descriptionText){
    descriptionElement = document.getElementById("description-element");
    if (descriptionText){
        descriptionElement.innerHTML = descriptionText;
    }
    else {
        console.log("This task has no description.")
        descriptionElement.innerHTML = "This task has no description.";
    }
    
}