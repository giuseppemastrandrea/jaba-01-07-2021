console.log(document.location.href);

console.log("Hello" + " world"); /*
+ concatena due stringhe se usato con due stringhe
l'operatore "+" se usato con due stringhe come operandi produce come risultato una terza stringa che è la concatenazione
delle due stringhe di partenza
*/


console.log(5 + 5); /*
+ somma gli operandi se usato con due numeri
*/

console.log(5 + "ciao")/*
se usato con una stringa ed un numero l'operatore "+" restituisce una stringa che è la concatenazione della stringa
originaria e della conversione del numer a stringa
*/
console.log(5 + parseInt("5"))  // -> Questo stamperà a console 10

parseInt("ciao") // -> questo sarà NaN (Not a Number), cioè un valore speciale di Javascript che non è utilizzabile come numero


parseInt("5.8") // -> questo sarà 5 e basta perchè parseInt tronca la sola parte intera