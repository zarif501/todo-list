const addTasks = document.querySelector("#addTask");
const addTaskBtn = document.querySelector("#addTaskBtn");
const warningMsg = document.querySelector("#warningMsg");

const tasks = document.querySelector("#tasks");
const welcomeMsgs = document.querySelector(".welcome")

addTaskBtn.addEventListener("click", function(){

    if (addTasks.value.trim() === ""){

        warningMsg.textContent = "Please enter your tasks...";
        warningMsg.style.color = "red";

    }else {

        const newTask = document.createElement("li");
        
        newTask.textContent = (addTasks.value);
        tasks.prepend(newTask);

        addTasks.value = "";

        welcomeMsgs.style.display = "none";
        warningMsg.textContent = "Task added";
        warningMsg.style.color = "green";

    }
});
