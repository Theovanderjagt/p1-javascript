

let clicker = document.getElementById("clicker");
let clicks = 0;

function score() {
   clicks++    ;
    clicker.innerText = clicks;
    if (clicks > 9) {
        clicks = 0
    }

}



