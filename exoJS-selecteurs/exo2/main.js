const user = {
    'id' : 1,
    'nom': 'hebrard',
    'prenom': 'oceane',
    'age': '23',
    'image' :'logo.png'
  }

// Ajouter un attribut id à la div qui va avoir en valeur -> (user.id),
const div = document.querySelector('div');
div.setAttribute("id", user.id);

// 1ère méthode
console.log(document.querySelectorAll("p"));
//Remplacer le contenu des 3 paragraphes par les valeurs user.nom, user.prenom et user.age,
const p1 = document.querySelector("div > img + p");
console.log(p1);
p1.textContent = user.nom;
const p2 = document.querySelector("div > p:nth-child(3)");
console.log(p2);
p2.textContent = user.prenom;
const p3 = document.querySelector("div > p:last-child");
console.log(p3);
p3.textContent = user.age;

// 2ème méthode
// var all_elems = document.getElementsByTagName("p");
// for (let i=0; i<all_elems.length; i++) {
//     all_elems[i].textContent = user[i+1];
// }

// var all_elems = document.querySelectorAll("p");
// for (let i=0; i<all_elems.length; i++) {
//     all_elems[i].createTextNode(user[i+1]);
// }

// div.firstChild.textContent = "Bonjour les terriens";


// Remplacer l'image par l'url contenu dans user.image
var image = document.querySelector("img");
console.log(image);
image.setAttribute("src", user.image);


// Mettre en forme en JS les éléments suivants :

// paragraphe nom, prenom, age : police taille 20 px, couleur blue
let all_paragraphe = document.querySelectorAll("p");
for (let i=0; i<all_paragraphe.length; i++) {
    all_paragraphe[i].style.color = "blue";
    all_paragraphe[i].style.fontSize = "20px";
}

// taille de l'image : 100 px de large et 100 px de long
image.style.width = "100px";
image.style.height = "100px";

// Aligner l'image à en haut à droite et ajouter un margin de 10 px.
image.style.margin = "10px";
image.style.float = "right";

// remplacer la couleur de fond de la div : rgb(220, 220, 220)
div.style.backgroundColor = "rgb(220, 220, 220)";

// NB : pour remplacer le contenu text d'un élément HTML, utilisez textContent






