const addProduct = () => {
  const $ul = document.querySelector("ul"); // seleziono l'elemento ul
  const $product = document.createElement("li"); // creo un elemento li
  const $inputElement = document.querySelector("input"); // seleziono l'elemento input
  
  $product.textContent = $inputElement.value; // inserisco il valore dell'input utent nell'elemento li

  const newCheckbox = document.createElement("input"); // creo un elemento input per il checkbox
  newCheckbox.type = "checkbox"; // setto il tipo dell'input a checkbox

  const listItem = document.createElement("li"); // creo un elemento li
  listItem.appendChild(newCheckbox); // inserisco il checkbox nell'elemento li
  listItem.appendChild(document.createTextNode($inputElement.value)); // inserisco il valore dell'input utente nell'elemento li

  $ul.appendChild(listItem); // inserisco l'elemento li nell'elemento ul
};
