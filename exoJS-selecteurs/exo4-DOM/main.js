function calculer() {
    // récupérer la valeur stockée dans l'input prixHT
    const prixHT = parseInt(document.getElementById('prixHT').value);
    // récupérer la valeur stockée dans l'input quantite
    const quantite = parseInt(document.getElementById('quantite').value);
    const resultat = document.getElementById('resultat');
    let total = 0;
    if (quantite < 0 || prixHT < 0) {
        total = "Veuillez saisir une valeur positive";
    } else {
        total = ((prixHT + ((prixHT * 20)/100)) * quantite);
    };
    resultat.textContent = !isNaN(total)?`Le prix total est de ${total.toFixed(2)} €`:total;
}

const button_calculer = document.querySelector('button');
button_calculer.addEventListener("click", calculer);