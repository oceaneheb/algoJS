const button = document.querySelector('button');
button.addEventListener("click", calculer());

function calculer() {
    var quantite = parseInt(document.getElementById('quantite').value);
    var somme = 0;
    let prixChocolatine = 0;
    if (quantite <= 10) {
        prixChocolatine = 1.4;
        somme = prixChocolatine * quantite;
        document.getElementById('resultat').textContent = `Le montant à payer est de ${somme} €`;
    } else if (quantite > 10 && quantite < 20) {
        prixChocolatine = 1.30;
        somme = prixChocolatine * quantite;
        document.getElementById('resultat').textContent = `Le montant à payer est de ${somme} €`;
    } else {
        prixChocolatine = 1.20;
        somme = prixChocolatine * quantite;
        document.getElementById('resultat').textContent = `Le montant à payer est de ${somme} €`;
    }
}
