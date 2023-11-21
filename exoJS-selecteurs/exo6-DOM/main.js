// 1. Créer une fonction addTask qui va ajouter à chaque clic sur le bouton une nouvelle tache à la div (id = task),
// - Récupérer la div (tasks)
// - Récupérer la valeur de l'input (id task)
// - Créer un paragraphe
// - Ajouter la valeur de l'input (id task)  au paragraphe
// - Ajouter le paragraphe à la div (id = tasks)


const div = document.getElementById('tasks');

const btn_add = document.getElementById('add');

btn_add.addEventListener("click", () => {
    const task = document.getElementById('task').value;
    if (task != "") {
    const paragraphe = document.createElement('p'); //créer un élément p dans une variable
    paragraphe.textContent = task; //remplacer le contenu du paragraphe créé par la tâche
    div.appendChild(paragraphe); //ajouter un paragraphe dans la div 'Tasks'
    }
})


// 2. Créer une fonction delAllTask qui va à chaque clic sur le bouton supprimer tous les enfants (child) contenu dans la div (tasks),

const btn_delAllTask = document.getElementById('delAllTask');

btn_delAllTask.addEventListener("click", () => {
    //Tant qu'il y a un premier enfant alors on supprime
    while(div.firstChild) {
        div.firstChild.remove();
    }
})


// 3. Créer une fonction reload qui va à chaque clic sur le bouton recharger la page.
const btn_reload = document.getElementById("reload");

btn_reload.addEventListener("click", () => {
    location.reload();
})

// Bonus :
// 1. Dans la fonction addTask (remplacer le code précédent) :
// A chaque clic sur la fonction : 
//       -ajouter une div (class = container),
//           -> à l'intérieur de la div pour aller ajouter un paragraphe,
//           -> récupérer le contenu de l'input texte (task) et passer la valeur au paragraphe,
//           -> ajouter un bouton (id = delete, onclick = deleteTask(this),
//           -> ajouter un bouton (id = update, onclick = updateTask(this),
//           ->Ajouter une fonction deleteTask qui va :
//              Supprimer la tache sélectionnée,
//           -Ajouter une fonction updateTask qui va :
//             Mettre à jour le nom de la tache depuis l'input du formulaire (id = task)
// NB : on à besoin d'utiliser la création d'élément (createElement() et appendChild())

