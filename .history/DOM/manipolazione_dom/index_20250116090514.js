const addProduct = () => {
  () => {
    const $ul = document.querySelector("ul");
    const product = document.createElement("li");
    const $inputElement = document.querySelector("input");
    product.textContent = $inputElement.value;
    document.querySelector("ul").appendChild(product);
  }
};
