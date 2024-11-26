function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("todo-list");

    if (taskInput.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);

    taskInput.value = "";
}
