
// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. 
// Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.


function performOperation(a, b, callback) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        callback(new Error("I valori foniti non sono numbers"))
        return;
    }
    const sum = a + b
    callback(sum)
}

function displayResult(result) {
    console.log(result)
}

console.log(sum ? sum : 'sum is not defined')

performOperation(3, null, displayResult);

console.log("Il codice continua...")