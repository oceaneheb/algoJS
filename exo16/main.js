class Vehicule {
    constructor(nom, couleur, nbrRoue, vitesse) {
        this.nom = nom,
        this.couleur = couleur,
        this.nbrRoue = nbrRoue,
        this.vitesse = vitesse
    }

    detect() {
        if (this.nbrRoue == 4) {
            return "voiture";
        } else if (this.nbrRoue == 2) {
            return "moto";
        } else {
            return "Autre véhicule";
        }
    }

    boost() {
        this.vitesse += 50;
    }

    plusRapide(object) {
        if (this.vitesse > object.vitesse) {
            return `Le véhicule le plus rapide est : ${this.nom}`;
        } else if (this.vitesse < object.vitesse) {
            return `Le véhicule le plus rapide est : ${object.nom}`
        } else {
            return "Les deux véhicules ont la même vitesse";
        }
    }
}
const voiture = new Vehicule("Mercedes CLK", null, 4, 250);
const moto = new Vehicule("Honda CBR", null, 2, 280);

console.log(voiture.detect());
console.log(moto.detect());
voiture.boost();
console.log(voiture.vitesse);