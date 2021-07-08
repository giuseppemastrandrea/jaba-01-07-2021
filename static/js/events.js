function apri(){
	let url = prompt("Inserisci un link")
	let link = document.querySelector(".link") // selettore CSS
	link.target = "_blank"
	link.href = url
}


let button = document.querySelector("#bottone")

/* 
addEventListener -> aggiunge un event handler ad un elemento 
chiamo la funzione addEventListener sull'oggetto html che scatena 
qualcosa

addEventListener accetta 2 argomenti:
- il nome dell'evento
- la funzione che gestirà l'evento (l'event handler)
*/
button.addEventListener('click', function(event){
	console.log("Event Handler 1")
	button.style.backgroundColor = "#000000"
})

button.addEventListener('click', function(event){
	console.log(event)
	console.log('Event Handler 2')
	button.style.color = "#ffffff"
})


window.addEventListener('scroll', function(){
	console.log('La pagina è stata completamente caricata')
})

console.log("Messaggio")
