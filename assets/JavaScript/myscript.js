// Descrizione problema:

// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato, che va formattato in questo modo: nomecognomecolorepreferito23 Esempio: fabiopacificiblue23

// Strumenti:
// -   prompt per nome, cognome,
//     colore preferito dell'utente
// -   scrivere in console dell'inspector 
//     il risultato
// -   scrivere in pagina il risultato


// Pseudocodice:
// Chiedere all'utente il suo nome, cognome e colore preferito
let userInfo = prompt("scrivi il tuo nome, cognome e colore preferito");

// Selezionare il tag Id nella pagina HTML in cui inserire il risultato 
let informationElement = document.getElementById("information");
console.log(informationElement);

// Scrivere in console dell'inspector il risultato
console.log ("Il tuo nome, cognome e colore prefrito sono" + " " + userInfo);

// Scrivere in pagina il risultato
informationElement.innerHTML = userInfo;


