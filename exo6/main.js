let tableau = [];
// tableau.push[0] = prompt("Quel est le nom de l'article ?");
// tableau.push[1] = parseInt(prompt("Prix de l'article (HT) : "));
// tableau.push[2] = parseInt(prompt("Quelle est la quantité ?"));

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

