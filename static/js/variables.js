var testVariable;
console.log(typeof testVariable)

testVariable = "test";
console.log(typeof testVariable)

testVariable = 5.4;
console.log(typeof testVariable)

testVariable = {};
console.log(typeof testVariable)

testVariable = function(){}
console.log(typeof testVariable)

testVariable = Math.pow(5, 2) + (2+5)/3**2;
console.log(testVariable)

testVariable = "Math.pow(5, 2) + (2+5)/3**2 \t" + Math.pow(5, 2) + (2+5)/3**2 ;
/* \t è un carattere speciale che significa "dai una tabulazione di spazio" */
/* \n è un carattere speciale che significa "vai a capo" */

console.log(testVariable)


var a = 5;
var b = 10;

testVariable = a + b;
console.log(testVariable)

b = "ciao";
/*
non faccio assegnazione a testVariable quindi
 al suo interno rimane il valore calcolato alla riga 29 -> 15
 Un valore di una variabile contenente un dato primitivo rimane tale finchè non
 effettuiamo un'altra assegnazione
 */
console.log(testVariable)

var c = 3;
var d = c + b;
/*
* Quanto vale c? -> 3 (numero)
* Quanto vale b? -> "ciao" (stringa)
* d -> "3ciao"
* */
console.log(d)

var userInput = prompt("Scrivi un numero")
/* prompt è una funzione BLOCCANTE perchè interrompe l'esecuzione dello script
* L'esecuzione riprenderà quando l'utente premerà "annulla" o "ok"
* Se l'utente preme "annulla" nella variabile userInput avrò
* il valore speciale "null" altrimenti avrò la stringa contenente il messaggio inserito
*
* */
console.log(typeof userInput)


var userInput2 = prompt("Scrivi un altro numero")

console.log("L'utente ha inserito le parole " + userInput + "\t" + userInput2);

console.log("la somma dei due numeri inseriti dall'utente è")
console.log(parseFloat(userInput) + parseFloat(userInput2))
/*
*
* */


