class Maison {
    constructor(nom, longueur, largeur, nbrEtage) {
        this.nom = nom,
        this.longueur = longueur,
        this.largeur = largeur,
        this.nbrEtage = nbrEtage
    }

    perimetre() {
        console.log(`Le périmètre de la maison est de : ${this.longueur + this.largeur * 2} mètres`);
    }

    surface() {
        console.log(`La surface de la maison est ${(this.longueur * this.largeur) * 3} m2`);
    }
}

const maison1 = new Maison("maison1", 15, 11, 3);
console.log(maison1);
maison1.perimetre();
maison1.surface();