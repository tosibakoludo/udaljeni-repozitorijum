document.getElementById("register").addEventListener("click", registruj);

function registruj() {
    let nizIspravno = [];

    let checkEmpty = new RegExp(/^$/);

    let password = document.getElementById("password").value;
    let checkPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-z])(?=.*[#$@!%&*?])(?=.*[0-9]).{8,}$/);

    if (checkEmpty.test(password)) {
        let text = "Polje lozinka je prazno.";
        document.getElementById("password-error").innerHTML = text;
    }
    else if (!checkPassword.test(password)) {
        let text = "Polje lozinka nije pravilno popunjeno.";
        document.getElementById("password-error").innerHTML = text;
    }
    else {
        document.getElementById("password-error").innerHTML = "";
        nizIspravno.push(password);
    }


    let jmbg = document.getElementById("jmbg").value;
    let checkJmbg = new RegExp(/^(0[1-9]|[12]\d|3[01])(0[1-9]|1[012])\d{9}$/);

    if (checkEmpty.test(jmbg)) {
        let text = "Polje JMBG je prazno.";
        document.getElementById("jmbg-error").innerHTML = text;
    }
    else if (!checkJmbg.test(jmbg)) {
        let text = "Polje JMBG nije pravilno popunjeno.";
        document.getElementById("jmbg-error").innerHTML = text;
    }
    else {
        document.getElementById("jmbg-error").innerHTML = "";
        nizIspravno.push(jmbg);
    }

    let ispis = "<ul>"
    for (let i = 0; i < nizIspravno.length; i++) {
        ispis += `<li>${nizIspravno[i]}</li>`
    }
    ispis += "</ul>"
    document.getElementById("feedback").innerHTML = ispis;
}