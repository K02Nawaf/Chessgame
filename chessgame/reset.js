let from = document.getElementById("");
let to = document.getElementById("");
let piece = document.getElementById("");
let line = "abcdefgh";
let column = "12345678";
function move() {
    for (let l = 0; l < line.length; l++) {
        for (let c = 0; c < column.length; c++) {
            console.log(line[l] + column[c]);
            document.getElementById(line[l] + column[c]).addEventListener("click", function () {
                console.log(line[l] + column[c]);
                from = (line[l] + column[c]);
                piece = document.getElementById(from);
                if (!document.getElementById(line[l] + column[c]).classList.contains('selected')) {
                    piece.classList.add('selected');
                }
                else{document.getElementById(from).classList.remove('selected')}

            })
            }
    }


}


move();  
