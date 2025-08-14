const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load tasks from local storage when the page loads
window.onload = () => {
    let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTask(task));
};

addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
        addTask(taskInput.value);
        saveTask(taskInput.value);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => {
        li.remove();
        removeTask(taskText);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
