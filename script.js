function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("todo-list");

    if (taskInput.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => newTask.remove();

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = "";
}
