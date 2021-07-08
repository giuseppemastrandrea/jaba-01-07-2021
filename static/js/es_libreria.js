let nomeLibro1 = {
    "titoloLibro" : "Il signore degli anelli",
    "autoriLibro" : ["JRR Tolkien"],
    "libroLetto" : true
}
let nomeLibro2 = {
    "titoloLibro" : "Racconti di Halloween",
    "autoriLibro" : ["Simenon", "Pasternak", "Pavese"],
    "libroLetto" : false
}
let nomeLibro3 = {
    "titoloLibro" : "Cronache di Poldo",
    "autoriLibro" : ["M. Sebastio", "Primo Levi", "G. Casazzo"],
    "libroLetto" : true
}
let nomeLibro4 = {
    "titoloLibro" : "I promessi sposi",
    "autoriLibro" : ["A. Manzoni", "D. Alighieri"],
    "libroLetto" : false
}
let nomeLibro5 = {
    "titoloLibro" : "1984",
    "autoriLibro" : [ "G. Orwell" ],
    "libroLetto" : false
}


let libreria =[nomeLibro1,nomeLibro2,nomeLibro3,nomeLibro4,nomeLibro5]
let lunghezzaLibri = libreria.length
let libriLetti = 0

for (let i=0; i<lunghezzaLibri; i++ ) {
    let libri = libreria[i]
    /*
    let giaLetto = prompt("hai già letto questo libro? y/n "+libri.titoloLibro);
    // Se l'utente ha letto il libro -> settiamo il flag libri.libroLetto a true
    if(giaLetto === "y"){
        libri.libroLetto = true
    }
    */

    console.log("Nome Romanzo: " + libri.titoloLibro.toLowerCase())
    console.log("Autori: ")
    libri.autoriLibro.forEach(function (el, i, ar) {
        console.log(el)
    })
    
    if(libri.libroLetto === true){
        console.log("Hai già letto questo libro")
        libriLetti = libriLetti + 1
    }

    console.log("\n")

}

let libriGiaLetti = libreria.filter(function(libro, indice, array){
    // if( libro.libroLetto === true){
    //    return libro
    // }
    // equivale a:
    return libro.libroLetto
})

console.log("Hai letto in tutto : " + libriLetti + " libri" )
console.log("Hai letto in tutto : " + libriGiaLetti.length + " libri" )