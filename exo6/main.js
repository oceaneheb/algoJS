let tableau = [];
// tableau.push(prompt("Quel est le nom de l'article ?"));
// tableau.push(parseInt(prompt("Prix de l'article (HT) : ")));
// tableau.push(parseInt(prompt("Quelle est la quantité ?")));

let nomArticle = prompt("Quel est le nom de l'article ?");;
let prixArticle = parseInt(prompt("Prix de l'article (HT) : "));
let quantityArticle = parseInt(prompt("Quelle est la quantité ?"));
tableau.push(nomArticle, prixArticle, quantityArticle);
console.log(tableau);

function prixTTC(article) {
    let prix = article[1] * 1.20 * article[2];
    let arrondi = prix.toFixed(2);
    console.log(`L'article est à ${arrondi} €`);
}

prixTTC(tableau);

// let prixTTC = (tableau[1]*1.20*tableau[2]).toFixed(2);

