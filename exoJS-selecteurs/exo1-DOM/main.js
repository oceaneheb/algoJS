// Modifier la taille de la police h1 en 14px
// Modifier le contenu du titre h1 par -> nouveau titre,
const titre = document.querySelector('h1');
titre.style.fontSize = "14px";
titre.innerText = "Nouveau Titre";

// Modifier la police de la div et du paragraphe en Arial
// Ajouter un margin top à la div de 30 px,
const div = document.querySelector('div');
div.style.fontFamily = "Arial";
div.style.marginTop = "30px";

// Modifier la couleur du texte du paragraphe en vert
// Modifier le contenu du paragraphe -> nouveau contenu du paragraphe
const p = document.querySelector('p');
p.style.color = "green";
p.textContent = "Nouveau contenu de paragraphe";
