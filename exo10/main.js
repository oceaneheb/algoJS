// Afficher un nombre aléatoire entre 0 et 100
let nombreADeviner = Math.floor(Math.random() * 101);
console.log(nombreADeviner);

// ----------- 1ère tentative ----------------

let tentatives = 0

for (let i=0; i<10; i++) {
    let votreNombre = parseInt(prompt("Quel est votre nombre ?"));
        if (isNaN(votreNombre)) {
            console.log("Erreur");
            i--;
        } else {
            if (votreNombre === nombreADeviner) {
                console.log(`Son entrainement acharné a payé, il a réussi en ${tentatives+1} tentatives`)
                break;
            } else if (votreNombre > nombreADeviner) {
                console.log("Plus petit");
                
            } else if (votreNombre < nombreADeviner) {
                console.log("Plus grand");
            }
        }
    tentatives ++;

    if (tentatives == 10) {
        console.log("il est un mauvais mentaliste et il va devoir changer de métier");
    }
}



// ------------- 2ème tentative -------------------

// let tentatives2 = 0;

// function isRight() {
//     if (votreNombre === nombreADeviner) {
//         return true;
//     }
// }

// function guess() {
//     for (let i=0; i<10; i++) {
//         let votreNombre = parseInt(prompt("Quel est votre nombre ?"));
//         if (isRight) {
//             tentatives2 ++;
//             console.log(`Vous avez gagné en ${tentatives2}`);
//             break;
//         } else if (votreNombre > nombreADeviner) {
//             console.log("Plus petit");
//             tentatives2 ++;
//         } else {
//             console.log("Plus grand");
//             tentatives2 ++;
//         }
//     }
//     console.log("Vous avez perdu")
// }

// guess();
