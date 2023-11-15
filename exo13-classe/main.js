class Animal{
    //attributs
    espece;
    nbrPattes;
    age;
    taille;
    poid;
    couleur;
    //Constructeur
    constructor(newEspece, newNbrPattes, newTaille, newPoid){
        this.espece = newEspece;
        this.nbrPattes = newNbrPattes;
        this.taille = newTaille;
        this.poid = newPoid;
    }
    //méthode
    crier(){
        if(this.espece == "Tigre" || this.espece == "tigre"){
            console.log("Grrr");
        }
        if(this.espece == "Chat" || this.espece == "chat"){
            console.log("Miaou");
        }
        if(this.espece == "Chien" || this.espece == "chien"){
            console.log("Woiff");
        }
        if(this.espece == "Coq" || this.espece == "coq"){
            console.log("Cocorico");
        }
    }

    dormir() {
        console.log("Zzzz");
    }
}

const tigre = new Animal('tigre', 4, 150, 180);
const chat = new Animal('chat', 4, 30,4);
const chien = new Animal('chien', 4, 50, 9);
const coq = new Animal('coq', 2, 40, 3);
console.log(chien, coq);
tigre.crier();
chat.crier();
chien.crier();
coq.crier();
tigre.dormir();

