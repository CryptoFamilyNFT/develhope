const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

let removeLast;
if (names.includes('Giovanni')) {
  removeLast = names.pop();
}

console.log(names, removeLast)