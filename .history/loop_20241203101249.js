function sayHelloName(callback) {
    console.log("Hello");
    setTimeout(() => {
        callback();
    }, 1000);
}

let printName = function () {
    console.log("Giuseppe");
}

sayHelloName(printName);

