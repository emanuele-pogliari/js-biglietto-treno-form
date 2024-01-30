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
    console.log(priceTicket);
    console.log(age);
    console.log(kilometers);
    console.log(userName);

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
        if (isNaN(age) || (age < 0 && age > 110) || (age % 1 != 0)) {
            document.querySelector("#ticket").className = "d-none";
            check_age = 1;
        }

        if (isNaN(kilometers) || kilometers < 0 || (kilometers % 1 != 0)) {
            alert("Hai inserito un valore non valido per i chilometri. Ricarica la pagina con un click sul bottone annulla");
            check_km = 1;
        }
        // if the sum of check variable are two, both condition are true, user insert some invalid information, therefore, the condition below will inform user of a double error input
        if (check_age + check_km === 2) {
            alert("Hai inserito un valore non valido per ETA' e KM. Ricarica la pagina con un click sul bottone annulla");
        }
    }
})

document.getElementById("cancel").addEventListener("click", function () {
    window.location.reload();
})