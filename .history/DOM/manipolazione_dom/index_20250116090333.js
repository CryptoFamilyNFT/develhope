const addProduct = () => {
  () => {
    const product = document.createElement("li");
    product.textContent = "Product";
    document.querySelector("ul").appendChild(product);
  }
};
