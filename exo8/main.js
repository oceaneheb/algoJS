let valeurs = [];
let statut = true;
while(statut) {
    let message = prompt("Souhaitez-vous ajouter une valeur ? (OUI / NON)")
    if (message == "oui") {
        let valeur = parseInt(prompt("Saisir votre valeur : "));
        valeurs.push(valeur);
    } else {
        statut = false;
    }
}

console.log(valeurs);

let valeurs2 = [];
let valeursNegatives = 0;
let valeursPositives = 0;

for (let valeur of valeurs) {
    if (valeur < 0 ) {
        valeursNegatives ++;
        valeurs2.push(-(valeur));
    } else {
        valeursPositives ++;
        valeurs2.push(valeur);
    }
}

console.log(`Nombre de valeurs négatives : ${valeursNegatives}`, `Nombre de valeurs positives : ${valeursPositives}`);
console.log(`La valeur absolue est ${Math.max(...valeurs2)}`);


