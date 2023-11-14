// Tableau qui contient tous les utilisateurs
let users = [];
let tableauAge = [];

// Créer une boule qui demande de rentrer 5 utilisateurs avec nom, prénom et âge
for (let i=1; i<3; i++) {
    let user = [];
    let nom = prompt(`Saisir le nom du ${i} utilisateur`);
    let prenom = prompt(`Saisir le prénom du ${i} utilisateur`);
    let age = prompt (`Saisir l'âge du ${i} utilisateur`);
    user.push(nom, prenom, age)
    users.push(user);
    tableauAge.push(age)
}

console.log(users);
console.log(tableauAge)

// Afficher l'utilisateur le plus jeune 
// Trouver la valeur la plus petite dans le tableauAge
let minimumAge = Math.min(...tableauAge);
console.log(minimumAge);

for (let utilisateurs in users) {
    if (users[utilisateurs][2] == minimumAge) {
        console.log(`L'utilisateur le plus jeune est ${users[utilisateurs][0]} ${users[utilisateurs][1]}`);
    }
}
