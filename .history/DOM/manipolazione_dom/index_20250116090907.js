const addProduct = () => {
    const $ul = document.querySelector("ul");
    const product = document.createElement("li");
    const $inputElement = document.querySelector("input");
    product.textContent = $inputElement.value;
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    const listItem = document.createElement("li");
    listItem.appendChild(newCheckbox);
    listItem.appendChild(document.createTextNode($inputElement.value));
    $ul.appendChild(listItem);
};
