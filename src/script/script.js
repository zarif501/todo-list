let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

const addTasks = document.querySelector("#addTask");
const addTaskBtn = document.querySelector("#addTaskBtn");
const warningMsg = document.querySelector("#warningMsg");

const tasks = document.querySelector("#tasks");
const welcomeMsgs = document.querySelector(".welcome");

function createTask(taskText){

    const spanTask = document.createElement ("span");
    const newTask = document.createElement ("li"); 
    const actions = document.createElement ("div");
    const statusIcon = document.createElement ("img");
    const deleteTaskIcon = document.createElement ("img");

    spanTask.textContent = taskText;
    deleteTaskIcon.src = "src/icons/delete.svg";
    statusIcon.src = "src/icons/check.svg";

    newTask.appendChild(spanTask);
    newTask.appendChild(actions);
    actions.appendChild(statusIcon);
    actions.appendChild(deleteTaskIcon);

    tasks.prepend(newTask)

    //deletes the task
    deleteTaskIcon.addEventListener("click", function () {
        newTask.remove(); 
        
    tasksArray = tasksArray.filter(function (item) {

        return item !== taskText;
    });

    saveTasks();
});

    //Chnages the task status
    statusIcon.addEventListener("click", function(){
        spanTask.classList.toggle("done");

        if(spanTask.classList.contains("done")){

            statusIcon.src = "src/icons/done.svg";
            warningMsg.textContent = "Task completed.";
            warningMsg.style.color = "green";
        }else{
            statusIcon.src = "src/icons/check.svg";
            warningMsg.textContent = "Task marked as incomplete.";
            warningMsg.style.color = "orange";
        }
    });
}

addTaskBtn.addEventListener("click", function(){
    const taskText = addTasks.value.trim();

        if(taskText === ""){
        warningMsg.textContent = "please enter your tasks...";
        warningMsg.style.color = "red";

    return
    }
        addTask(taskText);

        addTasks.value = "";
        welcomeMsgs.style.display = "none";
        warningMsg.textContent = "Task added!";
        warningMsg.style.color = "green";
    
});

function addTask(taskText){
    tasksArray.push(taskText);
    saveTasks();
    createTask(taskText)
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
   
}

function loadTasks(){

    if(tasksArray.length === 0){
        welcomeMsgs.style.display = "block";
    }else{
        welcomeMsgs.style.display = "none";
    }
    tasksArray.forEach(function(taskText) {
    createTask(taskText);
});
}

loadTasks();