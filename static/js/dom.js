/*
	la funzione di document "querySelector"
	seleziona un (UNO E UNO SOLO) elemento e ci dà la possibilità di 
	assegnarlo ad una variabile javascript

	Come argomento di querySelector posso passare il selettore CSS
	dell'elemento che voglio selezionare
*/
// let title = document.querySelector("h1");

/*
	title rappresenta un oggetto contenente l'elemento HTML
	identificato dal selettore passato come argomento a 
	querySelector
*/

// title.style.color = "#987654" // Cambio il colore del testo dell'oggetto title
// title.textContent = "Titolo modificato"

let title = document.querySelector("#mainTitle")

title.style.color = "rgb(200, 100, 40)"


let p = document.querySelector(".paragraph");
/*
	Qui "p" conterrà solo il primo elemento trovato 
	nel documento che matcha il selettore ".paragraph"
*/
console.log(p)

let paragrafi = document.querySelectorAll("article .paragraph")
console.log(paragrafi)
/*
	querySelectorAll -> restituisce un insieme di elementi sottoforma di NodeList
	Qui "paragrafi" conterrà una NodeList, simile ad un array
	contenente tutti gli elementi del documento con classe "paragraph"
*/

for(let i = 0; i < paragrafi.length; i++){
	/* 
		background-image -> backgroundImage
		background-color -> backgroundColor 
	*/
	paragrafi[i].style.backgroundColor = "pink"
}

let collegamenti = document.querySelectorAll('.myLink');
console.log(collegamenti)

collegamenti.forEach(function(el, i, ar){
	console.log(el.href)
})


/*
	Posso accedere all'insieme di classi di un elemento
	tramite la proprietà "classList", che mi restituisce sempre
	un array
*/

collegamenti.forEach(function(el, i, ar){
	el.classList.forEach(function(className, index, classes){
		console.log(className)
	})
})

/*
	Manipolazione di classi:
	posso usare su classList i metodi:
	- add("miaClasse") -> aggiunge la classe "miaClasse" all'elemento
	- remove("miaClasse") -> rimuove la classe "miaClasse" dall'elemento
	- contains("miaClasse") -> restituisce true/false a seconda della presenza della classe "miaClasse" nell'elemento
*/


let immagine = document.querySelector("#image");
alert("CIAONE")
immagine.src = "https://images.pexels.com/photos/6739655/pexels-photo-6739655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"



