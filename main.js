const tasks = document.querySelectorAll(".task");

tasks.forEach((task) => {
  const box = task.getBoundingClientRect();
  task.addEventListener("dragstart", (e) => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });
  task.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (e.offsetY <= box.height / 2) {
      console.log("Tren " + task.textContent);
    } else if (e.offsetY > box.height / 2) {
      console.log("Duoi " + task.textContent);
    }
  });
});
