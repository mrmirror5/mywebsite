//Todo list structure
let todoList = [];
let doneTasks = [];
// Print tasks from local storage on refresh
readSavedList();
printTasks();
printDoneTasks();

const inputBox = document.getElementById("input-box");

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






function addTask(){
    const taskString = document.getElementById("input-box").value;
    if(inputBox.value === ""){
        alert("You must write something!");
    }
    else{
        todoList.push(taskString);
        inputBox.value = "";
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
}

function printTasks(){
    // Print the todo-list
    const taskBucket = document.getElementById("task-bucket");
    taskBucket.innerHTML = ""
  
    for (let i=0; i< todoList.length; i++ ) {
        // Using the following mode instead of .innerHTML just to keep the event listeners.
        const taskBody = document.createElement("div");
        taskBody.classList.add("task-body");

        taskBody.innerHTML = `
            <div class="task">
                <p>${todoList[i]}</p>
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
        }

        // Just selecting the task-selected class for now.
        task.addEventListener("click", () => {
            const alreadySelected = document.querySelector(".task-selected");
            console.log(alreadySelected)
            if (alreadySelected) {
                alreadySelected.classList.remove("task-selected");
            }
            // What to do when task selected
            task.classList.add("task-selected");
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
    console.log(doneTasksPrint)

    
    const ul = document.getElementById("done-list");
    ul.innerHTML = ""

    doneTasksPrint.forEach((task) => {
        const li = document.createElement("li");
        li.innerHTML = task;
        ul.appendChild(li);
    });
};
    

function clearDoneTasks(){
    localStorage.removeItem("doneTasksSaved");
    printDoneTasks();
}