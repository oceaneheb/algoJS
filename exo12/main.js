let nombreDepart = parseInt(prompt("Quel est votre nombre ?"));
for (let i=1; i<11; i++) {
    let multiplication = nombreDepart * i;
    console.log(`${nombreDepart} x ${i} = ${multiplication}`)
}