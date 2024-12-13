const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

let removeLast;
if (names.includes('Giovanni')) {
  removeLast = names.pop();
}

names.push("Pippo")

console.log(names)

