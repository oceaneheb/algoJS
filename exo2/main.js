let nombre = prompt("Saisir le nombre de notes");
let notes = [] 
for (let i = 0; i < nombre; i++) {
   let note = parseInt(prompt("saisir une note"));
   notes.push(note);
}

function moyenne(notes) {
    let sum = 0;
    for (let note of notes) {
        sum += note;
    }
    let moyenne = sum / notes.length;
    console.log(moyenne)
}

moyenne(notes);


// calculer la moyenne de notes et l'afficher dans la console 