const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

students.map((student) => {
  if (student.name !== "Giovanni") {
    return student;
  }
});

students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 })


console.log(students);