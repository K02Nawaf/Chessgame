"use strict";
let Start = document.getElementById("")
let Arrival = document.getElementById("")
let myDiv = "";
function play(s, a) {
    // console.log("Debut");
    // Récupérer la case d2
    Start = document.getElementById(s);

    // console.log(Start);
    // Sauvegarder le texte de la case d2
    myDiv = Start.innerHTML;
    // console.log(myDiv);
    // Récuperer la case d4
    Arrival = document.getElementById(a);
    Arrival.classList.add('arrivalCommit');
    // console.log(Arrival);
    // Ecrir le texte sauvegardé en d4
    Arrival.innerHTML = myDiv;

    // console.log(Arrival);
    // Effacer le texte de la case d2
    Start.innerHTML = "";
    Start.classList.remove('selected');
    Start.classList.remove('arrivalCommit');
    Start.classList.remove('arrival');
}
// play('a2', 'a4');
// play('b2', 'b3');

//-==--==--==--==--==- detect input -==--==--==--==--==-
let inStart = document.getElementById("inputStart");
let inEnd = document.getElementById("inputEnd");
function move(inStart_v, inEnd_v) {
    inStart_v = inStart.value;
    inEnd_v = inEnd.value;
    play(inStart_v, inEnd_v);
    console.log(inStart_v, inEnd_v);
}
// move()
let go = document.getElementById("submitButton");
go.addEventListener("click", move);
// -==--==--==--==--==- change color on input-==--==--==--==--==-
let selected_first = document.getElementById("");
let selected_second = document.getElementById("");
let value_of_selected_first = inStart.value;
let value_of_selected_second = inEnd.value;
let value_first;
let value_end;
let firstHighlight = document.getElementById("");
let secondHighlight = document.getElementById("");
function selected() {
    // if (value_first.value == "") {
    //     firstHighlight.classList.remove('selected');
    //     secondHighlight.classList.remove('arrival');
    //     console.log("FUCKINGWORK")
    // }
        if (value_of_selected_first == "" || !value_of_selected_second == "") {
            selected_first = document.getElementById("inputStart");
            selected_second = document.getElementById("inputEnd");
            console.log(selected_first.value);
            console.log(selected_second.value);
            value_first = selected_first.value;
        console.alert("boop");
        value_end = selected_second.value;
        console.log(value_first);
        firstHighlight = document.getElementById(value_first);
        secondHighlight = document.getElementById(value_end);
        firstHighlight.classList.add('selected');
        secondHighlight.classList.add('arrival');
        console.log("first input: ",value_first);
    }
    
}
let testStart = document.getElementById("inputStart");
testStart.addEventListener("keyup", selected);
let testEnd = document.getElementById("inputEnd");
testEnd.addEventListener("keyup", selected);

// -==--==--==--==--==- change color on mouse click -==--==--==--==--==-
function registerListeners() {
    let ligne = "12345678";
    let colonne = "abcdefgh";
    for (let l = 0; l < ligne.length; l++) {
        for (let c = 0; c < colonne.length; c++) {
            console.log("l+c = " + colonne[c] + ligne[l])
            document.getElementById(colonne[c] + ligne[l]).addEventListener("click", function () {
                console.log(colonne[c] + ligne[l]);
                document.getElementById(colonne[c] + ligne[l]).classList.toggle('selected');
                // let para = document.getElementById(colonne[c] + ligne[l]);
                // if (!para.classList.contains('selected')) {
                //     para.classList.remove();
                // } else {
                //     para.classList.add('selected');
                // }
            });
        }
    }
}
registerListeners();
// console.log("Fin");