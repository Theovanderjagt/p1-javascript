document.getElementById("btn");

let button = document.getElementById("btn");
let h1 = document.getElementById("h1");
let button2 = document.getElementById("btn2")
function clicker(){
   count += 1;
    h1.innerText = count + " keer gelukt";
    document.body.style.backgroundColor = "blue";
    button.style.backgroundColor = "red";
}
let count = 0;


function clicker2(){
    count -= 1;
     h1.innerText = count + " keer gelukt";
     document.body.style.backgroundColor = "red";
     button2.style.backgroundColor = "blue";
     
}

