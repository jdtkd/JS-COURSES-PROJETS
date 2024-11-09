const todolist = [];

function AddTodo() {
  const inputElement = document.querySelector(".js-name-input");
  console.log(inputElement.value);

  inputElement.value = "";
}
