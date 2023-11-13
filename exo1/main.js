var tableau = [];

var btn = document.querySelector("#bt");
btn.addEventListener("click", uptadeArray);

function uptadeArray() {
    var input = document.getElementById("name").value;
    tableau.push(input);
    console.log(tableau)
}

