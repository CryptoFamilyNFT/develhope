function sayHelloName(callback) {
    console.log("Hello");
    callback();
}

let printName = function () {
    console.log("Giuseppe");
}

sayHelloName(printName);