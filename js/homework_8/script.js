// Task 1

let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit quaerat quod perspiciatis sit accusamus modi eveniet, sequi ducimus optio odio ullam fuga error sint saepe, eligendi impedit, quibusdam culpa.";

let div = document.querySelector(".div");
let textarea = document.querySelector(".textarea");
div.textContent = text;

function changeTag(event) {
  if (event.ctrlKey && event.code === "KeyE") {
    event.preventDefault();
    div.style.display = "none";
    textarea.style.display = "block";
    textarea.textContent = text;
  }
  if (event.ctrlKey && event.code === "KeyS") {
    event.preventDefault();
    textarea.style.display = "none";
    div.style.display = "block";
    div.textContent = textarea.value;
  }
}

document.addEventListener("keydown", changeTag);

// Task 2

let table = document.querySelector(".table");

table.onclick = function (event) {
  if (event.target.tagName != "TH") {
    return;
  }
  let th = event.target;
  let index = th.cellIndex;
  sortTable(index);
};

function sortTable(index) {
  let tbody = table.querySelector("tbody");
  let trows = tbody.rows;
  let newRows = [];
  for (i = 0; i < trows.length; i++) {
    newRows.push(+trows[i].cells[index].innerHTML);
  }
  sortedRows = newRows.sort((a, b) => {
    return a - b;
  });
  for (i = 0; i < trows.length; i++) {
    trows[i].cells[index].innerHTML = sortedRows[i];
  }
}

// Task 3

// let button = document.querySelector(".button");
// let width = button.offsetWidth;
// let height = button.offsetHeight;
