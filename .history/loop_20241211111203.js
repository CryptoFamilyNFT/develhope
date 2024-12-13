const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovann", surname: "Brambilla", age: 30 },
];

students.map((student) => {
  if (student.name !== "Giovanni") {
    console.log(student);
    return student;
  }
});