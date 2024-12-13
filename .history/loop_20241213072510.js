const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

let newFruits = [];
fruits.forEach((frutto) => {
  console.log(frutto + '!')
  newFruits.push(`${frutto}!`);
});

console.log(newFruits)