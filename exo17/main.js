// Créer une classe Personnage qui va contenir les éléments suivants :
// -nom, force, défense, vie
// -une méthode pour attaquer (elle va soustraire à la vie du personnage la valeur de attaque (attaquant) à la défense (notre personnage),
// Créer une classe Combat qui  va contenir les éléments suivants :
// -nbr de tour, score joueur 1, score joueur 2,
// -Une méthode qui va lancer les combats (elle va appeler la méthode attaque du joueur 1), (appeler la méthode d'attaque du joueur 2). 
// Cela va s'exécuter autant de tour que la valeur nbr de tour. 
// Celui qui arrive à zéro à perdu.
// Ella va afficher le nom du gagnant.

class Personnage {
    constructor(nom,force, defense, vie) {
        this.nom = nom;
        this.force = force;
        this.defense = defense;
        this.vie = vie;
    }

    attaquer(joueur) {
        joueur.vie = joueur.vie - (this.force - joueur.defense);
    }
}

// Instancier les 2 personnages
const joueur1 = new Personnage("Harry", 2, 5, 15);
const joueur2 = new Personnage("Logan", 2, 5, 15);
joueur1.attaquer(joueur2);
console.log(joueur2);

// Créer la classe combat
class Combat {
    // Attributs
    nbrTour;
    static scoreJoueur1 = 0; //utilisable uniquement par la classe et pas par l'Objet
    static scoreJoueur2 = 0;

    constructor(joueur1, joueur2, nbrTour) {
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.nbrTour = nbrTour;
    }

    // Méthodes
    lancerCombat() {
        for (let i=0; i<this.nbrTour; i++) {
            console.log(`Tour n° ${i+1}`);
            this.joueur1.attaquer(this.joueur2);
            this.joueur2.attaquer(this.joueur1);
            if (this.joueur1.vie <= 0) {
                console.log("Le gagnant est joueur2");
                Combat.scoreJoueur2++;
                break;
            } else if (this.joueur2.vie <= 0) {
                console.log("Le gagnant est joueur1");
                Combat.scoreJoueur1++;
                break;
            } 
        }
        if (this.joueur1.vie > 0 && this.joueur2.vie > 0) {
            console.log("Egalité")
        } 
    }
}

// Instancier la classe Combat
let combat1 = new Combat(joueur1, joueur2, 10);
combat1.lancerCombat();