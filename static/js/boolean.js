var a = 10;
var b = 12;

console.log(`a -> ${a} \nb -> ${b}`)


var ris1 = a > b; // Maggioranza stretta
console.log(`a è maggiore di b ? ${ris1}`); // console.log('a > b ? ' + ris1)


var ris2 = a < b; // Minoranza stretta
console.log(`a è minore di b ? ${ris2}`);

var ris3 = a >= b; // Maggiore o uguale
console.log(`a è maggiore o uguale di b ? ${ris3}`);

var ris4 = a <= b; // Minore o uguale
console.log(`a è minore o uguale di b ? ${ris4}`);

var ris5 = a == b; // Uguaglianza "debole"
console.log(`a è uguale a b ? ${ris5}`);

/*
* L'operatore di uguaglianza identificato con == si chiama uguaglianza "debole":
* se i due operandi sono di tipi diversi JS prima di fare il confronto vero e proprio
* fa una conversione per uniformare il tipo di dato.
*
* Cioè se io ho:
* - una variabile a = "10" (typeof a -> string)
* - una variabile b = 10 (typeof b -> number)
* a == b -> restituirà true
*
* JS confronta solo il valore
*
* */

var ris5 = a === b; // Uguaglianza "forte"
console.log(`a è uguale a b ? ${ris5}`);
/*
* L'uguaglianza === è forte perchè non effettua la conversione.
* JS in questo caso confronta il valore e anche il tipo di dato.
* Cioè se io ho:
* - una variabile a = "10" (typeof a -> string)
* - una variabile b = 10 (typeof b -> number)
* a === b -> restituirà false
* */

var ris6 = a !== b; // Disuguaglianza "forte"
console.log(`a è diverso da b ? ${ris6}`);


