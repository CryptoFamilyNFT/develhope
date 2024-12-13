const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer' },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman' },
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer' },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer' },
];


/*
Creare una funzione che passi in rassegna 
gli elementi dell'array e produca il seguente output:

Luca
Life Is a Game, Play to Win!
Mario
Never give up!
Giovanna
Life Is a Game, Play to Win!
Carmelo
A picture is worth a thousand words!
Il più giovane è Carmelo
Il cognome più lungo è Brambilla

Poi aggiungi un nuovo studente al terzo posto dell'array:

{ id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer'}

e riesegui la funzione. Dovesti ottenere il seguente output:

Luca
Life Is a Game, Play to Win!
Mario
Never give up!
Elena
A picture is worth a thousand words!
Giovanna
Life Is a Game, Play to Win!
Carmelo
A picture is worth a thousand words!
Il più giovane è Carmelo
Il cognome più lungo è Pappalardo

Ogni motto è associato all'hobby dello studente.
E' possibile creare diverse funzioni che si occupino ognuna di un task diverso e richiamarle tutte dentro la funzione padre.
Il console.log può stampare una combinazione di stringa e variabile ( es: console.log('Ciao', name) ).

*/

function loopStudents(students) {
  students.forEach((student) => {
    console.log(student.name)
    if (student.hobby === 'gamer') {
      console.log('Life Is a Game, Play to Win!')
    } else if (student.hobby === 'sportsman') {
      console.log('Never give up!')
    } else if (student.hobby === 'photographer') {
      console.log('A picture is worth a thousand words!')
    }
  })
}

function youngestStudent(students) {
  let youngest = students[0]
  students.forEach((student) => {
    if (student.age < youngest.age) {
      youngest = student
    }
  })
  console.log('Il più giovane è', youngest.name)
}

function longestSurname(students) {
  let longest = students[0]
  students.forEach((student) => {
    if (student.surname.length > longest.surname.length) {
      longest = student
    }
  })
  console.log('Il cognome più lungo è', longest.surname)
}


console.log("Functions: ", loopStudents(students), youngestStudent(), longestSurname())