const addProduct = () => {
  console.log("addProduct function called");
    console.log("Inner function called");
    const $ul = document.querySelector("ul");
    console.log("Selected ul element:", $ul);
    const product = document.createElement("li");
    const $inputElement = document.querySelector("input");
    console.log("Selected input element:", $inputElement);
    product.textContent = $inputElement.value;
    console.log("Product text content set to:", product.textContent);
    $ul.appendChild(product);
    console.log("Product appended to ul");
};
