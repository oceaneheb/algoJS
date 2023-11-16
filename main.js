const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

// Créer le tableau tabData
let tabData = [];

// Ajouter les 3 constantes au tableau
tabData.push(usersHuman, usersPet, usersXeno);
console.log(tabData);

// Créer la fonction usersHumain 
function afficherHummain(personne) {
    console.log(`nom : ${personne.name}`);
    console.log(`email : ${personne.email}`);
    console.log(`age : ${personne.age}`);
}

afficherHummain(usersHuman[0]);

// Créer la fonction afficherAnimal
function afficherAnimal(animal) {
    console.log(`nom : ${animal.name}`);
    console.log(`espece : ${animal.espece}`);
    console.log(`age : ${animal.age}`);
    console.log(`propriétaire : ${animal.propriétaire}`);
}

afficherAnimal(usersPet[0]);

// Créer la fonction afficherXeno
function afficherXeno(xeno) {
    console.log(`nom : ${xeno.name}`);
    console.log(`espece : ${xeno.espece}`);
    console.log(`age : ${xeno.age}`);
    console.log(`niveau de menace : ${xeno.menace}`);
}

afficherXeno(usersXeno[0]);

// Créer la fonction profil
function profil(tableau) {
    for (let objet of tableau) {
        if (objet.type == "humain") {
            afficherHummain(objet);
        } else if (objet.type == "animal de compagnie") {
            afficherAnimal(objet);
        } else if (objet.type == "Xeno") {
            afficherXeno(objet);
        } else {
            console.log("Type de profil non existant");
        }
    }
}

// Appeler la fonction profil() sur chaque tableau
profil(usersHuman);
profil(usersPet);
profil(usersXeno);

// Créer la fonction profilAll()
function profilAll(grandTableau) {
    for (let tableau of grandTableau) {
        profil(tableau);
    }
}

// Appeler la fonction profilAll sur TabData
profilAll(tabData);