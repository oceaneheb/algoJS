// Créer un programme pour calculer l'IMC d'une personne

class Imc {
    constructor(nom, poids, taille) {
        this.nom = nom,
        this.poids = poids,
        this.taille = taille
    }

    calculImc() {
        let imc = this.poids / (this.taille ** 2);
        let arrondi = imc.toFixed(2);
        return arrondi;
    }

    display() {
        console.log(`${this.nom} pèse ${this.poids} kg, mesure ${this.taille} m et son IMC est de ${this.calculImc()}`);
    }

}

// Créer un tableau pour sauvegarder les personnes créées
let list = [];

// Ajouter les personnes au tableau
list.push(new Imc("Laure", 60, 1.70));
list.push(new Imc("Maxime", 50, 1.80));
console.log(list)

// Parcourir tout le tableau
for(let personne of list) {
    personne.display();
}

