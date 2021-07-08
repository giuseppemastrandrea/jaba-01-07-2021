let nomeLibro1 = {
    "titoloLibro" : "NomeRomanzo1",
    "autoriLibro" : ["AutoreN1, AutoreN2"],
    "libroLetto" : true
}
let nomeLibro2 = {
    "titoloLibro" : "NomeRomanzo2",
    "autoriLibro" : ["AutoreN1, AutoreN2"],
    "libroLetto" : true
}
let nomeLibro3 = {
    "titoloLibro" : "NomeRomanzo3",
    "autoriLibro" : ["AutoreN1, AutoreN2"],
    "libroLetto" : true
}
let nomeLibro4 = {
    "titoloLibro" : "NomeRomanzo4",
    "autoriLibro" : ["AutoreN1, AutoreN2"],
    "libroLetto" : true
}
let nomeLibro5 = {
    "titoloLibro" : "NomeRomanzo5",
    "autoriLibro" : ["AutoreN1, AutoreN2"],
    "libroLetto" : true
}

let myArray2 =[nomeLibro1,nomeLibro2,nomeLibro3,nomeLibro4,nomeLibro5]
let lunghezzaLibri = myArray2.length

let chiave = prompt(`Quali chiavi vuoi cancellare fra ${Object.keys(nomeLibro5)} ?`)

for (let i=0; i<lunghezzaLibri; i++ ) {
    let libri = myArray2[i]
    delete libri[chiave]
}

console.log(myArray2)