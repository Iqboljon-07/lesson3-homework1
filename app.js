////////////////////////////////////////////////////////
//Real Data
let datasForTable = [
  { id: 1, name: "John", age: 25, action: "del edit" },

  { id: 2, name: "Jane", age: 30, action: "del edit" },

  { id: 3, name: "Michael", age: 35, action: "del edit" },

  { id: 4, name: "Emma", age: 28, action: "del edit" },

  { id: 5, name: "David", age: 27, action: "del edit" },
];

let table = document.querySelector("table");
let head = document.querySelector(".head");
Object.keys(datasForTable[0]).forEach((val) => {
  let th = document.createElement("th");
  th.textContent = val;
  head.append(th);
});

function displayData() {
  document.querySelector("tbody").remove();

  let tbody = document.createElement("tbody");
  datasForTable.forEach((val, ind) => {
    let tr = document.createElement("tr");

    let tdId = document.createElement("td");

    let tdName = document.createElement("td");

    let tdAge = document.createElement("td");

    let tdAction = document.createElement("td");

    val.action.split(" ").forEach((val) => {
      let btn = document.createElement("button");
      btn.textContent = val;
      tdAction.append(btn);

      btn.classList.add("btn", "btn-sm", "btn-warning");
      btn.addEventListener("click", () => {
        if (val === "del") {
          tr.remove();
        } else if (val === "edit") {
          tdName.contentEditable = true;
          tdName.addEventListener("blur", () => {
            tdName.contentEditable = false;
          });
          tdAge.contentEditable = true;
          tdAge.addEventListener("blur", () => {
            tdAge.contentEditable = false;
          });
        }
      });
    });
    tdId.textContent = val.id;
    tdName.textContent = val.name;
    tdAge.textContent = val.age;
    tr.append(tdId, tdName, tdAge, tdAction);
    tbody.append(tr);
    table.append(tbody);
  });
}

displayData();
let form = document.querySelector(".formTable");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let elem = e.target;
  let data = {
    id: datasForTable.length + 1,
    name: elem[0].value,
    age: elem[1].value,
    action: "del edit",
  };
  datasForTable.push(data);

  displayData();
  elem.reset();
});
