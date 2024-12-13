const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

let removeLast;
if (names.includes('Giovanni')) {
  removeLast = names.pop();
}

names.push("Pippo")
names.unshift("Giovanni")

console.log(names)

