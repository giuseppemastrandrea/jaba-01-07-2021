/*
let utente1Nome = prompt("inserisci il nome del primo utente: ")
let utente1Cognome =prompt("inserisci il Cognome del primo utente")
let utente1Email =prompt("inserisci l'email del primo utente")
let utente2Nome = prompt("inserisci il nome del secondo utente: ")
let utente2Cognome =prompt("inserisci il Cognome del secondo utente")
let utente2Email =prompt("inserisci l'email del secondo utente")
let utente3Nome = prompt("inserisci il nome del terzo utente: ")
let utente3Cognome =prompt("inserisci il Cognome del terzo utente")
let utente3Email =prompt("inserisci l'email del terzo utente")
*/

let utenti = []


for (let i = 0; i < 3;i++){
    let nome = prompt(`Inserisci il nome dell'utente ${i}`)
    let cognome = prompt(`Inserisci il cognome dell'utente ${i}`)
    let email = prompt(`Inserisci la mail dell'utente ${i}`)

    let user = {
        "nome" : nome,
        "cognome" : cognome,
        "email" : email,
    }

    utenti.push(user); // Aggiunge un elemento in coda ad un array
}

let lunghezzaUtenti = utenti.length
for (let i=0; i<lunghezzaUtenti; i++ ) {
    let utente = utenti[i]
    console.log(`Nome -> ${utente.nome}`)
    console.log(`Cognome -> ${utente.cognome}`)
    console.log(`E-mail -> ${utente.email}`)
}