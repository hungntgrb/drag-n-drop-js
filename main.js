const tasks = document.querySelectorAll(".task");
const containers = document.querySelectorAll(".container");

underneathElem = null;

tasks.forEach((task) => {
  const box = task.getBoundingClientRect();
  task.addEventListener("dragstart", (e) => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
    insertItBefore(task, underneathElem);
    underneathElem = null;
  });
  task.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (isBefore(box, e)) {
      underneathElem = task;
    }
  });
});

const t1 = tasks[0];
const c1 = containers[0];
const c2 = containers[1];
const t3 = tasks[2];
const t4 = tasks[3];

function isBefore(box, event) {
  return event.offsetY <= box.height / 2;
}

function insertItBefore(newE, existing) {
  const parent = existing.parentElement;
  parent.insertBefore(newE, existing);
}
