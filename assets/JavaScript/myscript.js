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
let userInfo_1 = prompt("scrivi il tuo nome");
let userInfo_2 = prompt("scrivi il tuo cognome");
let userInfo_3 = prompt("scrivi il tuo colore preferito");
let userInfo_4 = prompt("scrivi la tua età");

// Selezionare il tag Id nella pagina HTML in cui inserire il risultato 
let informationElement = document.getElementById("information");
console.log(informationElement);

// Scrivere in console dell'inspector il risultato
console.log (userInfo_1);
console.log (userInfo_2);
console.log (userInfo_3);
console.log (userInfo_4);

// Scrivere in pagina il risultato
informationElement.innerHTML = userInfo_1 + userInfo_2 + userInfo_3 + userInfo_4;

// Recuperare l'anno corrente
let currentYear = 2023;

// Sottrarre l'anno corrente agli anni dell'utente
let birthYear = currentYear - Number(userInfo_4);

// Scrivere in console dell'inspector il risultato
console.log(birthYear);

