//let alert = window.alert("Under construction");

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
        const deleteTaskIcon = document.createElement("img");
        const accompleshedIcon = document.createElement("img");

        newTask.textContent = (addTasks.value);

        deleteTaskIcon.src = ("src/icons/delete.svg");
        newTask.appendChild(deleteTaskIcon);

        tasks.prepend(newTask);

        deleteTaskIcon.addEventListener("click", function(){

            const newTask = deleteTaskIcon.parentElement;
            warningMsg.textContent = "Task deleted.";
            warningMsg.style.color = "orange";
            newTask.remove();

            if(tasks.children.length === 0){
                welcomeMsgs.style.display = "block";
            }
        });

        addTasks.value = "";

        welcomeMsgs.style.display = "none";
        warningMsg.textContent = "Task added!";
        warningMsg.style.color = "green";

    }
});

