// Select elements
const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Add Task
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create new list item
  const li = document.createElement("li");
  li.classList.add("task-item");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">✖</button>
  `;

  // Add event listeners
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.querySelector(".delete-btn").addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggling when deleting
    li.remove();
  });

  // Append to list & reset input
  taskList.appendChild(li);
  taskInput.value = "";
}
