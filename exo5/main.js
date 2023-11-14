// ------------- 1ère correction ------------------

// Créer un tableau vide
let tableau = [];

// Enregistrer les mots dans un tableau
for (let i=0; i<3; i++) {
    let mot = prompt("Entrez un mot");
    tableau.push(mot);
}

//Cloner une variable -> spreadOperator
let tableau2 = [...tableau];
tableau2.sort();
console.log(tableau, tableau2);

for (let i=0; i<tableau2.length; i++) {
    if (tableau2[i] === tableau[i]) {
        console.log("Exact");
    } else {
        console.log("Faux");
    }
}

if (tableau2 === tableau) {
    console.log("Ordre alphabétique");
} else {
    console.log("Pas dans l'ordre alphabétique");
}

// -------------- 2ème correction ---------------

//Table ascii
// Récupération des mots 
let mot1 = prompt("Entrez votre mot 1");
let mot2 = prompt("Entrez votre mot 2");
let mot3 = prompt("Entrez votre mot 3");

//tester
if(mot1<=mot2 && mot2<=mot3) {
    console.log("Ordre alphabétique");
} else {
    console.log("Pas dans l'ordre");
}

