const todolist = [];

function AddTodo() {
  const inputElement = document.querySelector(".js-name-input");
  //met la valeur saisie dans le input element dans la variable 'name'

  const name = inputElement.value;
  
  //ajoute les valeurs saisie et recuper dans la variable 'name' et mis dans le tableau "todolist"

  todolist.push(name);

  //vide le input pour la prochaine saisie

  inputElement.value = "";
}
