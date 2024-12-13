function canPlay() {
    let sport = "Football";
    let personName; // dichiaro la variabile personName come undefined

    if (Boolean(sport) === true) {
        /*
        se sport non è una stringa vuota vado a popolare personName con il valore "Cosimo"
        */
      personName = "Cosimo";
    }
  
    console.log(personName + sport);
}

canPlay() // va chiamata la funzione per poterla eseguire