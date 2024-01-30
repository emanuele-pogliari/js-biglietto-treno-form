// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.

// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


let kilometers;
let age;

// a timeout of 200ms that will load js code after loading the page


document.getElementById("btn").addEventListener("click", function () {
    kilometers = document.getElementById("km").value;
    age = document.getElementById("age").value;

    let priceTicket = kilometers * 0.21;

    console.log(priceTicket);

    if (!isNaN(age) && !isNaN(kilometers) && (age > 0 && age < 110) && (kilometers > 0) && (age % 1 === 0 && kilometers % 1 === 0)) {
        if (age < 18) {
            priceTicket = priceTicket - (priceTicket / 100) * 20;
            document.getElementById("disc_applied").innerHTML = "20%"
        }
        if (age >= 65) {
            priceTicket = priceTicket - (priceTicket / 100) * 40;
            document.getElementById("disc_applied").innerHTML = "40%"
        }
        if (age >= 18 && age < 65) {
            document.getElementById("disc_applied").innerHTML = "Nessuno sconto applicabile"
        }
        document.getElementById("age_entered").innerHTML = `${age} anni`
        document.getElementById("km_run").innerHTML = `${kilometers} km`;
        document.getElementById("price").innerHTML = `${priceTicket.toFixed(2)} €`;
    } else {
        // create 2 variables that will have value equals to one when the condition are true.
        let check_age;
        let check_km;
        if (isNaN(age) || (age < 0 && age > 110) || (age % 1 != 0)) {
            document.getElementsByClassName("text_error")[0].innerHTML = "Hai inserito un valore non valido per l'età. Ricarica la pagina con un click sul bottone qui sotto";
            check_age = 1;
        }
        if (isNaN(kilometers) || kilometers < 0 || (kilometers % 1 != 0)) {
            document.getElementsByClassName("text_error")[0].innerHTML = "Hai inserito un valore non valido per i chilometri. Ricarica la pagina con un click sul bottone qui sotto";
            check_km = 1;
        }
        // if the sum of check variable are two, both condition are true, user insert some invalid information, therefore, the condition below will inform user of a double error input
        if (check_age + check_km === 2) {
            document.getElementsByClassName("text_error")[0].innerHTML = "Hai inserito un valore non valido per ETA' e KM. Ricarica la pagina con un click sul bottone qui sotto";
        }
        // this function will wait for a click from user on the reload button. When this button will be clicked, the page will reload.
        document.getElementsByClassName("btn_reload")[0].addEventListener("click", function () {
            window.location.reload();
        })
    }

})