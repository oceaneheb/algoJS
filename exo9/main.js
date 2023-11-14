let nombreChocolatine = parseInt(prompt("Combien voulez-vous de chocolatines ?"));
let prixChocolatine = 1.40;

if (nombreChocolatine <= 10) {
    console.log(`Le prix est de ${prixChocolatine * nombreChocolatine} €`);
} else if (nombreChocolatine > 10) {
    prixChocolatine = 1.30;
    console.log(`Le prix est de ${prixChocolatine * nombreChocolatine} €`);
} else {
    prixChocolatine = 1.20;
    console.log(`Le prix est de ${prixChocolatine * nombreChocolatine} €`);
}