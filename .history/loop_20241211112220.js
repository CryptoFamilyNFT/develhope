const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

let names_separated = "";

for (let _name of names) {
  names_separated += `${_name}-`;
}

console.log(names_separated.slice(0, -1)); // Rimuove l'ultimo trattino