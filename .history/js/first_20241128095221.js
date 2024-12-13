let _name;
let _surname = 'Rossi';

if (_name && _surname) {
    const fullname = `${_name} ${_surname}`
    console.log(fullname)
} else {
    //non rispetta la condizione perchè _name è undefined
    console.error("Fullname is invalid")
}