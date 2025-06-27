function addTask() {
  let task = document.getElementById("task").value;
  if (task === "") return;

  let li = document.createElement("li");
  li.innerHTML = task + " <span onclick='this.parentElement.remove()'>❌</span>";
  document.getElementById("list").appendChild(li);

  document.getElementById("task").value = "";
}
