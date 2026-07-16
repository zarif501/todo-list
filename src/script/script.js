let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

const addTasks = document.querySelector("#addTask");
const addTaskBtn = document.querySelector("#addTaskBtn");
const warningMsg = document.querySelector("#warningMsg");

const tasks = document.querySelector("#tasks");
const welcomeMsgs = document.querySelector(".welcome");

function createTask(taskObject){

    const spanTask = document.createElement ("span");
    const newTask = document.createElement ("li"); 
    const actions = document.createElement ("div");
    actions.classList.add("actions");
    const statusIcon = document.createElement ("img");
    const deleteTaskIcon = document.createElement ("img");

    spanTask.textContent = taskObject.text;
    
    deleteTaskIcon.src = "src/icons/delete.svg";
    statusIcon.src = "src/icons/check.svg";

    if (taskObject.completed) {
        spanTask.classList.add("done");
        statusIcon.src = "src/icons/done.svg";
    } else {
        statusIcon.src = "src/icons/check.svg";
    }

    newTask.appendChild(spanTask);
    newTask.appendChild(actions);
    actions.appendChild(statusIcon);
    actions.appendChild(deleteTaskIcon);

    tasks.prepend(newTask)

    //deletes the task
    deleteTaskIcon.addEventListener("click", function () {
        warningMsg.textContent = "🗑️ Task deleted.";
        warningMsg.style.color = "red";
        newTask.remove(); 
        
    tasksArray = tasksArray.filter(function (item) {

        return item !== taskObject;
    });
        if(tasks.children.length === 0){
        welcomeMsgs.style.display = "block";
    }

    saveTasks();
});

    //Chnages the task status
    statusIcon.addEventListener("click", function(){
        taskObject.completed = !taskObject.completed;
        spanTask.classList.toggle("done");

        if(spanTask.classList.contains("done")){

            statusIcon.src = "src/icons/done.svg";
            warningMsg.textContent = "🎉 Task completed!";
            warningMsg.style.color = "green";
        }else{
            statusIcon.src = "src/icons/check.svg";
            warningMsg.textContent = "Task marked as incomplete.";
            warningMsg.style.color = "orange";
        }
        saveTasks();
    });
}

addTaskBtn.addEventListener("click", function(){
    const taskText = addTasks.value.trim();

        if(taskText === ""){
        warningMsg.textContent = "No tasks yet. Start by adding one!";
        warningMsg.style.color = "red";

    return;
    //crate new object
    }
    const newTask = {
        text: taskText,
        completed: false
    };
        addTask(newTask);

        //reset UI
        addTasks.value = "";
        welcomeMsgs.style.display = "none";
        warningMsg.textContent = "✅ Task added successfully.";
        warningMsg.style.color = "green";
    
});

function addTask(taskObject){
    tasksArray.push(taskObject);
    saveTasks();
    createTask(taskObject)
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