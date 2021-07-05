/*
* Scriviamo una funzione che ci dice se un numero è positivo o negativo
*
* - in input: il numero da verificare
* - in output: booleano (true/false)
* - algoritmo:
*    se il numero in input è maggiore o uguale a zero ritorna true
*    altrimenti ritorna false
* */

function isPositive(num){
    /*
    var result = num >= 0;
    if( result === true ){ // È vero che l'operazione num >= 0 mi ha dato true?
        return true;
    }else{
        return false;
    }
    */

    /*
    var result = num >= 0;
    if(result){// Il risultato di num >= 0 è true ? Posso scrivere questa cosa perchè in result c'è già un booleano
        return true
    }else{
        return false;
    }
    */

    if(num >= 0){ // Non uso una variabile "terza" ma scrivo direttamente l'espressione di confronto nella condizione dell'if
        return true;
    }else{
        return false;
    }

    /*
    In questo caso avremmo potuto persino evitare di usare l'if
    return num >= 0;
    */
}

var n = prompt("Inserisci il numero")
console.log(`Il numero ${n} è positivo ? ${isPositive(n)}`)