function areaRettangolo(base, altezza){
    /*
    * esiste una variabile base con scope globale ma non è un problema all'interno
    * di questa funzione perchè lo scope locale vince su quello globale, quindi
    * in questa funzione "base" sarà il valore in input, non il valore globale pari a 100.
    * */

    console.log(b); // b è una variabile globale
    var area = base * altezza; // Questa istruzione verrà eseguita correttamente perchè b ha scope globale
    return area;
}

var base = 100;

console.log(base);

var b = prompt("Inserisci una base")
var h = prompt("Inserisci un'altezza")

// console.log("Il rettangolo di base " + b + " e altezza " + h + " ha area " + areaRettangolo(b, h))
console.log(`Il rettangolo di base ${b} e altezza ${h} ha area ${areaRettangolo(b, h)}`)

// console.log(altezza) // Questa istruzione risulterà in un errore perchè base ha scope locale in areaRettangolo

/*
* b e h sono variabili GLOBALI, cioè possono essere usate all'interno di tutto il mio script
* senza problemi. Quindi se provo a stampare a console b nella funzione vedrò il suo valore.
*
* al contrario base e altezza sono variabili definite nella funzione areaRettangolo e
* utilizzabili solo all'interno della funzione.
*
* Lo scope è l'ambito di definizione di una variabile.
*
* SCOPE GLOBALE -> le variabili globali hanno scope globale (possono cioè essere utilizzate
* in quasliasi punto dello script)
*
* SCOPE LOCALE -> le variabili locali hanno scope locale (possono essere utilizzate solo
* nel blocco di codice in cui sono definite, ad esempio variabili locali ad una funzione)
*
* */


