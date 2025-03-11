const input = document.querySelector("#task");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const editInput = document.querySelector("#updateText");
const modal = document.querySelector(".modal");
const updateBtn = document.querySelector("#updateBtn");

btn.addEventListener("click", addTask);
input.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter')
        addTask()
})

function addTask() {
  const task = input.value.trim();
  if (task === "") return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  loadTasks();
}

function loadTasks() {
  list.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task}
         <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
        `;
    list.append(li);
  });
}

function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
  editInput.value = tasks[index];
  modal.style.visibility = "visible";
  document.querySelector("#updateBtn").onclick = function () {
    if (editInput.value.trim() !== "") {
      tasks[index] = editInput.value.trim();
      console.log(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));
      modal.style.visibility = "hidden";
      loadTasks();
    }
  };
}
 window.onload = loadTasks;