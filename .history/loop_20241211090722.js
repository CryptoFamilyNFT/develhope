const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

Object.assign(student, { name: "John", surname: "Doe", age: 18 });

console.log(student);