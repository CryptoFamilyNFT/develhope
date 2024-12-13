
//creare un programma che determina il prezzo di un biglietto del cinema in base all'età utente, giorno e giorno della settimana applicando degli sconti! utilizziamo switch e operatore tarnario


let age = parseInt(prompt("Quanti anni hai?"));
let day = prompt("Che giorno è oggi?");
let price;

switch (day) {
    case "lunedi":
        const discount_perc = age < 18 ? 20 : 40;
        const dayPrice = 8;
        price = dayPrice - (dayPrice * discount_perc / 100);
        break;
}