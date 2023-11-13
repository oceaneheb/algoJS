let age = parseInt(prompt("Quel âge as-tu ?"));
switch (true) {
    case (age >=6 && age <= 7) : 
        console.log("Poussin");
        break;
    case (age >=8 && age <= 9) : 
        console.log("Pupille");
        break;
    case (age >=10 && age <= 11) : 
        console.log("Minime");
        break;
    case (age >=12) : 
        console.log("Cadet");
        break;
    default : 
        console.log("Hors catégorie ou trop jeune");
        break;
}