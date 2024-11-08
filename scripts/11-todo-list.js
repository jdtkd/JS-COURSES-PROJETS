const todolist = [];

function AddTodo() {
  const inputElement = document.querySelector(".js-name-input");
  //met la valeur saisie dans le input element dans la variable 'name'
  const name = inputElement.value;
  console.log(name);
       
  //ajoute les valeurs saisie et recuper dans la variable 'name' et mis dans le tableau "todolist"

  todolist.push(name);

  //Dés que la valeur est saisie l'espace de saisie devient vide  ou encore

  inputElement.value = "";
}
