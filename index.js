let inputName = document.getElementById("inputName");
let inputSurname = document.getElementById("inputSurname");
let inputAge = document.getElementById("inputAge");
let saveButton = document.getElementById("saveButton");
let tbody = document.getElementById("tbody");
let searchInput = document.getElementById("searchInput");
const arr = [];

saveButton.addEventListener("click", () => {
  if (!inputName.value.trim() && !inputSurname.value.trim() && !inputAge.value.trim()) {
    return;
  }

  let new_tr_element = document.createElement("tr");

  let name_td = document.createElement("td");
  name_td.textContent = inputName.value;

  let surname_td = document.createElement("td");
  surname_td.textContent = inputSurname.value;

  let age_td = document.createElement("td");
  age_td.textContent = inputAge.value;

  let remove_button = document.createElement("button");
  remove_button.classList.add("remove");
  remove_button.textContent = "del";
  remove_button.addEventListener("click", () => {
    new_tr_element.remove();
  });

  new_tr_element.append(name_td, surname_td, age_td);
  age_td.append(remove_button);

  let people = {
    name: inputName.value,
    surname: inputSurname.value,
    age: inputAge.value,
  };
  arr.push(people);

  tbody.append(new_tr_element);
  resetInputs();
});

searchInput.addEventListener("keyup", () => {
  const searchInputValue = searchInput.value.trim().toLowerCase();
  Array.from(tbody.children).forEach((item) => {
    const name = item.children[0].textContent.trim().toLowerCase();
    const surname = item.children[1].textContent.trim().toLowerCase();
    const age = item.children[2].textContent.trim().toLowerCase();
    if (
      name.toLowerCase().startsWith(searchInputValue) ||
      surname.toLowerCase().startsWith(searchInputValue) ||
      age.toLowerCase().startsWith(searchInputValue)
    ) {
      item.style.display = "table-row";
    } else {
      item.style.display = "none";
    }
  });
});

function resetInputs() {
  inputName.value = "";
  inputSurname.value = "";
  inputAge.value = "";
}
