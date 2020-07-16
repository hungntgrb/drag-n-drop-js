const tasks = document.querySelectorAll(".task");
const containers = document.querySelectorAll(".container");

afterElem = null;

tasks.forEach((task) => {
  const box = task.getBoundingClientRect();
  task.addEventListener("dragstart", (e) => {
    task.classList.add("dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
    insertItBefore(task, afterElem);
    afterElem = null;
  });
  task.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log(
      "target: ",
      e.target.textContent,
      "\ncurrentTarget: ",
      e.currentTarget.textContent
    );
    if (isBefore(box, e)) {
      afterElem = task;
    } else {
      afterElem = task.nextSibling;
    }
  });
});

function isBefore(box, event) {
  return event.offsetY <= box.height / 2;
}

function insertItBefore(A, B) {
  // Insert A before B
  const parent = B.parentElement;
  parent.insertBefore(A, B);
}
