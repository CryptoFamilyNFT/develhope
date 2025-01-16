const addProduct = () => {
    const $ul = document.querySelector("ul");
    const product = document.createElement("li");
    const $inputElement = document.querySelector("input");
    product.textContent = $inputElement.value;
    const newCheckbox = document.createElement("input-checkbox").innerHTML = `<input type="checkbox">${product}</input>`;
    $ul.appendChild(product);
};
