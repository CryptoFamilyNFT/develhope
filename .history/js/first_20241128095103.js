let _name;
let _surname = 'Rossi';

if (_name && _surname) {
    const fullname = `${_name} ${_surname}`
    console.log(fullname)
} else {
    console.error("Fullname is invalid")
}