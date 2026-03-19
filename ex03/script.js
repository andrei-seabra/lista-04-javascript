let taskInput = document.querySelector("#task-input");
let taskList = document.querySelector(".task-list");

let btn = document.querySelector("#btn");

btn.onclick = function() {
    let task = taskInput.value;

    if (task == "") {
        return;
    }

    let taskCard = document.createElement("li");
    taskCard.classList.add("task-card");
    taskCard.innerHTML = task;

    taskList.appendChild(taskCard);
}