/*
* Quando abbiamo un form e l'utente clicca sul pulsante di submit
* viene scatenato l'evento "submit" che invia i dati al server.
*
* Con Javascript noi possiamo "inserisci" all'interno di questo evento
* e in caso determinate condizioni avvengano bloccare l'invio dei dati
*
* Ad esempio posso controllare che tutti i campi obbligatori siano stati
* correttamente compilati e in caso negativo bloccare l'invio dei dati
* e far apparire un messaggio di errore.
*
* */

/*
* Per prima cosa mi metto in ascolto dell'evento "load"
* */

window.addEventListener('load', function(event){
    let form = document.querySelector('#registrationForm')
    form.addEventListener('submit', function (event){
        /*
        console.log("chi ha generato l'evento ->")
        console.log( event.currentTarget)
        */



        /* La funzione event.preventDefault() fa in modo che NON
        * venga eseguito il comportamento di default (in questo caso l'invio
        * dei dati ) di un determinato evento.
        * */

        /* Qui potrei fare i controlli sui campi */
        /*
        * 1 - Andiamo a memorizzare i campi del form in un array (NodeList)
        * */
        let fields = form.querySelectorAll('.required');
        let formValido = true;

        // [input, input, input]
        /* 2a : controlliamo i campi con un ciclo for */
        /*
        for(let i = 0; i < fields.length; i++){
            let campo = fields[i]
            if(campo.value === ""){
                console.log(`TROVATO CAMPO VUOTO -> ${campo.name}`)
                formValido = false;
            }
        }
        */

        fields.forEach(function(el, i, ar){
            if(el.value === ""){
                console.log(`TROVATO CAMPO VUOTO -> ${el.name}`)
                formValido = false;
            }
        })


        let diversiDaCiccio = form.querySelectorAll('.differentFromCiccio')
        diversiDaCiccio.forEach(function(el, i, ar){
            if(el.value.toLowerCase() === "ciccio"){
                console.log(`TROVATO CAMPO UGUALE A CICCIO -> ${el.name}`)
                formValido = false;
            }
        })

        if(formValido === false){
            console.log("Ho trovato degli errori, quindi non invio il form")
            event.preventDefault()
        }



    })
})