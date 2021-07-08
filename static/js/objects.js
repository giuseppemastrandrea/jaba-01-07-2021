/*
	Un oggetto in Javascript è una collezione
	di coppie chiave/valore

	Un oggetto si crea utilizzando le parentesi
	graffe -> {}

	Le coppie chiave/valore sono scritte in questo modo:

	"chiave": "valore" 

	la chiave a sinistra dei : e il valore a destra dei :

	Se un oggetto ha più coppie chiave/valore al suo interno 
	queste coppie sono divise fra loro da una virgola

	Una chiave può essere sempre e solo una stringa. 
	Un valore può essere: 
	- una stringa
	- un numero
	- un booleano
	- un array
	- un oggetto

*/

let car = {
	"marca": "Ford",
	"modello": "Focus",
	"colors": [ "Blu", "Bianco", "Giallo", "Arancio" ], // colors è un array di stringhe
	"engine": {
		"cilindrata": 1.6,
		"n_cavalli": 125,
		"alimentazione": "diesel"
	}
}

/*
	Accedere ai campi di un oggetto
	- Dot notation: let m = car.marca -> in m ci sarà la stringa "Ford"
*/

console.log(`La marca dell'auto è ${car.marca}`)
console.log(`Il modello dell'auto è ${car.modello}`)
console.log("I colori dell'auto sono:")
for(let i = 0; i < car.colors.length; i++){
	console.log(car.colors[i])
}
console.log(`Il motore dell'auto è alimentato a ${car.engine.alimentazione}`)
console.log(`La cilindrata del motore è ${car.engine.cilindrata}`)

/*
	Object.keys(obj) restituisce un array che contiene le sole chiavi dell'oggetto
*/

let chiaviMotore = Object.keys(car.engine)
console.log(chiaviMotore)

/*
	- Brackets notation: let e = car['engine']
	Usiamo le parentesi quadre (come se avessimo un array) e all'interno delle
	parentesi mettiamo la chiave a cui vogliamo accedere sottoforma di stringa
*/

let e = car['engine']

for(let i = 0; i < chiaviMotore.length; i++){
	let k = chiaviMotore[i]
	console.log(`${k} -> ${e[k]}`)
}

let persons = [
	{ 
		"firstName": "Giuseppe", 
		"lastName": "Mastrandrea", 
		"birthday": "20/02/85",
		"emails": [
			"abc@def.it",
			"g.mastrandrea@accademiadellevante.org"
		]
	},
	{ 
		"firstName": "Pinco", 
		"lastName": "Pallino", 
		"birthday": "15/05/70",
		"emails": [
			"fgh@jkl.it",
			"p.pallino@accademiadellevante.org"
		] 
	},
	{ 
		"firstName": "Tizio", 
		"lastName": "Caio", 
		"birthday": "31/12/90" ,
		"emails": [
			"zxc@vbn.it",
			"t.caio@accademiadellevante.org",
			"tiziocaio@gmail.com"
		]
	},
]

persons.forEach(function(el, i, ar){
	console.log(`${el.firstName} ${el.lastName} nato il ${el.birthday}`)
	console.log("Email: ")
	el.emails.forEach(function(mail, index, emails){
		console.log(mail)
	})
	console.log("\n")
})

/* Cancellare un elemento da una certa posizione in un array */

/* es. vogliamo cancellare tutti gli utenti il cui cognome è "caio" dall'array persons*/

/* 2 modi:
- usare filter per sovrascrivere l'array persons (oppure per memorizzare tutto in un altro array)
*/

let personsSenzaCaio = persons.filter(function(el, i, ar){
	/*
	if(el.lastName.toLowerCase() === "caio"){
		return false
	}else return true
	*/
	return el.lastName.toLowerCase() !== "caio";
})


console.log(personsSenzaCaio)

/*
- usare il metodo .splice
	persons.splice(2, 1): 
	- in questo caso il 2 è l'indice dell'elemento che vogliamo eliminare
	- 1 rappresenta quanti oggetti vogliamo eliminare dopo quello con indice 2
*/

/*
	ESERCIZIO:
	1- partire dall'array "persons" che trovate in questo script
	2- chiedere in input all'utente una mail
	3- eliminare dall'array "persons" la persona in cui figura l'indirizzo mail inserito dall'utente
	4- stampare a console il nuovo array persons filtrato
*/

let mail = prompt("Inserisci una mail")

let filtrate = persons.filter(function(el, i, ar){
	for(let j = 0; j < el.emails.length ; j++){
		if(el.emails[j] === mail){
			return false
		}
	}
	return true;

	// Notazione equivalente più compatta 
	// return el.emails.indexOf(mail) === -1;
	/*
		mail è la mail inserita dall'utente
		el.emails è l'array delle mail presenti in ogni oggetto dell'array persons
		se "mail" è presente in el.emails 
			-> el.emails.indexOf(mail) restituirà un valore > -1
		se "mail" NON è presente in el.emails 
			-> el.emails.indexOf(mail) restituirà un valore pari a -1

		noi dobbiamo inserire nell'array "filtrate" SOLO le persone per cui vale
		la seconda condizione: el.emails.indexOf(mail) -> -1

	*/
})

console.log(filtrate)
