// Récupérer l'input de l'email et du password
const input_email = document.getElementById('email');
const input_password = document.getElementById("password");

// Déclarer les 2 variables qui correspondent au format accepté pour que l'email et le password soient valides
let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;


// Ajouter un écouteur d'événement sur email de type 'keyup' -> se lance dès qu'une touche n'est plus appuyée / Fonction fléchée  
input_email.addEventListener("keyup", () => {
    const email = document.getElementById('email').value;
    // test si email correspond au regexEmail
    if (email.match(regexEmail)){
        input_email.style.backgroundColor = "green";
    } else {
        input_email.style.backgroundColor = "red";
    }
})


// Ajouter un écouteur d'événement sur password de type 'blur' -> se déclenche quand le champs input n'est plus sélectionné
input_password.addEventListener("blur", function() { 
    if (input_password.value.match(regexPassword)) {
        input_password.style.backgroundColor = "green";
    } else {
        input_password.style.backgroundColor = "red";
    }
})  

// Correction bonus
// Récupérer le bouton "Se connecter"
const bt = document.getElementById('bt');
// Récupérer le paragraphe
const paragraphe = document.getElementById('error');

// Ajouter un événement clic sur le bouton
bt.addEventListener('click', () => {
    if (regexEmail.test(input_email.value) && regexPassword.test(input_password.value)) {
        paragraphe.textContent = "valide"
    } else {
        paragraphe.textContent = "invalide";
    }
})


// Expression régulière : chaîne qui décrit comment doit se comporter une valeur






