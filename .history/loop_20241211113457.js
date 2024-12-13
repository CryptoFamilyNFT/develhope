const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer' },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman' },
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer' },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer' },
];

function loopStudents() {
  students.forEach((student) => {
    console.log(student.name);
    if (student.hobby === 'gamer') {
      console.log('Life Is a Game, Play to Win!');
    } else if (student.hobby === 'sportsman') {
      console.log('Never give up!');
    } else if (student.hobby === 'photographer') {
      console.log('A picture is worth a thousand words!');
    }
  });
}

function youngestStudent() {
  let youngest = students[0];
  students.forEach((student) => {
    if (student.age < youngest.age) {
      youngest = student;
    }
  });
  console.log('Il più giovane è', youngest.name);
}

function longestSurname() {
  let longest = students[0];
  students.forEach((student) => {
    if (student.surname.length > longest.surname.length) {
      longest = student;
    }
  });
  console.log('Il cognome più lungo è', longest.surname);
}

// Aggiungi un nuovo studente al terzo posto dell'array
students.splice(2, 0, { id: 5, name: "Elena", surname: "Pappalardo", age: 23, hobby: 'photographer' });

// Esegui le funzioni
loopStudents();
youngestStudent();
longestSurname();
