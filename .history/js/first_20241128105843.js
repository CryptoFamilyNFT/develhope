
//creare un programma che determina il prezzo di un biglietto del cinema in base all'età utente, giorno e giorno della settimana applicando degli sconti! utilizziamo switch e operatore tarnario


let age = parseInt(prompt("Quanti anni hai?"));
let day = prompt("Per che giorno?");
let price;
let discount_perc;
let dayPrice;
alert("Il prezzo del biglietto è " + price + "€", "Sconto applicato: " + discount_perc + "%", "Prezzo di oggi: " + dayPrice + "€");

switch (day) {
    case "lunedi":
        discount_perc = age < 18 ? 20 : 40;
        dayPrice = 8;
        price = dayPrice - (dayPrice * discount_perc / 100);
        break;
    case "martedi":
        discount_perc = age < 18 ? 30 : 50;
        dayPrice = 17;
        price = dayPrice - (dayPrice * discount_perc / 100);
        break;
    case "mercoledi": 
        discount_perc = age < 18 ? 40 : 60;
        dayPrice = 10;
        price = dayPrice - (dayPrice * discount_perc / 100);
        break;
    case "giovedi":
        discount_perc = age < 18 ? 50 : 70;
        dayPrice = 12;
        price = dayPrice - (dayPrice * discount_perc / 100);
        break;
    case "venerdi":
        discount_perc = age < 18 ? 60 : 80;
        dayPrice = 15;
        price = dayPrice - (dayPrice * discount_perc / 100);
        break;
    case "sabato":
        discount_perc = age < 18 ? 70 : 90;
        dayPrice = 20;
        price = dayPrice - (dayPrice * discount_perc / 100);
        break;
    case "domenica":
        discount_perc = age < 18 ? 80 : 100;
        dayPrice = 25;
        price = dayPrice - (dayPrice * discount_perc / 100);
        break;
    default:
        price = "Non hai inserito un giorno valido";
        break;
}