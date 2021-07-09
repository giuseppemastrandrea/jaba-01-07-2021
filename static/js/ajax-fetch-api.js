window.addEventListener('load', function(){

    let link = document.querySelector('.pressMe')

    link.addEventListener('click', function(e){
        e.preventDefault()
        let s = '{"firstName": "Giuseppe", "lastName": "Mastrandrea"}'
        // Questa è una stringa contenente un oggetto JSON (JavaSript Object Notation)
        console.log(s, typeof s)
        // Esiste in Javascript la funzione JSON.parse() che prende in input una stringa e restituisce
        // un oggetto. Questa funzione funziona solo se la stringa è scritta "bene" cioè in formato JSON valido

        let person = JSON.parse(s) // da adesso in poi la variabile person sarà un oggetto
        console.log(person, typeof person)
        console.log(`buongiorno, mi chiamo ${person.firstName} ${person.lastName}` )

        let saluti = document.querySelector('.saluti');
        saluti.innerHTML = `buongiorno, mi chiamo ${person.firstName} ${person.lastName}`

    })

    let remoteLink = document.querySelector('.remoteLink')
    remoteLink.addEventListener('click', function(e){
        e.preventDefault()
        console.log('Carico da remoto un Joke...')

        /*
        * Per fare una richiesta ASINCRONA (cioè una richiesta che non ricarica tutta la pagina ma
        * ci restituisce solo dei dati) devo utilizzare la funzione javascript fetch()
        * */

        /* fetch prende come argomento l'URL a cui fare la richiesta HTTP */

        /* fetch("myurl").then(function(response){})
        * nella "then" ho una callback (cioè una funzione) che ha come argomento la risposta che mi arriva
        * dal server
        * */

        fetch("https://api.chucknorris.io/jokes/random").then(function(response){
            return response.json() // Equivale alla JSON.parse() -> avverrà la conversione della risposta in oggetto
        }).then(function(data){
            console.log(data)
            let msg = document.querySelector('.messaggioRemoto')
            msg.innerHTML = data.value
        })

    })

})