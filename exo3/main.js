let nombre1 = parseInt(prompt("Entrez votre premier nombre : "));
let nombre2 = parseInt(prompt("Entrez votre deuxième nombre :"));

if ((nombre1 >0 && nombre2 >= 0) || (nombre1 <0 && nombre2 <0)) {
    console.log("C'est positif");
} else {
    console.log("C'est négatif")
}