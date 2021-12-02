// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

let name = prompt("Qual è il tuo nome?");
let surname = prompt("Qual è il tuo cognome?");
let color = prompt("Qual è il tuo colore preferito?");

document.getElementById("output").innerHTML = name + surname + color + 21;