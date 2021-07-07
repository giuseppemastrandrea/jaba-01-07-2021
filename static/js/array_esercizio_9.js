// 1. Creare un elenco di nomi in una struttura dati
// 2. Generare un array di 500 elementi ciascuno preso in maniera casuale dall'array precedente
// 3. Prendere in input uno dei nomi presenti nella lista utente
// 4. Contare quante volte il nome preso in input appare nella lista da 500 elementi

let names = ['Giuseppe', 'Filippo', 'Fabrizio', 'Paola', 'Emma', 'Nicola', 'Antonello', 'Giulia']
// names.length -> 8

let longAr = []

/* Usiamo il ciclo for per ciclare sui 500 elementi */
/* 2a
* Creiamo un array vuoto. Questo array vuoto sarà quello che al termine di questo punto
* avrà i 500 elementi
*
* 2b
* Cicliamo per 500 volte e ad ogni iterazione:
*     - per aggiungere un elemento all'array dobbiamo usare il metodo push()
*     -
*
*  */
function getRandomInt(max) {
    /* Genera un numero casuale intero compreso fra 0 e max - 1
    Ad es.
    let r = getRandomInt(10) -> r sarà un numero casuale compreso fra 0 e 9
    let q = getRandomInt(99) -> r sarà un numero casuale compreso fra 0 e 98
    */

    /*
    * Math.random() genera un numero casuale con la virgola compreso fra 0 e 1 (1 non incluso)
    * Quindi al max generemo un numero fra 0 e 0.9999999999....
    * Fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    *
    * Se noi calcoliamo il numero casuale generato da random e lo moltiplichiamo per un numero
    * (es. 5) otterremo un numero compreso nell'intervallo
    * 0 * 5 -> 0
    * 0.9999999 * 5 -> 4.99999999
    *
    * Se prendo solo la parte intera di questo numero (e posso farlo tramite le funzioni
    * Math.floor oppure parseInt) ottengo un numero compreso nell'intervallo:
    * 0 (parseInt(0) mi dà 0 così come Math.floor(0)
    * 4 (parseInt(4.99999999) mi dà 4 così come Math.floor(4.9999999)
    *
    * Quindi se passo a getRandomInt il parametro 5 riceverò in ritorno un numero casuale
    * compreso fra 0 e 4 (inclusi sia 0 sia 4) -> let random = getRandomInt(5)
    *
    * */
    return Math.floor(Math.random() * max);
}


for( let i = 0; i < 500 ; i++){

    /* Usiamo getRandomInt per generare casualmente l'indice dell'array dei nomi da cui
    andare a prendere il nome da inserire nell'array longAr
    */
    let index = getRandomInt(names.length); // In questo modo sto generando un numero fra 0 e 5
    longAr.push(names[index]) // longAr.push(names[2])
}
console.log(longAr)
// Creo un array di 500 elementi contenenti tutti la stringa "Fabrizio"

// Prendere in input uno dei nomi presenti nella lista utente

let name = prompt(`Inserisci uno dei nomi presenti nella lista ${names}`)

// Esercizio: verificare che la stringa passata dall'utente in input appartenga effettivamente
// ai nomi della lista

/* Contare quante volte il nome preso in input appare nella lista da 500 elementi */

/*
* Opzione 1. ciclo for
* - creo un contatore che inizialmente varrà 0
* - n. iterazioni: 500 (longAr.length)
* - devo fare un if. condizione da usare nell'if:
*     - longAr[i].toLowerCase() === name.toLowerCase()
*     - se questa condizione è vera -> incremento di 1 il contatore
* */

/*
* Opzione 2. ciclo while
* - creo una variabile i che inizialmente varrà 0 e che userò per ciclare sull'array longAr
* - creo un contatore che inizialmente varrà 0
* - nel ciclo devo fare un if. condizione da usare nell'if:
*     - longAr[i].toLowerCase() === name.toLowerCase()
*     - se questa condizione è vera -> incremento di 1 il contatore
* - sempre nel ciclo devo incrementare di 1 la variabile i che mi aiuta a tenere traccia del nuero di iterazioni
* - condizione di uscita del ciclo while -> i < 500
* */

/*
* Opzione 3. metodo .filter()
* - creo la funzione di callback che verrà passata al metodo filter
* - questa funzione avrà 3 parametri: element, index, originalArray
* - all'interno della callback devo fare un if. condizione da usare nell'if:
*     - element.toLowerCase() === name.toLowerCase()
*     - se questa condizione è vera -> return true
*     - altrimenti return false
* - la callback la passo a filter
* - il risultato del filter con questa callback sarà un array con tutti gli elementi che
* rispettano la condizione della callback
* - per sapere il numero esatto di occorenze di un nome nell'array mi basterà stampare
* a console la lunghezza dell'array ottenuto con filter
*
*
* */

function callback(element, index, originalArray){
    if(element.toLowerCase() === name.toLowerCase()) {
        return true
    }else {
        return false
    }
    /*
    * Per fare prima avrei anche potuto scrivere solo
    * return element.toLowerCase() === name.toLowerCase()
    * */
}
let filtrati = longAr.filter(callback)
console.log(`Il nome ${name} appare ${filtrati.length} volte`)