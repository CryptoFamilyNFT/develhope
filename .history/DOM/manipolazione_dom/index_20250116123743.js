const addProduct = () => {
  const $ul = document.querySelector("ul"); 
  const $product = document.createElement("span"); 
  const $inputElement = document.querySelector("input"); 

  $product.textContent = $inputElement.value; 

  const newCheckbox = document.createElement("input"); 
  newCheckbox.type = "checkbox"; 

  const listItem = document.createElement("li"); 
  listItem.appendChild(newCheckbox);
  listItem.appendChild($product);

  $ul.appendChild(listItem);
};
