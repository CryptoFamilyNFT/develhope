const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

Object.assign(student, {personalData: {name: "John", surname: "Doe", age: 18 }});

console.log(student); // all student data
console.log(student.personalData); // all personalData student data