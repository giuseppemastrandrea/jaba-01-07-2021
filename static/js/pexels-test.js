// 1. Aggiungere un event hanlder alla load della pagina
// 2. Aggiungere un event handler alla submit del form
// 3. Fare un preventDefault dell'evento submit
// 4. Fare una richiesta alle API di Pexels
// 4a. utilizzare una API Key personale
// 4b. utilizzare la API Key personale come header HTTP
// 4c. utilizzare la stringa inserita dall'utente e passarla alle API di Pexels
// 4d. visualizzare i risultati o se non ci sono risultati un messaggio opportuno


/*
* Aggiungere un header di richiesta HTTP con fetch()
*
*
* queryUtente conterrà il valore del testo inserito dall'utente nel nostro campo di testo
*
*
let userQuery = document.querySelector("#query").value
let url = `https://api.pexels.com/v1/search?query=${userQuery}`
fetch(url, {
    headers: {
        "Authorization": "YOUR_API_KEY"
    }
}).then(
* function(response){
    return response.json() // Equivale alla JSON.parse() -> avverrà la conversione della risposta in oggetto
}).then(function(data){
    console.log(data)
    // Qui parte la renderizzazione delle singole foto.
})
*
* API KEY di Giuseppe: 563492ad6f917000010000013e9563b5ed6741308f14f257790502ba
*
*
* */


/*
* I tag <img> contenenti le immagini restituite da Pexels devono essere aggiunti "al volo" ogni volta che l'utente fa
* una ricerca e devono essere aggiunti all'elemento con id="risultati".
*
* Per aggiungere più elementi ad una pagina possiamo fare:
* let s = "<div class='myDiv'><img src=`${photo.src.medium}` /></div>"
* s = s + "<div class='myDiv'><img src=`${photo.src.medium}` /></div>"
* ...
* let el = document.querySelector("#risultati")
* el.innerHTML = s;
*
* OPPURE per ogni foto restituita da pexels
*
* let div = document.createElement("div")
* div.classList.add("myDiv") -> <div class="myDiv"></div>
*
* let img = document.createElement("img")
* img.src = photo.src.medium -> <img src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350" />
* div.appendChild(img) -> <div class="myDiv"><img src="..." /></div>
* let el = document.querySelector("#risultati")
* el.appendChild(div); -> aggiungiamo all'elemento con id="risultati" l'elemento con classe myDiv e con dentro l'img
*
* */



/*
* Documentazione delle API di Pexels da utilizzare:
* https://www.pexels.com/api/documentation/#photos-search
* Nel parametro "query" dovremmo mettere la stringa inserita dall'utente
*
* Esempio di risposta:
*
* {
  "total_results": 10000,
  "page": 1,
  "per_page": 1,
  "photos": [
    {
      "id": 3573351,
      "width": 3066,
      "height": 3968,
      "url": "https://www.pexels.com/photo/trees-during-day-3573351/",
      "photographer": "Lukas Rodriguez",
      "photographer_url": "https://www.pexels.com/@lukas-rodriguez-1845331",
      "photographer_id": 1845331,
      "avg_color": "#374824",
      "src": {
        "original": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png",
        "large2x": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "large": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940",
        "medium": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350",
        "small": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130",
        "portrait": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
        "landscape": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
        "tiny": "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
      },
      "liked": false
    }
  ],
  "next_page": "https://api.pexels.com/v1/search/?page=2&per_page=1&query=nature"
}
*
*
*
* */