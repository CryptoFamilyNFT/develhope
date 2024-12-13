function nicknameMap(persons) {
  const newNickname = persons.map((user) => { // usato una costante divetta per dichiarare il nuovo array mappato
    if (!user.age || !user.name) return; // condizione per vedere che le chiavi ci siano
    return `${user.name}-${user.age}`
  })

  return newNickname
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);