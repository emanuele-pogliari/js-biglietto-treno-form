document.getElementById("genera").addEventListener("click", function () {

    let kilometers;
    let age;
    let userName;

    userName = document.getElementById("inputName").value;
    kilometers = document.getElementById("inputKm").value;
    age = document.getElementById("inputAge").value;

    kilometers = Number(kilometers);
    age = Number(age);
    let priceTicket = kilometers * 0.21;

    if (!isNaN(age) && !isNaN(kilometers) && (age > 0 && age < 110) && (kilometers > 0) && (age % 1 === 0 && kilometers % 1 === 0)) {
        if (age < 18) {
            priceTicket = priceTicket - (priceTicket / 100) * 20;
        }
        if (age >= 65) {
            priceTicket = priceTicket - (priceTicket / 100) * 40;
        }
        document.getElementById("user").innerHTML = userName;
        document.getElementById("cost").innerHTML = `${priceTicket.toFixed(2)} €`;
    } else {
        // create 2 variables that will have value equals to one when the condition are true.
        let check_age;
        let check_km;
        document.getElementById("ticket").style.display = "none"

        document.getElementById("error").style.display = "block";
        document.getElementById("error-cont").style.display = "block";

        if (isNaN(age) || (age < 0 && age > 110) || (age % 1 != 0)) {
            check_age = 1;
            document.getElementById("error").innerText = "Hai inserito un valore non valido per l'età. Ricarica la pagina con un click sul bottone annulla";
        }

        if (isNaN(kilometers) || kilometers < 0 || (kilometers % 1 != 0)) {
            document.getElementById("error").innerHTML = "Hai inserito un valore non valido per i chilometri. Ricarica la pagina con un click sul bottone annulla";
            check_km = 1;
        }
        // if the sum of check variable are two, both condition are true, user insert some invalid information, therefore, the condition below will inform user of a double error input
        if (check_age + check_km === 2) {
            document.getElementById("error").innerHTML = "Hai inserito un valore non valido per ETA' e KM. Ricarica la pagina con un click sul bottone annulla";
        }
    }
})

document.getElementById("cancel").addEventListener("click", function () {
    window.location.reload();
})