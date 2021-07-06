let myArray = [10, 20, 30, 40, 50]
let l = myArray.length

console.log(`L'array ${myArray} ha lunghezza ${l}`)
let index = 2;
// let index = parseInt(prompt("A quale elemento dell'array vuoi accedere?"))
/* assicuriamoci che contemporaneamente avvengano le due condizioni:
* - index sia un numero  -> isNaN(index) === false oppure !isNaN(index)
* - index sia compreso fra 0 e la lunghezza dell'array -> index >= 0 && index <= l
*
* if( (isNaN(index) === false ) && ( index >= 0 && index <= l) )
*
*/

let humanIndex = index - 1

console.log(`L'elemento con indice ${humanIndex} dell'array è ${myArray[humanIndex]}`)
/*
* Usando la notazione myArray[humanIndex] sto accedendo all'elemento con indice humanIndex dell'array
*
* Se inserisco un indice più grande della lunghezza max dell'array avrò un "undefined"
* */

console.log(`L'ultimo elemento dell'array è ${myArray[l - 1]}`)


/*
* Possiamo aggiungere elementi in coda ad un array:
* */
myArray.push(60); // il metodo "push" aggiunge un elemento in coda all'array
console.log(myArray) // -> [10, 20, 30, 40, 50, 60]
/* Dopo la push la myArray.length vale 6 */


/*
* Estrae l'ultimo elemento di un array. Restiuisce l'ultimo elemento
* */
let lastElement = myArray.pop(); // il metodo "pop" estrare l'elemento in coda all'array
console.log(myArray) // -> [10, 20, 30, 40, 50]
console.log(lastElement) // -> 60
/* Dopo la pop la myArray.length vale 5 */

/*
* Trovare l'indice di un certo elemento di un array
* */
let numIndex = myArray.indexOf(50); // in numIndex ci sarà l'indice dell'array in cui si trova il num. 50
console.log(`Il numero ${myArray[numIndex]} si trova in posizione ${numIndex}`)



/* Scorrere gli elementi di un array */


/* ciclo for */
for(let i = 0; i < myArray.length; i++){
    console.log(`Elemento con indice ${i} -> ${myArray[i]}`);
}

/* funzione forEach */
/*
* il forEach è un metodo che possiamo usare direttamente sull'array -> myArray.forEach()
* È una funzione come tutte le altre e come tutte le funzioni prende un argomento in ingresso:
* - una funzione di callback che prende 3 parametri:
*   - l'elemento dell'array
*   - l'indice dell'iterazione
*   - l'array originale
* La funzione di callback verrà eseguita PER OGNI (for each) elemento dell'array
* e volta per volta i parametri della callback verranno aggiornati
*
* let ar = [40, 20, 80]
* La funzione forEach verrà eseguita 3 volte e:
* - alla prima iterazione la terna di parametri della callback sarà 40, 0, [40, 20, 80]
* - alla seconda iterazione la terna di parametri della callback sarà 20, 1, [40, 20, 80]
* - alla terza iterazione la terna di parametri della callback sarà 80, 2, [40, 20, 80]
*
* */

/* myArray -> [10, 20, 30, 40, 50] */

function callback(element, indice, ar){
    console.log(element);
}
myArray.forEach(callback)

var ar = "CICICICICICICI"

function average(ar){
    let somma = 0
    /*
    callback con nome
    function sommaValori(element, indice, original){
        somma = somma + element;
    }
    ar.forEach(sommaValori)
    */

    /*
    callback anonima (cioè una funzione senza nome)
    ar.forEach(function(element, indice, original){
        somma = somma + element;
    })
    */

    for(let i = 0; i < ar.length; i++){
        somma = somma + ar[i]
    }

    let media = somma / ar.length
    return media;
}

console.log(`La media degli elementi di myArray è ${average(myArray)}`)

/*
* Filtrare gli elementi di un array:
* si fa con il metodo filter
* il metodo filter ha come argomento una callback con i soliti 3 argomenti di forEach
* es. vogliamo solo gli elementi dell'array myArray maggiori di 30
* */


let filtered = myArray.filter(function(element, index, originalArray){
    return element > 30;
})

/*
* La stessa cosa con un ciclo for:
* let filtered = []
* for(let i = 0; i < myArray.length; i++){
*   if(myArray[i] > 30 ){
*     filtered.push(myArray[i])
*   }
* }
*
* */

console.log(`Elementi maggiori di 30 -> ${filtered}`)
